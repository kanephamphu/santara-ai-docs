import { readFileSync } from "node:fs";
import { visit } from "unist-util-visit";

/*
 * Figures: diagrams inlined, screenshots wrapped.
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


type Callout = {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  side: "left" | "right";
};

/**
 * One SVG covering the screenshot exactly.
 *
 * The viewBox is the screenshot's own CSS-pixel size, so the measured boxes are used verbatim and
 * stroke widths scale with the image instead of being distorted — which is why the image and the
 * SVG must keep the same aspect ratio and why `preserveAspectRatio` is left at its default.
 */
function calloutOverlay(meta: { width: number; height: number; boxes: Callout[] }): Node {
  const RED = "#e11d48";
  const children: Node[] = [];

  for (const box of meta.boxes) {
    children.push({
      type: "raw",
      value:
        `<rect x="${box.x}" y="${box.y}" width="${box.width}" height="${box.height}" rx="8" ` +
        `fill="none" stroke="${RED}" stroke-width="3"/>`,
    });

    const text = box.label;
    // No browser here to measure text with, so the pill is sized from the string. Generous on
    // purpose: a label overflowing its pill reads as a bug, a slightly wide pill does not.
    const pillW = text.length * 11.4 + 28;
    const pillH = 40;
    const midY = box.y + box.height / 2;

    /*
     * WHERE THE LABEL GOES.
     *
     * A narrow box gets a pill beside it on a short leader line — the arrow the reader follows.
     * A box spanning most of the frame has no outside left to point from, so the pill goes INSIDE
     * its top-left corner and the box is its own pointer. Without this the label on a full-width
     * card is pushed past the edge of the image and clipped.
     */
    const wide = box.width > meta.width * 0.55;

    if (wide) {
      const pillX = box.x + 14;
      const pillY = box.y + 14;
      children.push({
        type: "raw",
        value:
          `<rect x="${pillX}" y="${pillY}" width="${pillW}" height="${pillH}" rx="20" ` +
          `fill="${RED}"/>` +
          `<text x="${pillX + pillW / 2}" y="${pillY + pillH / 2 + 7}" text-anchor="middle" ` +
          `fill="#ffffff" font-family="Inter, ui-sans-serif, system-ui, sans-serif" ` +
          `font-size="20" font-weight="600">${escapeXml(text)}</text>`,
      });
      continue;
    }

    const gap = 26;
    const anchorX = box.side === "left" ? box.x : box.x + box.width;
    const labelX = box.side === "left" ? anchorX - gap : anchorX + gap;
    // Clamped to the frame, so a long translation cannot push the pill off the picture.
    const pillX = Math.min(
      Math.max(box.side === "left" ? labelX - pillW : labelX, 8),
      meta.width - pillW - 8,
    );

    children.push({
      type: "raw",
      value:
        `<line x1="${anchorX}" y1="${midY}" x2="${labelX}" y2="${midY}" stroke="${RED}" ` +
        `stroke-width="3"/>` +
        `<circle cx="${anchorX}" cy="${midY}" r="5" fill="${RED}"/>` +
        `<rect x="${pillX}" y="${midY - pillH / 2}" width="${pillW}" height="${pillH}" rx="20" ` +
        `fill="${RED}"/>` +
        `<text x="${pillX + pillW / 2}" y="${midY + 7}" text-anchor="middle" fill="#ffffff" ` +
        `font-family="Inter, ui-sans-serif, system-ui, sans-serif" font-size="20" ` +
        `font-weight="600">${escapeXml(text)}</text>`,
    });
  }

  return {
    type: "element",
    tagName: "svg",
    properties: {
      className: ["callouts"],
      viewBox: `0 0 ${meta.width} ${meta.height}`,
      "aria-hidden": "true",
      xmlns: "http://www.w3.org/2000/svg",
    },
    children,
  };
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function rehypeFigures() {
  return (tree: Node) => {
    visit(tree, "element", (node: Node, index: number | undefined, parent: Node | undefined) => {
      if (node.tagName !== "img" || index === undefined || !parent) return;

      const src = String(node.properties?.src ?? "");
      const alt0 = String(node.properties?.alt ?? "").trim();

      /*
       * SCREENSHOTS are the other kind of figure, and they are handled differently on purpose:
       * they are raster, so there is nothing to inline and nothing that could follow the theme.
       * The <img> is kept as-is — lazy, async, with its intrinsic size left to the browser — and
       * only wrapped so it gets the same framed, captioned treatment as a diagram.
       */
      if (src.startsWith("/screens/")) {
        /*
         * CALLOUTS: red boxes and labels, drawn OVER the screenshot rather than into it.
         *
         * scripts/capture-screens.mjs measures each target element in the page it just
         * photographed and writes the boxes to a sibling .json in the screenshot's own
         * coordinate space. Rendering them here, as an SVG laid over the <img>, means the
         * annotation is never baked into the pixels: a recapture moves the boxes with the UI,
         * and the labels are translated like any other string instead of being retyped inside
         * an image editor three times.
         *
         * The overlay is aria-hidden. Everything it says is already in the figure's caption and
         * in the prose — a screen reader should not have to sit through "arrow, box, label".
         */
        let overlay: Node | null = null;
        try {
          const meta = JSON.parse(readFileSync(`${PUBLIC}${src.replace(/\.png$/, ".json")}`, "utf8"));
          overlay = calloutOverlay(meta);
        } catch {
          // No callouts for this screenshot, which is the common case.
        }

        parent.children![index] = {
          type: "element",
          tagName: "figure",
          properties: { className: overlay ? ["screenshot", "annotated"] : ["screenshot"] },
          children: [
            {
              type: "element",
              tagName: "div",
              properties: { className: ["shot"] },
              children: [
                {
                  ...node,
                  properties: { ...node.properties, loading: "lazy", decoding: "async" },
                },
                ...(overlay ? [overlay] : []),
              ],
            },
            ...(alt0
              ? [
                  {
                    type: "element",
                    tagName: "figcaption",
                    properties: {},
                    children: [{ type: "text", value: alt0 }],
                  } as Node,
                ]
              : []),
          ],
        };
        return;
      }

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
