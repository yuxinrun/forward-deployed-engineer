<script setup lang="ts">
// 招聘页公开的 base 区间（美元/年）。全部取自招聘页或薪资看板原文，不做换算、不补股权、不取"总包"。
// 横轴上限 450K：为了放下 Palantir 那一条 Assoc Director 的宽带。
// 参考线 195,456：Lightcast 口径的"中位招聘标价"，指岗位发布上写出的中间值，不是实际成交薪资。

type Band = { org: string; role: string; lo: number; hi: number; grade: 'A' | 'B' | 'C'; tone: 'teal' | 'blue' | 'lime' | 'coral' }

const MAX = 450000
const MEDIAN_POSTING = 195456

const BANDS: Band[] = [
  { org: 'Palantir', role: 'FDSE · Associate Director（芝加哥）', lo: 151000, hi: 434000, grade: 'B', tone: 'lime' },
  { org: 'Socure', role: 'FDE · RiskOS Agents', lo: 250000, hi: 280000, grade: 'B', tone: 'blue' },
  { org: 'Anthropic', role: 'Applied AI Engineer, Enterprise Tech', lo: 200000, hi: 320000, grade: 'A', tone: 'teal' },
  { org: 'Anthropic', role: 'Forward Deployed Engineer, Applied AI', lo: 200000, hi: 300000, grade: 'A', tone: 'teal' },
  { org: 'Atlassian', role: 'Principal FDE（远程）', lo: 196000, hi: 308000, grade: 'B', tone: 'blue' },
  { org: 'OpenAI', role: 'Forward Deployed Engineer（薪资看板口径）', lo: 185000, hi: 300000, grade: 'B', tone: 'blue' },
  { org: 'LiveKit', role: 'Forward Deployed Engineer（Seattle）', lo: 180000, hi: 320000, grade: 'B', tone: 'blue' },
  { org: 'Roboflow', role: 'Forward Deployed Engineer（远程 US）', lo: 180000, hi: 250000, grade: 'A', tone: 'teal' },
  { org: 'Databricks', role: 'Sr. FDE（Zone 1–4）', lo: 182000, hi: 250208, grade: 'B', tone: 'blue' },
  { org: 'Baseten', role: 'Forward Deployed Engineer', lo: 165000, hi: 330000, grade: 'B', tone: 'blue' },
  { org: 'AWS', role: 'Sr Forward Deployed Engineer', lo: 168100, hi: 261500, grade: 'A', tone: 'teal' },
  { org: 'AWS', role: 'Sr FDE · 模型定制与优化', lo: 168100, hi: 250200, grade: 'A', tone: 'teal' },
  { org: 'Metal', role: 'FDE · Strategic Account', lo: 150000, hi: 240000, grade: 'A', tone: 'teal' },
  { org: 'Vercel', role: 'Senior FDE · Professional Services（SF base）', lo: 137000, hi: 207000, grade: 'A', tone: 'teal' },
  { org: 'Palantir', role: 'Forward Deployed Software Engineer', lo: 125000, hi: 200000, grade: 'B', tone: 'blue' },
  { org: 'Booz Allen Hamilton', role: 'Forward Deployed Engineer（远程）', lo: 78000, hi: 176000, grade: 'B', tone: 'coral' }
]

const k = (v: number) => `${Math.round(v / 1000)}K`
const pctOf = (v: number) => Math.min(100, (v / MAX) * 100)

const sorted = [...BANDS].sort((a, b) => a.lo - b.lo)

// 国内同名岗位的两个极端样本，单位是月薪人民币——刻意不与上面的美元 base 混排
const CN = [
  { label: '腾讯系「AI 前线部署工程师」3–5 年', text: '50–80K / 月', note: '自媒体从三份 JD 扒的转述口径 [C]', tone: 'lime' },
  { label: '国内聚合站「AI 交付 / 实施」类', text: '12–25K / 月', note: 'Boss 直聘口径的转述 [C]', tone: 'blue' },
  { label: '国家大学生就业平台（转载 BOSS 直聘）', text: '5.0–9.0K / 月', note: '沈阳，硕士及以上，专业不限 [B]', tone: 'coral' }
] as const
</script>

