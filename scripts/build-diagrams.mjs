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

const OUT = new URL("../public/diagrams/", import.meta.url).pathname;
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

// ── labels ──────────────────────────────────────────────────────────────────────────────────
const LABELS = {
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
