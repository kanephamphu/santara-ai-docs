import type { APIRoute } from "astro";
import { llmsFullTxt } from "../../lib/llms";

export const GET: APIRoute = ({ site }) =>
  new Response(llmsFullTxt("vi", site?.href ?? "https://docs.santara.ai"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
