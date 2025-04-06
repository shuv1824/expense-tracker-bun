
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@server": path.resolve(__dirname, "../server"),
    },
    preserveSymlinks: true
  },
  optimizeDeps: {
    include: ["hono/client"]
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://server:8080",
        changeOrigin: true,
      },
    },
  },
});
