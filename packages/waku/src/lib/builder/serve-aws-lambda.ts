/* eslint import/no-unresolved: off */

import { Hono } from 'hono';
import { handle } from 'hono/aws-lambda';

import { honoMiddleware } from '../middleware/hono-prd.js';
import { serveStatic } from '@hono/node-server/serve-static';

const ssr = !!import.meta.env.WAKU_BUILD_SSR;
const distDir = import.meta.env.WAKU_CONFIG_DIST_DIR;
const publicDir = import.meta.env.WAKU_CONFIG_PUBLIC_DIR;
const loadEntries = () => import(import.meta.env.WAKU_ENTRIES_FILE!);

const env = process.env as Record<string, string>;

const app = new Hono();
app.use('*', honoMiddleware({ loadEntries, ssr, env }));
app.use('*', serveStatic({ root: `${distDir}/${publicDir}` }));

export const handler = handle(app);
