<script setup lang="ts">
// 招聘侧的量：一条增长柱 + 一份发布量排名。
// 全部数字是 Lightcast 口径的"招聘广告数（posted roles）"，CNBC 原文特别警告：
// "The figures represent advertised positions, not completed hires." ——广告数不等于招了人。

const YEARS = [
  { label: '2023', n: 200, real: '不足 200', note: '美国全年 FDE 招聘帖', tone: 'ink' },
  { label: '2025', n: 1200, real: '约 1,200', note: '美国全年 FDE 招聘帖', tone: 'blue' },
  { label: '2026', n: 7300, real: '超过 7,300', note: '仅前九个月', tone: 'teal' }
] as const

const LEADERS = [
  { org: 'Deloitte', n: 872, kind: '四大会计师事务所' },
  { org: 'Accenture', n: 688, kind: '咨询 / 外包' },
  { org: 'Google', n: 499, kind: '云厂商' },
  { org: 'KPMG', n: 447, kind: '四大会计师事务所' }
] as const

const MAX_Y = 7300
const MAX_L = 872

// 三套并存的"薪资中位数"口径，来自不同统计窗口，放在一起才看得出差异
const MEDIANS = [
  { v: 195456, src: 'CNBC × Lightcast', win: '2026 前九个月', grade: 'A' },
  { v: 202300, src: 'Entrepreneur × Lightcast', win: '统计窗口未注明', grade: 'B' },
  { v: 188000, src: 'Fortune × Lightcast', win: '2026 年报道口径', grade: 'B' }
] as const

const REF = 135980 // BLS OEWS 2025-05 相邻软件/数据职业族中位年薪 [B]
const SWE = 145000 // Fortune 口径的传统软件工程师招聘广告中位 [B]

const fmt = (v: number) => v.toLocaleString('en-US')
</script>

<template>
  <div class="fd-widget" data-listen="skip">
    <div class="fd-widget-head">
      <span class="fd-widget-title">Postings · 广告数长什么样，谁在发</span>
      <p class="fd-widget-sub">Lightcast 数据，经 CNBC 2026-10-15 报道。原文警告照抄：<b>"The figures represent advertised positions, not completed hires."</b></p>
    </div>

    <div class="fd-hl-cols">
      <section class="fd-hl-col">
        <p class="fd-hl-sub">美国 FDE 招聘帖数量</p>
        <ul class="fd-hl-bars">
          <li v-for="y in YEARS" :key="y.label" class="fd-hl-bar-row">
            <span class="fd-hl-y">{{ y.label }}</span>
            <span class="fd-hl-track" role="img" :aria-label="`${y.label}：${y.real} 条`">
              <i :class="`fd-hl-fill-${y.tone}`" :style="{ width: `${(y.n / MAX_Y) * 100}%` }"></i>
            </span>
            <span class="fd-hl-n">{{ y.real }}</span>
          </li>
        </ul>
        <p class="fd-hl-foot">注意 2026 那一根只统计了<b>九个月</b>。三根柱子的时间长度不一样。</p>
      </section>

      <section class="fd-hl-col">
        <p class="fd-hl-sub">2026 年前九个月发布量排名</p>
        <ul class="fd-hl-bars">
          <li v-for="l in LEADERS" :key="l.org" class="fd-hl-bar-row">
            <span class="fd-hl-y">{{ l.org }}</span>
            <span class="fd-hl-track" role="img" :aria-label="`${l.org}：${l.n} 条招聘帖`">
              <i class="fd-hl-fill-coral" :style="{ width: `${(l.n / MAX_L) * 100}%` }"></i>
            </span>
            <span class="fd-hl-n">{{ l.n }}</span>
            <em class="fd-hl-kind">{{ l.kind }}</em>
          </li>
        </ul>
        <p class="fd-hl-foot">发布量最大的四家里，<b>三家是咨询/会计师事务所</b>。这直接决定了你搜到的"FDE"是什么口味。</p>
      </section>
    </div>

    <div class="fd-hl-med">
      <p class="fd-hl-sub">三套并存的"薪资中位数"口径（招聘广告，不是实际成交）</p>
      <ul>
        <li v-for="m in MEDIANS" :key="m.src">
          <b>${{ fmt(m.v) }}</b>
          <span>{{ m.src }}</span>
          <em>{{ m.win }} · 证据 {{ m.grade }}</em>
        </li>
      </ul>
      <div class="fd-hl-refs">
        <span>对照 1：传统软件工程师招聘广告中位约 <b>${{ fmt(SWE) }}</b>（Fortune × Lightcast [B]）</span>
        <span>对照 2：BLS 相邻职业族中位年薪 <b>${{ fmt(REF) }}</b>（2025-05，[B]，BLS 没有 FDE 单独职业码）</span>
      </div>
    </div>

    <p class="fd-cap">
      这张图唯一想让你做的事：<b>别再传"某个百分比增长率"。</b>
      42 倍、600%、729%、800%、1000%、4600% 这些数字都真实存在过，但它们分别来自 LinkedIn、Indeed、Fortune、Entrepreneur 的不同时间窗口，
      而且<b>统计的全是广告数</b>。要引用，只引一次，注明来源与窗口。
    </p>
  </div>
