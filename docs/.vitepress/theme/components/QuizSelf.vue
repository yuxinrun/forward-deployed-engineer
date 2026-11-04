<script setup lang="ts">
import { computed, ref } from 'vue'

// 适配度自评：十个场景题，选最像你的那个。
// 这是本站给的自我检查工具，不是招聘筛选标准，也不预测你能不能拿到 offer。

type Opt = { t: string; p: number }
type Q = { dim: string; q: string; opts: Opt[] }

const QS: Q[] = [
  {
    dim: '模糊耐受',
    q: '客户说"我们想要个 AI 助手，你看着办"。你的第一反应是：',
    opts: [
      { t: '先开三天需求会，把场景逼到一个能验收的动作', p: 3 },
      { t: '先做一个通用问答机器人，边用边改', p: 2 },
      { t: '回去等对方想清楚，别浪费工时', p: 1 },
      { t: '心里骂一句"这不就是没说需求吗"，然后还是等', p: 0 }
    ]
  },
  {
    dim: '工程手感',
    q: '交付时间只剩两天，代码还没测。你会：',
    opts: [
      { t: '砍范围，把一条主链路测干净再上线', p: 3 },
      { t: '通宵硬堆，先全做完再说', p: 1 },
      { t: '找产品/客户谈判延期', p: 2 },
      { t: '先看能不能借测试资源，同时报风险', p: 3 }
    ]
  },
  {
    dim: '与人打交道',
    q: '会上业务方当着领导说"你们这个东西不好用"。你通常：',
    opts: [
      { t: '追问"具体哪一步"，当场约一次跟着他做一遍', p: 3 },
      { t: '解释我们的设计逻辑', p: 1 },
      { t: '会后单独找他聊', p: 2 },
      { t: '记下来回头改', p: 1 }
    ]
  },
  {
    dim: '现场容忍',
    q: '客户内网、没有外网、装个依赖要审批三周。你：',
    opts: [
      { t: '提前把离线包和依赖清单当交付物准备，接受慢', p: 3 },
      { t: '想办法绕（自己的热点/私人笔记本）', p: 0 },
      { t: '向甲方施压要求开白名单', p: 2 },
      { t: '先烦躁两天，再认命', p: 1 }
    ]
  },
  {
    dim: '学习速度',
    q: '这周你需要用一套完全没接触过的工具链。你会：',
    opts: [
      { t: '一天内跑通最小闭环，剩下靠官方文档和源码', p: 3 },
      { t: '找门课系统学两周再动手', p: 1 },
      { t: '先问组里谁用过', p: 2 },
      { t: '等公司安排培训', p: 0 }
    ]
  },
  {
    dim: '责任心',
    q: '系统上线两周了，半夜告警。你的态度：',
    opts: [
      { t: '是我交付的，我先看，再决定拉谁', p: 3 },
      { t: '有运维/oncall 值班体系，按流程走', p: 2 },
      { t: '第二天上班处理', p: 0 },
      { t: '先复盘为什么会告警，把这条链路改掉', p: 3 }
    ]
  },
  {
    dim: '商业意识',
    q: '客户问"这个功能加上去要多少钱、什么时候能验收"。你：',
    opts: [
      { t: '能给范围、人力、风险三件套，并说明哪些要走商务', p: 3 },
      { t: '让销售回答，我只管技术', p: 0 },
      { t: '估个人日给过去', p: 1 },
      { t: '先问清"不做会怎样"，再决定要不要加', p: 3 }
    ]
  },
  {
    dim: '写作',
    q: '你写的方案文档，通常是：',
    opts: [
      { t: '客户法务/IT 能照着评审通过的那一种', p: 3 },
      { t: '给自己看的注释和草图', p: 0 },
      { t: '周报和里程碑记录', p: 2 },
      { t: '复盘里连自己踩的坑一起写', p: 3 }
    ]
  },
  {
    dim: '生活安排',
    q: '一年里 60–100 天不在自己城市，你的真实感受：',
    opts: [
      { t: '可以，甚至喜欢换环境', p: 3 },
      { t: '能接受，但要有上限和补贴', p: 2 },
      { t: '看阶段，孩子/老人/伴侣的事优先', p: 1 },
      { t: '基本不行，会直接影响我干这活的质量', p: 0 }
    ]
  },
  {
    dim: '自我定位',
    q: '项目成功时，你最想让谁知道？',
    opts: [
      { t: '客户业务方 + 我的产品团队', p: 3 },
      { t: '我的直属领导', p: 1 },
      { t: '我自己知道就行', p: 1 },
      { t: '下一个有同样问题的客户', p: 3 }
    ]
  }
]

