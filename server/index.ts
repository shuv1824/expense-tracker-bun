import app from './app';

Bun.serve({
    port: process.env.PORT || 8080,
    fetch: app.fetch,
})

console.log("Server is running");
