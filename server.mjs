import { serve } from '@hono/node-server';
import handler from './dist/server/server.js';

serve({
  fetch: handler.fetch,
  port: process.env.PORT || 3000,
});
