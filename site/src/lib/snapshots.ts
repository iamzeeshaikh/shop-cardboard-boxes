import routeIndex from '../data/route-index.json';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export interface Snapshot {
  path: string;
  title: string;
  description: string;
  canonical: string;
  robots: string;
  bodyClass: string;
  metaTags: string;
  stylesHtml: string;
  jsonLd: string[];
  contentHtml: string;
}

const fileByPath = new Map(routeIndex.map((route) => [route.path, route.file]));
const cache = new Map<string, Snapshot>();

function snapshotDirectory(): string {
  if (process.env.SCB_RUNTIME_DATA_DIR) return process.env.SCB_RUNTIME_DATA_DIR;
  if (process.env.VERCEL) return resolve(process.cwd(), 'src/data/snapshots');
  return import.meta.env.DEV
    ? resolve(process.cwd(), 'src/data/snapshots')
    : resolve(process.cwd(), 'dist/server-data/snapshots');
}

export function getSnapshot(pathname: string): Snapshot | undefined {
  const file = fileByPath.get(pathname);
  if (!file) return undefined;
  const cached = cache.get(file);
  if (cached) return cached;
  const snapshot = JSON.parse(readFileSync(resolve(snapshotDirectory(), file), 'utf8')) as Snapshot;
  cache.set(file, snapshot);
  return snapshot;
}

export const knownRoutes = routeIndex.map((route) => route.path);