const DIMS = [...new Set(QS.map((q) => q.dim))]
const answers = ref<(number | null)[]>(QS.map(() => null))

const pick = (qi: number, p: number) => {
  const next = [...answers.value]
  next[qi] = p
  answers.value = next
}

const answered = computed(() => answers.value.filter((a) => a !== null).length)
const total = computed(() => answers.value.reduce<number>((s, a) => s + (a ?? 0), 0))
const maxTotal = QS.length * 3

const dimScore = computed(() =>
  DIMS.map((d) => {
    const idx = QS.map((q, i) => ({ q, i })).filter((x) => x.q.dim === d)
    const got = idx.reduce((s, x) => s + (answers.value[x.i] ?? 0), 0)
    return { dim: d, got, max: idx.length * 3 }
  })
)

const verdict = computed(() => {
  const pct = total.value / maxTotal
  if (pct >= 0.8)
    return {
      name: '现在就可以开始投递',
      body: '你的取向和这个岗位的日常高度重合。缺的通常只是"一个能讲完整的现场项目"——按十二周计划补一个，然后去面试。'
    }
  if (pct >= 0.6)
    return {
      name: '先补两块，别裸转',
      body: '大方向合适，但有一两项明显偏低。把它们当成接下来三个月的练习目标（尤其是"模糊耐受"和"与人打交道"偏低的人：先在内部找一个业务同事做交付，别直接跳去乙方）。'
    }
  if (pct >= 0.4)
    return {
      name: '你可能想要的是它的邻近岗位',
      body: '你喜欢解决真问题，但不太喜欢这个岗位的相处方式。可以看看解决方案架构师、平台工程、技术项目经理——活儿有重叠，代价不一样。'
    }
  return {
    name: '坦白说，这个岗位会让你难受',
    body: '这不是能力问题，是偏好问题。低分集中在"现场容忍""生活安排""自我定位"上的人，硬转过来通常一年内就会想回去——那不如先在现在的工作里，主动接一次端到端的对客交付试试。'
  }
})
</script>

<template>
  <div class="fd-widget fd-quiz" data-listen="skip">
    <div class="fd-widget-head">
      <span class="fd-widget-title">Quiz · 十题自评</span>
      <p class="fd-widget-sub">已答 {{ answered }} / {{ QS.length }}（本题只是自我检查，不是招聘标准）</p>
    </div>

    <ol class="fd-q-list">
      <li v-for="(q, qi) in QS" :key="q.q" class="fd-q">
        <p class="fd-q-head">
          <span class="fd-q-num">{{ String(qi + 1).padStart(2, '0') }}</span>
          <span class="fd-q-dim">{{ q.dim }}</span>
        </p>
        <p class="fd-q-text">{{ q.q }}</p>
        <div class="fd-q-opts">
          <button
            v-for="o in q.opts"
            :key="o.t"
            type="button"
            class="fd-q-opt"
            :class="{ 'is-on': answers[qi] === o.p }"
            :aria-pressed="answers[qi] === o.p"
            @click="pick(qi, o.p)"
          >
            {{ o.t }}
          </button>
        </div>
      </li>
    </ol>

    <div v-if="answered === QS.length" class="fd-q-result">
      <p class="fd-q-score">
        <strong>{{ total }}</strong>
        <span>/ {{ maxTotal }} 分</span>
      </p>
      <h4>{{ verdict.name }}</h4>
      <p>{{ verdict.body }}</p>
      <ul class="fd-q-dims">
        <li v-for="d in dimScore" :key="d.dim">
          <span class="fd-q-dimname">{{ d.dim }}</span>
          <span class="fd-q-track">
            <span class="fd-q-fill" :style="{ width: `${(d.got / d.max) * 100}%` }"></span>
          </span>
          <span class="fd-q-val">{{ d.got }}/{{ d.max }}</span>
        </li>
      </ul>
      <p class="fd-q-again">
        <button type="button" class="fd-q-reset" @click="answers = QS.map(() => null)">重做一次</button>
        分数不高不丢人——它只说明你现在更适合哪一种活法。
      </p>
    </div>

    <p v-else class="fd-cap">把十题都选完，下面会出现你的分数与解读。</p>
  </div>
