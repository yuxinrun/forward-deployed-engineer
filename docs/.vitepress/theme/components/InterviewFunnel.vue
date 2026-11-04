<script setup lang="ts">
// 面试漏斗：把四份互相矛盾的面试回忆摆在同一张图上。
// 通过率只有三轮有数字，且都来自面试指南/回忆（[C]），不是任何公司官方口径。
// 没给数字的轮次一律留空，不做估算——所以"累计到达率"只统计披露了数字的轮次，是上界。

type Round = {
  name: string
  len: string
  lo: number | null
  hi: number | null
  what: string
  trap: string
  hot: boolean
}

const ROUNDS: Round[] = [
  { name: '招聘官筛选', len: '30 min', lo: 0.8, hi: 0.8, what: '动机、履历真实性、为什么是这个岗位', trap: '讲不清「为什么想去客户现场」', hot: false },
  { name: '经理面', len: '45–60 min', lo: null, hi: null, what: '过去项目的取舍、你能不能独立扛一块地', trap: '只讲技术选型，不讲当时的约束和代价', hot: false },
  { name: '编码轮', len: '45–60 min', lo: 0.55, hi: 0.6, what: '刻意非 LeetCode：脏 CSV 解析、限流器、带抖动的重试退避', trap: '不澄清环境和约束就开始写；追求优雅而忽略错误处理', hot: true },
  { name: '系统设计', len: '60 min', lo: null, hi: null, what: '在客户既有系统旁边放一套能跑的东西', trap: '方案里没有权限边界、没有回滚', hot: false },
  { name: '模糊案例轮', len: '45–60 min', lo: 0.4, hi: 0.4, what: '一个说不清的问题：客户抱怨 AI 不好用，你怎么办', trap: '急着给方案，不先拆假设', hot: true },
  { name: '客户模拟', len: '45 min', lo: null, hi: null, what: '面试官扮客户，你要当场问出需求', trap: '被质疑就改口，或者全程只讲技术名词', hot: true },
  { name: '行为面', len: '45–60 min', lo: null, hi: null, what: '冲突、失败、跨组织协作', trap: '没有一次真实的失败复盘', hot: false }
]

const pctText = (lo: number | null, hi: number | null) => {
  if (lo === null) return '未披露'
  if (hi === null || lo === hi) return `${Math.round(lo * 100)}%`
  return `${Math.round(lo * 100)}–${Math.round(hi * 100)}%`
}

// 只连乘披露了数字的轮次
let accLo = 1
let accHi = 1
const STEPS = ROUNDS.map((r) => {
  if (r.lo !== null && r.hi !== null) {
    accLo *= r.lo
    accHi *= r.hi
  }
  return { ...r, reachLo: accLo, reachHi: accHi }
})

const LAST = STEPS[STEPS.length - 1]

const VERSIONS = [
  { org: '综合七轮版', src: '中文面试指南 [C]', body: '招聘官 → 经理 → 编码 → 系统设计 → 模糊案例 → 客户模拟 → 行为，全程 3–6 周' },
  { org: 'Palantir 五轮版', src: '第三方面经归纳 [B]', body: '"They did not spoon-feed requirements and expected structure."（不会把要求喂到你手上，只 expecting 你给出结构）' },
  { org: 'OpenAI 流程', src: '求职回忆，2026-03-27 更新 [C]', body: '招聘官初筛 → 5 小时带视频的 take-home → 60 分钟技术面 → 3 轮虚拟 onsite' },
  { org: 'Anthropic 五关', src: 'Reddit 指南转述 [C]', body: '动机 → Claude + MCP 推演 → 编码 → 客户模拟（称淘汰约六成）→ 使命/价值观冲突' }
]

const CODE_SAMPLES = [
  '解析一个带不一致引号和缺失字段的杂乱 CSV/JSON，产出干净的结构化记录',
  '实现同时支持「每用户」和「全局」两种限额的限流器',
  '为不稳定的第三方 API 实现带抖动的指数退避，并设重试上限',
  '在一个文档文件夹上搭小 RAG pipeline：切块、嵌入、检索、回答，并捍卫你的切块选择',
  '写 SQL 找出上季度退货率超 30% 的客户，再说明如何加速'
]

const barW = (v: number) => `${Math.max(v * 100, 2)}%`
</script>

