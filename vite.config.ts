import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { imagetools } from "vite-imagetools";
export default defineConfig({
  plugins: [react(), tailwindcss(), imagetools()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  build: {
    minify: "esbuild",
    target: "es2020",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],

          galaxy: ["./src/components/Galaxy.tsx"],
        },
      },
    },
  },
});