</template>

<style scoped>
.fd-q-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 18px;
}

.fd-q {
  padding-bottom: 16px;
  border-bottom: 1px dashed var(--line);
}

.fd-q-head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 4px;
}

.fd-q-num {
  font-family: var(--font-mono);
  font-size: 15px;
  color: var(--line-strong);
}

.fd-q-dim {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
}

.fd-q-text {
  margin: 0 0 10px;
  font-size: 14px;
  font-weight: 660;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: var(--ink);
}

.fd-q-opts {
  display: grid;
  gap: 7px;
}

.fd-q-opt {
  text-align: left;
  padding: 9px 12px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--panel);
  color: var(--ink-2);
  font: inherit;
  font-size: 12.5px;
  line-height: 1.55;
  cursor: pointer;
  transition: border-color 0.16s var(--ease), background 0.16s var(--ease), transform 0.16s var(--ease);
}

.fd-q-opt:hover {
  transform: translateY(-1px);
  border-color: color-mix(in srgb, var(--accent) 55%, var(--line));
}

.fd-q-opt.is-on {
  border-color: var(--accent);
  background: var(--accent-soft);
  color: var(--ink);
  font-weight: 620;
}

.fd-q-result {
  margin-top: 22px;
  padding: 20px;
  border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
  border-radius: var(--radius);
  background: var(--panel-2);
}

.fd-q-score {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin: 0;
}

.fd-q-score strong {
  font-size: 2rem;
  font-weight: 760;
  letter-spacing: -0.04em;
  color: var(--ink);
}

.fd-q-score span {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--faint);
}

.fd-q-result h4 {
  margin: 6px 0 0;
  font-size: 17px;
  font-weight: 740;
  letter-spacing: -0.02em;
  color: var(--accent);
}

.fd-q-result p {
  margin: 8px 0 0;
  font-size: 13px;
  line-height: 1.75;
  color: var(--ink-2);
}

.fd-q-dims {
  display: grid;
  gap: 6px;
  margin: 16px 0 0;
  padding: 14px 0 0;
  list-style: none;
  border-top: 1px dashed var(--line-strong);
}

.fd-q-dims li {
  display: grid;
  grid-template-columns: 88px 1fr 44px;
  align-items: center;
  gap: 10px;
}

.fd-q-dimname {
  font-size: 11.5px;
  color: var(--muted);
}

.fd-q-track {
  height: 7px;
  border-radius: 999px;
  background: var(--panel-3);
  overflow: hidden;
}

.fd-q-fill {
  display: block;
  height: 100%;
  border-radius: 999px;
  background: var(--accent);
}

.fd-q-val {
  font-family: var(--font-mono);
  font-size: 9.5px;
  color: var(--faint);
  text-align: right;
}

.fd-q-again {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 16px;
  font-size: 11.5px;
  color: var(--muted);
}

.fd-q-reset {
  padding: 7px 14px;
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  background: transparent;
  color: var(--ink);
  font: inherit;
  font-size: 11.5px;
  font-weight: 620;
  cursor: pointer;
}

.fd-q-reset:hover {
  border-color: var(--accent);
  background: var(--accent-soft);
}

@media (max-width: 620px) {
  .fd-q-dims li {
    grid-template-columns: 76px 1fr 40px;
  }
}
</style>
