<script setup lang="ts">
// 十二周练手计划：四条轨道并行，每周有能拿去讲的产出。
// 这是本站给转行者的建议排期，不是任何公司的培养方案。

const LANES = [
  { name: '写代码', en: 'BUILD', tone: 'teal' },
  { name: '抠数据', en: 'DATA', tone: 'blue' },
  { name: '做评测', en: 'EVAL', tone: 'lime' },
  { name: '见人', en: 'PEOPLE', tone: 'coral' }
] as const

type Lane = (typeof LANES)[number]['name']

const TASKS: { lane: Lane; name: string; from: number; to: number; out: string }[] = [
  { lane: '见人', name: '找 5 个业务同事聊：他们每周重复做的那件破事', from: 1, to: 2, out: '一页纸问题清单，选定一个' },
  { lane: '抠数据', name: '摸一遍真实数据：口径、缺失、权限、能不能拿出来', from: 1, to: 3, out: '数据来源表 + 三条"这数据不能信"的记录' },
  { lane: '写代码', name: '端到端最小链路跑通（检索 + 生成 + 落库）', from: 2, to: 5, out: '一条能演示的命令 + 一份 README' },
  { lane: '做评测', name: '手工标 50 个坏例，定 3 个能对外报的指标', from: 4, to: 7, out: '评测集 + 每版分数曲线' },
  { lane: '写代码', name: '补身份与权限：让不同的人看到不同的内容', from: 5, to: 8, out: '权限矩阵 + 一次越权测试记录' },
  { lane: '写代码', name: '容器化 + 离线安装演练（当作客户内网）', from: 6, to: 9, out: '部署手册 + 断网安装录屏' },
  { lane: '见人', name: '拉 3 个真实用户试用两周，只观察不解释', from: 8, to: 10, out: '用户反馈原话 10 条' },
  { lane: '做评测', name: '算成本与延迟：一次问答多少钱、P95 多久', from: 9, to: 11, out: '成本表 + 一个降级策略' },
  { lane: '见人', name: '给不懂技术的领导讲 10 分钟，讲不清就改', from: 10, to: 11, out: '一页纸汇报稿' },
  { lane: '写代码', name: '把这家"客户"专属的东西改成配置化', from: 10, to: 12, out: '第二个场景接入耗时对比' },
  { lane: '抠数据', name: '写复盘：哪一步是白做的，重来会怎么排', from: 11, to: 12, out: '复盘文档 + 面试可讲的三个数字' }
]

const WEEKS = 12
const span = (t: { from: number; to: number }) => ({
  marginLeft: `${((t.from - 1) / WEEKS) * 100}%`,
  width: `${((t.to - t.from + 1) / WEEKS) * 100}%`
})

const toneVar = { teal: 'var(--accent)', coral: 'var(--coral)', blue: 'var(--blue)', lime: 'var(--lime)' } as const
const byLane = (lane: Lane) => TASKS.filter((t) => t.lane === lane)
</script>

<template>
  <div class="fd-widget" data-listen="skip">
    <div class="fd-widget-head">
      <span class="fd-widget-title">Plan · 十二周，四条轨</span>
      <p class="fd-widget-sub">每格 = 一周；每个条都要求交一份"能拿去讲"的东西</p>
    </div>

    <div class="fd-pg">
      <div class="fd-pg-axis">
        <span></span>
        <span v-for="w in WEEKS" :key="w" class="fd-pg-week">W{{ w }}</span>
      </div>

      <section v-for="l in LANES" :key="l.name" class="fd-pg-lane">
        <div class="fd-pg-lane-name">
          <strong>{{ l.name }}</strong>
          <span>{{ l.en }}</span>
        </div>
        <div class="fd-pg-track">
          <div
            v-for="t in byLane(l.name)"
            :key="t.name"
            class="fd-pg-bar"
            :style="{ ...span(t), background: `color-mix(in srgb, ${toneVar[l.tone]} 82%, transparent)` }"
          >
            <span class="fd-pg-bar-name">{{ t.name }}</span>
            <span class="fd-pg-bar-out">交出：{{ t.out }}</span>
          </div>
        </div>
      </section>
    </div>

    <p class="fd-pg-note">
      本站给转行者的排期，不是任何公司的培养方案。<b>「见人」这条轨从第一周就开始</b>——把它放最后，是这个计划最常见的失败方式。
    </p>

    <p class="fd-cap">
      数一下四条轨的条数：<b>写代码 4 条、抠数据 2 条、做评测 2 条、见人 3 条</b>。
      市面上大部分"AI 入门项目"只有第一条轨。这份排期的目的是：十二周后你能对着面试官说出一个真被三个人用过的系统，以及它每周花多少钱。
    </p>
  </div>
</template>

<style scoped>
.fd-pg {
  display: grid;
  gap: 10px;
}

.fd-pg-axis {
  display: grid;
  grid-template-columns: 120px repeat(12, minmax(0, 1fr));
  gap: 2px;
  padding-bottom: 6px;
  border-bottom: 1px dashed var(--line-strong);
}

.fd-pg-axis > span:first-child {
  /* 名称列留空 */
  background: none;
}

.fd-pg-week {
  font-family: var(--font-mono);
  font-size: 8.5px;
  letter-spacing: 0.08em;
  color: var(--faint);
  text-align: center;
}

.fd-pg-lane {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 10px;
  align-items: start;
  padding-top: 10px;
}

.fd-pg-lane-name strong {
  display: block;
  font-size: 12.5px;
  font-weight: 720;
  color: var(--ink);
}

.fd-pg-lane-name span {
  font-family: var(--font-mono);
  font-size: 8.5px;
  letter-spacing: 0.12em;
  color: var(--faint);
}

.fd-pg-track {
  position: relative;
  min-height: 58px;
  padding: 6px 0;
  border-radius: 8px;
  background: var(--panel-2);
}

.fd-pg-bar {
  position: relative;
  display: block;
  margin: 4px 0;
  padding: 5px 9px;
  border-radius: 999px;
  min-height: 22px;
  overflow: hidden;
}

.fd-pg-bar-name {
  display: block;
  font-size: 11px;
  line-height: 1.45;
  font-weight: 620;
  color: var(--ink);
}

.fd-pg-bar-out {
  display: block;
  font-family: var(--font-mono);
  font-size: 9px;
  line-height: 1.5;
  color: var(--ink-2);
  opacity: 0.85;
}

.fd-pg-note {
  margin: 16px 0 0;
  padding: 10px 12px;
  border: 1px dashed var(--line-strong);
  border-radius: 9px;
  font-size: 11.5px;
  line-height: 1.65;
  color: var(--muted);
}

.fd-pg-note b {
  color: var(--ink-2);
  font-weight: 660;
}

@media (max-width: 960px) {
  .fd-pg-axis {
    grid-template-columns: 88px repeat(12, minmax(0, 1fr));
  }

  .fd-pg-lane {
    grid-template-columns: 88px 1fr;
  }
}

@media (max-width: 620px) {
  .fd-pg-week {
    font-size: 7px;
  }

  .fd-pg-bar {
    padding: 4px 7px;
  }

  .fd-pg-bar-name {
    font-size: 10px;
  }
}
</style>