<template>
  <div class="fd-widget" data-listen="skip">
    <div class="fd-widget-head">
      <span class="fd-widget-title">Base Pay · 招聘页公开写出的区间</span>
      <p class="fd-widget-sub">单位：美元 / 年，只含 base。股权、奖金、项目奖励一律没算进来；本站不做换算，也不补"总包"。</p>
    </div>

    <div class="fd-sl-chart">
      <div class="fd-sl-axis">
        <span v-for="t in [0, 100, 200, 300, 400]" :key="`t-${t}`">{{ t }}K</span>
      </div>

      <ul class="fd-sl-list">
        <li v-for="b in sorted" :key="`${b.org}-${b.role}`" class="fd-sl-row">
          <span class="fd-sl-label">
            <b>{{ b.org }}</b>
            <em>{{ b.role }}</em>
          </span>
          <span class="fd-sl-track" role="img" :aria-label="`${b.org} ${b.role}：${k(b.lo)} 到 ${k(b.hi)} 美元`">
            <i class="fd-sl-grid" v-for="t in [100000, 200000, 300000, 400000]" :key="`g-${b.role}-${t}`" :style="{ left: `${pctOf(t)}%` }"></i>
            <i class="fd-sl-median" :style="{ left: `${pctOf(MEDIAN_POSTING)}%` }"></i>
            <b
              class="fd-sl-band"
              :style="{ left: `${pctOf(b.lo)}%`, width: `${Math.max(pctOf(b.hi) - pctOf(b.lo), 1.4)}%`, background: 'var(--' + (b.tone === 'teal' ? 'accent' : b.tone === 'blue' ? 'blue' : b.tone === 'lime' ? 'lime' : 'coral') + ')' }"
            ></b>
          </span>
          <span class="fd-sl-num">{{ k(b.lo) }}–{{ k(b.hi) }}<small>{{ b.grade }}</small></span>
        </li>
      </ul>

      <p class="fd-sl-ref">
        竖着的虚线 = <b>{{ MEDIAN_POSTING.toLocaleString('en-US') }} 美元</b>，Lightcast 口径的「中位招聘标价」（经 CNBC 报道）[A]。
        它是岗位发布上写出的中间值，<b>不是中位工资</b>：不含股权，也不是实际成交价。
      </p>
    </div>

    <div class="fd-sl-cn">
      <p class="fd-sl-cn-title">同名字段在国内的标价（人民币 / 月，别和上面的美元混着读）</p>
      <ul>
        <li v-for="c in CN" :key="c.label" class="fd-sl-cn-row">
          <span class="fd-sl-cn-dot" :style="{ background: c.tone === 'lime' ? 'var(--lime)' : c.tone === 'blue' ? 'var(--blue)' : 'var(--coral)' }"></span>
          <span class="fd-sl-cn-text"><b>{{ c.text }}</b><em>{{ c.label }}</em><i>{{ c.note }}</i></span>
        </li>
      </ul>
      <p class="fd-sl-cn-cap">
        同名岗位的标价能从 5K 拉到 80K，<b>差 10 倍以上</b>。这就是本站反复说「看 JD 别看名字」的量化理由。
        三条国内数字都是转述口径（[B]/[C]），只用来讲「跨度」这件事，不用来定预期。
      </p>
    </div>

    <p class="fd-cap">
      三句必须一起读的话：<b>①</b> 这些是 base，AI 公司的股权部分通常和 base 同量级，本站没有可靠数字所以不画；
      <b>②</b> 区间宽度是职级宽度，不是「你能谈到的空间」，跨 {{ sorted.length }} 家公司的区间也不能取平均；
      <b>③</b> 网上流传的「FDE 总包轻松破 50 万美元」「平均年薪 48.5 万 / 72.5 万美元」在招聘页里查不到出处，本站一律不采用。
    </p>
  </div>
</template>

<style scoped>
.fd-sl-chart {
  padding: 2px 0 0;
}

.fd-sl-axis {
  display: grid;
  grid-template-columns: 172px minmax(0, 1fr) 96px;
  gap: 10px;
  margin-bottom: 4px;
  font-family: var(--font-mono);
  font-size: 9.5px;
  color: var(--muted);
}

.fd-sl-axis span:nth-child(2) {
  display: flex;
  justify-content: space-between;
}

.fd-sl-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.fd-sl-row {
  display: grid;
  grid-template-columns: 172px minmax(0, 1fr) 96px;
  gap: 10px;
  align-items: center;
  padding: 5px 0;
  border-top: 1px dashed var(--line);
}

.fd-sl-label {
  min-width: 0;
}

.fd-sl-label b {
  display: block;
  font-size: 12.5px;
  color: var(--ink);
}

.fd-sl-label em {
  display: block;
  font-size: 10px;
  font-style: normal;
  line-height: 1.45;
  color: var(--muted);
}

.fd-sl-track {
  position: relative;
  display: block;
  height: 14px;
  border: 1px solid var(--line-strong);
  border-radius: 4px;
  background: var(--panel-2);
}

.fd-sl-grid {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--line);
}

.fd-sl-median {
  position: absolute;
  top: -4px;
  bottom: -4px;
  width: 1px;
  border-left: 1px dashed var(--coral);
  opacity: 0.8;
}

.fd-sl-band {
  position: absolute;
  top: 2px;
  bottom: 2px;
  border-radius: 2px;
  opacity: 0.85;
}

.fd-sl-num {
  font-family: var(--font-mono);
  font-size: 10.5px;
  text-align: right;
  color: var(--ink-2);
  white-space: nowrap;
}

.fd-sl-num small {
  margin-left: 4px;
  padding: 1px 4px;
  border: 1px solid var(--line);
  border-radius: 999px;
  font-size: 8.5px;
  color: var(--muted);
}

.fd-sl-ref {
  margin: 9px 0 0;
  font-size: 11px;
  line-height: 1.65;
  color: var(--muted);
}

.fd-sl-ref b {
  color: var(--coral);
  font-family: var(--font-mono);
}

.fd-sl-cn {
  margin-top: 14px;
  padding: 11px 12px 10px;
  border: 1px dashed var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--panel-2);
}

.fd-sl-cn-title {
  margin: 0 0 8px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-2);
}

.fd-sl-cn ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.fd-sl-cn-row {
  display: flex;
  gap: 9px;
  align-items: flex-start;
  padding: 4px 0;
}

.fd-sl-cn-dot {
  flex: none;
  width: 10px;
  height: 10px;
  margin-top: 5px;
  border-radius: 3px;
}

.fd-sl-cn-text b {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--ink);
}

.fd-sl-cn-text em,
.fd-sl-cn-text i {
  display: block;
  font-size: 10.5px;
  font-style: normal;
  line-height: 1.5;
  color: var(--muted);
}

.fd-sl-cn-text i {
  font-size: 9.5px;
  opacity: 0.85;
}

.fd-sl-cn-cap {
  margin: 8px 0 0;
  font-size: 11px;
  line-height: 1.6;
  color: var(--muted);
}

@media (max-width: 720px) {
  .fd-sl-axis,
  .fd-sl-row {
    grid-template-columns: minmax(0, 1fr) 84px;
  }

  .fd-sl-label {
    grid-column: 1 / -1;
  }

  .fd-sl-axis span:first-child {
    display: none;
  }
}
</style>
