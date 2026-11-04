import { defineConfig } from 'vitepress'
import { ORDER } from './theme/reading-order'

// 仓库名部署（https://<user>.github.io/forward-deployed-engineer/）时构建用 BASE=/forward-deployed-engineer/
// 绑定自定义域名时保持 BASE=/
const base = process.env.BASE ?? '/'

const siteTitle = 'FDE 这件事'

const sidebar = ORDER.map((g) => ({
  text: g.group,
  collapsed: false,
  items: g.items.map((i) => ({ text: i.text, link: i.link }))
}))

const nav = [
  { text: '是什么', link: '/what/is-it', activeMatch: '/what/' },
  { text: '任职要求', link: '/job/jd', activeMatch: '/job/' },
  { text: '技术栈', link: '/stack/ai', activeMatch: '/stack/' },
  { text: '行情', link: '/market/who-hires', activeMatch: '/market/' },
  { text: '转型路线', link: '/path/switch', activeMatch: '/path/' },
  { text: '现场手册', link: '/field/lifecycle', activeMatch: '/field/' },
  {
    text: '更多',
    items: [
      { text: 'FDE 适配度自评', link: '/quiz' },
      { text: '硬数字速查表', link: '/evidence/numbers' },
      { text: '调研底稿与出处', link: '/evidence/sources' },
      { text: '听书怎么用', link: '/listen' },
      { text: '关于本站', link: '/about' },
      {
        text: '姊妹站：MCP Patterns ↗',
        link: 'https://yuxinrun.github.io/mcp-patterns/',
        target: '_blank',
        rel: 'noopener'
      },
      {
        text: '姊妹站：算法这件事 ↗',
        link: 'https://yuxinrun.github.io/common-algorithms/',
        target: '_blank',
        rel: 'noopener'
      },
      {
        text: '姊妹站：创业这件事 ↗',
        link: 'https://yuxinrun.github.io/start-a-business/',
        target: '_blank',
        rel: 'noopener'
      }
    ]
  }
]

export default defineConfig({
  title: siteTitle,
  // 首页在 index.md 里用 titleTemplate: false 关掉模板，否则站名会出现两遍
  titleTemplate: `:title · ${siteTitle}`,
  description:
    '把 Forward Deployed Engineer（前线部署工程师）讲透：它到底是什么、JD 里写了什么、要会哪些技术、中外薪酬、怎么转行、怎么干得更好。每个数字带出处和可信度等级，全站可以听完。',
  base,
  lang: 'zh-CN',
  appearance: true,
  lastUpdated: true,
  metaChunk: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` }],
    ['meta', { name: 'theme-color', content: '#f6f4ee', media: '(prefers-color-scheme: light)' }],
    ['meta', { name: 'theme-color', content: '#06100e', media: '(prefers-color-scheme: dark)' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ],
  markdown: {
    theme: { light: 'github-dark', dark: 'github-dark' },
    lineNumbers: false,
    image: { lazyLoading: true }
  },
  themeConfig: {
    logo: { light: '/logo.svg', dark: '/logo-dark.svg' },
    siteTitle,
    nav,
    sidebar,
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一节（也是连播的上一节）', next: '下一节' },
    lastUpdated: { text: '最后更新于', formatOptions: { dateStyle: 'short', timeStyle: 'short' } },
    footer: {
      // 注意：这里的内容会被塞进 <p class="message">，只能放行内元素，放 div 会引发全站 hydration mismatch
      message: `<span class="mp-footer-brand"><img src="${base}bridge-fish.svg" alt="戴着安全帽、正把一块木板架到对面悬崖上的青色小鱼" width="40" height="40" /><span>鱼心快跑，先到现场</span></span>`,
      copyright:
        '© 2026 鱼心快跑 · FDE 这件事｜内容为职业与工程实践的科普介绍，薪酬与行情数据有口径和时效限制，不构成招聘、offer 谈判或法律建议'
    },
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        translations: {
          button: { buttonText: '搜索手册', buttonAriaLabel: '搜索手册' },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清除查询',
            backButtonTitle: '返回',
            noResultsText: '没有找到结果',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '回车',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '上箭头',
              navigateDownKeyAriaLabel: '下箭头',
              closeText: '关闭',
              closeKeyAriaLabel: 'Esc'
            }
          }
        }
      }
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    langMenuLabel: '切换语言',
    notFound: {
      title: '这一页还没部署到现场',
      quote:
        '这条链接指向的页面还不存在。回首页从「一个 FDE 的一天」开始，或者直接把这本手册听完。',
      linkText: '返回首页'
    }
  },
  transformHead({ pageData }) {
    const fallback = 'FDE 这件事｜把前线部署工程师这个岗位彻底讲明白'
    const t = pageData.frontmatter.title
    const title = t ? `${t} · ${siteTitle}` : fallback
    const fmDesc = pageData.frontmatter.description
    const description =
      typeof fmDesc === 'string' && fmDesc
        ? fmDesc
        : 'Forward Deployed Engineer 到底做什么、招聘方在 JD 里写了什么、要会哪些技术、中外薪酬差多少、怎么转进来、怎么干得更好。全站支持自动连播，通勤路上正好读完两页。'
    return [
      ['meta', { name: 'author', content: '鱼心快跑' }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }]
    ]
  }
})
