/*
 * The diagrams, generated.
 *
 * Four figures appear in these docs, and each one has to exist in three languages. Hand-drawing
 * twelve SVGs would guarantee that the Indonesian arrow ends up two pixels short of the box six
 * months from now, so instead: ONE geometry per diagram, THREE label sets, and this script writes
 * public/diagrams/<id>.<locale>.svg.
 *
 * The output is committed. It is a build artifact in the sense that you should not hand-edit it,
 * and a source file in the sense that `astro build` must not depend on this script having run —
 * a docs build on a fresh checkout draws the diagrams that were committed.
 *
 *   npm run build:diagrams     regenerate after editing this file
 *   npm run verify:docs        fails if a page references a diagram that has no file
 *
 * COLOURS ARE CSS VARIABLES WITH FALLBACKS. Rendered into the page (src/lib/rehype-diagrams.ts
 * inlines them) they follow the reader's light/dark theme; fetched directly as .svg — which is
 * what the markdown mirror links to — the fallback light palette applies. Never write a bare hex.
 *
 * Labels are pre-wrapped into lines rather than measured, because measuring text without a
 * browser is a lie and Vietnamese is roughly 30% longer than English. If a line overflows its
 * box, break it differently here; do not shrink the type.
 */

import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const OUT = fileURLToPath(new URL("../public/diagrams/", import.meta.url));
const LOCALES = ["en", "id", "vi"];

// ── tokens ──────────────────────────────────────────────────────────────────────────────────
const INK = "var(--sl-color-white, #0b1930)";
const MUTED = "var(--sl-color-gray-3, #5b6880)";
const LINE = "var(--sl-color-gray-5, #d7dbe3)";
const SURFACE = "var(--santara-surface, #f8f9fb)";
const CARD = "var(--sl-color-bg, #ffffff)";
const ACCENT = "var(--sl-color-text-accent, #1440e0)";
const ACCENT_WASH = "var(--sl-color-accent-low, #dbe4ff)";
const FONT = "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif";

// ── helpers ─────────────────────────────────────────────────────────────────────────────────
const esc = (text) =>
  String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/*
 * TEXT OVERFLOW IS A BUILD ERROR.
 *
 * Twice now a label has run off the right edge of the frame — once in English, once only in
 * Indonesian, which is the version nobody on the team reads. Since there is no browser here to
 * measure with, every label records an estimated extent and svg() asserts the frame contains it.
 * The estimate is deliberately generous; it is a guard rail, not typography.
 */
const EM = 0.58; // average glyph advance for Inter at these weights, as a fraction of font-size
let extents = [];

function text(x, y, lines, { size = 13, fill = INK, weight = 400, anchor = "start", leading = 17 } = {}) {
  for (const line of lines) {
    const w = String(line).length * size * EM;
    const left = anchor === "end" ? x - w : anchor === "middle" ? x - w / 2 : x;
    extents.push({ left, right: left + w, line });
  }

  return [...lines]
    .map(
      (line, index) =>
        `<text x="${x}" y="${y + index * leading}" font-family="${FONT}" font-size="${size}" ` +
        `font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${esc(line)}</text>`,
    )
    .join("\n  ");
}

const box = (x, y, w, h, { fill = CARD, stroke = LINE, r = 10, dash = "" } = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}" ` +
  `stroke-width="1"${dash ? ` stroke-dasharray="${dash}"` : ""}/>`;

const arrowDown = (x, y1, y2, { stroke = LINE } = {}) =>
  `<path d="M${x} ${y1} L${x} ${y2 - 7}" stroke="${stroke}" stroke-width="1.5" fill="none"/>` +
  `<path d="M${x - 4.5} ${y2 - 8} L${x} ${y2} L${x + 4.5} ${y2 - 8} Z" fill="${stroke}"/>`;

const arrowRight = (x1, x2, y, { stroke = LINE, dash = "" } = {}) =>
  `<path d="M${x1} ${y} L${x2 - 8} ${y}" stroke="${stroke}" stroke-width="1.5" fill="none"${
    dash ? ` stroke-dasharray="${dash}"` : ""
  }/><path d="M${x2 - 9} ${y - 4.5} L${x2} ${y} L${x2 - 9} ${y + 4.5} Z" fill="${stroke}"/>`;

const arrowLeft = (x1, x2, y, opts) => arrowRight(x2, x1, y, opts);

