export type ListenItem = { text: string; link: string }
export type ListenGroup = { group: string; items: ListenItem[] }

// 全站唯一的阅读顺序。config.mts 用它生成侧边栏，听书引擎用它生成连播队列。
// 新增页面必须同时出现在这里，否则连播会静默停在上一页。
export const ORDER: ListenGroup[] = [
  {
    group: '开始',
    items: [
      { text: '这本手册怎么用（先花 3 分钟认一认 FDE）', link: '/start' },
      { text: '把这本手册当成有声书', link: '/listen' },
      { text: 'FDE 适配度自评：你能不能扛住现场', link: '/quiz' }
    ]
  },
  {
    group: '一 · FDE 是什么',
    items: [
      { text: '定义：AI 落地的最后一公里，得有人亲自走', link: '/what/is-it' },
      { text: '从 Palantir 说起：这个岗位是怎么来的', link: '/what/origin' },
      { text: '一个 FDE 的一天，和一周', link: '/what/a-day' },
      { text: '为什么突然到处都在招 FDE', link: '/what/why-now' },
      { text: 'FDE 不是什么：六个相近岗位逐个对照', link: '/what/not-fde' }
    ]
  },
  {
    group: '二 · 任职要求',
    items: [
      { text: 'JD 拆解：招聘方到底在写什么', link: '/job/jd' },
      { text: '硬技能地图：必须会的、加分的、不用碰的', link: '/job/hard-skills' },
      { text: '软技能：真正拉开差距的那一半', link: '/job/soft-skills' },
      { text: '初级、资深、Principal：责任怎么换杠杆', link: '/job/leveling' }
    ]
  },
  {
    group: '三 · 要掌握的技术',
    items: [
      { text: 'AI 栈：模型、RAG、Agent 与评测', link: '/stack/ai' },
      { text: '数据与集成：SQL、API、SSO，以及"接进去"', link: '/stack/data' },
      { text: '部署：云、容器、私有化与信创', link: '/stack/infra' },
      { text: '从 Demo 到生产：延迟、成本与可靠性', link: '/stack/quality' }
    ]
  },
  {
    group: '四 · 行情',
    items: [
      { text: '谁在招：四类公司，四种活法', link: '/market/who-hires' },
      { text: '国内到底有没有这个岗位', link: '/market/china' },
      { text: '薪酬：中外区间与总包口径', link: '/market/salary' },
      { text: '这个岗位能做多久：看多与看空', link: '/market/future' }
    ]
  },
  {
    group: '五 · 怎么转，怎么变强',
    items: [
      { text: '转型入口：六种背景各自怎么切进去', link: '/path/switch' },
      { text: '十二周练手计划：从零攒出一个能讲的项目', link: '/path/plan' },
      { text: '面试怎么考，以及最常见的挂点', link: '/path/interview' },
      { text: '怎么成为更好的 FDE：可以练的十二件事', link: '/path/better' }
    ]
  },
  {
    group: '六 · 现场手册',
    items: [
      { text: '项目全生命周期：从 POC 到验收', link: '/field/lifecycle' },
      { text: '十个最常见的翻车点', link: '/field/pitfalls' },
      { text: '国内现场：私有化、验收与回款', link: '/field/cn-reality' },
      { text: '话术与模板：把话说明白，把责任写清楚', link: '/field/phrases' },
      { text: '现场术语表：53 个绕不开的词', link: '/field/glossary' }
    ]
  },
  {
    group: '证据与关于',
    items: [
      { text: '硬数字速查表：每条带出处和等级', link: '/evidence/numbers' },
      { text: '调研底稿与出处', link: '/evidence/sources' },
      { text: '关于本站：鱼心快跑与这本手册', link: '/about' }
    ]
  }
]

export const FLAT: ListenItem[] = ORDER.flatMap((g) => g.items)

// 侧边栏写 '/what/is-it'，路由给的可能带结尾斜杠或 hash，比之前都归一化一次
export const normalize = (link: string): string => {
  const bare = link.split('#')[0].split('?')[0]
  if (bare === '' || bare === '/') return '/'
  return bare.replace(/\/+$/, '')
}

export const groupOf = (link: string): string | undefined => {
  const key = normalize(link)
  return ORDER.find((g) => g.items.some((i) => normalize(i.link) === key))?.group
}
