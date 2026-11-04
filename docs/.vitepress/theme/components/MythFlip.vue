<script setup lang="ts">
import { ref } from 'vue'

// 迷思翻转卡：正面是流传的说法，背面是能查到的那一面。
// 点一下翻面。背面标了本站给这句话的可信度处理：A 可核 / B 需限定 / C 追不到一手。

const CARDS = [
  {
    myth: 'FDE 就是换个名字的高级外包',
    claim: '都是驻场写代码，名字好听而已。',
    truth: '差别在三件事：谁定义做什么、代码进不进厂商的产品主干、出问题谁背。FDE 写的东西会回灌成产品功能，外包的交付物按合同边界停在自己的项目里。国内确实有一批岗位名字叫 FDE、合同是驻场外包——判据见「国内现场」那一页。',
    grade: 'B · 看公司，不看 title',
    tone: 'coral'
  },
  {
    myth: '会写提示词就能做 FDE',
    claim: 'AI 时代门槛降低了， prompt 好就能上岗。',
    truth: '提示词是这一行最不值钱的技能。真正卡住交付的是：拿不到干净数据、接不上客户身份体系、算不清成本、上线后没人接得住。这些没有一项能靠 prompt 解决。',
    grade: 'A · 各家 JD 与复盘一致',
    tone: 'coral'
  },
  {
    myth: 'FDE 不用写代码，主要是沟通',
    claim: '就是个懂技术的项目经理。',
    truth: '主流 FDE JD 第一条几乎都是编程语言与工程能力，考核里包含"交付可运行系统"。沟通占比确实高，但它是为了让代码上线，而不是替代代码。',
    grade: 'A · 见 JD 原文清单',
    tone: 'coral'
  },
  {
    myth: '这个岗位是 2024 年 AI 造出来的新工种',
    claim: 'OpenAI 一设这个岗，全世界开始跟着招。',
    truth: 'Palantir 早在 2000 年代就把 Forward Deployed Engineer 作为交付主力，AI 时代只是把这个模式套到了大模型上，让原本只在数据分析圈存在的 title 出圈了。',
    grade: 'A · 岗位名有公开出处',
    tone: 'teal'
  },
  {
    myth: '大部分企业 AI 项目都会失败',
    claim: '有研究说 95% 的生成式 AI 试点没产生回报。',
    truth: '这个数字流传极广，但它统计的是"企业自主项目的报道口径"，样本、定义和结论都被质疑过。可以用它说明"落地很难"，不可以用它证明"这行没前途"。本站在正文里只按"流传说法"引用。',
    grade: 'C · 追不到可靠一手',
    tone: 'coral'
  },
  {
    myth: 'FDE 干两年就能去创业',
    claim: '见过真实需求，是最好的创业预备班。',
    truth: '这条有真依据：确有部分创业者出身这类现场岗位。但"见过需求"和"能做出人愿意付钱的东西"之间，还差一次完整的交付——和你在 FDE 岗位上刚练完的那件事不同，这次没有客户给你出服务器钱。',
    grade: 'B · 有个案，没有成功率',
    tone: 'blue'
  },
  {
    myth: '出差越多越说明你重要',
    claim: '一年 200 天在客户现场，是被需要的证明。',
    truth: '出差强度高常常意味着交付方式还没产品化，或者销售在拿你当合同里的赠品。它是信号，不是勋章。',
    grade: 'B · 从业者自述，无统计',
    tone: 'lime'
  },
  {
    myth: '国内没有真正的 FDE 岗位',
    claim: '中国只有"交付工程师"和"售前"，FDE 是翻译过来的概念。',
    truth: '国内确实有公司在挂这个 title，也有大量岗位用别的名字干同样的事。更靠谱的看法是：判断岗位不看叫什么，看三件事——能不能自己定义做什么、代码归谁、出了事故谁被半夜叫醒。',
    grade: 'B · 岗位形态在变，口径未统一',
    tone: 'blue'
  }
] as const

const openList = ref<number[]>([])

const toggle = (i: number) => {
  openList.value = openList.value.includes(i)
    ? openList.value.filter((x) => x !== i)
    : [...openList.value, i]
}

const isOpen = (i: number) => openList.value.includes(i)

const toneVar = {
  teal: 'var(--accent)',
  coral: 'var(--coral)',
  blue: 'var(--blue)',
  lime: 'var(--lime)'
} as const
</script>

<template>
  <div class="fd-widget" data-listen="skip">
    <div class="fd-widget-head">
      <span class="fd-widget-title">Myths · 八张牌，翻过来读</span>
      <p class="fd-widget-sub">点卡片翻面：背面是本站能查到的那一面，以及这句话的等级</p>
    </div>

    <div class="fd-mf-grid">
      <button
        v-for="(c, i) in CARDS"
        :key="c.myth"
        type="button"
        class="fd-mf-card"
        :class="{ 'is-open': isOpen(i) }"
        :aria-expanded="isOpen(i)"
        :style="{ borderTopColor: toneVar[c.tone] }"
        @click="toggle(i)"
      >
        <span class="fd-mf-side">
          <span class="fd-mf-tag">流传的说法</span>
          <strong>「{{ c.myth }}」</strong>
          <span class="fd-mf-claim">{{ c.claim }}</span>
          <span class="fd-mf-hint">点开翻面 →</span>
        </span>
        <span class="fd-mf-side fd-mf-side--back">
          <span class="fd-mf-tag">能查到的那一面</span>
          <span class="fd-mf-truth">{{ c.truth }}</span>
          <span class="fd-mf-grade">{{ c.grade }}</span>
        </span>
      </button>
    </div>

    <p class="fd-cap">
      八张牌里只有两张标 A：<b>"这岗位不是新造的"和"提示词不是门槛"</b>。其余要么依赖公司、要么依赖口径。
      这不是说它们全错，而是说：面试或谈 offer 时，把 B 和 C 的句子换成"我在某些公司见过"，说服力反而更高。
    </p>
  </div>
</template>

<style scoped>
.fd-mf-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 12px;
}

.fd-mf-card {
  position: relative;
  display: block;
  width: 100%;
  min-height: 168px;
  padding: 0;
  text-align: left;
  cursor: pointer;
  border: 1px solid var(--line);
  border-top: 3px solid var(--accent);
  border-radius: var(--radius-sm);
  background: var(--panel-2);
  color: inherit;
  font: inherit;
  overflow: hidden;
  transition: transform 0.18s var(--ease), box-shadow 0.18s var(--ease);
}

.fd-mf-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow);
}

.fd-mf-side {
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 15px 16px 16px;
}

.fd-mf-side--back {
  position: absolute;
  inset: 0;
  background: var(--panel);
  transform: translateY(101%);
  transition: transform 0.24s var(--ease);
}

.is-open .fd-mf-side--back {
  transform: translateY(0);
}

.fd-mf-tag {
  font-family: var(--font-mono);
  font-size: 8.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--faint);
}

.fd-mf-card strong {
  font-size: 14px;
  font-weight: 730;
  line-height: 1.4;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.fd-mf-claim {
  font-size: 11.5px;
  line-height: 1.6;
  color: var(--muted);
}

.fd-mf-hint {
  margin-top: auto;
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.1em;
  color: var(--accent);
}

.fd-mf-truth {
  font-size: 11.5px;
  line-height: 1.7;
  color: var(--ink-2);
}

.fd-mf-grade {
  margin-top: auto;
  align-self: flex-start;
  padding: 3px 8px;
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.06em;
  color: var(--ink-2);
}

@media (max-width: 620px) {
  .fd-mf-card {
    min-height: 190px;
  }
}
</style>
