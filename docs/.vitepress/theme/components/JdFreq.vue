<script setup lang="ts">
// JD 覆盖率：某个技术名词在几份"能读到正文"的 FDE 招聘要求里出现。
// 分母是本站 2026-11-04 抓到并读到任职要求正文的 16 份 JD，不是全市场样本。
// 计数口径：正文里显式出现该词或该词的直接同义表述；只在公司名/技能标签里飘过的不算。

const TOTAL = 16

type Item = { name: string; note: string; n: number; tone: 'teal' | 'blue' | 'lime' | 'coral' }

const HIGH: Item[] = [
  { name: '生产级 LLM 经验', note: '提示工程、部署、规模化运维写进任职要求', n: 12, tone: 'teal' },
  { name: 'Python', note: '默认硬门槛，Anthropic 写 "proficiency in Python"', n: 11, tone: 'teal' },
  { name: 'Agent / 多智能体', note: 'AWS 写 "agentic and spec-driven development at production scale"', n: 10, tone: 'teal' },
  { name: '评测 evals', note: 'AWS 把它单列成一条资格；腾讯写 "Prompt/RAG 鲁棒性评测"', n: 7, tone: 'blue' },
  { name: 'TypeScript / 前端', note: '唯一把前端栈当硬技能的公司群：Vercel、AWS、OpenAI', n: 7, tone: 'blue' },
  { name: '上下文 / 提示工程', note: '国内岗更爱写"上下文工程、SDD、Harness"', n: 7, tone: 'blue' },
  { name: 'MCP / 工具调用', note: 'Anthropic、Vercel、中软把 MCP server 当交付物', n: 6, tone: 'blue' },
  { name: 'RAG / 检索', note: '高频但非普适，别写成 100%', n: 5, tone: 'lime' },
  { name: '主流云三选一', note: 'AWS / Azure / GCP，AWS 显式优先', n: 5, tone: 'lime' },
  { name: 'Docker / Kubernetes', note: 'Roboflow 连带 networking、Linux 一起写', n: 4, tone: 'lime' },
  { name: '数据工程 / ETL', note: 'Accenture-Palantir 岗写得最重：≥3 年', n: 4, tone: 'lime' },
  { name: 'CI/CD + 测试 + 版本控制', note: 'Deloitte 中译本写得最完整', n: 4, tone: 'lime' }
]

const MYTH: Item[] = [
  { name: 'Streamlit / Retool', note: '博客里传得很广，本批 JD 正文一次没出现', n: 0, tone: 'coral' },
  { name: 'Airflow / dbt / Kafka', note: '同样 0 次——写"必须会"是没有根据的', n: 0, tone: 'coral' },
  { name: 'SOC 2', note: '只出现在解释型文章里，JD 正文 0 次', n: 0, tone: 'coral' },
  { name: 'SAML / SCIM / webhook', note: '本批 0 次；能写的是"对接企业权限体系"', n: 0, tone: 'coral' },
  { name: 'Terraform / IaC', note: '1/16，只有 J&J 的技能标签里出现', n: 1, tone: 'coral' },
  { name: '微调 LoRA / QLoRA', note: '2/16，且都在国内岗；海外几乎不要求训练侧', n: 2, tone: 'coral' },
  { name: 'LangChain / LlamaIndex / Dify', note: '2/16，均国内岗；海外只写 "agent frameworks"', n: 2, tone: 'coral' },
  { name: 'Java / C++ 列为必需', note: '一份都没有；全是"或"关系', n: 0, tone: 'coral' },
  { name: '学历写死', note: '仅 5/16 要求本科，把专业限定为 CS/数据的只有 3 份', n: 5, tone: 'coral' }
]

const pct = (n: number) => Math.round((n / TOTAL) * 100)

const toneVar = {
  teal: 'var(--accent)',
  blue: 'var(--blue)',
  lime: 'var(--lime)',
  coral: 'var(--coral)'
} as const
</script>

