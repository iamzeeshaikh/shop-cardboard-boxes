#!/usr/bin/env node
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const projectRoot = process.cwd().endsWith('/site') ? process.cwd() : resolve(process.cwd(), 'site');
const source = resolve(projectRoot, 'src/data/snapshots');
const destination = resolve(projectRoot, 'dist/server-data/snapshots');
const httpSource = resolve(projectRoot, 'src/data/http-snapshots');
const httpDestination = resolve(projectRoot, 'dist/server-data/http-snapshots');

if (!existsSync(source)) throw new Error(`Snapshot source not found: ${source}`);
rmSync(destination, { recursive: true, force: true });
mkdirSync(destination, { recursive: true });
cpSync(source, destination, { recursive: true });
rmSync(httpDestination, { recursive: true, force: true });
mkdirSync(httpDestination, { recursive: true });
cpSync(httpSource, httpDestination, { recursive: true });
console.log(`Copied runtime snapshots to ${destination}`);