</template>

<style scoped>
.fd-hl-cols {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.fd-hl-col {
  min-width: 0;
  padding: 10px 11px 8px;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--panel-2);
}

.fd-hl-sub {
  margin: 0 0 9px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-2);
}

.fd-hl-bars {
  margin: 0;
  padding: 0;
  list-style: none;
}

.fd-hl-bar-row {
  display: grid;
  grid-template-columns: 62px minmax(0, 1fr) 68px;
  gap: 8px;
  align-items: center;
  padding: 6px 0;
  border-top: 1px dashed var(--line);
}

.fd-hl-bar-row:first-child {
  border-top: none;
}

.fd-hl-y {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--ink-2);
  overflow-wrap: anywhere;
}

.fd-hl-track {
  display: block;
  height: 15px;
  border: 1px solid var(--line-strong);
  border-radius: 4px;
  background: var(--panel);
  overflow: hidden;
}

.fd-hl-track i {
  display: block;
  height: 100%;
  border-radius: 2px;
  transition: width 0.5s ease;
}

.fd-hl-fill-ink {
  background: var(--muted);
  opacity: 0.55;
}

.fd-hl-fill-blue {
  background: var(--blue);
}

.fd-hl-fill-teal {
  background: var(--accent);
}

.fd-hl-fill-coral {
  background: var(--coral);
}

.fd-hl-n {
  font-family: var(--font-mono);
  font-size: 11px;
  text-align: right;
  color: var(--ink);
}

.fd-hl-kind {
  grid-column: 2 / -1;
  font-size: 10px;
  font-style: normal;
  color: var(--muted);
  text-align: right;
}

.fd-hl-foot {
  margin: 8px 0 0;
  font-size: 11px;
  line-height: 1.6;
  color: var(--muted);
}

.fd-hl-med {
  margin-top: 13px;
  padding: 11px 12px;
  border: 1px dashed var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--panel);
}

.fd-hl-med ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.fd-hl-med li {
  display: grid;
  grid-template-columns: 92px minmax(0, 1fr) 190px;
  gap: 9px;
  align-items: baseline;
  padding: 5px 0;
  border-top: 1px dashed var(--line);
}

.fd-hl-med li:first-child {
  border-top: none;
}

.fd-hl-med b {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--accent);
}

.fd-hl-med span {
  font-size: 12px;
  color: var(--ink-2);
}

.fd-hl-med em {
  font-family: var(--font-mono);
  font-size: 10px;
  font-style: normal;
  color: var(--muted);
  text-align: right;
}

.fd-hl-refs {
  display: grid;
  gap: 4px;
  margin-top: 9px;
  padding-top: 8px;
  border-top: 1px solid var(--line);
  font-size: 11px;
  color: var(--muted);
}

.fd-hl-refs b {
  font-family: var(--font-mono);
  color: var(--ink-2);
}

@media (max-width: 820px) {
  .fd-hl-cols {
    grid-template-columns: minmax(0, 1fr);
  }

  .fd-hl-med li {
    grid-template-columns: 82px minmax(0, 1fr);
  }

  .fd-hl-med em {
    grid-column: 1 / -1;
    text-align: left;
  }
}

@media (prefers-reduced-motion: reduce) {
  .fd-hl-track i {
    transition: none;
  }
}
</style>
