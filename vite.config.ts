import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
//@ts-ignore
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
