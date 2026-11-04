<script setup lang="ts">
// 能力曲线 L0→L3 + 现场经验回流的闭环。
// 每一档都挂一句可回溯的原话，避免变成"个人成长感悟"。等级编号是本站为了讲述造的，不是任何公司职级。

type Rung = {
  lv: string
  name: string
  ok: string
  stuck: string
  quote: string
  tone: 'teal' | 'blue' | 'lime' | 'coral'
  w: number
}

const RUNGS: Rung[] = [
  {
    lv: 'L0',
    name: '会写代码',
    ok: '能在自己熟悉的项目里，独立把一个功能做到可合并',
    stuck: '绝大多数转行者卡在这上面，而 JD 写的 3–6 年，指的从来不是这一层',
    quote: '本站样本里，只写"会写代码"的 JD 一份都没有——它被当成前提，不当成能力 [A]/[B]',
    tone: 'blue',
    w: 34
  },
  {
    lv: 'L1',
    name: '能在陌生系统里把东西跑起来',
    ok: '环境、权限、依赖、网络全都不是你定的，你还是装上了、接上了、跑起来了',
    stuck: '只在自家干净仓库里工作过的人，第一次进客户机房都会在这里停一周',
    quote: '升级哨兵（Mark Scianna，前 Palantir FDE）原话："你的 FDE 过去两周打开过 IDE 写代码吗？" [B]',
    tone: 'teal',
    w: 56
  },
  {
    lv: 'L2',
    name: '能问出正确的问题',
    ok: '把业务语言翻成数据模型；知道哪个"提效 50%"其实是一个字段没有语义',
    stuck: '技术强的人最容易跳过这一层：直接开始搭，搭完发现没人要',
    quote: 'Vinoo Ganesh（Kepler CEO，前 Palantir）："Spend a week inside a company… learn their nouns and verbs." [B]',
    tone: 'lime',
    w: 78
  },
  {
    lv: 'L3',
    name: '会选题，会把一次交付变成产品',
    ok: '判断哪个问题值得做，并把现场成果泛化给后面十个客户',
    stuck: '这一层招不到人，也不能培训——它只能靠交付次数累积',
    quote: 'Ganesh："Hiring forward deployed engineers buys you exactly one thing, which is the right to identify which problems are worth solving." [B]',
    tone: 'coral',
    w: 100
  }
]

// 现场 → 产品 的五步回流。缺任何一步，这一份交付就只值一次钱。
const LOOP = [
  { step: '进场先不写代码', body: '"learn their nouns and verbs"——第一周泡业务 [B]' },
  { step: '把问题暴露出来', body: '工具先跑起来，客户才知道自己要什么；早期演示常被客户当场判定"和我们干的活没关系" [C]/[A]' },
  { step: '做出能跑的东西', body: '"40 to 60 days" 到生产是可对客户承诺的周期 [B]；Delta 一侧的口味是"只在乎能否在 48 小时内跑通一个原型" [C]' },
  { step: '换成下一个人能接手的产物', body: '"Point the function at product and every deployment is asked to produce something the next deployment can start from." [B]' },
  { step: '认出真信号', body: '"Three firms asking for the same feature is easy to notice… Three firms needing something the provenance layer cannot express is the signal we actually care about." [B]' }
]
</script>

<template>
  <div class="fd-widget" data-listen="skip">
    <div class="fd-widget-head">
      <span class="fd-widget-title">Curve &amp; Loop · 四档能力，和一个五步闭环</span>
      <p class="fd-widget-sub">L0–L3 是本站为讲述造的分档，不是任何公司的职级；每一档后面那句原话才是它的判据。右下的闭环解释了一件事：为什么有人十年做了 30 个项目还是只值一个项目的价。</p>
    </div>

    <ol class="fd-sc-list">
      <li v-for="r in RUNGS" :key="r.lv" class="fd-sc-row">
        <span class="fd-sc-lv">{{ r.lv }}</span>
        <span class="fd-sc-body">
          <span class="fd-sc-top">
            <b>{{ r.name }}</b>
            <span class="fd-sc-track" role="img" :aria-label="`${r.lv}：本站标注的能力档位`">
              <i :class="`fd-sc-fill-${r.tone}`" :style="{ width: `${r.w}%` }"></i>
            </span>
          </span>
          <span class="fd-sc-line"><b>做到位的标志</b>{{ r.ok }}</span>
          <span class="fd-sc-line fd-sc-stuck"><b>大多数人卡在这</b>{{ r.stuck }}</span>
          <span class="fd-sc-quote">{{ r.quote }}</span>
        </span>
      </li>
    </ol>

    <p class="fd-sc-flip">
      而 L2 到 L3 的转折，被一句最不像建议的话说清楚了——Natalie Meurer：
      <b>"If you are a product engineer, you should be talking to customers. If you are a forward deployed engineer, you should be building the product."</b>
      换句话说，<b>这两个岗位各自最缺的那一半，正好是对方的那一半</b> [B]。
    </p>

    <div class="fd-sc-loop">
      <p class="fd-sc-loop-title">现场成果回流产品：五步，缺一步就只值一次钱</p>
      <ol>
        <li v-for="(l, i) in LOOP" :key="l.step">
          <span class="fd-sc-n">{{ String(i + 1).padStart(2, '0') }}</span>
          <span class="fd-sc-step">{{ l.step }}</span>
          <span class="fd-sc-body-line">{{ l.body }}</span>
        </li>
      </ol>
      <p class="fd-sc-loop-cap">
        反过来说这句更刺耳，也更有用（同一来源）："An FDE function that solves last miles without ever sending that signal home
        is a services/consulting team with a better title."（只解决最后一公里、从不把信号寄回家的 FDE 团队，
        就是一个头衔更好听的咨询/服务团队）[B]
        ——<b>这一句是"要不要做产品回流"的判断依据，不是对本行业的人身攻击</b>。
      </p>
    </div>

    <p class="fd-cap">
      本页把这张图放在最前面，是因为"成为更好的 FDE"这句话有个陷阱：它听起来像技能问题，实际上多半是<b>习惯问题</b>。
      四档里没有任何一档要求你换一个模型框架；它要求你在陌生机房里装上东西、在头一周闭嘴不问代码、
      在交付结束时留下一个下一个人能接手的东西。McGrew 那句"必须不断问：这个特性怎么泛化给后面 10 个客户" [A]，
      是这条曲线上唯一真正的门槛——<b>因为它要求你在项目最赶的时候做一件对项目本身没有好处、对你有好处的事。</b>
    </p>
  </div>