<template>
  <div class="fd-widget" data-listen="skip">
    <div class="fd-widget-head">
      <span class="fd-widget-title">Funnel · 七轮版漏斗，和它旁边的三份矛盾口径</span>
      <p class="fd-widget-sub">全部通过率来自面试指南与求职回忆（[C]/[B]），没有任何一家公司公布过官方通过率。图里留白的轮次是真的没有数字。</p>
    </div>

    <ol class="fd-if-list">
      <li v-for="(r, i) in STEPS" :key="r.name" class="fd-if-row" :class="{ 'fd-if-hot': r.hot }">
        <span class="fd-if-idx">{{ String(i + 1).padStart(2, '0') }}</span>
        <span class="fd-if-main">
          <span class="fd-if-top">
            <b>{{ r.name }}</b>
            <em>{{ r.len }}</em>
            <span class="fd-if-rate">通过 {{ pctText(r.lo, r.hi) }}</span>
          </span>
          <span class="fd-if-bar" role="img" :aria-label="`走到这一轮的相对人数：约 ${Math.round(r.reachLo * 100)}% 到 ${Math.round(r.reachHi * 100)}%`">
            <i :style="{ width: barW(r.reachHi) }" class="fd-if-hi"></i>
            <i :style="{ width: barW(r.reachLo) }" class="fd-if-lo"></i>
            <u v-if="r.lo === null">这一轮没有公开数字，不做估算</u>
          </span>
          <span class="fd-if-note"><b>考什么：</b>{{ r.what }}　<b>常见挂点：</b>{{ r.trap }}</span>
        </span>
      </li>
    </ol>

    <p class="fd-if-total">
      把披露了数字的三轮连乘：约 <b>{{ Math.round(LAST.reachLo * 100) }}%–{{ Math.round(LAST.reachHi * 100) }}%</b> 能走到最后。
      这是<b>上界</b>——留白的那四轮一定还会淘汰人，只是没人公布。
    </p>

    <div class="fd-if-ver">
      <p class="fd-if-ver-title">同一件事，四份材料给出四种流程</p>
      <ul>
        <li v-for="v in VERSIONS" :key="v.org">
          <b>{{ v.org }}</b>
          <em>{{ v.src }}</em>
          <span>{{ v.body }}</span>
        </li>
      </ul>
      <p class="fd-if-ver-cap">
        5 轮、5 关、7 轮、4–6 轮同时存在。所以「FDE 面试有几轮」这个问题没有答案，
        能准备的只有<b>被反复提到的那三件事</b>：模糊问题、现场协作、把自己的判断讲清楚。
      </p>
    </div>

    <div class="fd-if-code">
      <p class="fd-if-code-title">编码轮示例题（面试指南原句归纳 [C]）——注意没有一题是 LeetCode</p>
      <ul>
        <li v-for="c in CODE_SAMPLES" :key="c">{{ c }}</li>
      </ul>
    </div>

    <p class="fd-cap">
      最有用的一句来自被访者本人："They test if you can think like an engineer and a consultant at the same time."（他们测的是你能不能同时用工程师和顾问的方式思考）[B]。
      指南里那句失分总结也值得抄在面试前看一眼：<b>「干净、可读、有测试的代码优先于聪明的最优解」</b>[C]。
    </p>
  </div>
</template>

<style scoped>
.fd-if-list {
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: rd;
}

.fd-if-row {
  display: grid;
  grid-template-columns: 26px minmax(0, 1fr);
  gap: 10px;
  padding: 8px 0;
  border-top: 1px dashed var(--line);
}

.fd-if-row:first-child {
  border-top: none;
}

.fd-if-idx {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--muted);
  padding-top: 2px;
}

.fd-if-hot .fd-if-idx {
  color: var(--coral);
}

.fd-if-main {
  min-width: 0;
}

.fd-if-top {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 7px;
}

.fd-if-top b {
  font-size: 13px;
  color: var(--ink);
  text-transform: capitalize;
}

.fd-if-top em {
  font-family: var(--font-mono);
  font-size: 10px;
  font-style: normal;
  color: var(--muted);
}

.fd-if-rate {
  margin-left: auto;
  font-family: var(--font-mono);
  font-size: 10.5px;
  color: var(--ink-2);
  white-space: nowrap;
}

.fd-if-bar {
  position: relative;
  display: block;
  height: 16px;
  margin-top: 5px;
  border: 1px solid var(--line-strong);
  border-radius: 4px;
  background: var(--panel-2);
  overflow: hidden;
}

.fd-if-bar i {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
}

.fd-if-hi {
  background: var(--accent);
  opacity: 0.22;
}

.fd-if-lo {
  background: var(--accent);
  opacity: 0.62;
}

.fd-if-bar u {
  position: absolute;
  left: 8px;
  top: 1px;
  font-size: 10px;
  font-style: normal;
  text-decoration: none;
  line-height: 14px;
  color: var(--muted);
}

.fd-if-note {
  display: block;
  margin-top: 5px;
  font-size: 11px;
  line-height: 1.6;
  color: var(--muted);
}

.fd-if-note b {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.04em;
  color: var(--ink-2);
  font-weight: 500;
}

.fd-if-hot .fd-if-note b {
  color: var(--coral);
}

.fd-if-total {
  margin: 10px 0 0;
  padding: 9px 11px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--panel-2);
  font-size: 11.5px;
  line-height: 1.6;
  color: var(--ink-2);
}

.fd-if-total b {
  font-family: var(--font-mono);
  color: var(--accent);
}

.fd-if-ver,
.fd-if-code {
  margin-top: 13px;
  padding: 11px 12px;
  border: 1px dashed var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--panel);
}

.fd-if-ver-title,
.fd-if-code-title {
  margin: 0 0 8px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-2);
}

.fd-if-ver ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.fd-if-ver li {
  display: grid;
  grid-template-columns: 118px 150px minmax(0, 1fr);
  gap: 8px;
  padding: 5px 0;
  border-top: 1px dashed var(--line);
  font-size: 11.5px;
  line-height: 1.55;
}

.fd-if-ver li:first-child {
  border-top: none;
}

.fd-if-ver b {
  color: var(--ink);
  font-size: 12px;
}

.fd-if-ver em {
  font-style: normal;
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--muted);
}

.fd-if-ver li span {
  color: var(--ink-2);
}

.fd-if-ver-cap {
  margin: 8px 0 0;
  font-size: 11px;
  line-height: 1.6;
  color: var(--muted);
}

.fd-if-code ul {
  margin: 0;
  padding: 0 0 0 16px;
  font-size: 11.5px;
  line-height: 1.7;
  color: var(--ink-2);
}

.fd-if-code li {
  margin-bottom: 3px;
}

@media (max-width: 700px) {
  .fd-if-ver li {
    grid-template-columns: minmax(0, 1fr);
    gap: 2px;
  }

  .fd-if-rate {
    margin-left: 0;
  }
}
</style>
