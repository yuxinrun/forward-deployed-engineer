<script setup lang="ts">
// 一个 FDE 的一天：招聘页写的那一种，和真的过的那一种。
// 两段都按小时累加到 24，长度直接由数值算出；这是本站按 JD 描述与从业者自述合成的示意图，
// 不是任何一家公司的实测考勤。

type Seg = { label: string; hours: number; tone: 'teal' | 'coral' | 'blue' | 'lime' | 'ink' }

const JD_DAY: Seg[] = [
  { label: '写代码 / 搭方案', hours: 6, tone: 'teal' },
  { label: '和客户对齐需求', hours: 3, tone: 'blue' },
  { label: '和产品团队反馈现场', hours: 2, tone: 'lime' },
  { label: '学习与调研', hours: 2, tone: 'ink' },
  { label: '睡觉', hours: 8, tone: 'ink' },
  { label: '吃饭通勤', hours: 3, tone: 'ink' }
]

const REAL_DAY: Seg[] = [
  { label: '写代码 / 搭方案', hours: 4.5, tone: 'teal' },
  { label: '会议、站会、临时被拉住', hours: 4, tone: 'coral' },
  { label: '查数据 / 排障 / 救火', hours: 3, tone: 'blue' },
  { label: '文档、周报、验收材料', hours: 2, tone: 'lime' },
  { label: '机场高铁酒店', hours: 1.5, tone: 'coral' },
  { label: '睡觉', hours: 6.5, tone: 'ink' },
  { label: '吃饭通勤', hours: 2.5, tone: 'ink' }
]

const sum = (rows: Seg[]) => rows.reduce((s, x) => s + x.hours, 0)

const layout = (rows: Seg[]) => {
  const total = sum(rows)
  let acc = 0
  return rows.map((r) => {
    const start = (acc / total) * 100
    acc += r.hours
    return { ...r, start, width: (r.hours / total) * 100 }
  })
}

const rows = [
  { name: 'JD 里的一天', segs: layout(JD_DAY), code: 'AS DESCRIBED' },
  { name: '真实的一天', segs: layout(REAL_DAY), code: 'AS DEPLOYED' }
]

const toneVar = {
  teal: 'var(--accent)',
  coral: 'var(--coral)',
  blue: 'var(--blue)',
  lime: 'var(--lime)',
  ink: 'var(--panel-3)'
} as const

const sleep = (rows: Seg[]) => rows.filter((r) => r.label === '睡觉').reduce((s, x) => s + x.hours, 0)
const meeting = (rows: Seg[]) =>
  rows.filter((r) => /会议|被拉住/.test(r.label)).reduce((s, x) => s + x.hours, 0)
const coding = (rows: Seg[]) => rows.filter((r) => /写代码/.test(r.label)).reduce((s, x) => s + x.hours, 0)
</script>

<template>
  <div class="fd-widget" data-listen="skip">
    <div class="fd-widget-head">
      <span class="fd-widget-title">Day · 两种"一天"</span>
      <p class="fd-widget-sub">同一套 24 小时，一边画给候选人看，一边画给本人过</p>
    </div>

    <div v-for="row in rows" :key="row.name" class="fd-dr-row">
      <p class="fd-dr-name">
        {{ row.name }}
        <span class="fd-dr-code">{{ row.code }}</span>
      </p>
      <div class="fd-dr-bar">
        <div
          v-for="(s, i) in row.segs"
          :key="`${row.name}-${i}`"
          class="fd-dr-seg"
          :style="{ left: s.start + '%', width: s.width + '%', background: toneVar[s.tone] }"
        >
          <span class="fd-dr-h">{{ s.hours }}</span>
        </div>
      </div>
      <ul class="fd-dr-legend">
        <li v-for="(s, i) in row.segs" :key="`${row.name}-l-${i}`">
          <i :style="{ background: toneVar[s.tone] }"></i>{{ s.label }} <b>{{ s.hours }}h</b>
        </li>
      </ul>
    </div>

    <p class="fd-cap">
      按这两种画法算：写代码的时间从
      <b>{{ coding(JD_DAY) }}</b> 小时掉到 <b>{{ coding(REAL_DAY) }}</b> 小时，开会被人拉住的时间涨到
      <b>{{ meeting(REAL_DAY) }}</b> 小时，觉从 <b>{{ sleep(JD_DAY) }}</b> 小时缩到
      <b>{{ sleep(REAL_DAY) }}</b> 小时——这个岗位真正的难点不是"没时间写码"，是"写码的时候脑子里还挂着三家客户的周报"。
      本站按 JD 描述与从业者自述合成的示意图，不是任何一家公司的实测考勤。
    </p>
  </div>
</template>

<style scoped>
.fd-dr-row {
  margin-bottom: 22px;
}

.fd-dr-name {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin: 0 0 8px;
  font-size: 13px;
  font-weight: 700;
  color: var(--ink);
}

.fd-dr-code {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.14em;
  color: var(--faint);
}

.fd-dr-bar {
  position: relative;
  height: 40px;
  border-radius: 10px;
  background: var(--panel-3);
  overflow: hidden;
}

.fd-dr-seg {
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid var(--panel);
}

.fd-dr-h {
  font-family: var(--font-mono);
  font-size: 9.5px;
  color: var(--ink);
  opacity: 0.75;
}

.fd-dr-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 14px;
  margin: 8px 0 0;
  padding: 0;
  list-style: none;
}

.fd-dr-legend li {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11.5px;
  color: var(--muted);
}

.fd-dr-legend i {
  width: 10px;
  height: 10px;
  border-radius: 3px;
}

.fd-dr-legend b {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 600;
  color: var(--ink-2);
}

@media (max-width: 760px) {
  .fd-dr-bar {
    height: 34px;
  }

  .fd-dr-h {
    font-size: 8.5px;
  }
}
</style>
