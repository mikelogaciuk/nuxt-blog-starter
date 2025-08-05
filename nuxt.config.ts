// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'My personal blog',
      meta: [
        {
          name: 'description',
          content: 'Your personal blog description',
        },
      ],
    },
  },
  compatibilityDate: '2025-07-01',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ['~/assets/app.css'],
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/ui',
  ],
  content: {
    build: {
      markdown: {
        highlight: {
          // Get the themes from here: https://shiki.style/themes
          theme: 'rose-pine',
          // Get the languages from here: https://shiki.style/languages
          langs: [
            'c',
            'cpp',
            'java',
            'ruby',
            'crystal',
            'python',
            'elixir',
            'json',
            'js',
            'ts',
            'html',
            'css',
            'vue',
            'shell',
            'mdc',
            'md',
            'yaml',
            'dockerfile',
            'gleam',
            'rust',
            'go',
            'bash',
            'php',
            'sql',
            'plsql',
            'haskell',
            'scala',
            'toml',
          ],
        },
      },
    },
  },
});
