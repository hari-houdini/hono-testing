import { Hono } from 'hono';
import { Layout } from './_components/home.component.tsx';
import { streamTextRequest } from './_utils/stream.util.ts';

const app = new Hono()
  .get('/', (c) => c.html(<Layout />))
  .get('/api/streaming', streamTextRequest);

export default app;

Deno.serve(app.fetch);
