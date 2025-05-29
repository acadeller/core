import { defineConfig } from "astro/config";
import config from "./src/config/config.json";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import readingTime from "./src/lib/utils/readingTime.ts";
import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url ? config.site.base_url : "http://examplesite.com",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  integrations: [
    react(), 
    sitemap(), 
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }), 
    AutoImport({
      imports: [
        "@/shortcodes/Button", 
        "@/shortcodes/Accordion", 
        "@/shortcodes/Notice", 
        "@/shortcodes/Video", 
        "@/shortcodes/Tabs", 
        "@/shortcodes/Tab"
      ]
    }), 
    mdx(), 
    vue()
  ],
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true
    },
    extendDefaultPlugins: true
  },
  build: {
    format: "file"
  },
  vite: {
    resolve: {
      alias: {
        "@/components": "/src/layouts/components",
        "@/shortcodes": "/src/layouts/shortcodes",
        "@/helpers": "/src/layouts/helpers",
        "@/partials": "/src/layouts/partials",
        "@/layouts": "/src/layouts",
        "@": "/src"
      }
    }
  }
});
