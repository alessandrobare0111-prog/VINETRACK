import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/VINETRACK/", // <-- OBBLIGATORIO per GitHub Pages
  build: {
    outDir: "../docs", // <-- la cartella pubblicata da GitHub Pages
    emptyOutDir: true,
  },
});
