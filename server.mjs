import http from 'http';
import { createServerAdapter } from '@whatwg-node/server';
import handler from './dist/server/server.js';

const port = process.env.PORT || 3000;
const adapter = createServerAdapter(handler.default ?? handler);
const server = http.createServer(adapter);
server.listen(port, () => console.log('Server running on port ' + port));
