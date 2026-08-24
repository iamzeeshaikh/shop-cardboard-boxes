import nodemailer from 'nodemailer';

const text = (value: unknown) => String(value ?? '').trim();
const escapeHtml = (value: unknown) => text(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

const smtpConfig = () => ({
  host: text(import.meta.env.SMTP_HOST),
  port: Number(import.meta.env.SMTP_PORT || 587),
  secure: text(import.meta.env.SMTP_SECURE).toLowerCase() === 'true',
  user: text(import.meta.env.SMTP_USER),
  pass: text(import.meta.env.SMTP_PASS).replace(/\s+/g, ''),
  to: text(import.meta.env.SMTP_TO),
  fromName: text(import.meta.env.SMTP_FROM_NAME || 'Shop Cardboard Boxes'),
  fromEmail: text(import.meta.env.SMTP_FROM_EMAIL || import.meta.env.SMTP_USER),
});

export const smtpConfigured = () => {
  const config = smtpConfig();
  return Boolean(config.host && config.port && config.user && config.pass && config.to && config.fromEmail);
};

let transporter: ReturnType<typeof nodemailer.createTransport> | undefined;
const mailer = () => {
  const config = smtpConfig();
  transporter ||= nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    requireTLS: !config.secure,
    auth: { user: config.user, pass: config.pass },
  });
  return transporter;
};

const emailFromValues = (values: string[]) => values.find((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
const safeSubject = (value: string) => value.replace(/[\r\n]+/g, ' ').slice(0, 140);

export async function sendFormSubmission(form: FormData) {
  const config = smtpConfig();
  const rows: Array<[string, string]> = [];
  const values: string[] = [];
  const attachments: Array<{ filename: string; content: Buffer; contentType?: string }> = [];

  for (const [name, value] of form.entries()) {
    if (typeof value === 'string') {
      const clean = text(value);
      if (!clean || name === 'website') continue;
      rows.push([name, clean]);
      values.push(clean);
      continue;
    }
    if (!value.name || !value.size) continue;
    attachments.push({
      filename: value.name.replace(/[\r\n\\/]+/g, '-').slice(0, 180),
      content: Buffer.from(await value.arrayBuffer()),
      contentType: value.type || undefined,
    });
  }

  const product = text(form.get('product_name')) || text(form.get('page_title')) || 'Website enquiry';
  const replyTo = emailFromValues(values);
  const htmlRows = rows.map(([name, value]) => `<tr><th style="padding:8px;text-align:left;vertical-align:top;border:1px solid #ddd">${escapeHtml(name)}</th><td style="padding:8px;border:1px solid #ddd;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`).join('');
  await mailer().sendMail({
    from: { name: config.fromName, address: config.fromEmail },
    to: config.to,
    replyTo,
    subject: safeSubject(`New quote request — ${product}`),
    text: rows.map(([name, value]) => `${name}: ${value}`).join('\n\n'),
    html: `<h2>New quote request</h2><table style="border-collapse:collapse;width:100%">${htmlRows}</table>`,
    attachments,
  });
}

export async function sendOrderSubmission(order: {
  orderId: string;
  currency: string;
  total: number;
  paymentMethod: string;
  customer: Record<string, string>;
  notes: string;
  items: Array<{ id: number; merchantId?: string; name: string; url: string; quantity: number; unitPrice: number }>;
}) {
  const config = smtpConfig();
  const items = order.items.map((item) => `${item.name} × ${item.quantity} — ${order.currency} ${(item.unitPrice * item.quantity).toFixed(2)}\nhttps://shopcardboardboxes.com${item.url}`).join('\n\n');
  const customer = Object.entries(order.customer).map(([name, value]) => `${name}: ${value}`).join('\n');
  await mailer().sendMail({
    from: { name: config.fromName, address: config.fromEmail },
    to: config.to,
    replyTo: order.customer.email,
    subject: safeSubject(`New COD order — ${order.orderId}`),
    text: `Order: ${order.orderId}\nPayment: Cash on delivery\nTotal: ${order.currency} ${order.total.toFixed(2)}\n\nCustomer\n${customer}\n\nItems\n${items}\n\nNotes\n${order.notes || '-'}`,
  });
}
