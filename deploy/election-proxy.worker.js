/**
 * Cloudflare Worker — serve the Bangkok Vote app under a path prefix of an
 * existing domain (e.g. https://frong.me/election-bkk-2026) while the app
 * itself is hosted on Vercel.
 *
 * Setup (Cloudflare dashboard, zone = frong.me):
 *   1. Workers & Pages → Create → paste this script → Deploy.
 *   2. Set ORIGIN below to your Vercel PRODUCTION URL (no trailing slash).
 *   3. Workers Routes → Add route:
 *        Route:   frong.me/election-bkk-2026*
 *        Worker:  (this worker)
 *      Everything else on frong.me keeps being served by Hostinger.
 *
 * How it works: requests to /election-bkk-2026/* are forwarded to Vercel with
 * the prefix stripped; redirects from Vercel are rewritten to stay under the
 * prefix. The app uses relative asset paths, so it loads correctly here.
 */

const PREFIX = '/election-bkk-2026';
const ORIGIN = 'https://election-bkk-2026.vercel.app';

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Safety: only handle our subpath (route should already scope this)
    if (url.pathname !== PREFIX && !url.pathname.startsWith(PREFIX + '/')) {
      return fetch(request);
    }

    // Enforce a trailing slash on the bare prefix so the app's relative URLs
    // (api/pptv, style.css, assets/…) resolve under the prefix.
    if (url.pathname === PREFIX) {
      return Response.redirect(`${url.origin}${PREFIX}/${url.search}`, 301);
    }

    // Strip the prefix → forward to Vercel
    const rest = url.pathname.slice(PREFIX.length) || '/';
    const target = ORIGIN + rest + url.search;

    // Forward with a clean Host (let fetch set it for the Vercel origin)
    const headers = new Headers(request.headers);
    headers.delete('host');

    const upstream = await fetch(target, {
      method: request.method,
      headers,
      body: ['GET', 'HEAD'].includes(request.method) ? undefined : request.body,
      redirect: 'manual',
    });

    // Keep Vercel redirects (e.g. cleanUrls) inside our prefix
    if (upstream.status >= 300 && upstream.status < 400) {
      const loc = upstream.headers.get('location');
      if (loc) {
        const locUrl = new URL(loc, ORIGIN);
        if (locUrl.origin === ORIGIN) {
          const h = new Headers(upstream.headers);
          h.set('location', PREFIX + locUrl.pathname + locUrl.search);
          return new Response(null, { status: upstream.status, headers: h });
        }
      }
    }

    return new Response(upstream.body, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers: upstream.headers,
    });
  },
};
