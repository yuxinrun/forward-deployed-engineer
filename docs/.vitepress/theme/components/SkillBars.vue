<script setup lang="ts">
// 能力三条：同一件事，"入门就该会"、"干一年后再会"、"可以让别人替你扛"，强度完全不同。
// 分数 0–5 由本站按抓到的 FDE / AI 落地类 JD 里"任职要求"的措辞归纳：
// 明确写"必须/熟练"记高分，写"熟悉/了解"居中，压根没提的低分。不是问卷统计。

type Series = 'must' | 'later' | 'borrow'

const LEGEND: { key: Series; name: string; desc: string; tone: string }[] = [
  { key: 'must', name: '进门就得会', desc: 'JD 里用"必须 / 熟练 / strong"这类词', tone: 'var(--accent)' },
  { key: 'later', name: '干一年后再会', desc: '现场逼出来的能力，面试不太考', tone: 'var(--blue)' },
  { key: 'borrow', name: '可以让别人扛', desc: '团队里通常有专人，你知道原理就够', tone: 'var(--coral)' }
]

type Row = { name: string; note: string; v: Record<Series, number> }

const ROWS: Row[] = [
  { name: '写生产级的代码', note: 'Python / TypeScript / SQL，能进主干、有人 review', v: { must: 5, later: 5, borrow: 0 } },
  { name: '数据这关过得去', note: '建模、脏数据、口径、join 出来的东西能不能信', v: { must: 4, later: 5, borrow: 1 } },
  { name: '接口与身份集成', note: 'REST / 队列 / SSO / OAuth / 权限模型', v: { must: 4, later: 4, borrow: 2 } },
  { name: '把服务跑起来', note: '容器、CI、基础设施、日志与监控', v: { must: 3, later: 4, borrow: 2 } },
  { name: 'AI 应用这一层', note: 'RAG、工具调用、Agent、上下文工程、评测', v: { must: 4, later: 5, borrow: 1 } },
  { name: '当场搭个能用的界面', note: 'Streamlit / Retool / 一个前端壳子', v: { must: 3, later: 3, borrow: 3 } },
  { name: '把模糊需求问清楚', note: '访谈、拆假设、写成一页纸让对方签字', v: { must: 2, later: 5, borrow: 0 } },
  { name: '管住对方的预期', note: '敢说"这个做不到"，并且给出替代方案', v: { must: 1, later: 5, borrow: 0 } },
  { name: '算钱与算延迟', note: 'token 成本、并发、P95，能不能报出一个数', v: { must: 2, later: 4, borrow: 1 } },
  { name: '写让人读完的文档', note: '方案、周报、风险清单、复盘', v: { must: 2, later: 4, borrow: 0 } }
]

const seriesTone: Record<Series, string> = {
  must: 'var(--accent)',
  later: 'var(--blue)',
  borrow: 'var(--coral)'
}

const width = (n: number) => `${(n / 5) * 100}%`
</script>

<template>
  <div class="fd-widget" data-listen="skip">
    <div class="fd-widget-head">
      <span class="fd-widget-title">Skills · 十条能力，三种紧迫度</span>
      <p class="fd-widget-sub">长度 = 强度（0–5），不是"占比"</p>
    </div>

    <ul class="fd-sb-legend">
      <li v-for="l in LEGEND" :key="l.key">
        <i :style="{ background: l.tone }"></i>
        <strong>{{ l.name }}</strong>
        <span>{{ l.desc }}</span>
      </li>
    </ul>

    <div class="fd-sb-table">
      <div v-for="r in ROWS" :key="r.name" class="fd-sb-row">
        <div class="fd-sb-name">
          <strong>{{ r.name }}</strong>
          <span>{{ r.note }}</span>
        </div>
        <div class="fd-sb-bars">
          <div v-for="l in LEGEND" :key="l.key" class="fd-sb-line">
            <span class="fd-sb-track">
              <span class="fd-sb-fill" :style="{ width: width(r.v[l.key]), background: seriesTone[l.key] }"></span>
            </span>
            <span class="fd-sb-num">{{ r.v[l.key] }}</span>
          </div>
        </div>
      </div>
    </div>

    <p class="fd-cap">
      看最后四行：<b>"问清楚需求""管住预期""算钱""写文档"在入门那一刻全是低分，一年后被逼到满分</b>。
      前六行决定你能不能拿到 offer，后四行决定你能不能在这个岗位上活下来——这也是为什么转行的人常常"技术没输，输在会议室"。
    </p>
  </div>
</template>

<style scoped>
.fd-sb-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
  margin: 0 0 16px;
  padding: 0;
  list-style: none;
}

.fd-sb-legend li {
  display: flex;
  align-items: baseline;
  gap: 7px;
}

.fd-sb-legend i {
  width: 18px;
  height: 4px;
  border-radius: 2px;
}

.fd-sb-legend strong {
  font-size: 11.5px;
  font-weight: 680;
  color: var(--ink);
}

.fd-sb-legend span {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.04em;
  color: var(--faint);
}

.fd-sb-table {
  display: grid;
  gap: 14px;
}

.fd-sb-row {
  display: grid;
  grid-template-columns: minmax(180px, 240px) 1fr;
  gap: 16px;
  align-items: center;
  padding-bottom: 14px;
  border-bottom: 1px dashed var(--line);
}

.fd-sb-name strong {
  display: block;
  font-size: 13px;
  font-weight: 700;
  color: var(--ink);
}

.fd-sb-name span {
  display: block;
  margin-top: 2px;
  font-size: 11px;
  line-height: 1.55;
  color: var(--muted);
}

.fd-sb-bars {
  display: grid;
  gap: 5px;
}

.fd-sb-line {
  display: flex;
  align-items: center;
  gap: 8px;
}

.fd-sb-track {
  position: relative;
  flex: 1;
  height: 9px;
  border-radius: 999px;
  background: var(--panel-3);
  overflow: hidden;
}

.fd-sb-fill {
  position: absolute;
  inset: 0 auto 0 0;
  border-radius: 999px;
}

.fd-sb-num {
  min-width: 14px;
  font-family: var(--font-mono);
  font-size: 9.5px;
  color: var(--faint);
}

@media (max-width: 760px) {
  .fd-sb-row {
    grid-template-columns: 1fr;
    gap: 8px;
  }
}
</style>
