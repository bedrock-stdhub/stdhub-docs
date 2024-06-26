import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bedrock StdHub",
  description: "Load plugins elegantly",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bedrock-stdhub/bedrock-stdhub' }
    ]
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
        ],
        sidebar: [
          { text: 'Get Started', link: './get-started' }
        ],
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      themeConfig: {
        nav: [
          { text: '主页', link: '/zh' },
        ],
        sidebar: [
          { text: '开始使用', link: './get-started' }
        ],
      }
    }
  }
})
