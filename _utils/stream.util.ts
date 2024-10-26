import type { Context } from 'hono';
import { streamText } from 'hono/streaming';

export const streamTextRequest = (c: Context) => {
  console.log('request received');
  return streamText(c, async (stream) => {
    console.log('stream started');
    await stream.writeln('Hello');
    await stream.writeln('World');
    console.log('stream ended');
    await stream.sleep(1000);
    console.log('sleeping');
    await stream.write(`Hono!`);
    console.log('completed');
  });
};
