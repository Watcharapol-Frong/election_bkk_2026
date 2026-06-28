const UPSTREAM = 'https://bangkokvote69.bangkok.go.th/results/69-governor-electiondata.json';
const TIMEOUT_MS = 8_000;
const CACHE_TTL = 30;

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

  const ac = new AbortController();
  const timer = setTimeout(() => ac.abort(), TIMEOUT_MS);

  try {
    const upstream = await fetch(UPSTREAM, { signal: ac.signal });
    clearTimeout(timer);

    if (!upstream.ok) {
      return res.status(502).json({
        error: 'upstream_error',
        upstream_status: upstream.status,
      });
    }

    const data = await upstream.json();

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader(
      'Cache-Control',
      `public, s-maxage=${CACHE_TTL}, stale-while-revalidate=${CACHE_TTL * 2}`
    );
    return res.status(200).json(data);
  } catch (err) {
    clearTimeout(timer);
    const isTimeout = err.name === 'AbortError';
    return res.status(isTimeout ? 504 : 502).json({
      error: isTimeout ? 'upstream_timeout' : 'upstream_failed',
    });
  }
};
