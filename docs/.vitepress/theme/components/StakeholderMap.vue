<script setup lang="ts">
// 五个对话对象：同一个系统，五个人关心的东西完全不重叠。
// 每一行的「原话」列摘自各家 FDE 岗位 JD 正文（本站 2026-11-04 抓取），
// 覆盖数是本站样本里显式写到这类软技能的分母（16 份可读正文 JD）。

type Talk = {
  who: string
  sub: string
  cares: string
  lang: string
  bring: string
  n: number
  quote: string
  tone: 'teal' | 'blue' | 'coral' | 'lime'
}

const TALKS: Talk[] = [
  {
    who: '一线操作员',
    sub: '车间师傅 / 客服 / 化验员',
    cares: '今天能不能少加两小时班，别让我重新学一遍',
    lang: '具体动作。别说"模型"，说"你按这个键，它替你填三行"',
    bring: '他原来那张手写的台账，和你照着填对的一次',
    n: 4,
    quote: 'Roboflow 把它写进任职要求："Strong interpersonal skills… talk to executives, engineers, and machine operators." [A]',
    tone: 'teal'
  },
  {
    who: '业务主管',
    sub: '部门经理 / 流程 owner',
    cares: '验收单能不能签，KPI 会不会变难看',
    lang: '指标 + 时间。而且要能撤回的说法',
    bring: '一条真实数据跑出来的指标曲线，和它的失败样本',
    n: 3,
    quote: '国内 JD 的常见句式："跟踪客户业务指标、持续调优确保价值可感知" [C]',
    tone: 'blue'
  },
  {
    who: 'IT / 安全评审',
    sub: '运维、架构办、风控',
    cares: '出事算谁的，审计查得到吗',
    lang: '架构图、权限边界、回滚方案、变更单',
    bring: '一张数据流向图，上面标清楚什么数据出不出域',
    n: 3,
    quote: 'OpenAI 岗位原句："job duties require access to secure and protected information technology systems and related data security obligations." [B]',
    tone: 'coral'
  },
  {
    who: '高管 / CIO',
    sub: '会花三千万那个人',
    cares: '为什么是现在，为什么是你，多久见效',
    lang: 'BLUF：先说结论，再给背景，三句话以内',
    bring: '一页纸，结论在第一行，风险在最后一行',
    n: 3,
    quote: 'Vercel："Presented technical discovery findings and proposals to executives at enterprise customers." [A]；腾讯："能与非技术高管谈 ROI，也能与研发对齐技术方案" [B]',
    tone: 'lime'
  },
  {
    who: '客户团队（你要教会的人）',
    sub: '他们明天接手',
    cares: '你走了以后我能不能自己维护',
    lang: '结对、工作坊、能跑起来的文档',
    bring: '一次他们独立操作、你在旁边闭嘴的演练',
    n: 3,
    quote: 'Vercel："Run workshops and pair programming sessions so customer teams can maintain what you ship." [A]；Roboflow："Knowledge Transfer & Handoff… train the customer\'s team so they can operate." [A]',
    tone: 'teal'
  }
]

// 被 JD 显式写进任职要求的软技能条目，按出现次数排
const SOFT_COUNT = [
  { name: '抗模糊 / 高自主', n: 6, ex: 'Anthropic "navigate ambiguity… finding simple solutions to complex problems"；Vercel "high agency and autonomy"' },
  { name: '反馈闭环 / 沉淀资产', n: 5, ex: 'Anthropic "contribute insights back to our Product and Engineering teams"；国内岗高频写"反哺产品"' },
  { name: '客户面向经验年限', n: 5, ex: 'Vercel "2+ years in a customer-facing technical role"；Anthropic "3+ / 4+ years"' },
  { name: '需求界定 / discovery', n: 4, ex: 'OpenAI 岗（中译）"从 discovery、技术范围、系统设计、全栈构建到生产 rollout 的端到端责任人"' },
  { name: '写作与文档', n: 4, ex: 'Roboflow "Shape the Deployment Playbook… make future deployments faster"' },
  { name: '教学 / 知识转移', n: 3, ex: 'Vercel、Roboflow、Deloitte 三份都写成职责而不是加分项' },
  { name: '商业意识 / ROI', n: 3, ex: '腾讯、OpenAI 岗成功标准写"生产采用、工作流影响"' },
  { name: '冲突管理 / 低自我', n: 2, ex: '中软 "低自我（Low Ego）的协作心态…正直地平衡多方冲突优先级"' }
]

const toneVar = {
  teal: 'var(--accent)',
  blue: 'var(--blue)',
  coral: 'var(--coral)',
  lime: 'var(--lime)'
} as const

const MAXC = 6
</script>

