<script setup lang="ts">
// 差旅强度：只画各份 JD 里"白纸黑字写了数字"的那几条。
// 没写数字的（比如 Anthropic Applied AI 岗的 "Travel occasionally"）不画成 0，而是单独列出，
// 因为"偶尔"不等于"没有"。区间直接取原句数字，本站不做换算。

type Row = {
  org: string
  role: string
  lo: number
  hi: number
  quote: string
  grade: 'A' | 'B'
  tone: 'teal' | 'blue' | 'coral' | 'lime'
}

const ROWS: Row[] = [
  {
    org: 'Accenture',
    role: 'Palantir Forward Deployed Engineer',
    lo: 0,
    hi: 100,
    quote: '"The amount of travel will vary from 0 to 100% depending on business need and client requirements."',
    grade: 'B',
    tone: 'coral'
  },
  {
    org: 'Deloitte',
    role: 'FDE, Frontier GenAI',
    lo: 50,
    hi: 50,
    quote: '"能够 50% 的时间出差"',
    grade: 'B',
    tone: 'lime'
  },
  {
    org: 'OpenAI',
    role: 'Forward Deployed Engineer',
    lo: 0,
    hi: 50,
    quote: '"最多 50% 出差"（中文转述，正文页未直读）',
    grade: 'B',
    tone: 'teal'
  },
  {
    org: 'Roboflow',
    role: 'Forward Deployed Engineer',
    lo: 40,
    hi: 50,
    quote: '"Willingness to travel ~40–50% for on-site customer deployments"，且 "typically 4–12 weeks per engagement"',
    grade: 'A',
    tone: 'blue'
  },
  {
    org: 'AWS',
    role: 'Sr FDE（10517491）',
    lo: 30,
    hi: 50,
    quote: '"Requires 30–50% travel"',
    grade: 'A',
    tone: 'teal'
  },
  {
    org: 'Anthropic',
    role: 'FDE, Applied AI',
    lo: 25,
    hi: 50,
    quote: '差旅 25–50%，另有 "25% in-office minimum"',
    grade: 'B',
    tone: 'blue'
  },
  {
    org: '中软国际',
    role: 'FDE 工程师',
    lo: 25,
    hi: 25,
    quote: '"承担约 25% 的差旅，深入客户现场面对面共建。"',
    grade: 'B',
    tone: 'lime'
  },
  {
    org: 'AWS',
    role: 'Sr FDE（模型定制岗 10585968）',
    lo: 0,
    hi: 25,
    quote: '"Requires up to 25% travel"',
    grade: 'A',
    tone: 'teal'
  }
]

const VAGUE = [
  { org: 'Anthropic', role: 'Applied AI Engineer, Enterprise Tech', quote: '"Travel occasionally to customer sites for workshops, implementation support, and building relationships" [A]' },
  { org: 'Palantir', role: 'FDSE（驻场者自述口径）', quote: '空客项目的驻场者自述是「每周 4 天进厂、持续约一年」[B]——这不是百分比，是常驻' }
]

const tickPct = [0, 25, 50, 75, 100]

const toneVar = {
  teal: 'var(--accent)',
  blue: 'var(--blue)',
  coral: 'var(--coral)',
  lime: 'var(--lime)'
} as const
</script>

