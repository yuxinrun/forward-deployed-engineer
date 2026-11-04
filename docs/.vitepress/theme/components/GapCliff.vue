<script setup lang="ts">
// "演示—试点—生产"这条线：上面是双方对这件事的信心，下面是真正会绊住人的坑。
// 曲线是示意（本站画的形状，不是量出来的分数），坑的名字来自各家 JD 与从业者复盘里反复出现的词。

const STAGES = [
  { x: 12, name: '发布会 Demo', zh: '所有人都觉得成了', conf: 9, ready: 2 },
  { x: 30, name: 'POC / 试点', zh: '一接真数据就开始漏', conf: 5, ready: 4 },
  { x: 52, name: '上生产', zh: '评测、成本、责任三座山', conf: 3, ready: 6 },
  { x: 74, name: '客户每天在用', zh: '没人在乎模型，只在乎它今天没崩', conf: 6, ready: 8 },
  { x: 88, name: '扩到第二个部门', zh: '这时才轮到产品化', conf: 8, ready: 9 }
]

const HAZARDS = [
  { x: 26, y: 40, label: '数据不干净' },
  { x: 46, y: 30, label: '没法评测' },
  { x: 60, y: 41, label: '成本与延迟' },
  { x: 80, y: 33, label: '没人接手运维' }
]

// 折线：把五个阶段的点连成平滑一点的 path
const line = (key: 'conf' | 'ready') => {
  const pts = STAGES.map((s) => `${s.x},${50 - s[key] * 4.4}`)
  return 'M' + pts.join(' L')
}

const scaleY = (v: number) => 50 - v * 4.4
</script>

<template>
  <div class="fd-widget" data-listen="skip">
    <div class="fd-widget-head">
      <span class="fd-widget-title">Gap · 演示和生产之间那条沟</span>
      <p class="fd-widget-sub">纵轴没有单位：它只是"这件事看起来离成还有多远"</p>
    </div>

    <svg class="fd-gc-svg" viewBox="0 0 100 58" role="img" aria-label="折线图：信心在发布会最高、在试点到上生产之间跌到谷底，随后随客户真实使用回升；同一时间系统真正可用的程度缓慢上升；谷底附近标着数据不干净、没法评测、成本与延迟、没人接手运维四个坑。">
      <!-- 网格 -->
      <g stroke="var(--line)" stroke-width="0.3">
        <line x1="4" y1="10" x2="97" y2="10" />
        <line x1="4" y1="28" x2="97" y2="28" />
        <line x1="4" y1="46" x2="97" y2="46" />
      </g>
      <!-- 客户签字线 -->
      <line x1="4" y1="22" x2="97" y2="22" stroke="var(--coral)" stroke-width="0.6" stroke-dasharray="2 2" opacity="0.8" />
      <text x="4.5" y="20.4" class="fd-gc-mini" fill="var(--coral)">客户愿意签字的那条线</text>

      <!-- 可用程度 -->
      <path :d="line('ready')" fill="none" stroke="var(--blue)" stroke-width="1.1" stroke-linejoin="round" />
      <!-- 信心 -->
      <path :d="line('conf')" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linejoin="round" />

      <g v-for="s in STAGES" :key="s.name">
        <circle :cx="s.x" :cy="scaleY(s.conf)" r="1.6" fill="var(--accent)" />
        <circle :cx="s.x" :cy="scaleY(s.ready)" r="1.3" fill="var(--blue)" />
        <text :x="s.x" y="55" class="fd-gc-x" text-anchor="middle">{{ s.name }}</text>
      </g>

      <g v-for="h in HAZARDS" :key="h.label">
        <path :d="`M${h.x} ${h.y - 3.2} L${h.x - 2.2} ${h.y + 1.6} L${h.x + 2.2} ${h.y + 1.6} Z`" fill="none" stroke="var(--coral)" stroke-width="0.7" stroke-linejoin="round" />
        <line :x1="h.x" :y1="h.y - 0.4" :x2="h.x" :y2="h.y + 0.8" stroke="var(--coral)" stroke-width="0.7" />
        <text :x="h.x" :y="h.y + 5" class="fd-gc-hz" text-anchor="middle">{{ h.label }}</text>
      </g>
    </svg>

    <ul class="fd-gc-stages">
      <li v-for="s in STAGES" :key="s.name">
        <strong>{{ s.name }}</strong>
        <span>{{ s.zh }}</span>
      </li>
    </ul>

    <p class="fd-gc-legend">
      青线 = 双方对"这事要成了"的信心；蓝线 = 系统真的能被业务天天用的程度。红色三角是四个反复出现的坑。曲线形状是示意，坑的名字取自 JD 措辞与从业者复盘。
    </p>

    <p class="fd-cap">
      最要命的是<b>青线在第一个点就冲到顶，蓝线却还在地上爬</b>：这个落差就是 FDE 的工作面积。
      你交付的不是模型，是把蓝线从 2 拉到 9 的那段苦力——顺便让青线别掉到看不见。
    </p>
  </div>
</template>

<style scoped>
.fd-gc-svg {
  display: block;
  width: 100%;
  height: auto;
}

.fd-gc-x {
  font-family: var(--font-mono);
  font-size: 2.9px;
  letter-spacing: 0.02em;
  fill: var(--muted);
}

.fd-gc-mini {
  font-family: var(--font-mono);
  font-size: 2.6px;
  letter-spacing: 0.04em;
}

.fd-gc-hz {
  font-family: var(--font-mono);
  font-size: 2.7px;
  fill: var(--coral);
}

.fd-gc-stages {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
  margin: 14px 0 0;
  padding: 14px 0 0;
  list-style: none;
  border-top: 1px dashed var(--line-strong);
}

.fd-gc-stages strong {
  display: block;
  font-size: 11.5px;
  font-weight: 700;
  color: var(--ink);
}

.fd-gc-stages span {
  display: block;
  margin-top: 3px;
  font-size: 11px;
  line-height: 1.55;
  color: var(--muted);
}

.fd-gc-legend {
  margin: 12px 0 0;
  font-size: 11.5px;
  line-height: 1.6;
  color: var(--muted);
}

@media (max-width: 760px) {
  .fd-gc-stages {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
