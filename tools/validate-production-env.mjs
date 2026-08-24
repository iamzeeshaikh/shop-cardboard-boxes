const required = [
  'FORM_DELIVERY_ENDPOINT',
  'FORM_DELIVERY_SECRET',
  'ORDER_DELIVERY_ENDPOINT',
  'ORDER_DELIVERY_SECRET',
];
const missing = required.filter((name) => !String(process.env[name] || '').trim());
const invalidUrls = required
  .filter((name) => name.endsWith('_ENDPOINT') && process.env[name])
  .filter((name) => {
    try { return new URL(process.env[name]).protocol !== 'https:'; } catch { return true; }
  });
const shortSecrets = required
  .filter((name) => name.endsWith('_SECRET') && process.env[name])
  .filter((name) => process.env[name].length < 24);
const result = {
  configured: missing.length === 0 && invalidUrls.length === 0 && shortSecrets.length === 0,
  missing,
  invalidHttpsEndpoints: invalidUrls,
  secretsShorterThan24Characters: shortSecrets,
  paymentMethod: 'cash_on_delivery',
  externalPaymentGatewayRequired: false,
};
console.log(JSON.stringify(result, null, 2));
if (!result.configured) process.exitCode = 1;
