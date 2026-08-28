import type { APIRoute } from "astro";
import { llmsTxt } from "../../lib/llms";

export const GET: APIRoute = ({ site }) =>
  new Response(llmsTxt("id", site?.href ?? "https://docs.santara.ai"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
