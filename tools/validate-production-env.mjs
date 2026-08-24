const smtpRequired = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'SMTP_TO', 'SMTP_FROM_NAME', 'SMTP_FROM_EMAIL'];
const endpointRequired = ['FORM_DELIVERY_ENDPOINT', 'FORM_DELIVERY_SECRET', 'ORDER_DELIVERY_ENDPOINT', 'ORDER_DELIVERY_SECRET'];
const smtpConfigured = smtpRequired.every((name) => String(process.env[name] || '').trim());
const endpointsConfigured = endpointRequired.every((name) => String(process.env[name] || '').trim());
const required = smtpConfigured ? smtpRequired : endpointRequired;
const missing = required.filter((name) => !String(process.env[name] || '').trim());
const invalidUrls = endpointRequired
  .filter((name) => name.endsWith('_ENDPOINT') && process.env[name])
  .filter((name) => {
    try { return new URL(process.env[name]).protocol !== 'https:'; } catch { return true; }
  });
const shortSecrets = endpointRequired
  .filter((name) => name.endsWith('_SECRET') && process.env[name])
  .filter((name) => process.env[name].length < 24);
const result = {
  configured: (smtpConfigured || endpointsConfigured) && missing.length === 0 && invalidUrls.length === 0 && shortSecrets.length === 0,
  deliveryMode: smtpConfigured ? 'smtp' : endpointsConfigured ? 'webhook' : 'unconfigured',
  missing,
  invalidHttpsEndpoints: invalidUrls,
  secretsShorterThan24Characters: shortSecrets,
  paymentMethod: 'cash_on_delivery',
  externalPaymentGatewayRequired: false,
};
console.log(JSON.stringify(result, null, 2));
if (!result.configured) process.exitCode = 1;