<template>
  <div class="fd-widget" data-listen="skip">
    <div class="fd-widget-head">
      <span class="fd-widget-title">Stakeholders · 同一个系统，五套语言</span>
      <p class="fd-widget-sub">行内数字 = 这类软技能在本站 16 份可读正文 JD 里被显式写进任职要求的次数（本站样本，非市场统计）。</p>
    </div>

    <ol class="fd-sm-list">
      <li v-for="(t, i) in TALKS" :key="t.who" class="fd-sm-card" :style="{ borderLeftColor: toneVar[t.tone] }">
        <span class="fd-sm-idx">{{ String(i + 1).padStart(2, '0') }}</span>
        <div class="fd-sm-head">
          <strong>{{ t.who }}</strong>
          <em>{{ t.sub }}</em>
        </div>
        <dl class="fd-sm-dl">
          <div><dt>他只关心</dt><dd>{{ t.cares }}</dd></div>
          <div><dt>听得进的语言</dt><dd>{{ t.lang }}</dd></div>
          <div><dt>你要带去的</dt><dd>{{ t.bring }}</dd></div>
        </dl>
        <p class="fd-sm-quote">{{ t.quote }}</p>
      </li>
    </ol>

    <div class="fd-sm-bars">
      <p class="fd-sm-bars-title">被写进任职要求里的软技能（按出现次数）</p>
      <ul>
        <li v-for="s in SOFT_COUNT" :key="s.name" class="fd-sm-bar-row">
          <span class="fd-sm-bar-name">{{ s.name }}</span>
          <span class="fd-sm-track" role="img" :aria-label="`${s.name}：16 份里出现 ${s.n} 次`">
            <i :style="{ width: `${(s.n / MAXC) * 100}%` }"></i>
          </span>
          <span class="fd-sm-num">{{ s.n }}<small>/16</small></span>
          <span class="fd-sm-ex">{{ s.ex }}</span>
        </li>
      </ul>
    </div>

    <p class="fd-cap">
      这一页最实用的一句来自从业者岗位拆解："技术能力让你进门，沟通能力决定项目成败。"[C]
      但注意它的意思不是「性格外向」：上面五张卡要的都是<b>同一种能力</b>——
      <b>把同一件事翻译成对方能验证的说法</b>。这是可以练的，练法是每次见完人写下「他刚才反问了我什么」。
    </p>
  </div>
</template>

<style scoped>
.fd-sm-list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.fd-sm-card {
  position: relative;
  display: grid;
  grid-template-columns: 26px minmax(0, 1fr);
  gap: 4px 10px;
  padding: 10px 12px 9px 12px;
  border: 1px solid var(--line);
  border-left: 3px solid var(--accent);
  border-radius: var(--radius-sm);
  background: var(--panel-2);
}

.fd-sm-idx {
  grid-row: 1 / 3;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--muted);
}

.fd-sm-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px;
}

.fd-sm-head strong {
  font-size: 13.5px;
  color: var(--ink);
}

.fd-sm-head em {
  font-size: 11px;
  font-style: normal;
  color: var(--muted);
}

.fd-sm-dl {
  margin: 4px 0 0;
  display: grid;
  gap: 3px;
}

.fd-sm-dl div {
  display: grid;
  grid-template-columns: 92px minmax(0, 1fr);
  gap: 8px;
  align-items: baseline;
}

.fd-sm-dl dt {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.04em;
  color: var(--muted);
}

.fd-sm-dl dd {
  margin: 0;
  font-size: 12px;
  line-height: 1.55;
  color: var(--ink-2);
}

.fd-sm-quote {
  grid-column: 2;
  margin: 6px 0 0;
  padding-top: 6px;
  border-top: 1px dashed var(--line);
  font-size: 10.5px;
  line-height: 1.6;
  color: var(--muted);
}

.fd-sm-bars {
  margin-top: 14px;
  padding: 11px 12px;
  border: 1px dashed var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--panel);
}

.fd-sm-bars-title {
  margin: 0 0 8px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-2);
}

.fd-sm-bars ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.fd-sm-bar-row {
  display: grid;
  grid-template-columns: 140px 96px 44px minmax(0, 1fr);
  gap: 8px;
  align-items: center;
  padding: 5px 0;
  border-top: 1px dashed var(--line);
}

.fd-sm-bar-row:first-child {
  border-top: none;
}

.fd-sm-bar-name {
  font-size: 11.5px;
  color: var(--ink);
}

.fd-sm-track {
  display: block;
  height: 10px;
  border: 1px solid var(--line-strong);
  border-radius: 3px;
  background: var(--panel-2);
  overflow: hidden;
}

.fd-sm-track i {
  display: block;
  height: 100%;
  background: var(--accent);
  opacity: 0.8;
}

.fd-sm-num {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--ink-2);
}

.fd-sm-num small {
  font-size: 9px;
  color: var(--muted);
}

.fd-sm-ex {
  font-size: 10.5px;
  line-height: 1.5;
  color: var(--muted);
  overflow-wrap: anywhere;
}

@media (max-width: 760px) {
  .fd-sm-card {
    grid-template-columns: 22px minmax(0, 1fr);
  }

  .fd-sm-quote {
    grid-column: 1 / -1;
  }

  .fd-sm-dl div {
    grid-template-columns: minmax(0, 1fr);
    gap: 1px;
  }

  .fd-sm-bar-row {
    grid-template-columns: minmax(0, 1fr) 76px 40px;
  }

  .fd-sm-ex {
    grid-column: 1 / -1;
  }
}
</style>
