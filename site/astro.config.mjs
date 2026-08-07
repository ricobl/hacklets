import { defineConfig } from 'astro/config'
import tailwind from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import relativeLinks from 'astro-relative-links'

export default defineConfig({
  site: 'https://ricobl.github.io',
  integrations: [sitemap(), react(), mdx(), relativeLinks()],
  vite: {
    plugins: [tailwind()],
  },
})
