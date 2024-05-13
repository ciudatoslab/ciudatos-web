import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), pagefind()],
  site: 'https://ciudatoslab.org'
});