import type { APIRoute } from 'astro';
import products from '../../data/products.json';

const catalog = new Map(products.map((product) => [product.id, product]));
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
});

export const POST: APIRoute = async ({ request, url }) => {
  const input = await request.json().catch(() => null) as null | {
    customer?: Record<string, string>;
    items?: Array<{ id: number; quantity: number }>;
    notes?: string;
  };
  if (!input?.customer?.name || !input.customer.email || !input.customer.phone || !input.customer.address) {
    return json({ ok: false, error: 'Required billing details are missing.' }, 400);
  }
  if (!Array.isArray(input.items) || !input.items.length || input.items.length > 100) {
    return json({ ok: false, error: 'The order has no valid items.' }, 400);
  }
  const items = [];
  let total = 0;
  for (const requested of input.items) {
    const product = catalog.get(Number(requested.id));
    const quantity = Math.max(1, Math.min(999, Number(requested.quantity) || 1));
    if (!product || !product.price) return json({ ok: false, error: `Invalid product ${requested.id}.` }, 400);
    const unitPrice = Number(product.price);
    total += unitPrice * quantity;
    items.push({ id: product.id, merchantId: product.merchantId, name: product.title, url: product.path, quantity, unitPrice });
  }
  const order = {
    orderId: `SCB-${Date.now()}`,
    paymentMethod: 'cash_on_delivery',
    currency: 'USD',
    total: Number(total.toFixed(2)),
    customer: input.customer,
    notes: String(input.notes || ''),
    items,
  };
  const endpoint = import.meta.env.ORDER_DELIVERY_ENDPOINT;
  const production = url.hostname === 'shopcardboardboxes.com';
  if (!production || !endpoint) return json({ ok: true, mock: true, orderId: `LOCAL-${Date.now()}`, order });
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (import.meta.env.ORDER_DELIVERY_SECRET) headers.Authorization = `Bearer ${import.meta.env.ORDER_DELIVERY_SECRET}`;
  const response = await fetch(endpoint, { method: 'POST', headers, body: JSON.stringify(order) });
  if (!response.ok) return json({ ok: false, error: 'Order delivery failed.' }, 502);
  return json({ ok: true, mock: false, orderId: order.orderId });
};
