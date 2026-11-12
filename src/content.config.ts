import { defineCollection } from "astro:content";
import { docsLoader, i18nLoader } from "@astrojs/starlight/loaders";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  // Starlight ships its own interface strings (search, "On this page", "Last updated", previous /
  // next, the theme picker) for en, id and vi but not for Thai. src/content/i18n/th.json supplies them,
  // so a /th/ page has no English left in its frame.
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
