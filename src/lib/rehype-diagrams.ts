import { readFileSync } from "node:fs";
import { visit } from "unist-util-visit";

/*
 * Diagrams, inlined.
 *
 * A page writes an ordinary markdown image:
 *
 *     ![Alt text](/diagrams/listing-states.en.svg)
 *
 * …which keeps the source portable and keeps the `.md` twin honest — that URL is a real file in
 * public/, so an agent reading the markdown can fetch the picture. In the RENDERED page, this
 * plugin swaps the <img> for the SVG's own markup inside a <figure>, for two reasons:
 *
 *   1. THEME. The diagrams paint themselves in `var(--sl-color-*)`. Inside an <img> the SVG is a
 *      separate document that cannot see the page's variables, so it would fall back to the light
 *      palette and glow white in dark mode. Inlined, it follows the reader's theme for free.
 *   2. CAPTIONS. The alt text becomes a real <figcaption>, so the figure reads as a figure rather
 *      than as a picture with a tooltip nobody sees.
 *
 * The alt text stays on the <svg> as aria-label (the generator writes one), so the caption is not
 * read twice by a screen reader.
 */

const PUBLIC = new URL("../../public", import.meta.url).pathname;

type Node = {
  type: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: Node[];
  value?: string;
};

export function rehypeDiagrams() {
  return (tree: Node) => {
    visit(tree, "element", (node: Node, index: number | undefined, parent: Node | undefined) => {
      if (node.tagName !== "img" || index === undefined || !parent) return;

      const src = String(node.properties?.src ?? "");
      if (!src.startsWith("/diagrams/") || !src.endsWith(".svg")) return;

      // A missing diagram is a build failure, not a broken image in production. verify:docs
      // catches this earlier and more cheaply; this is the backstop.
      let markup: string;
      try {
        markup = readFileSync(`${PUBLIC}${src}`, "utf8");
      } catch {
        throw new Error(`rehype-diagrams: no such diagram — public${src}`);
      }

      const alt = String(node.properties?.alt ?? "").trim();

      parent.children![index] = {
        type: "element",
        tagName: "figure",
        properties: { className: ["diagram"] },
        children: [
          { type: "raw", value: markup.replace(/<\?xml[^>]*\?>\s*/, "") },
          ...(alt
            ? [
                {
                  type: "element",
                  tagName: "figcaption",
                  properties: {},
                  children: [{ type: "text", value: alt }],
                } as Node,
              ]
            : []),
        ],
      };
    });
  };
}
