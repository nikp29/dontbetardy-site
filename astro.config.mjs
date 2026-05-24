// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build
export default defineConfig({
  site: "https://nottardy.app",
  integrations: [sitemap()],
  vite: {
    // Cast: @tailwindcss/vite ships Vite plugin types from a different Vite
    // version than Astro's, which trips astro check. Harmless at runtime.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
