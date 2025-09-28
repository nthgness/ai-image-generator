import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ai-image-generator/",
  resolve: {
    alias: {
      "@": "/src",
      "@shared": "/src/shared",
      "@features": "/src/features",
      "@services": "/src/services",
      "@types": "/src/types",
      "@utils": "/src/utils",
      "@constants": "/src/constants",
      "@styles": "/src/styles",
    },
  },
});
