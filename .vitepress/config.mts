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
          {
            text: 'User Manual', items: [
              { text: 'Get Started', link: '/user-manual/get-started' },
              { text: 'Command and Permission', link: '/user-manual/command-and-permission' }
            ]
          },
          {
            text: 'Development', items: [
              { text: 'Begin Coding', link: '/development/begin-coding' }
            ]
          }
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
          {
            text: '用户手册', items: [
              { text: '开始使用', link: '/zh/user-manual/get-started' },
              { text: '命令和权限', link: '/zh/user-manual/command-and-permission' }
            ]
          },
          {
            text: '开发文档', items: [
              { text: '上手开发', link: '/zh/development/begin-coding' }
            ]
          }
        ],
      }
    }
  }
})
