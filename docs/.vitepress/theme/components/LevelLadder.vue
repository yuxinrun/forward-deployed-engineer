<script setup lang="ts">
// 等级阶梯：同一个 title，责任半径差六倍。
// 名称取自各家公开的 IC 序列习惯叫法（FDE I/II/III、Senior、Staff/Principal、FDPM），
// 具体级差在不同公司差别很大，这一图讲的是"用什么换杠杆"。

const LEVELS = [
  {
    tag: '01',
    name: 'FDE I / II',
    years: '0–2 年',
    identity: '把交代给你的那件事做完',
    duties: ['照方案实现、修 bug、写脚本', '跟着资深同事进客户会议', '把自己的模块测干净'],
    measured: '交付物的质量与速度：别人给你的活，能不能不返工',
    radius: '一个模块 / 半个项目',
    stuck: '只在等需求，不主动问"这个客户到底想省谁的工时"',
    tone: 'teal'
  },
  {
    tag: '02',
    name: 'FDE III / 独立交付',
    years: '2–5 年',
    identity: '一个客户的一个场景，从空到手',
    duties: ['自己访谈、自己拆需求、自己写方案', '端到端：接数据、上线、培训、值守', '第一次对客户说"这个不能这么做"'],
    measured: '这个场景有没有真的被业务天天用，用量是多少',
    radius: '一个场景 / 一个客户',
    stuck: '技术债和人情债一起欠：答应得太早，收场得太晚',
    tone: 'blue'
  },
  {
    tag: '03',
    name: 'Senior FDE',
    years: '5–8 年',
    identity: '最难的那个客户归你',
    duties: ['接手数据最脏、政治最复杂的现场', '定义"这类项目怎么做"，写成别人能照抄的东西', '把现场诉求翻成产品路线图上的条目', '带 2–3 个初级'],
    measured: '客户续约/扩展、被产品团队采纳的功能数、带出来的人',
    radius: '一个行业 / 一条产品线',
    stuck: '把自己活成了"人肉文档"：方法没写下来，一走全线塌',
    tone: 'lime'
  },
  {
    tag: '04',
    name: 'Staff / Principal',
    years: '8 年以上',
    identity: '你的判断就是公司的判断',
    duties: ['跨客户抽象出可复用能力与工具', '在"要不要接这单"上有否决权', '对外代表公司做技术背书', '写方法论、定质量标准'],
    measured: '组织级的效率与质量标准：别人因为你少犯多少错',
    radius: '整个 FDE 组织',
    stuck: '离现场太远，判断开始靠 PPT 而不是靠日志',
    tone: 'coral'
  },
  {
    tag: '05',
    name: 'FDPM / 交付负责人（转管理）',
    years: '看人',
    identity: '从"我交付"变成"我们交付"',
    duties: ['排期、范围、商务边界、人力', '同时看六八个客户的风险表', '决定谁上谁撤'],
    measured: '毛利、验收通过率、交付周期、留任率',
    radius: '一支队伍 / 一个地区',
    stuck: '写代码的手感两年就没了，之后只能靠别人诚实',
    tone: 'teal'
  },
  {
    tag: '06',
    name: '出口（不是等级，是常去的地方）',
    years: '—',
    identity: '这个岗位最值钱的副产品：你知道客户真的缺什么',
    duties: ['创业（见过最多真实需求的人）', '产品 / 研发管理', '行业顾问、独立交付', '回平台团队做工程化'],
    measured: '不再被考核，改成被结果考核',
    radius: '你自己划',
    stuck: '把"我认识三个甲方"当成商业计划',
    tone: 'blue'
  }
] as const

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
      <span class="fd-widget-title">Ladder · 六级台阶，用什么换杠杆</span>
      <p class="fd-widget-sub">往上一级的标志不是"更会写"，是"负责的东西变了形状"</p>
    </div>

    <div class="fd-ll-list">
      <article v-for="l in LEVELS" :key="l.tag" class="fd-ll-step">
        <div class="fd-ll-side">
          <span class="fd-ll-tag">{{ l.tag }}</span>
          <span class="fd-ll-bar" :style="{ background: toneVar[l.tone] }"></span>
        </div>
        <div class="fd-ll-body">
          <h4>
            {{ l.name }}
            <span class="fd-ll-years">{{ l.years }}</span>
          </h4>
          <p class="fd-ll-id">{{ l.identity }}</p>
          <ul class="fd-ll-duties">
            <li v-for="d in l.duties" :key="d">{{ d }}</li>
          </ul>
          <dl class="fd-ll-meta">
            <div>
              <dt>被什么考核</dt>
              <dd>{{ l.measured }}</dd>
            </div>
            <div>
              <dt>影响半径</dt>
              <dd>{{ l.radius }}</dd>
            </div>
            <div>
              <dt>常见卡点</dt>
              <dd class="fd-ll-stuck">{{ l.stuck }}</dd>
            </div>
          </dl>
        </div>
      </article>
    </div>

    <p class="fd-cap">
      把「影响半径」那一列从上往下读：<b>一个模块 → 一个场景 → 一个行业 → 整个组织 → 一支队伍 → 你自己划</b>。
      想升职，就把手上的活换成更大半径的同一类判断；只想升职不加半径的人，一般停在 02 级很久。
    </p>
  </div>
</template>

<style scoped>
.fd-ll-list {
  display: grid;
  gap: 14px;
}

.fd-ll-step {
  display: grid;
  grid-template-columns: 34px 1fr;
  gap: 14px;
  padding-bottom: 14px;
  border-bottom: 1px dashed var(--line);
}

.fd-ll-step:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.fd-ll-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.fd-ll-tag {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  color: var(--faint);
}

.fd-ll-bar {
  flex: 1;
  width: 3px;
  border-radius: 2px;
  opacity: 0.85;
}

.fd-ll-body {
  min-width: 0;
}

.fd-ll-body h4 {
  margin: 0;
  display: flex;
  align-items: baseline;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 15px;
  font-weight: 740;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.fd-ll-years {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.1em;
  color: var(--faint);
}

.fd-ll-id {
  margin: 4px 0 0;
  font-size: 12.5px;
  font-weight: 620;
  color: var(--accent);
}

.fd-ll-duties {
  margin: 8px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 4px;
}

.fd-ll-duties li {
  position: relative;
  padding-left: 14px;
  font-size: 12px;
  line-height: 1.6;
  color: var(--ink-2);
}

.fd-ll-duties li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 6px;
  height: 1px;
  background: var(--line-strong);
}

.fd-ll-meta {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin: 12px 0 0;
  padding: 12px 0 0;
  border-top: 1px dashed var(--line);
}

.fd-ll-meta dt {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--faint);
}

.fd-ll-meta dd {
  margin: 4px 0 0;
  font-size: 11.5px;
  line-height: 1.6;
  color: var(--muted);
}

.fd-ll-stuck {
  color: var(--coral) !important;
}

@media (max-width: 760px) {
  .fd-ll-meta {
    grid-template-columns: 1fr;
  }
}
</style>
