import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// The demo is served at 0laoludev.netlify.app/demos/veloce/
// so every asset path is prefixed with this base.
export default defineConfig({
  base: "/demos/veloce/",
  plugins: [react(), tailwindcss()],
});
