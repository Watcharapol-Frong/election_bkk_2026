// Server-side proxy for the PPTV election API.
//
// Why: the browser only ever talks to our own domain (/api/pptv), never to
// PPTV's API directly. This keeps the upstream details out of the client,
// lets us cache responses, and — importantly — means that if the upstream
// ever requires a credential, it lives in a server-side environment variable
// (PPTV_API_KEY) and is NEVER shipped to the browser.
//
// Configuration (Vercel → Project → Settings → Environment Variables):
//   PPTV_HOST       optional, default https://www-api.pptvhd36.com
//   PPTV_BASE_PATH  optional, default the election base path (Thai)
//   PPTV_API_KEY    optional, sent as `x-api-key` header only if set

const HOST       = process.env.PPTV_HOST || 'https://www-api.pptvhd36.com';
const BASE_PATH  = process.env.PPTV_BASE_PATH || 'เลือกตั้งผู้ว่ากรุงเทพฯ2569';
const API_KEY    = process.env.PPTV_API_KEY || '';
const TIMEOUT_MS = 8_000;
const CACHE_TTL  = 30; // seconds (CDN edge cache)

// Strict allowlist — only these upstream shapes may be requested. This prevents
// the endpoint from being abused as an open proxy / SSRF vector.
const ALLOWED = [
  /^api\/rank$/,
  /^api\/summary\/[\w-]+$/,
  /^api\/map$/,
  /^api\/map\/[^/]+$/,        // governor or council (election-type segment)
  /^api\/zone\/[^/]+$/,       // governor zone detail
  /^api\/zone\/[^/]+\/[^/]+$/ // council zone detail (election/slug)
];

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Max-Age', '86400');
    return res.status(204).end();
  }
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  const p = String((req.query && req.query.p) || '');

  // Reject anything that isn't a known, safe path
  if (p.includes('..') || p.includes('://') || !ALLOWED.some((re) => re.test(p))) {
    return res.status(400).json({ error: 'bad_path' });
  }

  const target = `${HOST}/${encodeURIComponent(BASE_PATH)}/`
    + p.split('/').map(encodeURIComponent).join('/');

  const ac = new AbortController();
  const timer = setTimeout(() => ac.abort(), TIMEOUT_MS);

  try {
    const headers = { 'User-Agent': 'bangkok-vote/1.0 (+https://frong.me)' };
    if (API_KEY) headers['x-api-key'] = API_KEY;

    const upstream = await fetch(target, { signal: ac.signal, headers });
    clearTimeout(timer);

    if (!upstream.ok) {
      return res.status(502).json({ error: 'upstream_error', upstream_status: upstream.status });
    }

    const data = await upstream.json();
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', `public, s-maxage=${CACHE_TTL}, stale-while-revalidate=${CACHE_TTL * 2}`);
    return res.status(200).json(data);
  } catch (err) {
    clearTimeout(timer);
    const aborted = err && err.name === 'AbortError';
    return res.status(aborted ? 504 : 502).json({ error: aborted ? 'upstream_timeout' : 'fetch_failed' });
  }
};
