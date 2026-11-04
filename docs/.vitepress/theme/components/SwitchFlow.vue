<script setup lang="ts">
// 转型入口：现在站在哪儿，就有什么现成优势和固定缺口。
// 难度 1–5 是本站按"要补的缺口离你多远"给的相对判断，不是通过率统计。

type Entry = {
  name: string
  sub: string
  lv: number
  tone: 'teal' | 'coral' | 'blue' | 'lime'
  pro: string[]
  gap: string[]
  first: string
}

const toneVar = {
  teal: 'var(--accent)',
  coral: 'var(--coral)',
  blue: 'var(--blue)',
  lime: 'var(--lime)'
} as const

const ROWS: Entry[] = [
  {
    name: '后端 / 全栈工程师',
    sub: '最顺的一条路，缺的是会议室不是代码',
    lv: 2,
    tone: 'teal',
    pro: ['工程基本功', '接口与身份集成', '读别人代码的能力', '测试与上线流程'],
    gap: ['面对"你先想想我们要什么"', '评测与坏例分析', '写给人看的文档', '接受需求每天在变'],
    first: '在公司内部找一个业务同事的真实痛点，两周内做出一个只有 3 个用户但真在用的工具。'
  },
  {
    name: '数据工程师 / 分析',
    sub: '数据这关直接满分，要补服务化与交付',
    lv: 3,
    tone: 'blue',
    pro: ['脏数据与口径', '建模与 SQL', '批流管道', '知道数据从哪来'],
    gap: ['把东西部署出去并值守', '应用层与前端壳子', 'AI 应用层的评测', '向业务解释不确定性'],
    first: '把你们那张最难取的报表，做成一个能被追问的自然语言入口，并让业务自己用一周。'
  },
  {
    name: '算法 / 机器学习工程师',
    sub: '最容易被现场琐碎击溃的一批人',
    lv: 4,
    tone: 'coral',
    pro: ['模型与指标感觉', '评测设计', '微调与推理优化', '论文级的问题拆解'],
    gap: ['"够用就行"的工程审美', '被改十遍需求还不炸', '基础设施与部署', '把准确率讲成钱'],
    first: '别再训模型。用现成 API 给客户做一个周末能上线的小工具，逼自己交付而不是调优。'
  },
  {
    name: 'SRE / 平台 / 运维',
    sub: '生产这关你早就过了，缺应用层',
    lv: 3,
    tone: 'lime',
    pro: ['可观测与告警', '容器 / K8s / IaC', '安全与合规语感', '半夜能定位问题'],
    gap: ['应用与数据层开发', 'AI 应用栈与评测', '需求挖掘与访谈', '从"稳"到"有用"'],
    first: '给团队现有的服务加一个 AI 运维助手，从工单分类做起，把准确率与节省工时量出来。'
  },
  {
    name: '解决方案架构师 / 售前',
    sub: '最陡：要补的是两年真实工程',
    lv: 5,
    tone: 'coral',
    pro: ['行业知识与术语', '客户沟通与提案', '方案写作', '知道谁拍板'],
    gap: ['独立写生产代码', '被 on-call 教育', '数据与部署细节', '从"讲方案"到"交结果"'],
    first: '接一个真正需要你亲手上线的小单，或者在开源项目里当一次端到端负责人，别再做 PPT。'
  },
  {
    name: '零基础 / 在校 / 其他行业',
    sub: '可行，但顺序不能倒',
    lv: 5,
    tone: 'blue',
    pro: ['没有坏习惯', '学习带宽还够', '行业背景（医学 / 法律 / 制造 / 物流）是护城河'],
    gap: ['工程基本功（这一项没有捷径）', '数据与部署', '客户语感', '能拿出手的东西'],
    first: '先按十二周计划做出一个真在用的项目，再谈投递。行业背景是你后面最大的筹码。'
  }
]
</script>

<template>
  <div class="fd-widget" data-listen="skip">
    <div class="fd-widget-head">
      <span class="fd-widget-title">Switch · 六条入口，各自的缺口长这样</span>
      <p class="fd-widget-sub">难度点：要补的东西离你有多远（1 最近，5 最陡）</p>
    </div>

    <div class="fd-sw-list">
      <article v-for="r in ROWS" :key="r.name" class="fd-sw-row">
        <header class="fd-sw-head">
          <strong>{{ r.name }}</strong>
          <span class="fd-sw-note">{{ r.sub }}</span>
          <span class="fd-sw-lv" aria-hidden="true">
            <i v-for="k in 5" :key="k" :class="k <= r.lv ? 'on' : ''" :style="k <= r.lv ? { background: toneVar[r.tone] } : {}"></i>
          </span>
        </header>
        <div class="fd-sw-cols">
          <div class="fd-sw-col">
            <p class="fd-sw-tag">现成优势</p>
            <ul>
              <li v-for="p in r.pro" :key="p">{{ p }}</li>
            </ul>
          </div>
          <div class="fd-sw-col fd-sw-col--gap">
            <p class="fd-sw-tag">要补的缺口</p>
            <ul>
              <li v-for="g in r.gap" :key="g">{{ g }}</li>
            </ul>
          </div>
        </div>
        <p class="fd-sw-first">
          <span class="fd-sw-first-tag">第一步</span>
          {{ r.first }}
        </p>
      </article>
    </div>

    <p class="fd-cap">
      六个入口里，<b>只有"零基础"和"售前"是硬的</b>：前者缺全部，后者缺的两百小时补不完。
      其余四条路的缺口都是同一句话——<b>你得真交付过一次，而不是又一次讲方案</b>。
      难度是本站的相对判断，不是录取率。
    </p>
  </div>
</template>

<style scoped>
.fd-sw-list {
  display: grid;
  gap: 16px;
}

.fd-sw-row {
  padding: 15px 16px;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--panel-2);
}

.fd-sw-head {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.fd-sw-head strong {
  font-size: 14.5px;
  font-weight: 730;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.fd-sw-note {
  font-size: 11.5px;
  color: var(--muted);
}

.fd-sw-lv {
  display: flex;
  gap: 3px;
  margin-left: auto;
}

.fd-sw-lv i {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid var(--line-strong);
}

.fd-sw-cols {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed var(--line);
}

.fd-sw-tag {
  margin: 0 0 6px;
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
}

.fd-sw-col--gap .fd-sw-tag {
  color: var(--coral);
}

.fd-sw-col ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 4px;
}

.fd-sw-col li {
  position: relative;
  padding-left: 13px;
  font-size: 11.5px;
  line-height: 1.6;
  color: var(--ink-2);
}

.fd-sw-col li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 7px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--line-strong);
}

.fd-sw-col--gap li::before {
  background: color-mix(in srgb, var(--coral) 60%, transparent);
}

.fd-sw-first {
  margin: 12px 0 0;
  padding: 9px 11px;
  border: 1px dashed var(--line-strong);
  border-radius: 9px;
  background: var(--panel);
  font-size: 11.5px;
  line-height: 1.65;
  color: var(--ink-2);
}

.fd-sw-first-tag {
  display: inline-block;
  margin-right: 7px;
  font-family: var(--font-mono);
  font-size: 8.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 600;
}

@media (max-width: 760px) {
  .fd-sw-cols {
    grid-template-columns: 1fr;
  }

  .fd-sw-lv {
    margin-left: 0;
  }
}
</style>
