import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { fileURLToPath } from "url";

export default defineConfig({
  site: "https://snuen.com",
  integrations: [mdx(), sitemap()],
  vite: {
    resolve: {
      alias: {
        "~": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
