import type { APIRoute } from 'astro';

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
});

export const POST: APIRoute = async ({ request, url }) => {
  const length = Number(request.headers.get('content-length') || 0);
  if (length > 15_000_000) return json({ ok: false, error: 'Upload is too large.' }, 413);
  const form = await request.formData();
  const requiredAttribution = ['product_name', 'product_url', 'page_title', 'source_url'];
  for (const field of requiredAttribution) {
    if (!String(form.get(field) || '').trim()) return json({ ok: false, error: `Missing ${field}.` }, 400);
  }
  const endpoint = import.meta.env.FORM_DELIVERY_ENDPOINT;
  const production = url.hostname === 'shopcardboardboxes.com';
  if (!production || !endpoint) {
    return json({ ok: true, mock: true, message: 'Local test accepted; no email was sent.' });
  }
  const headers: Record<string, string> = {};
  if (import.meta.env.FORM_DELIVERY_SECRET) headers.Authorization = `Bearer ${import.meta.env.FORM_DELIVERY_SECRET}`;
  const response = await fetch(endpoint, { method: 'POST', headers, body: form });
  if (!response.ok) return json({ ok: false, error: 'Form delivery failed.' }, 502);
  return json({ ok: true, mock: false, message: 'The form was sent successfully.' });
};
