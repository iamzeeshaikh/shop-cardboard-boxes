import { createServer } from 'node:http';
import { spawn } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const projectRoot = new URL('../site/', import.meta.url);
const products = JSON.parse(await readFile(new URL('../site/src/data/products.json', import.meta.url), 'utf8'));
const product = products.find((item) => item.price && Number(item.price) > 0);
if (!product) throw new Error('No priced product is available for the order integration test.');

const received = [];
const deliveryServer = createServer((request, response) => {
  const chunks = [];
  request.on('data', (chunk) => chunks.push(chunk));
  request.on('end', () => {
    received.push({
      path: request.url,
      authorization: request.headers.authorization || '',
      contentType: request.headers['content-type'] || '',
      body: Buffer.concat(chunks).toString('utf8'),
    });
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end('{"ok":true}');
  });
});

const listen = (server, port) => new Promise((resolve, reject) => {
  server.once('error', reject);
  server.listen(port, '127.0.0.1', resolve);
});
const close = (server) => new Promise((resolve) => server.close(resolve));
const run = (command, args, options = {}) => new Promise((resolve, reject) => {
  const child = spawn(command, args, { stdio: 'inherit', ...options });
  child.once('error', reject);
  child.once('exit', (code) => code === 0 ? resolve() : reject(new Error(`${command} exited with ${code}`)));
});
const capture = (command, args, options = {}) => new Promise((resolve, reject) => {
  const child = spawn(command, args, { stdio: ['ignore', 'pipe', 'pipe'], ...options });
  const stdout = [];
  const stderr = [];
  child.stdout.on('data', (chunk) => stdout.push(chunk));
  child.stderr.on('data', (chunk) => stderr.push(chunk));
  child.once('error', reject);
  child.once('exit', (code) => code === 0
    ? resolve(Buffer.concat(stdout).toString('utf8'))
    : reject(new Error(`${command} exited with ${code}: ${Buffer.concat(stderr).toString('utf8')}`)));
});
const productionRequest = async (args) => {
  const output = await capture('/usr/bin/curl', [
    '--noproxy', '*',
    '--resolve', 'shopcardboardboxes.com:4334:127.0.0.1',
    '-sS', '-w', '\n%{http_code}',
    ...args,
  ]);
  const separator = output.lastIndexOf('\n');
  return { body: output.slice(0, separator), status: Number(output.slice(separator + 1)) };
};

let app;
try {
  await listen(deliveryServer, 4555);
  const buildEnvironment = {
    ...process.env,
    FORM_DELIVERY_ENDPOINT: 'http://127.0.0.1:4555/form',
    FORM_DELIVERY_SECRET: 'form-test-secret',
    ORDER_DELIVERY_ENDPOINT: 'http://127.0.0.1:4555/order',
    ORDER_DELIVERY_SECRET: 'order-test-secret',
  };
  if (process.env.SCB_SKIP_INTEGRATION_BUILD !== 'true') {
    await run('npm', ['run', 'build'], { cwd: projectRoot, env: buildEnvironment });
  }
  app = spawn('node', ['dist/server/entry.mjs'], {
    cwd: projectRoot,
    env: { ...buildEnvironment, HOST: '127.0.0.1', PORT: '4334' },
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  let ready = false;
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      const response = await fetch('http://127.0.0.1:4334/');
      if (response.ok) { ready = true; break; }
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  if (!ready) throw new Error('Production-like integration server did not start.');

  const formResponse = await productionRequest([
    '-X', 'POST',
    '-H', 'Origin: http://shopcardboardboxes.com:4334',
    '-F', `product_name=${product.title}`,
    '-F', `product_url=https://shopcardboardboxes.com${product.path}`,
    '-F', `page_title=${product.title}`,
    '-F', `source_url=https://shopcardboardboxes.com${product.path}`,
    '-F', 'name=Local QA',
    '-F', 'email=local-qa@example.invalid',
    '-F', 'phone=+1 (503) 358-0443',
    '-F', `artwork=@${fileURLToPath(new URL('../site/.env.example', import.meta.url))};filename=qa.txt;type=text/plain`,
    'http://shopcardboardboxes.com:4334/api/forms',
  ]);
  const formResult = JSON.parse(formResponse.body);

  const orderPayload = JSON.stringify({
      customer: { name: 'Local QA', email: 'local-qa@example.invalid', phone: '+1 (503) 358-0443', address: 'Local test only' },
      items: [{ id: product.id, quantity: 2 }],
      notes: 'Production adapter contract test; do not fulfil.',
  });
  const orderResponse = await productionRequest([
    '-X', 'POST',
    '-H', 'Origin: http://shopcardboardboxes.com:4334',
    '-H', 'Content-Type: application/json',
    '--data', orderPayload,
    'http://shopcardboardboxes.com:4334/api/orders',
  ]);
  const orderResult = JSON.parse(orderResponse.body);

  const priorDeliveries = received.length;
  const localForm = new FormData();
  for (const field of ['product_name', 'product_url', 'page_title', 'source_url']) localForm.set(field, 'local-test');
  const localResponse = await fetch('http://127.0.0.1:4334/api/forms', {
    method: 'POST',
    headers: { Origin: 'http://127.0.0.1:4334' },
    body: localForm,
  });
  const localResult = await localResponse.json();

  const missingAttributionResponse = await fetch('http://127.0.0.1:4334/api/forms', {
    method: 'POST',
    headers: { Origin: 'http://127.0.0.1:4334' },
    body: new FormData(),
  });
  const invalidOrderResponse = await fetch('http://127.0.0.1:4334/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '{}',
  });

  const checks = {
    formProductionForwarded: formResponse.status === 200 && formResult.ok === true && formResult.mock === false,
    formSecretForwarded: received.some((entry) => entry.path === '/form' && entry.authorization === 'Bearer form-test-secret'),
    fileUploadForwarded: received.some((entry) => entry.path === '/form' && entry.contentType.startsWith('multipart/form-data') && entry.body.includes('qa.txt')),
    orderProductionForwarded: orderResponse.status === 200 && orderResult.ok === true && orderResult.mock === false,
    orderSecretForwarded: received.some((entry) => entry.path === '/order' && entry.authorization === 'Bearer order-test-secret'),
    orderProductAndTotalForwarded: received.some((entry) => entry.path === '/order' && entry.body.includes(product.title) && entry.body.includes('"quantity":2')),
    localhostRemainsMocked: localResponse.status === 200 && localResult.mock === true && received.length === priorDeliveries,
    missingAttributionRejected: missingAttributionResponse.status === 400,
    invalidOrderRejected: invalidOrderResponse.status === 400,
  };
  const failed = Object.entries(checks).filter(([, passed]) => !passed).map(([name]) => name);
  console.log(JSON.stringify({ checks, failed, deliveries: received.length, testedProduct: { id: product.id, path: product.path } }, null, 2));
  if (failed.length) process.exitCode = 1;
} finally {
  if (app) app.kill('SIGTERM');
  await close(deliveryServer);
}
