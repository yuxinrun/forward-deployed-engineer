<script setup lang="ts">
// 岗位对照矩阵：七个常被叫错名字的岗位，六个维度上各站在哪。
// 等级 0–3 是本站按各家 JD 的职责描述归纳的相对强度，不是统计出来的分数。

const ROLES = [
  { key: 'fde', name: 'FDE', sub: '前线部署', tone: 'teal' },
  { key: 'sa', name: 'SA', sub: '解决方案架构', tone: 'blue' },
  { key: 'se', name: '售前 / SE', sub: '技术销售', tone: 'coral' },
  { key: 'ps', name: '交付 / PS', sub: '专业服务', tone: 'lime' },
  { key: 'csm', name: '客户成功', sub: 'CSM', tone: 'blue' },
  { key: 'be', name: '后端工程师', sub: '产品研发', tone: 'teal' },
  { key: 'algo', name: '算法工程师', sub: '模型研究', tone: 'teal' }
] as const

const DIMS = [
  { name: '写生产代码', note: '提交并进主干、要背 on-call 的那种', lv: [3, 1, 1, 2, 0, 3, 3] },
  { name: '人在客户现场', note: '工位/会议室/机房，物理意义上的在场', lv: [3, 2, 1, 3, 2, 0, 0] },
  { name: '背商业结果', note: '签单、验收、续约、用量，至少沾一头', lv: [2, 2, 3, 3, 3, 0, 0] },
  { name: '能改动产品路线', note: '把现场诉求变成下个版本的功能', lv: [3, 2, 1, 1, 1, 1, 0] },
  { name: '出差强度', note: '一年里不在自己城市的天数', lv: [3, 2, 3, 3, 1, 0, 0] },
  { name: '面对模糊需求的时长', note: '"你先想想我们要什么"这种话听多久', lv: [3, 3, 2, 1, 1, 0, 0] }
] as const

const toneVar = {
  teal: 'var(--accent)',
  coral: 'var(--coral)',
  blue: 'var(--blue)',
  lime: 'var(--lime)'
} as const

const DOT = [0, 1, 2, 3]
</script>

<template>
  <div class="fd-widget" data-listen="skip">
    <div class="fd-widget-head">
      <span class="fd-widget-title">Roles · 六个维度，七个岗位</span>
      <p class="fd-widget-sub">满格 3：这件事基本是该岗位的日常；空格：几乎不归他管</p>
    </div>

    <div class="fd-rm-scroll">
      <div class="fd-rm-grid" :style="{ gridTemplateColumns: `minmax(150px,1.4fr) repeat(${ROLES.length}, minmax(72px,1fr))` }">
        <div class="fd-rm-corner"></div>
        <div v-for="r in ROLES" :key="r.key" class="fd-rm-col">
          <strong :style="{ color: toneVar[r.tone] }">{{ r.name }}</strong>
          <span>{{ r.sub }}</span>
        </div>

        <template v-for="d in DIMS" :key="d.name">
          <div class="fd-rm-rowname">
            <strong>{{ d.name }}</strong>
            <span>{{ d.note }}</span>
          </div>
          <div v-for="(l, i) in d.lv" :key="`${d.name}-${i}`" class="fd-rm-cell" :class="l >= 3 ? 'fd-rm-hot' : ''">
            <span class="fd-rm-dots" aria-hidden="true">
              <i v-for="k in DOT" :key="k" :class="k <= l ? 'fd-rm-on' : ''" :style="k <= l ? { background: toneVar[ROLES[i].tone] } : {}"></i>
            </span>
            <span class="sr-only">{{ ROLES[i].name }}：{{ d.name }} {{ l }} 级，共 3 级</span>
          </div>
        </template>
      </div>
    </div>

    <p class="fd-rm-legend">
      等级是本站按各岗位 JD 的职责描述归纳的<b>相对强度</b>，同一岗位在不同公司差别很大。国内很多"解决方案架构师"其实把前两行同时拉满，
      那更像是没改名的 FDE——差别见 <a href="/what/not-fde">FDE 不是什么</a>。
    </p>

    <p class="fd-cap">
      看第一列而不是看某一行：<b>FDE 是唯一一个同时把"写生产代码""人在现场""能改动产品路线"三格都填满还站着的角色</b>。
      售前写得没你这么深，后端离客户太远，客户成功不写码——这就是为什么六个岗位都容易被叫成 FDE，也都不是。
    </p>
  </div>
</template>

<style scoped>
.fd-rm-scroll {
  overflow-x: auto;
  padding-bottom: 4px;
}

.fd-rm-grid {
  display: grid;
  min-width: 720px;
  border: 1px dashed var(--line-strong);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.fd-rm-corner {
  background: var(--panel-2);
}

.fd-rm-col {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px 8px;
  background: var(--panel-2);
  border-left: 1px dashed var(--line);
  text-align: center;
}

.fd-rm-col strong {
  font-size: 12.5px;
  font-weight: 740;
  letter-spacing: -0.01em;
}

.fd-rm-col span {
  font-family: var(--font-mono);
  font-size: 8.5px;
  letter-spacing: 0.08em;
  color: var(--faint);
}

.fd-rm-rowname {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 12px 12px;
  background: var(--panel);
  border-top: 1px dashed var(--line);
}

.fd-rm-rowname strong {
  font-size: 12.5px;
  font-weight: 700;
  color: var(--ink);
}

.fd-rm-rowname span {
  font-size: 10.5px;
  line-height: 1.5;
  color: var(--muted);
}

.fd-rm-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 6px;
  background: var(--panel);
  border-top: 1px dashed var(--line);
  border-left: 1px dashed var(--line);
}

.fd-rm-hot {
  background: color-mix(in srgb, var(--accent-soft) 70%, var(--panel));
}

.fd-rm-dots {
  display: flex;
  gap: 3px;
}

.fd-rm-dots i {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  border: 1px solid var(--line-strong);
}

.fd-rm-dots i.fd-rm-on {
  border-color: transparent;
}

.fd-rm-legend {
  margin: 14px 0 0;
  font-size: 11.5px;
  line-height: 1.65;
  color: var(--muted);
}

.fd-rm-legend b {
  color: var(--ink-2);
  font-weight: 660;
}

@media (max-width: 620px) {
  .fd-rm-col strong {
    font-size: 11px;
  }

  .fd-rm-dots i {
    width: 7px;
    height: 7px;
  }
}
</style>
