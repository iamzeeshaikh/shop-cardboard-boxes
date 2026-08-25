import type { APIRoute } from 'astro';
import { sendFormSubmission, smtpConfigured } from '../../lib/email';

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
});

export const POST: APIRoute = async ({ request, url }) => {
  const length = Number(request.headers.get('content-length') || 0);
  if (length > 15_000_000) return json({ ok: false, error: 'Upload is too large.' }, 413);
  const form = await request.formData();
  const attribution = (field: string) => String(form.get(field) || '').trim();
  // Pages without an <h1> (for example /contact-us/) used to submit an empty product_name and
  // were rejected, so a real enquiry was silently lost. Derive the missing values instead.
  const sourceUrl = attribution('source_url') || attribution('product_url');
  const pageTitle = attribution('page_title') || attribution('product_name');
  if (!sourceUrl || !pageTitle) return json({ ok: false, error: 'Missing submission attribution.' }, 400);
  form.set('source_url', sourceUrl);
  form.set('product_url', attribution('product_url') || sourceUrl);
  form.set('page_title', pageTitle);
  form.set('product_name', attribution('product_name') || pageTitle);
  const endpoint = import.meta.env.FORM_DELIVERY_ENDPOINT;
  const deliveryHost = url.hostname === 'shopcardboardboxes.com' || url.hostname === 'www.shopcardboardboxes.com' || url.hostname.endsWith('.vercel.app');
  if (!deliveryHost) {
    return json({ ok: true, mock: true, message: 'Local test accepted; no email was sent.' });
  }
  if (smtpConfigured()) {
    try {
      await sendFormSubmission(form);
      return json({ ok: true, mock: false, message: 'The form was sent successfully.' });
    } catch (error) {
      console.error('SMTP form delivery failed', error instanceof Error ? error.message : 'Unknown error');
      return json({ ok: false, error: 'Form delivery failed.' }, 502);
    }
  }
  if (!endpoint) return json({ ok: false, error: 'Form delivery is not configured.' }, 503);
  const headers: Record<string, string> = {};
  if (import.meta.env.FORM_DELIVERY_SECRET) headers.Authorization = `Bearer ${import.meta.env.FORM_DELIVERY_SECRET}`;
  const response = await fetch(endpoint, { method: 'POST', headers, body: form });
  if (!response.ok) return json({ ok: false, error: 'Form delivery failed.' }, 502);
  return json({ ok: true, mock: false, message: 'The form was sent successfully.' });
};
