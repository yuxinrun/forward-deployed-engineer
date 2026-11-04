<script setup lang="ts">
// 「FDE 增长了多少倍」这句话，本站查到至少五个版本，而且它们互相排斥。
// 条长按对数刻度画（log(倍数)/log(47)），只为了让 8× 和 47× 都能看见；
// 它不是在说这些数字可以比较——下面那行口径说明才是重点。

const CLAIMS = [
  { src: 'LinkedIn', mult: '42×', x: 42, win: '自 2023 年', scope: '关键词匹配，国家范围未写', grade: 'C' },
  { src: 'Indeed', mult: '8.3×', x: 8.3, win: '643 → 5,330 条', scope: '美国，招聘广告量', grade: 'B' },
  { src: 'Dice', mult: '47×', x: 47, win: '较 2023 年', scope: '同期口径另有 +1,000%（1–8 月同比）', grade: 'C' },
  { src: 'Entrepreneur', mult: '7×', x: 7, win: '自 2022 年（+600%）', scope: '未写关键词与地区', grade: 'B' },
  { src: 'SCMP（转述）', mult: '9×', x: 9, win: '+800%，时间窗未标', scope: '转述第三方口径', grade: 'C' }
]

// 本站唯一使用的绝对数（Lightcast，招聘广告条数）
const ABS = [
  { y: '2023', v: '不足 200', w: 3 },
  { y: '2025', v: '约 1,200', w: 16 },
  { y: '2026 前九个月', v: '超过 7,300', w: 100 }
]

const MAXLOG = Math.log(47)
const bar = (x: number) => Math.round((Math.log(x) / MAXLOG) * 100)
</script>

<template>
  <div class="fd-widget" data-listen="skip">
    <div class="fd-widget-head">
      <span class="fd-widget-title">Future · 同一个倍数，五个版本</span>
      <p class="fd-widget-sub">条长用对数刻度，只是为了让 7× 和 47× 都看得见</p>
    </div>

    <ul class="fd-gc-list">
      <li v-for="c in CLAIMS" :key="c.src" class="fd-gc-row">
        <span class="fd-gc-src">{{ c.src }}</span>
        <span class="fd-gc-track"><i :style="{ width: bar(c.x) + '%' }"></i></span>
        <span class="fd-gc-mult">{{ c.mult }}</span>
        <span class="fd-gc-grade" :data-grade="c.grade">{{ c.grade }}</span>
        <p class="fd-gc-note">{{ c.win }} · {{ c.scope }}</p>
      </li>
    </ul>

    <p class="fd-gc-warn">
      这五条<b>不能相加、不能平均、不能挑最大的一条当标题</b>：时间窗不同、关键词匹配不同、国家范围不同，其中两条还是转述。
      真把它们合起来算，得到的就不是数据了，是故事。
    </p>

    <div class="fd-gc-abs">
      <p class="fd-gc-abs-k">本站只用的绝对数 · 美国 FDE 招聘广告条数（Lightcast）<code>[A]</code></p>
      <div v-for="a in ABS" :key="a.y" class="fd-gc-abs-row">
        <span class="fd-gc-abs-y">{{ a.y }}</span>
        <span class="fd-gc-abs-track"><i :style="{ width: a.w + '%' }"></i></span>
        <span class="fd-gc-abs-v">{{ a.v }}</span>
      </div>
      <p class="fd-gc-abs-note">
        读法照录 CNBC 那句限定：<b>这些是广告数，不是成交数。</b>薪资侧同理——195,456 美元是招聘广告的薪资中位，不是在职者工资。
      </p>
    </div>
  </div>
</template>

<style scoped>
.fd-gc-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.fd-gc-row {
  display: grid;
  grid-template-columns: 104px 1fr 44px 20px;
  align-items: center;
  gap: 8px;
  padding: 7px 0;
  border-bottom: 1px dashed var(--line);
}

.fd-gc-row:last-child {
  border-bottom: 0;
}

.fd-gc-src {
  font-size: 11.5px;
  font-weight: 680;
  color: var(--ink);
  overflow-wrap: anywhere;
}

.fd-gc-track {
  height: 12px;
  border-radius: 4px;
  background: color-mix(in srgb, var(--line-strong) 40%, transparent);
  overflow: hidden;
}

.fd-gc-track i {
  display: block;
  height: 100%;
  border-radius: 4px;
  background: linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 55%, var(--blue)));
}

.fd-gc-mult {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 600;
  color: var(--ink-2);
  text-align: right;
}

.fd-gc-grade {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid var(--line-strong);
  font-family: var(--font-mono);
  font-size: 9px;
  color: var(--muted);
}

.fd-gc-grade[data-grade='A'] {
  border-color: var(--accent);
  color: var(--accent);
}

.fd-gc-grade[data-grade='B'] {
  border-color: var(--blue);
  color: var(--blue);
}

.fd-gc-grade[data-grade='C'] {
  border-color: var(--coral);
  color: var(--coral);
}

.fd-gc-note {
  grid-column: 2 / -1;
  margin: 2px 0 0;
  font-family: var(--font-mono);
  font-size: 9.5px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: var(--faint);
}

.fd-gc-warn {
  margin: 12px 0 0;
  padding: 10px 12px;
  border: 1px dashed var(--coral);
  border-radius: 10px;
  font-size: 11.5px;
  line-height: 1.65;
  color: var(--muted);
}

.fd-gc-warn b {
  color: var(--ink-2);
  font-weight: 700;
}

.fd-gc-abs {
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px dashed var(--line-strong);
}

.fd-gc-abs-k {
  margin: 0 0 8px;
  font-family: var(--font-mono);
  font-size: 9.5px;
  letter-spacing: 0.06em;
  color: var(--accent);
}

.fd-gc-abs-row {
  display: grid;
  grid-template-columns: 104px 1fr 84px;
  align-items: center;
  gap: 8px;
  margin-top: 5px;
}

.fd-gc-abs-y,
.fd-gc-abs-v {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--ink-2);
}

.fd-gc-abs-v {
  text-align: right;
}

.fd-gc-abs-track {
  height: 10px;
  border-radius: 4px;
  background: color-mix(in srgb, var(--line-strong) 32%, transparent);
  overflow: hidden;
}

.fd-gc-abs-track i {
  display: block;
  height: 100%;
  border-radius: 4px;
  background: var(--lime);
}

.fd-gc-abs-note {
  margin: 10px 0 0;
  font-size: 11.5px;
  line-height: 1.6;
  color: var(--muted);
}

.fd-gc-abs-note b {
  color: var(--ink-2);
  font-weight: 680;
}

@media (max-width: 620px) {
  .fd-gc-row,
  .fd-gc-abs-row {
    grid-template-columns: 78px 1fr 36px 18px;
  }

  .fd-gc-abs-row {
    grid-template-columns: 78px 1fr 62px;
  }
}

@media (max-width: 420px) {
  .fd-gc-row {
    grid-template-columns: 66px 1fr 32px 16px;
    gap: 6px;
  }

  .fd-gc-abs-row {
    grid-template-columns: 66px 1fr 54px;
    gap: 6px;
  }

  .fd-gc-src {
    font-size: 10.5px;
  }
}
</style>