function svg(width, height, title, body) {
  const overflow = extents.filter((e) => e.left < 0 || e.right > width);
  extents = [];
  if (overflow.length) {
    throw new Error(
      `"${title}": ${overflow.length} label(s) fall outside the ${width}px frame — ` +
        overflow.map((e) => `"${e.line}" (${Math.round(e.left)}…${Math.round(e.right)})`).join(", "),
    );
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-label="${esc(title)}">
  <title>${esc(title)}</title>
  ${body}
</svg>
`;
}

// ── 1. the four states of a listing ─────────────────────────────────────────────────────────
function listingStates(t) {
  const W = 620;
  const boxW = 470;
  const boxH = 62;
  const x = 24;
  const gap = 46;
  // The gate needs more room than a plain arrow: a label above the dashed line and a note below.
  const gateGap = 64;
  const top = 16;
  const parts = [];
  const gateIndex = t.states.length - 2;
  const yFor = (index) => top + index * (boxH + gap) + (index > gateIndex ? gateGap - gap : 0);

  t.states.forEach((state, index) => {
    const y = yFor(index);
    const live = index === t.states.length - 1;
    parts.push(box(x, y, boxW, boxH, { fill: live ? ACCENT_WASH : CARD, stroke: live ? ACCENT : LINE }));
    parts.push(text(x + 18, y + 25, [state.title], { weight: 600, size: 14, fill: live ? ACCENT : INK }));
    parts.push(text(x + 18, y + 45, [state.body], { size: 12, fill: MUTED }));

    if (index < t.states.length - 1) {
      const midY = y + boxH;
      if (index === gateIndex) {
        // The gate: the one transition nothing crosses on its own. The label sits clear above the
        // dashed line and the note clear below it — they used to share its baseline and collide.
        const lineY = midY + 32;
        parts.push(
          `<line x1="${x - 8}" y1="${lineY}" x2="${x + boxW + 8}" y2="${lineY}" stroke="${ACCENT}" stroke-width="1" stroke-dasharray="4 4"/>`,
        );
        parts.push(arrowDown(x + 60, midY + 6, midY + gateGap - 6, { stroke: ACCENT }));
        parts.push(text(x + 78, lineY - 10, [t.gate], { size: 12, weight: 600, fill: ACCENT }));
        parts.push(text(x + 78, lineY + 18, [t.gateNote], { size: 11, fill: MUTED }));
      } else {
        parts.push(arrowDown(x + 60, midY + 6, midY + gap - 6));
        parts.push(text(x + 78, midY + 28, [t.auto], { size: 11, fill: MUTED }));
      }
    }
  });

  const H = yFor(t.states.length - 1) + boxH + 16;
  return svg(W, H, t.title, parts.join("\n  "));
}

// ── 2. what syncs, and which way ────────────────────────────────────────────────────────────
function syncDirections(t) {
  const W = 660;
  const colW = 150;
  const leftX = 16;
  const rightX = W - colW - 16;
  const top = 16;
  const rowTop = 92;
  const rowGap = 62;
  const rows = t.rows.length;
  const H = rowTop + rows * rowGap + 44;

  const colH = H - top - 40;
  const parts = [
    box(leftX, top, colW, colH, { fill: SURFACE, stroke: LINE }),
    box(rightX, top, colW, colH, { fill: SURFACE, stroke: LINE }),
    text(leftX + colW / 2, top + 30, [t.left], { weight: 650, size: 14, anchor: "middle" }),
    text(rightX + colW / 2, top + 30, [t.right], { weight: 650, size: 14, anchor: "middle" }),
    text(rightX + colW / 2, top + 50, [t.rightNote], { size: 11, fill: MUTED, anchor: "middle" }),
  ];

  t.rows.forEach((row, index) => {
    const y = rowTop + index * rowGap;
    const x1 = leftX + colW + 14;
    const x2 = rightX - 14;
    const stroke = row.out ? ACCENT : MUTED;
    parts.push(
      row.out
        ? arrowRight(x1, x2, y, { stroke, dash: row.once ? "5 4" : "" })
        : arrowLeft(x1, x2, y, { stroke, dash: row.once ? "5 4" : "" }),
    );
    parts.push(text((x1 + x2) / 2, y - 12, [row.label], { size: 12, weight: 600, anchor: "middle" }));
    parts.push(text((x1 + x2) / 2, y + 20, [row.note], { size: 11, fill: MUTED, anchor: "middle" }));
  });

  parts.push(text(W / 2, H - 14, [t.footer], { size: 11, fill: MUTED, anchor: "middle" }));
  return svg(W, H, t.title, parts.join("\n  "));
}

// ── 3. workspace → property → room ──────────────────────────────────────────────────────────
function objectModel(t) {
  const W = 660;
  const H = 276;
  const parts = [
    box(16, 16, 400, 240, { fill: SURFACE, stroke: LINE }),
    text(32, 40, [t.workspace], { size: 11, weight: 650, fill: MUTED }),
    box(32, 54, 368, 186, { fill: CARD, stroke: LINE }),
    text(48, 78, [t.property], { size: 14, weight: 650 }),
    text(48, 96, [t.propertyNote], { size: 11, fill: MUTED }),
  ];

  t.rooms.forEach((room, index) => {
    const y = 110 + index * 42;
    parts.push(box(48, y, 336, 34, { fill: SURFACE, stroke: LINE, r: 8 }));
    parts.push(text(64, y + 22, [room.name], { size: 13, weight: 600 }));
    parts.push(text(368, y + 22, [room.rate], { size: 11, fill: MUTED, anchor: "end" }));
  });

  parts.push(box(456, 90, 188, 120, { fill: CARD, stroke: ACCENT }));
  parts.push(text(472, 116, [t.channels], { size: 12, weight: 650, fill: ACCENT }));
  t.listings.forEach((listing, index) => {
    parts.push(text(472, 140 + index * 20, [listing], { size: 11, fill: MUTED }));
  });
  parts.push(arrowLeft(400, 456, 154, { stroke: ACCENT }));
  parts.push(text(428, 138, [t.mapping], { size: 10, fill: ACCENT, anchor: "middle" }));

  return svg(W, H, t.title, parts.join("\n  "));
}

// ── 4. how a nightly price is worked out ────────────────────────────────────────────────────
function pricingPipeline(t) {
  // 680, not 620: the bypass note is the longest string in the diagram and Indonesian runs ~30%
  // past English. The overflow guard in svg() caught it; the frame gives every locale room.
  const W = 690;
  const boxW = 360;
  const boxH = 46;
  const x = 24;
  const gap = 30;
  const top = 16;
  const parts = [];

  t.steps.forEach((step, index) => {
    const y = top + index * (boxH + gap);
    const last = index === t.steps.length - 1;
    parts.push(
      box(x, y, boxW, boxH, {
        fill: last ? ACCENT_WASH : CARD,
        stroke: last ? ACCENT : LINE,
        dash: step.clamp ? "5 4" : "",
      }),
    );
    parts.push(
      text(x + 18, y + 20, [step.title], { size: 13, weight: 600, fill: last ? ACCENT : INK }),
    );
    parts.push(text(x + 18, y + 36, [step.note], { size: 11, fill: MUTED }));
    if (!last) parts.push(arrowDown(x + boxW / 2, y + boxH + 4, y + boxH + gap - 4));
  });

  // The bypass: a hand-typed price skips every rule and lands published.
  const lastY = top + (t.steps.length - 1) * (boxH + gap);
  const laneX = x + boxW + 40;
  parts.push(box(laneX, top, 180, boxH, { fill: CARD, stroke: ACCENT, dash: "5 4" }));
  parts.push(text(laneX + 16, top + 20, [t.manual.title], { size: 13, weight: 600, fill: ACCENT }));
  parts.push(text(laneX + 16, top + 36, [t.manual.note], { size: 11, fill: MUTED }));
  parts.push(
    `<path d="M${laneX + 90} ${top + boxH} L${laneX + 90} ${lastY + boxH / 2} L${x + boxW + 8} ${lastY + boxH / 2}" stroke="${ACCENT}" stroke-width="1.5" fill="none" stroke-dasharray="5 4"/>` +
      `<path d="M${x + boxW + 9} ${lastY + boxH / 2 - 4.5} L${x + boxW} ${lastY + boxH / 2} L${x + boxW + 9} ${lastY + boxH / 2 + 4.5} Z" fill="${ACCENT}"/>`,
  );
  parts.push(
    text(laneX + 84, top + boxH + 26, [t.manual.arrow], { size: 11, fill: ACCENT, anchor: "end" }),
  );

  const H = top + t.steps.length * (boxH + gap) - gap + 16;
  return svg(W, H, t.title, parts.join("\n  "));
}

// ── 6. connecting an AI assistant (Claude, ChatGPT, Grok…) ──────────────────────────────────
function aiConnect(t) {
  const W = 700;
  const x = 24;
  const boxW = 440;
  const boxH = 50;
  const gap = 26;
  const top = 16;
  const parts = [];
  t.steps.forEach((step, index) => {
    const y = top + index * (boxH + gap);
    const last = index === t.steps.length - 1;
    parts.push(box(x, y, boxW, boxH, { fill: last ? ACCENT_WASH : CARD, stroke: last ? ACCENT : LINE }));
    parts.push(`<circle cx="${x + 26}" cy="${y + boxH / 2}" r="12" fill="${ACCENT}"/>`);
    parts.push(text(x + 26, y + boxH / 2 + 4.5, [String(index + 1)], { size: 12, weight: 700, fill: CARD, anchor: "middle" }));
    parts.push(text(x + 50, y + 21, [step.title], { size: 13, weight: 600, fill: last ? ACCENT : INK }));
    parts.push(text(x + 50, y + 38, [step.note], { size: 11, fill: MUTED }));
    if (!last) parts.push(arrowDown(x + boxW / 2, y + boxH + 3, y + boxH + gap - 3));
  });
  // Where each step happens: in the AI app, or in Santara AI.
  const laneX = x + boxW + 28;
  const span = (from, to, label, stroke) => {
    const y1 = top + from * (boxH + gap) + 6;
    const y2 = top + to * (boxH + gap) + boxH - 6;
    parts.push(`<path d="M${laneX} ${y1} L${laneX} ${y2}" stroke="${stroke}" stroke-width="3" stroke-linecap="round"/>`);
    parts.push(text(laneX + 12, (y1 + y2) / 2 + 4, [label], { size: 12, weight: 600, fill: stroke }));
  };
  span(0, 0, t.inApp, MUTED);
  span(1, 2, t.inSantara, ACCENT);
  span(3, 3, t.inApp, MUTED);
  const H = top + t.steps.length * (boxH + gap) - gap + 16;
  return svg(W, H, t.title, parts.join("\n  "));
}

// ── labels ──────────────────────────────────────────────────────────────────────────────────
// ── 5. a guest message, translated for the reader ───────────────────────────────────────────
function messageTranslation(t) {
  const W = 680;
  const H = 214;
  const colW = 200;
  const cardH = 150;
  const top = 16;
  const leftX = 16;
  const rightX = W - colW - 16;
  const x1 = leftX + colW + 14;
  const x2 = rightX - 14;
  const mid = (x1 + x2) / 2;
  const parts = [
    // The guest's side: what actually arrived from the channel.
    box(leftX, top, colW, cardH, { fill: SURFACE, stroke: LINE }),
    text(leftX + 16, top + 24, [t.guest], { size: 11, weight: 650, fill: MUTED }),
    box(leftX + 16, top + 38, colW - 32, 62, { fill: CARD, stroke: LINE, r: 12 }),
    text(leftX + 28, top + 63, t.original, { size: 13, weight: 500 }),
    text(leftX + 16, top + 128, [t.guestNote], { size: 11, fill: MUTED }),
    // The reader's side: the same message, in their language, with the way back to the original.
    box(rightX, top, colW, cardH, { fill: ACCENT_WASH, stroke: ACCENT }),
    text(rightX + 16, top + 24, [t.you], { size: 11, weight: 650, fill: ACCENT }),
    box(rightX + 16, top + 38, colW - 32, 62, { fill: CARD, stroke: ACCENT, r: 12 }),
    text(rightX + 28, top + 63, t.translated, { size: 13, weight: 500 }),
    text(rightX + 16, top + 120, t.toggle, { size: 11, fill: MUTED, leading: 15 }),
    // In: translated once, as it scrolls into view.
    arrowRight(x1, x2, top + 54, { stroke: ACCENT }),
    text(mid, top + 42, [t.forward], { size: 12, weight: 600, anchor: "middle", fill: ACCENT }),
    text(mid, top + 74, [t.forwardNote], { size: 11, fill: MUTED, anchor: "middle" }),
    // Out: the reply is never translated.
    arrowLeft(x1, x2, top + 118, { stroke: MUTED, dash: "5 4" }),
    text(mid, top + 106, [t.reply], { size: 12, weight: 600, anchor: "middle" }),
    text(mid, top + 138, [t.replyNote], { size: 11, fill: MUTED, anchor: "middle" }),
    text(W / 2, H - 14, [t.footer], { size: 11, fill: MUTED, anchor: "middle" }),
  ];
  return svg(W, H, t.title, parts.join("\n  "));
}

// ── phone chat mock-ups (Santi on Telegram / Zalo tutorials) ────────────────────────────────
// Not screenshots: an illustration of each step, drawn the same way in every language. One
// figure = up to 3 phones side by side, each with a numbered step and a caption under it.
// Text inside bubbles is wrapped by character count (no browser to measure with), so a long
// Vietnamese line breaks instead of running out of its bubble.
const PH_W = 200;
const PH_GAP = 18;
const FS = 10.5;
const LEAD = 14;
const ME_WASH = "var(--sl-color-accent-low, #dbe4ff)";
const OK = "var(--santara-ok, #12805c)";

function wrapChars(s, max) {
  const out = [];
  for (const para of String(s).split("\n")) {
    let line = "";
    for (const word of para.split(/\s+/)) {
      if (!word) continue;
      if ((line ? line.length + 1 : 0) + word.length > max && line) {
        out.push(line);
        line = word;
      } else line = line ? `${line} ${word}` : word;
    }
    out.push(line);
  }
  return out;
}

/** Draws one phone's content at (x, y); returns { parts, height }. */
function phoneBody(ph, x, y) {
  const parts = [];
  const inner = PH_W - 20;
  let cy = y + 44; // below the header bar
  // header: chat name
  parts.push(`<rect x="${x}" y="${y}" width="${PH_W}" height="34" rx="16" fill="${SURFACE}"/>`);
  parts.push(`<rect x="${x}" y="${y + 18}" width="${PH_W}" height="16" fill="${SURFACE}"/>`);
  parts.push(`<circle cx="${x + 20}" cy="${y + 17}" r="9" fill="${ph.headerColor ?? ACCENT}"/>`);
  parts.push(text(x + 35, y + 21, [ph.title], { size: 11, weight: 600 }));
  for (const item of ph.items) {
    if (item.kind === "me" || item.kind === "bot") {
      const lines = wrapChars(item.text, 25);
      const w = Math.min(150, Math.max(...lines.map((l) => l.length)) * FS * EM + 18);
      const h = lines.length * LEAD + 10;
      const bx = item.kind === "me" ? x + PH_W - 10 - w : x + 10;
      parts.push(box(bx, cy, w, h, { fill: item.kind === "me" ? ME_WASH : CARD, stroke: item.kind === "me" ? ME_WASH : LINE, r: 9 }));
      parts.push(text(bx + 9, cy + 15, lines, { size: FS, leading: LEAD }));
      cy += h + 5;
      for (const row of item.buttons ?? []) {
        const bw = (150 - (row.length - 1) * 4) / row.length;
        row.forEach((label, i) => {
          const btx = x + 10 + i * (bw + 4);
          parts.push(box(btx, cy, bw, 22, { fill: CARD, stroke: ACCENT, r: 6 }));
          parts.push(text(btx + bw / 2, cy + 15, [label], { size: 9.5, weight: 600, fill: ACCENT, anchor: "middle" }));
        });
        cy += 26;
      }
      cy += 4;
    } else if (item.kind === "photos") {
      for (let i = 0; i < 3; i++) {
        const px = x + PH_W - 10 - (3 - i) * 34;
        parts.push(box(px, cy, 30, 30, { fill: ACCENT_WASH, stroke: ACCENT_WASH, r: 5 }));
        parts.push(`<path d="M${px + 5} ${cy + 24} L${px + 12} ${cy + 15} L${px + 18} ${cy + 21} L${px + 22} ${cy + 17} L${px + 26} ${cy + 24} Z" fill="${ACCENT}" opacity="0.55"/>`);
      }
      cy += 36;
      if (item.text) {
        parts.push(text(x + PH_W - 10, cy + 6, [item.text], { size: 9.5, fill: MUTED, anchor: "end" }));
        cy += 14;
      }
    } else if (item.kind === "page") {
      // a web page (the link page / Zalo's invite page)
      const lines = item.lines.flatMap((l) => wrapChars(l, 27));
      const h = 30 + lines.length * LEAD + 34;
      parts.push(box(x + 8, cy, PH_W - 16, h, { fill: CARD, stroke: LINE, r: 10 }));
      parts.push(text(x + 18, cy + 20, [item.heading], { size: 12, weight: 700 }));
      parts.push(text(x + 18, cy + 38, lines, { size: 10, fill: MUTED, leading: LEAD }));
      const by = cy + 30 + lines.length * LEAD + 6;
      parts.push(box(x + 18, by, PH_W - 36, 22, { fill: ACCENT, stroke: ACCENT, r: 11 }));
      parts.push(text(x + PH_W / 2, by + 15, [item.button], { size: 10, weight: 700, fill: "#ffffff", anchor: "middle" }));
      cy += h + 8;
    } else if (item.kind === "pick") {
      // a list to choose from (Zalo: which group)
      parts.push(text(x + 12, cy + 10, [item.label], { size: 9.5, fill: MUTED }));
      cy += 16;
      for (const [i, row] of item.rows.entries()) {
        const on = i === item.selected;
        parts.push(box(x + 8, cy, PH_W - 16, 24, { fill: on ? ACCENT_WASH : CARD, stroke: on ? ACCENT : LINE, r: 7 }));
        parts.push(text(x + 18, cy + 16, [`${on ? "✓ " : ""}${row}`], { size: 10, weight: on ? 600 : 400, fill: on ? ACCENT : INK }));
        cy += 28;
      }
      cy += 4;
    } else if (item.kind === "note") {
      parts.push(text(x + PH_W / 2, cy + 10, [item.text], { size: 9.5, fill: MUTED, anchor: "middle" }));
      cy += 18;
    }
  }
  return { parts, height: cy - y + 6 };
}

function phones(t) {
  const n = t.phones.length;
  const W = n * PH_W + (n - 1) * PH_GAP + 24;
  const top = 34;
  const heights = t.phones.map((ph) => phoneBody(ph, 0, 0).height);
  extents = []; // the dry run above recorded extents at x = 0; only the real draw counts
  const phoneH = Math.max(...heights, 300);
  const capLines = t.phones.map((ph) => wrapChars(ph.caption, 32));
  const capH = Math.max(...capLines.map((l) => l.length)) * 15;
  const H = top + phoneH + 16 + capH + 10;
  const parts = [];
  t.phones.forEach((ph, i) => {
    const x = 12 + i * (PH_W + PH_GAP);
    parts.push(`<circle cx="${x + 12}" cy="16" r="11" fill="${ACCENT}"/>`);
    parts.push(text(x + 12, 20, [String(i + 1)], { size: 12, weight: 700, fill: "#ffffff", anchor: "middle" }));
    parts.push(text(x + 30, 20, [ph.step], { size: 11.5, weight: 700 }));
    parts.push(box(x, top, PH_W, phoneH, { fill: CARD, stroke: LINE, r: 18 }));
    parts.push(...phoneBody(ph, x, top).parts);
    parts.push(text(x + PH_W / 2, top + phoneH + 18, capLines[i], { size: 10.5, fill: MUTED, anchor: "middle", leading: 15 }));
    if (i < n - 1) parts.push(arrowRight(x + PH_W + 3, x + PH_W + PH_GAP - 3, top + phoneH / 2, { stroke: ACCENT }));
  });
  return svg(W, H, t.title, parts.join("\n  "));
}

const LABELS = {
  "ai-connect": {
    render: aiConnect,
    en: {
      title: "Connecting an AI assistant to Santara AI",
      inApp: "In your AI app",
      inSantara: "In Santara AI",
      steps: [
        { title: "Add the Santara AI server URL", note: "Claude: Connectors · ChatGPT: Plugins · Grok: Connectors" },
        { title: "Sign in to Santara AI", note: "your password never goes to the AI app" },
        { title: "Pick the workspace and click Allow", note: "you see exactly what it may do — and never do" },
        { title: "Ask in plain words", note: "“Who arrives today?” · “Block Garden Room this weekend”" },
      ],
    },
    id: {
      title: "Menghubungkan asisten AI ke Santara AI",
      inApp: "Di aplikasi AI",
      inSantara: "Di Santara AI",
      steps: [
        { title: "Tambahkan URL server Santara AI", note: "Claude: Connectors · ChatGPT: Plugins · Grok: Connectors" },
        { title: "Masuk ke Santara AI", note: "kata sandi Anda tidak pernah dikirim ke aplikasi AI" },
        { title: "Pilih workspace lalu klik Izinkan", note: "Anda melihat persis apa yang boleh dan tidak boleh" },
        { title: "Tanyakan dengan bahasa biasa", note: "“Siapa yang tiba hari ini?” · “Blokir kamar akhir pekan ini”" },
      ],
    },
    vi: {
      title: "Kết nối trợ lý AI với Santara AI",
      inApp: "Trong ứng dụng AI",
      inSantara: "Trong Santara AI",
      steps: [
        { title: "Thêm URL máy chủ Santara AI", note: "Claude: Connectors · ChatGPT: Plugins · Grok: Connectors" },
        { title: "Đăng nhập Santara AI", note: "mật khẩu không bao giờ được gửi cho ứng dụng AI" },
        { title: "Chọn không gian làm việc, bấm Cho phép", note: "bạn thấy rõ trợ lý được và không được làm gì" },
        { title: "Hỏi bằng lời thường", note: "“Hôm nay ai đến?” · “Chặn phòng Garden cuối tuần này”" },
      ],
    },
  },
  "message-translation": {
    render: messageTranslation,
    en: {
      title: "How a guest message is translated",
      guest: "THE GUEST WRITES",
      original: ["Können wir früher", "einchecken?"],
      guestNote: "in German, on Airbnb",
      you: "YOU READ",
      translated: ["Can we check in", "early?"],
      toggle: ["Translated from German", "· Show original"],
      forward: "Into your language",
      forwardNote: "once, as it scrolls into view",
      reply: "Your reply",
      replyNote: "goes out exactly as you wrote it",
      footer: "Each teammate reads in their own language: English, Indonesian or Vietnamese.",
    },
    id: {
      title: "Bagaimana pesan tamu diterjemahkan",
      guest: "TAMU MENULIS",
      original: ["Können wir früher", "einchecken?"],
      guestNote: "dalam bahasa Jerman, di Airbnb",
      you: "ANDA MEMBACA",
      translated: ["Bisakah kami check-in", "lebih awal?"],
      toggle: ["Diterjemahkan dari Jerman", "· Lihat pesan asli"],
      forward: "Ke bahasa Anda",
      forwardNote: "sekali, saat mulai terlihat",
      reply: "Balasan Anda",
      replyNote: "terkirim persis seperti ditulis",
      footer: "Tiap anggota tim membaca dalam bahasanya sendiri: Inggris, Indonesia, atau Vietnam.",
    },
    vi: {
      title: "Tin nhắn của khách được dịch ra sao",
      guest: "KHÁCH VIẾT",
      original: ["Können wir früher", "einchecken?"],
      guestNote: "bằng tiếng Đức, trên Airbnb",
      you: "BẠN ĐỌC",
      translated: ["Chúng tôi nhận phòng", "sớm được không?"],
      toggle: ["Đã dịch từ tiếng Đức", "· Xem bản gốc"],
      forward: "Sang ngôn ngữ của bạn",
      forwardNote: "một lần, khi cuộn tới",
      reply: "Trả lời của bạn",
      replyNote: "gửi đi đúng như bạn viết",
      footer: "Mỗi thành viên đọc bằng ngôn ngữ của mình: tiếng Anh, Indonesia hoặc Việt.",
    },
  },

  "listing-states": {
    render: listingStates,
    en: {
      title: "The four states of a listing",
      auto: "automatic",
      gate: "You press Go live",
      gateNote: "Nothing crosses this line on its own",
      states: [
        { title: "Not connected", body: "No channel account is linked" },
        { title: "Linked — not mapped yet", body: "We can see the listing. Nothing syncs." },
        { title: "Mapped — awaiting activation", body: "It points at a room. Still nothing syncs." },
        { title: "Live", body: "Availability and rates out, bookings and messages in" },
      ],
    },
    id: {
      title: "Empat status listing",
      auto: "otomatis",
      gate: "Anda menekan Go live",
      gateNote: "Tidak ada yang melewati garis ini sendiri",
      states: [
        { title: "Belum terhubung", body: "Belum ada akun channel yang tertaut" },
        { title: "Tertaut — belum dipetakan", body: "Listing terlihat. Belum ada yang tersinkronisasi." },
        { title: "Dipetakan — menunggu aktivasi", body: "Sudah menunjuk kamar. Tetap belum tersinkronisasi." },
        { title: "Live", body: "Ketersediaan dan tarif keluar, booking dan pesan masuk" },
      ],
    },
    vi: {
      title: "Bốn trạng thái của một listing",
      auto: "tự động",
      gate: "Bạn bấm Go live",
      gateNote: "Không gì tự vượt qua vạch này",
      states: [
        { title: "Chưa kết nối", body: "Chưa liên kết tài khoản kênh nào" },
        { title: "Đã liên kết — chưa ánh xạ", body: "Thấy được listing. Chưa có gì đồng bộ." },
        { title: "Đã ánh xạ — chờ kích hoạt", body: "Đã trỏ tới một phòng. Vẫn chưa đồng bộ." },
        { title: "Đang chạy", body: "Tình trạng trống và giá đi ra, đặt phòng và tin nhắn đi vào" },
      ],
    },
  },

  "sync-directions": {
    render: syncDirections,
    en: {
      title: "What moves between Santara AI and a channel",
      left: "Santara AI",
      right: "The channel",
      rightNote: "Airbnb, Booking.com",
      footer: "Nothing else moves. Your listing description is never edited from here.",
      rows: [
        { out: true, label: "Availability and rates", note: "min stay and restrictions too — as you save them" },
        { out: false, label: "Bookings and cancellations", note: "plus guests, messages and reviews" },
        { out: false, label: "Listing details", note: "once, at import: title, photos, capacity, rates", once: true },
        { out: true, label: "Your replies", note: "to a guest message, or to a review — when you send them", once: true },
      ],
    },
    id: {
      title: "Apa yang berpindah antara Santara AI dan channel",
      left: "Santara AI",
      right: "Channel",
      rightNote: "Airbnb, Booking.com",
      footer: "Tidak ada yang lain. Deskripsi listing Anda tidak pernah diubah dari sini.",
      rows: [
        { out: true, label: "Ketersediaan dan tarif", note: "termasuk minimum menginap dan restriksi — saat Anda menyimpan" },
        { out: false, label: "Booking dan pembatalan", note: "beserta tamu, pesan, dan ulasan" },
        { out: false, label: "Detail listing", note: "sekali, saat impor: judul, foto, kapasitas, tarif", once: true },
        { out: true, label: "Balasan Anda", note: "ke pesan tamu, atau ke ulasan — saat Anda mengirimnya", once: true },
      ],
    },
    vi: {
      title: "Cái gì di chuyển giữa Santara AI và một kênh",
      left: "Santara AI",
      right: "Kênh bán",
      rightNote: "Airbnb, Booking.com",
      footer: "Không gì khác. Mô tả listing của bạn không bao giờ bị sửa từ đây.",
      rows: [
        { out: true, label: "Tình trạng trống và giá", note: "cả số đêm tối thiểu và ràng buộc — ngay khi bạn lưu" },
        { out: false, label: "Đặt phòng và hủy", note: "cùng với khách, tin nhắn và đánh giá" },
        { out: false, label: "Chi tiết listing", note: "một lần, khi nhập: tiêu đề, ảnh, sức chứa, giá", once: true },
        { out: true, label: "Phản hồi của bạn", note: "cho tin nhắn khách, hoặc cho đánh giá — khi bạn gửi", once: true },
      ],
    },
  },

  "object-model": {
    render: objectModel,
    en: {
      title: "Workspace, property, room",
      workspace: "WORKSPACE",
      property: "Villa Melati",
      propertyNote: "address · wifi · house rules · cleaning cluster",
      rooms: [
        { name: "Garden Room", rate: "rate plan · $120" },
        { name: "Pool Room", rate: "rate plan · $150" },
        { name: "Loft", rate: "rate plan · $95" },
      ],
      channels: "LISTINGS",
      listings: ["Airbnb listing", "Booking.com room", "Your booking site"],
      mapping: "one to one",
    },
    id: {
      title: "Workspace, properti, kamar",
      workspace: "WORKSPACE",
      property: "Villa Melati",
      propertyNote: "alamat · wifi · aturan rumah · klaster kebersihan",
      rooms: [
        { name: "Kamar Taman", rate: "rate plan · $120" },
        { name: "Kamar Kolam", rate: "rate plan · $150" },
        { name: "Loteng", rate: "rate plan · $95" },
      ],
      channels: "LISTING",
      listings: ["Listing Airbnb", "Kamar Booking.com", "Situs booking Anda"],
      mapping: "satu ke satu",
    },
    vi: {
      title: "Workspace, bất động sản, phòng",
      workspace: "WORKSPACE",
      property: "Villa Melati",
      propertyNote: "địa chỉ · wifi · nội quy · cụm dọn phòng",
      rooms: [
        { name: "Phòng Vườn", rate: "rate plan · $120" },
        { name: "Phòng Hồ bơi", rate: "rate plan · $150" },
        { name: "Gác lửng", rate: "rate plan · $95" },
      ],
      channels: "LISTING",
      listings: ["Listing Airbnb", "Phòng Booking.com", "Website đặt phòng"],
      mapping: "một đối một",
    },
  },

  "pricing-pipeline": {
    render: pricingPipeline,
    en: {
      title: "How a nightly price is worked out",
      manual: {
        title: "A price you typed",
        note: "skips every rule below",
        arrow: "unless you allow overwriting",
      },
      steps: [
        { title: "Base price", note: "the rate plan's price, or the listing's base" },
        { title: "× season multiplier", note: "×1.85 means 85% above base" },
        { title: "× day-of-week premium", note: "scaled by that season's weekend strength" },
        { title: "Event override", note: "replaces the season — the higher of the two wins" },
        { title: "Clamped: your floor and ceiling", note: "automatic pricing never crosses them", clamp: true },
        { title: "Clamped: what the channel accepts", note: "narrows the range; never widens it", clamp: true },
        { title: "Published to your channels", note: "if publish automatically is on" },
      ],
    },
    id: {
      title: "Bagaimana harga per malam dihitung",
      manual: {
        title: "Harga yang Anda ketik",
        note: "melewati semua aturan di bawah",
        arrow: "kecuali Anda mengizinkan penimpaan",
      },
      steps: [
        { title: "Harga dasar", note: "harga rate plan, atau harga dasar listing" },
        { title: "× pengali musim", note: "×1,85 berarti 85% di atas harga dasar" },
        { title: "× premi hari", note: "diskalakan oleh kekuatan akhir pekan musim itu" },
        { title: "Penggantian oleh acara", note: "menggantikan musim — yang lebih tinggi menang" },
        { title: "Dibatasi: lantai dan plafon Anda", note: "pricing otomatis tidak pernah melewatinya", clamp: true },
        { title: "Dibatasi: yang diterima channel", note: "mempersempit rentang; tidak pernah melebarkan", clamp: true },
        { title: "Diterbitkan ke channel Anda", note: "jika terbitkan otomatis menyala" },
      ],
    },
    vi: {
      title: "Giá mỗi đêm được tính ra sao",
      manual: {
        title: "Giá bạn nhập tay",
        note: "bỏ qua mọi quy tắc bên dưới",
        arrow: "trừ khi bạn cho phép ghi đè",
      },
      steps: [
        { title: "Giá cơ sở", note: "giá của rate plan, hoặc giá nền của listing" },
        { title: "× hệ số mùa", note: "×1,85 nghĩa là cao hơn giá cơ sở 85%" },
        { title: "× phụ phí theo thứ", note: "co giãn theo cường độ cuối tuần của mùa đó" },
        { title: "Sự kiện thay thế", note: "thay cho mùa — mức cao hơn được áp dụng" },
        { title: "Chặn: sàn và trần của bạn", note: "định giá tự động không bao giờ vượt qua", clamp: true },
        { title: "Chặn: mức kênh chấp nhận", note: "thu hẹp khoảng; không bao giờ nới ra", clamp: true },
        { title: "Xuất bản sang các kênh", note: "nếu tự xuất bản đang bật" },
      ],
    },
  },
};

// ── Santi in chat apps: the words in each picture (same wording as the bot, aircierge-santi
//    src/channels/lines.ts) ─────────────────────────────────────────────────────────────────
const CHAT = {
  en: {
    hi: "What's on today?", linkMsg: "Hi Linh 👋 Sign in once with Santara so I know it's you.", signIn: "Sign in with Santara",
    pageHead: "Link Telegram?", pageHeadZ: "Link Zalo?", page: ["Telegram account Linh will talk to Santi as linh@villa.co in Villa Co."], pageZ: ["Zalo account Linh will talk to Santi as linh@villa.co in Villa Co."],
    linkBtn: "Link Telegram", linkBtnZ: "Link Zalo",
    linked: "Linked ✅ You're in Villa Co.", answer: "Today: 2 arrivals, 3 cleans. Villa A is ready by 14:00.",
    browser: "santi.santara.ai", zaloLink: "Sign in with Santara: santi.santara.ai/link/zalo?t=…",
    s1: "Say hi", s2: "Check and link", s3: "Ask anything",
    c1: "Send any message — Santi replies with a sign-in.", c2: "Sign in to Santara AI; check it names YOU, then link.", c3: "Santi answers your first question.",
    group: "Villa team", addMembers: "Add members", addHost: "Add Santi to the group",
    use: "/use", bound: "This group now works with Villa Co. Here I only handle cleaning, tickets and dates.",
    jobs: "@AskSantiBot /jobs", jobsZ: "@Santi /jobs", today: "Today's cleaning:\n• Villa A · 11:00–15:00",
    start: "▶ Start", done: "✅ Done", startZ: "[1] ▶ Start · Villa A", doneZ: "[2] ✅ Done · Villa A", two: "2",
    finished: "✅ Linh finished Villa A.",
    g1: "Add the bot", g2: "A host sends /use", g3: "Mention Santi",
    gc1: "Add @AskSantiBot to the group as a member.", gc2: "A host, admin or co-host connects the group.", gc3: "Start with @AskSantiBot or a /command.",
    zinvite: "Invite Bot SantiAI to a group", zinviteLines: ["Choose the group Bot SantiAI will join."], zpick: "Your groups", zgroups: ["Villa team", "Family"], zbtn: "Add to group",
    zg1: "Open the invite link", zg2: "A host sends /use", zg3: "Mention Santi",
    zgc1: "On your phone: pick the group, tap Add.", zgc2: "A host, admin or co-host connects the group.", zgc3: "Choices come numbered — reply 2 to tap Done.",
    photoNote: "3 photos", which: "📷 Which job are these photos for?", job: "📷 Villa A · 11:00–15:00", cancel: "Cancel",
    added: "📷 3 photos added to Villa A.", ph1: "Send photos", ph2: "Pick the job", ph3: "Attached",
    pc1: "In a group, add @AskSantiBot to the caption.", pc2: "Santi asks once, even for an album.", pc3: "They're on the job in Santara AI; tap Done.",
    tTg: "Connecting Santi on Telegram", tZa: "Connecting Santi on Zalo", tTgG: "Adding Santi to a Telegram group", tZaG: "Adding Santi to a Zalo group", tPh: "Sending cleaning photos to Santi",
  },
  vi: {
    hi: "Hôm nay có gì?", linkMsg: "Chào Linh 👋 Đăng nhập Santara một lần để mình biết là bạn.", signIn: "Đăng nhập Santara",
    pageHead: "Link Telegram?", pageHeadZ: "Link Zalo?", page: ["Tài khoản Telegram Linh sẽ dùng Santi với tên linh@villa.co ở Villa Co."], pageZ: ["Tài khoản Zalo Linh sẽ dùng Santi với tên linh@villa.co ở Villa Co."],
    linkBtn: "Link Telegram", linkBtnZ: "Link Zalo",
    linked: "Đã liên kết ✅ Bạn đang ở Villa Co.", answer: "Hôm nay: 2 khách đến, 3 việc dọn. Villa A xong trước 14:00.",
    browser: "santi.santara.ai", zaloLink: "Đăng nhập Santara: santi.santara.ai/link/zalo?t=…",
    s1: "Nhắn chào", s2: "Kiểm tra và liên kết", s3: "Hỏi bất cứ gì",
    c1: "Nhắn bất kỳ — Santi gửi lời mời đăng nhập.", c2: "Đăng nhập Santara AI; kiểm tra đúng là BẠN rồi liên kết.", c3: "Santi trả lời câu hỏi đầu tiên.",
    group: "Đội Villa", addMembers: "Thêm thành viên", addHost: "Thêm Santi vào nhóm",
    use: "/use", bound: "Nhóm này giờ làm việc với Villa Co. Ở đây mình lo dọn phòng, sự cố và lịch.",
    jobs: "@AskSantiBot /jobs", jobsZ: "@Santi /jobs", today: "Lịch dọn hôm nay:\n• Villa A · 11:00–15:00",
    start: "▶ Bắt đầu", done: "✅ Xong", startZ: "[1] ▶ Bắt đầu · Villa A", doneZ: "[2] ✅ Xong · Villa A", two: "2",
    finished: "✅ Linh đã dọn xong Villa A.",
    g1: "Thêm bot", g2: "Chủ nhà gửi /use", g3: "Nhắc tên Santi",
    gc1: "Thêm @AskSantiBot vào nhóm như một thành viên.", gc2: "Chủ nhà, admin hoặc đồng chủ nhà kết nối nhóm.", gc3: "Bắt đầu bằng @AskSantiBot hoặc /lệnh.",
    zinvite: "Mời Bot SantiAI vào nhóm", zinviteLines: ["Chọn nhóm mà Bot SantiAI sẽ tham gia."], zpick: "Nhóm của bạn", zgroups: ["Đội Villa", "Gia đình"], zbtn: "Thêm vào nhóm",
    zg1: "Mở link mời", zg2: "Chủ nhà gửi /use", zg3: "Nhắc tên Santi",
    zgc1: "Trên điện thoại: chọn nhóm, bấm Thêm.", zgc2: "Chủ nhà, admin hoặc đồng chủ nhà kết nối nhóm.", zgc3: "Lựa chọn có số — trả lời 2 để báo Xong.",
    photoNote: "3 ảnh", which: "📷 Ảnh này cho việc dọn nào?", job: "📷 Villa A · 11:00–15:00", cancel: "Hủy",
    added: "📷 Đã gắn 3 ảnh vào Villa A.", ph1: "Gửi ảnh", ph2: "Chọn việc dọn", ph3: "Đã gắn",
    pc1: "Trong nhóm, thêm @AskSantiBot vào chú thích.", pc2: "Santi hỏi một lần, kể cả album.", pc3: "Ảnh nằm trong việc dọn ở Santara AI; bấm Xong.",
    tTg: "Kết nối Santi trên Telegram", tZa: "Kết nối Santi trên Zalo", tTgG: "Thêm Santi vào nhóm Telegram", tZaG: "Thêm Santi vào nhóm Zalo", tPh: "Gửi ảnh dọn phòng cho Santi",
  },
  id: {
    hi: "Ada apa hari ini?", linkMsg: "Hai Linh 👋 Masuk sekali dengan Santara supaya saya tahu ini Anda.", signIn: "Masuk dengan Santara",
    pageHead: "Link Telegram?", pageHeadZ: "Link Zalo?", page: ["Akun Telegram Linh akan memakai Santi sebagai linh@villa.co di Villa Co."], pageZ: ["Akun Zalo Linh akan memakai Santi sebagai linh@villa.co di Villa Co."],
    linkBtn: "Link Telegram", linkBtnZ: "Link Zalo",
    linked: "Tertaut ✅ Anda di Villa Co.", answer: "Hari ini: 2 tamu tiba, 3 tugas kebersihan. Villa A siap 14:00.",
    browser: "santi.santara.ai", zaloLink: "Masuk dengan Santara: santi.santara.ai/link/zalo?t=…",
    s1: "Sapa Santi", s2: "Periksa dan tautkan", s3: "Tanya apa saja",
    c1: "Kirim pesan apa saja — Santi membalas dengan tautan masuk.", c2: "Masuk ke Santara AI; pastikan itu ANDA, lalu tautkan.", c3: "Santi menjawab pertanyaan pertama Anda.",
    group: "Tim Villa", addMembers: "Tambah anggota", addHost: "Tambahkan Santi ke grup",
    use: "/use", bound: "Grup ini sekarang terhubung ke Villa Co. Di sini saya menangani kebersihan, tiket, dan tanggal.",
    jobs: "@AskSantiBot /jobs", jobsZ: "@Santi /jobs", today: "Kebersihan hari ini:\n• Villa A · 11:00–15:00",
    start: "▶ Mulai", done: "✅ Selesai", startZ: "[1] ▶ Mulai · Villa A", doneZ: "[2] ✅ Selesai · Villa A", two: "2",
    finished: "✅ Linh selesai Villa A.",
    g1: "Tambahkan bot", g2: "Host mengirim /use", g3: "Sebut Santi",
    gc1: "Tambahkan @AskSantiBot ke grup sebagai anggota.", gc2: "Host, admin, atau co-host menghubungkan grup.", gc3: "Mulai dengan @AskSantiBot atau /perintah.",
    zinvite: "Undang Bot SantiAI ke grup", zinviteLines: ["Pilih grup yang akan diikuti Bot SantiAI."], zpick: "Grup Anda", zgroups: ["Tim Villa", "Keluarga"], zbtn: "Tambahkan ke grup",
    zg1: "Buka tautan undangan", zg2: "Host mengirim /use", zg3: "Sebut Santi",
    zgc1: "Di ponsel: pilih grup, ketuk Tambahkan.", zgc2: "Host, admin, atau co-host menghubungkan grup.", zgc3: "Pilihan bernomor — balas 2 untuk Selesai.",
    photoNote: "3 foto", which: "📷 Foto ini untuk tugas yang mana?", job: "📷 Villa A · 11:00–15:00", cancel: "Batal",
    added: "📷 3 foto ditambahkan ke Villa A.", ph1: "Kirim foto", ph2: "Pilih tugasnya", ph3: "Terlampir",
    pc1: "Di grup, tambahkan @AskSantiBot di keterangan.", pc2: "Santi bertanya sekali, termasuk untuk album.", pc3: "Foto ada di tugas di Santara AI; ketuk Selesai.",
    tTg: "Menghubungkan Santi di Telegram", tZa: "Menghubungkan Santi di Zalo", tTgG: "Menambahkan Santi ke grup Telegram", tZaG: "Menambahkan Santi ke grup Zalo", tPh: "Mengirim foto kebersihan ke Santi",
  },
};

// Discord: slash commands only (Santi has no message access), private replies "only you can see".
const DCL = {
  en: {
    dAdd: "Add Santi", dAddLines: ["Add to My Apps · Add to Server"], dAuth: "Authorize",
    dAsk: "/santi question: What's on today?", dOnly: "Only you can see this",
    d1: "Add Santi", d2: "Ask with /santi", d3: "Linked",
    dc1: "Open the add link and choose My Apps or a server.", dc2: "Santi sends you a private sign-in link.", dc3: "Link Discord, and Santi answers.",
    dUse: "/use", dJobs: "/jobs", dg1: "Host sends /use", dg2: "Anyone sends /jobs", dg3: "Tap Done",
    dgc1: "A host, admin or co-host connects the channel.", dgc2: "Today's cleans with Start / Done buttons.", dgc3: "The host sees it in Santara AI at once.",
    tDc: "Connecting Santi on Discord", tDcG: "Santi in your team's Discord server",
  },
  vi: {
    dAdd: "Thêm Santi", dAddLines: ["Thêm vào Ứng dụng của tôi · Thêm vào máy chủ"], dAuth: "Cho phép",
    dAsk: "/santi question: Hôm nay có gì?", dOnly: "Chỉ bạn thấy tin này",
    d1: "Thêm Santi", d2: "Hỏi bằng /santi", d3: "Đã liên kết",
    dc1: "Mở link thêm, chọn Ứng dụng của tôi hoặc một máy chủ.", dc2: "Santi gửi riêng cho bạn liên kết đăng nhập.", dc3: "Bấm Link Discord, Santi trả lời.",
    dUse: "/use", dJobs: "/jobs", dg1: "Chủ nhà gửi /use", dg2: "Ai cũng gửi /jobs", dg3: "Bấm Xong",
    dgc1: "Chủ nhà, admin hoặc đồng chủ nhà kết nối kênh.", dgc2: "Lịch dọn hôm nay kèm nút Bắt đầu / Xong.", dgc3: "Chủ nhà thấy ngay trong Santara AI.",
    tDc: "Kết nối Santi trên Discord", tDcG: "Santi trong máy chủ Discord của đội",
  },
  id: {
    dAdd: "Tambahkan Santi", dAddLines: ["Tambahkan ke Aplikasi Saya · Tambahkan ke Server"], dAuth: "Otorisasi",
    dAsk: "/santi question: Ada apa hari ini?", dOnly: "Hanya Anda yang dapat melihat ini",
    d1: "Tambahkan Santi", d2: "Tanya dengan /santi", d3: "Tertaut",
    dc1: "Buka tautan tambah, pilih Aplikasi Saya atau server.", dc2: "Santi mengirim tautan masuk secara pribadi.", dc3: "Link Discord, lalu Santi menjawab.",
    dUse: "/use", dJobs: "/jobs", dg1: "Host mengirim /use", dg2: "Siapa pun mengirim /jobs", dg3: "Ketuk Selesai",
    dgc1: "Host, admin, atau co-host menghubungkan kanal.", dgc2: "Kebersihan hari ini dengan tombol Mulai / Selesai.", dgc3: "Host langsung melihatnya di Santara AI.",
    tDc: "Menghubungkan Santi di Discord", tDcG: "Santi di server Discord tim Anda",
  },
};
const DC = "#5865f2";
const perLocaleD = (build) => Object.fromEntries(Object.entries(CHAT).map(([loc, w]) => [loc, build({ ...w, ...DCL[loc] })]));

// LINE: adding Santi as a friend opens the chat (Santi greets with the sign-in); groups need an
// @mention picked from the list; buttons are a card under the message (they stay after a tap).
const LNL = {
  en: {
    lAdd: "Add friend", lAddLines: ["Santi by Santara AI", "@313bjizp"], lAddBtn: "Add",
    lPageHead: "Link LINE?", lPage: ["LINE account Linh will talk to Santi as linh@villa.co in Villa Co."], lLinkBtn: "Link LINE",
    l1: "Add Santi", l2: "Check and link", l3: "Ask anything",
    lc1: "Add @313bjizp — Santi replies with a sign-in.", lc2: "It opens in your phone's browser; check it names YOU.", lc3: "Santi answers in LINE.",
    lJobs: "@Santi by Santara AI /jobs", lg1: "Invite Santi", lg2: "A host sends /use", lg3: "Mention Santi",
    lgc1: "Group ≡ → Invite → pick Santi by Santara AI.", lgc2: "A host, admin or co-host connects the group.", lgc3: "Type @, pick Santi, then ask or send /jobs.",
    lInvite: "Invite", tLn: "Connecting Santi on LINE", tLnG: "Adding Santi to a LINE group",
  },
  vi: {
    lAdd: "Thêm bạn", lAddLines: ["Santi by Santara AI", "@313bjizp"], lAddBtn: "Thêm",
    lPageHead: "Link LINE?", lPage: ["Tài khoản LINE Linh sẽ dùng Santi với tên linh@villa.co ở Villa Co."], lLinkBtn: "Link LINE",
    l1: "Thêm Santi", l2: "Kiểm tra và liên kết", l3: "Hỏi bất cứ gì",
    lc1: "Thêm @313bjizp — Santi gửi lời mời đăng nhập.", lc2: "Mở trong trình duyệt điện thoại; kiểm tra đúng là BẠN.", lc3: "Santi trả lời ngay trong LINE.",
    lJobs: "@Santi by Santara AI /jobs", lg1: "Mời Santi", lg2: "Chủ nhà gửi /use", lg3: "Nhắc tên Santi",
    lgc1: "Nhóm ≡ → Mời → chọn Santi by Santara AI.", lgc2: "Chủ nhà, admin hoặc đồng chủ nhà kết nối nhóm.", lgc3: "Gõ @, chọn Santi rồi hỏi hoặc gửi /jobs.",
    lInvite: "Mời", tLn: "Kết nối Santi trên LINE", tLnG: "Thêm Santi vào nhóm LINE",
  },
  id: {
    lAdd: "Tambah teman", lAddLines: ["Santi by Santara AI", "@313bjizp"], lAddBtn: "Tambah",
    lPageHead: "Link LINE?", lPage: ["Akun LINE Linh akan berbicara dengan Santi sebagai linh@villa.co di Villa Co."], lLinkBtn: "Link LINE",
    l1: "Tambahkan Santi", l2: "Periksa dan tautkan", l3: "Tanya apa saja",
    lc1: "Tambahkan @313bjizp — Santi membalas dengan tautan masuk.", lc2: "Terbuka di browser ponsel; pastikan itu ANDA.", lc3: "Santi menjawab di LINE.",
    lJobs: "@Santi by Santara AI /jobs", lg1: "Undang Santi", lg2: "Host mengirim /use", lg3: "Sebut Santi",
    lgc1: "Grup ≡ → Undang → pilih Santi by Santara AI.", lgc2: "Host, admin, atau co-host menghubungkan grup.", lgc3: "Ketik @, pilih Santi, lalu tanya atau kirim /jobs.",
    lInvite: "Undang", tLn: "Menghubungkan Santi di LINE", tLnG: "Menambahkan Santi ke grup LINE",
  },
};
const LN = "#06c755";
const perLocaleL = (build) => Object.fromEntries(Object.entries(CHAT).map(([loc, w]) => [loc, build({ ...w, ...LNL[loc] })]));

const TG = "#2aabee";
const ZA = "#0068ff";
const perLocale = (build) => Object.fromEntries(Object.entries(CHAT).map(([loc, w]) => [loc, build(w)]));

const CHAT_FIGURES = {
  "santi-telegram-connect": perLocale((w) => ({
    title: w.tTg,
    phones: [
      { step: w.s1, caption: w.c1, title: "Santi", headerColor: TG, items: [{ kind: "me", text: w.hi }, { kind: "bot", text: w.linkMsg, buttons: [[w.signIn]] }] },
      { step: w.s2, caption: w.c2, title: w.browser, headerColor: ACCENT, items: [{ kind: "page", heading: w.pageHead, lines: w.page, button: w.linkBtn }] },
      { step: w.s3, caption: w.c3, title: "Santi", headerColor: TG, items: [{ kind: "bot", text: w.linked }, { kind: "bot", text: w.answer }] },
    ],
  })),
  "santi-zalo-connect": perLocale((w) => ({
    title: w.tZa,
    phones: [
      { step: w.s1, caption: w.c1, title: "Bot SantiAI", headerColor: ZA, items: [{ kind: "me", text: w.hi }, { kind: "bot", text: `${w.linkMsg}\n${w.zaloLink}` }] },
      { step: w.s2, caption: w.c2, title: w.browser, headerColor: ACCENT, items: [{ kind: "page", heading: w.pageHeadZ, lines: w.pageZ, button: w.linkBtnZ }] },
      { step: w.s3, caption: w.c3, title: "Bot SantiAI", headerColor: ZA, items: [{ kind: "bot", text: w.linked }, { kind: "bot", text: w.answer }] },
    ],
  })),
  "santi-telegram-group": perLocale((w) => ({
    title: w.tTgG,
    phones: [
      { step: w.g1, caption: w.gc1, title: w.group, headerColor: TG, items: [{ kind: "note", text: w.addMembers }, { kind: "pick", label: "@AskSantiBot", rows: ["Santi · @AskSantiBot"], selected: 0 }] },
      { step: w.g2, caption: w.gc2, title: w.group, headerColor: TG, items: [{ kind: "me", text: w.use }, { kind: "bot", text: w.bound }] },
      { step: w.g3, caption: w.gc3, title: w.group, headerColor: TG, items: [{ kind: "me", text: w.jobs }, { kind: "bot", text: w.today, buttons: [[w.start, w.done]] }, { kind: "bot", text: w.finished }] },
    ],
  })),
  "santi-zalo-group": perLocale((w) => ({
    title: w.tZaG,
    phones: [
      { step: w.zg1, caption: w.zgc1, title: "Zalo", headerColor: ZA, items: [{ kind: "page", heading: w.zinvite, lines: w.zinviteLines, button: w.zbtn }, { kind: "pick", label: w.zpick, rows: w.zgroups, selected: 0 }] },
      { step: w.zg2, caption: w.zgc2, title: w.zgroups[0], headerColor: ZA, items: [{ kind: "me", text: w.use }, { kind: "bot", text: w.bound }] },
      { step: w.zg3, caption: w.zgc3, title: w.zgroups[0], headerColor: ZA, items: [{ kind: "me", text: w.jobsZ }, { kind: "bot", text: `${w.today}\n\n${w.startZ}\n${w.doneZ}` }, { kind: "me", text: w.two }, { kind: "bot", text: w.finished }] },
    ],
  })),
  "santi-discord-connect": perLocaleD((w) => ({
    title: w.tDc,
    phones: [
      { step: w.d1, caption: w.dc1, title: "discord.com", headerColor: DC, items: [{ kind: "page", heading: w.dAdd, lines: w.dAddLines, button: w.dAuth }] },
      { step: w.d2, caption: w.dc2, title: "Santi", headerColor: DC, items: [{ kind: "me", text: w.dAsk }, { kind: "bot", text: `${w.linkMsg}\n(${w.dOnly})`, buttons: [[w.signIn]] }] },
      { step: w.d3, caption: w.dc3, title: "Santi", headerColor: DC, items: [{ kind: "bot", text: w.linked }, { kind: "bot", text: w.answer }] },
    ],
  })),
  "santi-discord-server": perLocaleD((w) => ({
    title: w.tDcG,
    phones: [
      { step: w.dg1, caption: w.dgc1, title: "# villa-team", headerColor: DC, items: [{ kind: "me", text: w.dUse }, { kind: "bot", text: w.bound }] },
      { step: w.dg2, caption: w.dgc2, title: "# villa-team", headerColor: DC, items: [{ kind: "me", text: w.dJobs }, { kind: "bot", text: w.today, buttons: [[w.start, w.done]] }] },
      { step: w.dg3, caption: w.dgc3, title: "# villa-team", headerColor: DC, items: [{ kind: "bot", text: w.finished }] },
    ],
  })),
  "santi-line-connect": perLocaleL((w) => ({
    title: w.tLn,
    phones: [
      { step: w.l1, caption: w.lc1, title: "LINE", headerColor: LN, items: [{ kind: "page", heading: w.lAdd, lines: w.lAddLines, button: w.lAddBtn }, { kind: "bot", text: w.linkMsg, buttons: [[w.signIn]] }] },
      { step: w.l2, caption: w.lc2, title: w.browser, headerColor: ACCENT, items: [{ kind: "page", heading: w.lPageHead, lines: w.lPage, button: w.lLinkBtn }] },
      { step: w.l3, caption: w.lc3, title: "Santi by Santara AI", headerColor: LN, items: [{ kind: "bot", text: w.linked }, { kind: "me", text: w.hi }, { kind: "bot", text: w.answer }] },
    ],
  })),
  "santi-line-group": perLocaleL((w) => ({
    title: w.tLnG,
    phones: [
      { step: w.lg1, caption: w.lgc1, title: w.group, headerColor: LN, items: [{ kind: "note", text: w.lInvite }, { kind: "pick", label: "Santi", rows: ["Santi by Santara AI"], selected: 0 }] },
      { step: w.lg2, caption: w.lgc2, title: w.group, headerColor: LN, items: [{ kind: "me", text: w.use }, { kind: "bot", text: w.bound }] },
      { step: w.lg3, caption: w.lgc3, title: w.group, headerColor: LN, items: [{ kind: "me", text: w.lJobs }, { kind: "bot", text: w.today, buttons: [[w.start, w.done]] }, { kind: "bot", text: w.finished }] },
    ],
  })),
  "santi-photos": perLocale((w) => ({
    title: w.tPh,
    phones: [
      { step: w.ph1, caption: w.pc1, title: "Santi", headerColor: TG, items: [{ kind: "photos", text: w.photoNote }] },
      { step: w.ph2, caption: w.pc2, title: "Santi", headerColor: TG, items: [{ kind: "photos" }, { kind: "bot", text: w.which, buttons: [[w.job], [w.cancel]] }] },
      { step: w.ph3, caption: w.pc3, title: "Santi", headerColor: TG, items: [{ kind: "bot", text: w.added, buttons: [[`${w.done} · Villa A`]] }] },
    ],
  })),
};
for (const [id, labels] of Object.entries(CHAT_FIGURES)) LABELS[id] = { render: phones, ...labels };

mkdirSync(OUT, { recursive: true });

let written = 0;
let changed = 0;
for (const [id, diagram] of Object.entries(LABELS)) {
  for (const locale of LOCALES) {
    const labels = diagram[locale];
    if (!labels) throw new Error(`${id}: no ${locale} labels`);

    const path = `${OUT}${id}.${locale}.svg`;
    const next = diagram.render(labels);
    let current = null;
    try {
      current = readFileSync(path, "utf8");
    } catch {
      // New diagram; nothing to compare against.
    }
    if (current !== next) {
      writeFileSync(path, next);
      changed += 1;
    }
    written += 1;
  }
}

/*
 * BUST THE CONTENT CACHE when a diagram actually changed.
 *
 * Astro 5 caches each markdown file's RENDERED html in .astro/data-store.json, keyed by that
 * file's own contents. src/lib/rehype-diagrams.ts inlines the SVG at render time, so a redrawn
 * diagram inside an unchanged .md is invisible to the cache: `astro build` happily reuses the
 * old picture, and the only symptom is a figure that quietly refuses to update. Found exactly
 * that way. Deleting the store costs one full re-render and only happens when a file moved.
 */
if (changed) {
  for (const store of [
    new URL("../.astro/data-store.json", import.meta.url).pathname,
    new URL("../node_modules/.astro/data-store.json", import.meta.url).pathname,
  ]) {
    rmSync(store, { force: true });
  }
}

console.log(
  changed
    ? `✓ ${written} diagrams, ${changed} changed — content cache cleared so the pages re-render`
    : `✓ ${written} diagrams, unchanged`,
);