</template>

<style scoped>
.fd-sc-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.fd-sc-row {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  gap: 10px;
  padding: 9px 0;
  border-top: 1px dashed var(--line);
}

.fd-sc-row:first-child {
  border-top: none;
}

.fd-sc-lv {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  color: var(--ink);
  padding-top: 2px;
}

.fd-sc-body {
  display: grid;
  gap: 3px;
  min-width: 0;
}

.fd-sc-top {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 150px;
  gap: 10px;
  align-items: center;
}

.fd-sc-top b {
  font-size: 13.5px;
  color: var(--ink);
}

.fd-sc-track {
  display: block;
  height: 12px;
  border: 1px solid var(--line-strong);
  border-radius: 4px;
  background: var(--panel-2);
  overflow: hidden;
}

.fd-sc-track i {
  display: block;
  height: 100%;
  opacity: 0.75;
}

.fd-sc-fill-teal {
  background: var(--accent);
}

.fd-sc-fill-blue {
  background: var(--blue);
}

.fd-sc-fill-lime {
  background: var(--lime);
}

.fd-sc-fill-coral {
  background: var(--coral);
}

.fd-sc-line {
  font-size: 11.5px;
  line-height: 1.6;
  color: var(--ink-2);
}

.fd-sc-line b {
  display: inline-block;
  margin-right: 7px;
  font-family: var(--font-mono);
  font-size: 9.5px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--muted);
}

.fd-sc-stuck b {
  color: var(--coral);
}

.fd-sc-quote {
  margin-top: 3px;
  padding-top: 5px;
  border-top: 1px dashed var(--line);
  font-size: 10.5px;
  line-height: 1.6;
  color: var(--muted);
  overflow-wrap: anywhere;
}

.fd-sc-flip {
  margin: 12px 0 0;
  padding: 10px 12px;
  border: 1px solid var(--line-strong);
  border-left: 3px solid var(--accent);
  border-radius: var(--radius-sm);
  background: var(--panel-2);
  font-size: 12px;
  line-height: 1.7;
  color: var(--ink-2);
}

.fd-sc-loop {
  margin-top: 13px;
  padding: 11px 12px;
  border: 1px dashed var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--panel);
}

.fd-sc-loop-title {
  margin: 0 0 8px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-2);
}

.fd-sc-loop ol {
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: lp;
}

.fd-sc-loop li {
  display: grid;
  grid-template-columns: 26px 168px minmax(0, 1fr);
  gap: 8px;
  padding: 6px 0;
  border-top: 1px dashed var(--line);
  align-items: baseline;
}

.fd-sc-loop li:first-child {
  border-top: none;
}

.fd-sc-n {
  font-family: var(--font-mono);
  font-size: 10.5px;
  color: var(--muted);
}

.fd-sc-step {
  font-size: 12px;
  font-weight: 700;
  color: var(--ink);
}

.fd-sc-body-line {
  font-size: 11px;
  line-height: 1.6;
  color: var(--ink-2);
  overflow-wrap: anywhere;
}

.fd-sc-loop-cap {
  margin: 9px 0 0;
  padding-top: 8px;
  border-top: 1px dashed var(--line);
  font-size: 10.5px;
  line-height: 1.65;
  color: var(--muted);
}

.fd-cap {
  margin-top: 12px;
}

@media (max-width: 760px) {
  .fd-sc-top {
    grid-template-columns: minmax(0, 1fr);
    gap: 4px;
  }

  .fd-sc-track {
    width: 100%;
  }

  .fd-sc-loop li {
    grid-template-columns: 24px minmax(0, 1fr);
    row-gap: 2px;
  }

  .fd-sc-body-line {
    grid-column: 2;
  }
}
</style>
