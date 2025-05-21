import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // ✅ penting agar path asset relative saat deploy ke Netlify
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
