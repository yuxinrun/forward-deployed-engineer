<script setup lang="ts">
// 技术栈六层：从上往下不是"难度"，是"你得多深才够在客户面前把它跑起来"。
// 深度三档：认得出名词 / 能改别人的实现 / 能自己从零搭并救火。归纳自各家公司 FDE JD 的措辞。

type Depth = 1 | 2 | 3

const LAYERS: {
  id: string
  name: string
  en: string
  depth: Depth
  depthNote: string
  items: string[]
  why: string
  tone: 'teal' | 'coral' | 'blue' | 'lime'
}[] = [
  {
    id: 'L6',
    name: '现场约束',
    en: 'CONSTRAINTS',
    depth: 3,
    depthNote: '必须自己扛',
    items: ['私有化 / 内网离线', '等保 / 信创 / 国产化', 'SOC 2 / HIPAA / GDPR', '数据不出域', '审计与留痕', '预算与采购流程'],
    why: '这层不写进 JD，但它决定你上三层做得对不对。技术再好，数据出不了域就是零。',
    tone: 'coral'
  },
  {
    id: 'L5',
    name: 'AI 应用层',
    en: 'APPLICATION',
    depth: 3,
    depthNote: '必须自己扛',
    items: ['LLM API / 多模型路由', 'RAG 与检索', '向量库', '工具调用 / MCP', 'Agent 编排', '上下文工程', '评测集与灰度', '微调的边界'],
    why: '这是 2024 年之后 FDE 和老一代驻场工程师最明显的差别：你要交付的是"会答错的系统"，所以评测也是交付物。',
    tone: 'teal'
  },
  {
    id: 'L4',
    name: '数据层',
    en: 'DATA',
    depth: 3,
    depthNote: '必须自己扛',
    items: ['SQL / 窗口函数', '建模与口径', 'ETL / 批流', '脏数据与缺失值', '权限行级过滤', '增量与同步'],
    why: '落地项目死掉的原因里，数据质量常年排第一。这层的活没人替你干，因为它只在客户的库里。',
    tone: 'blue'
  },
  {
    id: 'L3',
    name: '应用与集成',
    en: 'INTEGRATION',
    depth: 2,
    depthNote: '能改能接',
    items: ['REST / GraphQL / Webhook', 'OAuth / SSO / SAML / SCIM', '消息队列', '缓存', '幂等与重试', '老系统对接（含存储过程）'],
    why: '客户系统的入口永远在 L3：进不去身份和流程，模型再聪明也拿不到活数据。',
    tone: 'lime'
  },
  {
    id: 'L2',
    name: '运行与交付',
    en: 'RUNTIME',
    depth: 2,
    depthNote: '能改能接',
    items: ['Docker / K8s', 'Terraform / IaC', 'CI/CD', 'Linux 与网络基础', '日志 / 指标 / 链路', '灰度与回滚'],
    why: '这层有平台团队是可以不精通，但你要能在半夜自己看出"是网络还是代码"。',
    tone: 'teal'
  },
  {
    id: 'L1',
    name: '工程基本功',
    en: 'CRAFT',
    depth: 3,
    depthNote: '不能借',
    items: ['Python / TypeScript', 'Git 与 review', '测试', '调试与 profiling', '读别人的代码', '写能被读懂的 README'],
    why: '所有层的底座。FDE 的"读别人的代码"这一项权重，比产品团队里同级别的人高得多。',
    tone: 'blue'
  }
]

const toneVar = {
  teal: 'var(--accent)',
  coral: 'var(--coral)',
  blue: 'var(--blue)',
  lime: 'var(--lime)'
} as const
</script>

<template>
  <div class="fd-widget" data-listen="skip">
    <div class="fd-widget-head">
      <span class="fd-widget-title">Stack · 六层，从下往上盖</span>
      <p class="fd-widget-sub">深度：1 认得出名词 · 2 能改别人的实现 · 3 能自己搭并救火</p>
    </div>

    <div class="fd-sl-list">
      <article v-for="l in LAYERS" :key="l.id" class="fd-sl-layer" :style="{ borderColor: `color-mix(in srgb, ${toneVar[l.tone]} 40%, transparent)` }">
        <header class="fd-sl-head">
          <span class="fd-sl-id">{{ l.id }}</span>
          <strong>{{ l.name }}</strong>
          <span class="fd-sl-en">{{ l.en }}</span>
          <span class="fd-sl-depth">
            <i v-for="k in 3" :key="k" :class="k <= l.depth ? 'on' : ''" :style="k <= l.depth ? { background: toneVar[l.tone] } : {}"></i>
            <b>{{ l.depthNote }}</b>
          </span>
        </header>
        <ul class="fd-sl-items">
          <li v-for="it in l.items" :key="it">{{ it }}</li>
        </ul>
        <p class="fd-sl-why">{{ l.why }}</p>
      </article>
    </div>

    <p class="fd-cap">
      反过来读更有用：<b>L1、L4、L5、L6 四层要求"depth 3"，而 L2、L3 允许你借力团队</b>。
      市面上叫"FDE"的岗位里，真正的分水岭不是 L5 会不会用框架，而是 L6 敢不敢替客户拍一个约束方案，然后在 L4 把数据抠干净。
    </p>
  </div>
</template>

<style scoped>
.fd-sl-list {
  display: grid;
  gap: 12px;
}

.fd-sl-layer {
  padding: 14px 16px 15px;
  border: 1px solid var(--line);
  border-left-width: 3px;
  border-radius: var(--radius-sm);
  background: var(--panel-2);
}

.fd-sl-head {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.fd-sl-id {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  color: var(--faint);
}

.fd-sl-head strong {
  font-size: 14px;
  font-weight: 730;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.fd-sl-en {
  font-family: var(--font-mono);
  font-size: 8.5px;
  letter-spacing: 0.14em;
  color: var(--faint);
}

.fd-sl-depth {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
}

.fd-sl-depth i {
  width: 14px;
  height: 5px;
  border-radius: 2px;
  background: var(--panel-3);
}

.fd-sl-depth b {
  margin-left: 6px;
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.08em;
  color: var(--muted);
  font-weight: 500;
}

.fd-sl-items {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 10px 0 0;
  padding: 0;
  list-style: none;
}

.fd-sl-items li {
  padding: 3px 9px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--panel);
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.02em;
  color: var(--ink-2);
}

.fd-sl-why {
  margin: 10px 0 0;
  font-size: 12px;
  line-height: 1.65;
  color: var(--muted);
}

@media (max-width: 620px) {
  .fd-sl-depth {
    margin-left: 0;
    width: 100%;
  }
}
</style>