<template>
  <div class="fd-widget" data-listen="skip">
    <div class="fd-widget-head">
      <span class="fd-widget-title">JD Coverage · 这些词到底写在招聘要求里几次</span>
      <p class="fd-widget-sub">分母 = 本站读到任职要求正文的 {{ TOTAL }} 份 FDE 岗 JD（抓取日 2026-11-04，含海外大厂、AI 实验室、咨询与国内岗）。这是本站样本，不是全市场统计。</p>
    </div>

    <div class="fd-jf-cols">
      <section class="fd-jf-col">
        <p class="fd-jf-sub">写在要求里的</p>
        <ul class="fd-jf-list">
          <li v-for="it in HIGH" :key="it.name" class="fd-jf-row">
            <span class="fd-jf-name">
              <b>{{ it.name }}</b>
              <em>{{ it.note }}</em>
            </span>
            <span class="fd-jf-bar" role="img" :aria-label="`${it.name}：${TOTAL} 份里出现 ${it.n} 次，约 ${pct(it.n)}%`">
              <i :style="{ width: `${(it.n / TOTAL) * 100}%`, background: toneVar[it.tone] }"></i>
            </span>
            <span class="fd-jf-num">{{ it.n }}<small>/{{ TOTAL }}</small></span>
          </li>
        </ul>
      </section>

      <section class="fd-jf-col">
        <p class="fd-jf-sub fd-jf-sub--myth">被传成必备、其实没写的</p>
        <ul class="fd-jf-list">
          <li v-for="it in MYTH" :key="it.name" class="fd-jf-row">
            <span class="fd-jf-name">
              <b>{{ it.name }}</b>
              <em>{{ it.note }}</em>
            </span>
            <span class="fd-jf-bar" role="img" :aria-label="`${it.name}：${TOTAL} 份里出现 ${it.n} 次`">
              <i class="fd-jf-zero" :style="{ width: `${Math.max((it.n / TOTAL) * 100, 1.5)}%` }"></i>
            </span>
            <span class="fd-jf-num fd-jf-num--zero">{{ it.n }}<small>/{{ TOTAL }}</small></span>
          </li>
        </ul>
      </section>
    </div>

    <p class="fd-cap">
      读法：<b>左栏决定你的学习顺序，右栏决定你的面试问题清单。</b>
      右边这些不是「不该学」，而是「不该以为不学就没机会」。
      计数只统计招聘正文里显式出现的词，样本 {{ TOTAL }} 份，比例没有统计意义——
      它的作用是拆掉「95% 的 FDE 岗都要求 XX」这类句式。
    </p>
  </div>
</template>

<style scoped>
.fd-jf-cols {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.fd-jf-col {
  min-width: 0;
  padding: 10px 11px 6px;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--panel-2);
}

.fd-jf-sub {
  margin: 0 0 8px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
}

.fd-jf-sub--myth {
  color: var(--coral);
}

.fd-jf-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.fd-jf-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 54px 34px;
  gap: 8px;
  align-items: center;
  padding: 5px 0;
  border-top: 1px dashed var(--line);
}

.fd-jf-row:first-child {
  border-top: none;
}

.fd-jf-name {
  min-width: 0;
}

.fd-jf-name b {
  display: block;
  font-size: 12px;
  line-height: 1.4;
  color: var(--ink);
  font-weight: 600;
}

.fd-jf-name em {
  display: block;
  margin-top: 1px;
  font-size: 10.5px;
  font-style: normal;
  line-height: 1.5;
  color: var(--muted);
}

.fd-jf-bar {
  display: block;
  height: 9px;
  border: 1px solid var(--line-strong);
  border-radius: 3px;
  background: var(--panel);
  overflow: hidden;
}

.fd-jf-bar i {
  display: block;
  height: 100%;
  border-radius: 2px;
  transition: width 0.5s ease;
}

.fd-jf-zero {
  background: var(--coral);
  opacity: 0.5;
}

.fd-jf-num {
  font-family: var(--font-mono);
  font-size: 12px;
  text-align: right;
  color: var(--ink-2);
}

.fd-jf-num small {
  font-size: 9px;
  color: var(--muted);
}

.fd-jf-num--zero {
  color: var(--coral);
}

@media (max-width: 860px) {
  .fd-jf-cols {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (max-width: 560px) {
  .fd-jf-row {
    grid-template-columns: minmax(0, 1fr) 42px 30px;
    gap: 6px;
  }

  .fd-jf-name em {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .fd-jf-bar i {
    transition: none;
  }
}
</style>