<template>
  <div class="fd-widget" data-listen="skip">
    <div class="fd-widget-head">
      <span class="fd-widget-title">Travel · 白纸黑字写了数字的岗位</span>
      <p class="fd-widget-sub">横轴 = 一年里预计在路上/客户现场的时间占比。区间照抄原句，本站不换算、不取中值。</p>
    </div>

    <div class="fd-tg-chart">
      <div class="fd-tg-axis">
        <span v-for="t in tickPct" :key="`ax-${t}`" class="fd-tg-tick">{{ t }}%</span>
      </div>

      <ul class="fd-tg-list">
        <li v-for="r in ROWS" :key="`${r.org}-${r.role}`" class="fd-tg-row">
          <span class="fd-tg-label">
            <b>{{ r.org }}</b>
            <em>{{ r.role }}</em>
          </span>
          <span class="fd-tg-track" role="img" :aria-label="`${r.org} ${r.role}：${r.lo}% 到 ${r.hi}%`">
            <i class="fd-tg-grid" v-for="t in [25, 50, 75]" :key="`g-${r.role}-${t}`" :style="{ left: `${t}%` }"></i>
            <b
              class="fd-tg-band"
              :style="{
                left: `${r.lo}%`,
                width: `${Math.max(r.hi - r.lo, 1.6)}%`,
                background: toneVar[r.tone]
              }"
            ></b>
          </span>
          <span class="fd-tg-val">{{ r.lo }}–{{ r.hi }}%<small>{{ r.grade }}</small></span>
        </li>
      </ul>

      <p class="fd-tg-note">
        只有 {{ ROWS.length }} 份 JD 写了具体百分比。另有两份只写形容词：
        <span v-for="(v, i) in VAGUE" :key="v.org">
          <b>{{ v.org }}</b> {{ v.quote }}<span v-if="i < VAGUE.length - 1">；</span>
        </span>
      </p>
    </div>

    <p class="fd-cap">
      看这一栏最该看的一行：<b>同一家云厂的两份 JD，一份写 30–50%，另一份写 up to 25%。</b>
      这不是数据错误，是编制方式差异（有的按客户分配、有的按产品线分配）。
      结论：差旅不能用「行业平均」预期，只能在面试里问到自己那一档。
    </p>
  </div>
</template>

<style scoped>
.fd-tg-chart {
  padding: 4px 0 0;
}

.fd-tg-axis {
  display: grid;
  grid-template-columns: 152px minmax(0, 1fr) 66px;
  gap: 10px;
  margin-bottom: 4px;
}

.fd-tg-tick {
  font-family: var(--font-mono);
  font-size: 9.5px;
  color: var(--muted);
}

.fd-tg-axis span:nth-child(2) {
  display: flex;
  justify-content: space-between;
}

.fd-tg-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.fd-tg-row {
  display: grid;
  grid-template-columns: 152px minmax(0, 1fr) 66px;
  gap: 10px;
  align-items: center;
  padding: 6px 0;
  border-top: 1px dashed var(--line);
}

.fd-tg-label {
  min-width: 0;
}

.fd-tg-label b {
  display: block;
  font-size: 12.5px;
  color: var(--ink);
}

.fd-tg-label em {
  display: block;
  font-size: 10.5px;
  font-style: normal;
  line-height: 1.45;
  color: var(--muted);
}

.fd-tg-track {
  position: relative;
  display: block;
  height: 15px;
  border: 1px solid var(--line-strong);
  border-radius: 4px;
  background: var(--panel-2);
}

.fd-tg-grid {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--line);
}

.fd-tg-band {
  position: absolute;
  top: 2px;
  bottom: 2px;
  border-radius: 2px;
  opacity: 0.85;
}

.fd-tg-val {
  font-family: var(--font-mono);
  font-size: 11px;
  text-align: right;
  color: var(--ink-2);
}

.fd-tg-val small {
  margin-left: 4px;
  padding: 1px 4px;
  border: 1px solid var(--line);
  border-radius: 999px;
  font-size: 8.5px;
  color: var(--muted);
}

.fd-tg-note {
  margin: 10px 0 0;
  padding: 9px 11px;
  border: 1px dashed var(--line-strong);
  border-radius: var(--radius-sm);
  font-size: 11px;
  line-height: 1.65;
  color: var(--muted);
}

.fd-tg-note b {
  color: var(--ink-2);
}

@media (max-width: 680px) {
  .fd-tg-axis,
  .fd-tg-row {
    grid-template-columns: minmax(0, 1fr) 60px;
  }

  .fd-tg-label {
    grid-column: 1 / -1;
  }

  .fd-tg-axis {
    grid-template-columns: minmax(0, 1fr) 60px;
  }

  .fd-tg-axis span:first-child {
    display: none;
  }
}
</style>
