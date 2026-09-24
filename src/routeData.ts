import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

/**
 * The header's site-title link, with its trailing slash.
 *
 * With `trailingSlash: "ignore"` (see astro.config.mjs for why it can't be "always") Starlight
 * links the logo to `/vi` and `/id`, which CloudFront 301s to `/vi/` and `/id/`. The logo is in
 * every page's header, so every id/vi page carried a redirecting link — ~110 SEO warnings from
 * one href. The English root is `/` and already fine.
 */
export const onRequest = defineRouteMiddleware((context) => {
  const route = context.locals.starlightRoute;
  if (!route.siteTitleHref.endsWith("/")) {
    route.siteTitleHref = `${route.siteTitleHref}/`;
  }
});
