<script setup lang="ts">
// 三个阶段的各种死法 + 两种汇报口径。
// 上半段来自中文驻场复盘的分层结论 [C] 与 Gartner 的调查口径；
// 下半段每一行都能回指到本站引用页里的一个具体出处。

type Gate = {
  stage: string
  dies: string
  carry: string
  proof: string
  tone: 'teal' | 'blue' | 'coral'
}

const GATES: Gate[] = [
  {
    stage: 'POC → 试点',
    dies: '数据质量、范围蔓延',
    carry: '字段字典、变更单',
    proof: 'Gartner 对 782 位 IT 运维负责人（2026-04）：38% 把数据质量列为主要障碍，仅 28% 的用例达到 ROI，20% 彻底失败 [C]',
    tone: 'teal'
  },
  {
    stage: '试点 → 生产',
    dies: '延迟、成本、缺评测',
    carry: '评测集、P99 看板、单次成本表',
    proof: 'evals 被写进 16 份可读正文 JD 里的 7 份；AWS 把它单列为资格条 [A]',
    tone: 'blue'
  },
  {
    stage: '生产 → 验收',
    dies: '责任界定、回款条款',
    carry: '签字人原有的那套验证动作',
    proof: '一个 Parquet 迁移卡了很久，直到前线做出能「双击看内容」的查看器、保留工程师原来的 CSV 人工核对习惯，两天后获批 [B]',
    tone: 'coral'
  }
]

type Line = {
  bad: string
  why: string
  good: string
}

const LINES: Line[] = [
  {
    bad: '上线了 37 个用例',
    why: '用例数只证明你干过活，不证明有人在干活',
    good: '这 37 个里，周活超过 70% 的有 N 个'
  },
  {
    bad: '做了 12 场 demo',
    why: '「演示成功」和「跑在客户生产数据上」是两件事',
    good: '已在客户真实数据上连续运行 N 天，失败样本在这'
  },
  {
    bad: '准确率 92%',
    why: '没有评测集来源的百分比，评审会一句「怎么测的」就问穿了',
    good: '50 条错例分四类，两类要业务方定口径'
  },
  {
    bad: '平均响应 1.2 秒',
    why: '现场被打脸的一直是尾部',
    good: 'P99 是多少、峰值那天是多少'
  },
  {
    bad: '全行 12 万员工都开通了',
    why: '开通数不等于使用数；MIT 报告里高管与一线的说法可以完全相反',
    good: '照 OpenAI × BBVA 的三件套报：席位数 + 周活率 + 人均省时'
  }
]
</script>

<template>
  <div class="fd-widget" data-listen="skip">
    <div class="fd-widget-head">
      <span class="fd-widget-title">Gates · 三个阶段，三种死法</span>
      <p class="fd-widget-sub">「carry」列 = 到了这个阶段才被发现、必须提前带进去的交付物。证据强度见引用页。</p>
    </div>

    <ol class="fd-mb-gates">
      <li v-for="(g, i) in GATES" :key="g.stage" class="fd-mb-gate" :style="{ borderTopColor: `var(--${g.tone === 'teal' ? 'accent' : g.tone})` }">
        <p class="mp-eyebrow">{{ String(i + 1).padStart(2, '0') }} · {{ g.stage }}</p>
        <strong class="fd-mb-dies">{{ g.dies }}</strong>
        <p class="fd-mb-carry">带什么活下来：<b>{{ g.carry }}</b></p>
        <p class="fd-mb-proof">{{ g.proof }}</p>
      </li>
    </ol>

    <div class="fd-mb-board">
      <p class="fd-mb-board-title">汇报口径对照 · 左边的句子在季度会上好看，右边的句子在验收会上好用</p>
      <ul>
        <li v-for="l in LINES" :key="l.bad" class="fd-mb-row">
          <span class="fd-mb-bad">{{ l.bad }}</span>
          <span class="fd-mb-why">{{ l.why }}</span>
          <span class="fd-mb-good">{{ l.good }}</span>
        </li>
      </ul>
    </div>

    <p class="fd-cap">
      这张表最值钱的一行是最后一行。<b>可照抄的采用度三件套来自 OpenAI 自己发布的 BBVA 案例：10 万+ 席位、周活 &gt;70%、人均每周省约 3 小时</b> [A]——
      三个数字分别回答「铺了多广、真不真、值不值」，缺一个都会被下一个问题追问。
      反过来，「上线了多少用例」「做了多少 demo」正是 MIT NANDA 报告批评的那类自证口径 [A]。
    </p>
  </div>
</template>

<style scoped>
.fd-mb-gates {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.fd-mb-gate {
  padding: 10px 12px 11px;
  border: 1px solid var(--line);
  border-top: 3px solid var(--accent);
  border-radius: var(--radius-sm);
  background: var(--panel-2);
}

.fd-mb-dies {
  display: block;
  margin: 2px 0 6px;
  font-size: 14px;
  line-height: 1.4;
  color: var(--ink);
}

.fd-mb-carry {
  margin: 0 0 7px;
  font-size: 12px;
  line-height: 1.55;
  color: var(--ink-2);
}

.fd-mb-carry b {
  color: var(--accent);
}

.fd-mb-proof {
  margin: 0;
  padding-top: 7px;
  border-top: 1px dashed var(--line);
  font-size: 10.5px;
  line-height: 1.6;
  color: var(--muted);
}

.fd-mb-board {
  margin-top: 14px;
  padding: 11px 12px;
  border: 1px dashed var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--panel);
}

.fd-mb-board-title {
  margin: 0 0 9px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--ink-2);
}

.fd-mb-board ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.fd-mb-row {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.3fr) minmax(0, 1fr);
  gap: 10px;
  align-items: baseline;
  padding: 7px 0;
  border-top: 1px dashed var(--line);
}

.fd-mb-row:first-child {
  border-top: none;
}

.fd-mb-bad {
  font-size: 12px;
  color: var(--coral);
}

.fd-mb-why {
  font-size: 11px;
  line-height: 1.55;
  color: var(--muted);
}

.fd-mb-good {
  font-size: 12px;
  line-height: 1.5;
  color: var(--ink);
}

@media (max-width: 900px) {
  .fd-mb-gates {
    grid-template-columns: minmax(0, 1fr);
  }

  .fd-mb-row {
    grid-template-columns: minmax(0, 1fr);
    gap: 3px;
  }
}
</style>
