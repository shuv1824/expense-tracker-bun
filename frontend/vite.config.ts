
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@server": path.resolve(__dirname, "../server"),
    },
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
