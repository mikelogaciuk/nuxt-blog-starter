# Nuxt Blog Starter

Minimalistic Nuxt.js blog starter template.

## 🚀 Modules used

Starter uses the following Nuxt.js modules:

- [@nuxt/content](https://content.nuxtjs.org/) - for content management
- [@nuxt/icon](https://nuxt.com/modules/icon) - for icons
- [@nuxt/fonts](https://nuxt.com/modules/fonts) - for fonts
- [@nuxt/eslint](https://nuxt.com/modules/eslint) - for linting
- [@nuxt/ui](https://nuxt.com/modules/ui) - for UI components

Additionally, it uses the following packages:

- [daisyui](https://daisyui.com/) - for UI components
- [tailwindcss](https://tailwindcss.com/) - for styling
- [prettier](https://prettier.io/) - for code formatting

It also has enabled markdown highlighting with [shiki](https://shiki.matsu.io/) for languages like `js`, `ts`, `vue`, `html`, and `css`, `ruby`, `python`, `elixir` and others.

The config can be found in `nuxt.config.ts` and `content.config.ts`.

## 📖 Features

The blog starter includes the very basic layout and ability to filter posts by tags from a /blog page and from a single post view.

## 🌳 File structure

```bash
.
├── app
│   ├── app.vue
│   ├── assets
│   │   ├── app.css
│   │   ├── img
│   │   │   └── me.png
│   │   └── svg
│   │       └── me.svg
│   ├── components
│   │   ├── AppFooter.vue
│   │   ├── AppHeader.vue
│   │   └── SinglePostComponent.vue
│   ├── layouts
│   │   └── default.vue
│   └── pages
│       ├── blog
│       │   ├── index.vue
│       │   ├── [slug].vue
│       │   └── tag
│       │       └── [tag].vue
│       └── index.vue
├── content
│   └── blog
│       ├── first-post.md
│       └── second-post.md
├── content.config.ts
├── eslint.config.mjs
├── LICENSE
├── nuxt.config.ts
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   └── robots.txt
├── README.md
├── server
│   └── api
│       └── touch
└── tsconfig.json
```

## 📦 Installation

It is simple as:

```shell
npx nuxi init my-project --template https://github.com/mikelogaciuk/nuxt-blog-starter
cd my-project
npm install
npm run dev
```

## 📝 Writing posts

To write a new post, create a new markdown file in the `content/blog` directory. The filename will be used as the slug for the post.

You can use the following frontmatter to define the post metadata:

```markdown
---
date: 2023-10-01
tags: [nuxt, blog, starter]
---

The title is taken from the # at the beginning of the file.

## 💊 Tests

For tests use [Vitest](https://vitest.dev/).

It should work out of the box, with:

```
npm run test
```

If not, type:

```shell
npm i --save-dev @nuxt/test-utils vitest @vue/test-utils happy-dom playwright-core
```
