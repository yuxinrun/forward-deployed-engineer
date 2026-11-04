<script setup lang="ts">
// FDE 时间轴：从一个军事外包项目，到 2026 年几大云厂各砸一笔钱。
// 每条都带证据等级：A 官方一手 / B 具名从业者或严肃媒体 / C 流传口径，正文页有对应出处清单。

const MILESTONES = [
  {
    year: '2000s',
    title: '在战场办公室里长成方法论',
    body: 'Palantir 把工程师直接送进联合作战中心，现场做工具；2007 年前后的 IED 地图工具后来变成平台标配功能。',
    tag: 'B · 从业者自述',
    tone: 'teal'
  },
  {
    year: '2009',
    title: '岗位名已经写进招聘系统',
    body: '能查到的 Palantir Forward Deployed Engineer 招聘需求之一创建于 2009 年 12 月，而且长期挂着没关。',
    tag: 'B · 招聘数据分析',
    tone: 'teal'
  },
  {
    year: '2015–17',
    title: '进到工厂和航空公司',
    body: '空客 A350 产线与 Skywise：驻场者每周 4 天进厂、持续约一年，据自述产能提升约 4 倍。',
    tag: 'B · 本人博客/播客',
    tone: 'blue'
  },
  {
    year: '2022–23',
    title: 'Bootcamp 变成获客方式',
    body: 'AIP Bootcamp 从 2022 年底约 92 场涨到 2023 年底 500+ 场，用客户真实数据当场做工作流。',
    tag: 'C · 厂商口径',
    tone: 'blue'
  },
  {
    year: '2024',
    title: '同一批机构开始警告',
    body: 'Gartner 预测到 2025 年底至少 30% 的生成式 AI 项目会在 POC 之后被放弃；RAND 报告称八成以上 AI 项目不达预期。',
    tag: 'A · 机构报告',
    tone: 'coral'
  },
  {
    year: '2025',
    title: '"95% 失败"这句话出圈',
    body: 'MIT NANDA 工作论文被媒体写成"95% 的生成式 AI 试点失败"，原口径其实是"约 95% 的组织没拿到可衡量的损益影响"。',
    tag: 'A · 原文可查',
    tone: 'coral'
  },
  {
    year: '2026',
    title: '钱和编制一起上桌',
    body: '微软 25 亿美元 Frontier Company、AWS 10 亿美元、OpenAI 牵头超 40 亿美元 DeployCo、Anthropic 1 亿美元学院（目标 2027 年底前 1 万名）。',
    tag: 'A · 官方公告',
    tone: 'lime'
  },
  {
    year: '2026-09',
    title: '招聘量首次可比',
    body: '美国 FDE 岗位发布从 2023 年不足 200 条涨到 2026 年前九个月超过 7,300 条；中位招聘标价 195,456 美元。',
    tag: 'A · Lightcast / CNBC',
    tone: 'lime',
    latest: true
  }
] as const

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
      <span class="fd-widget-title">Timeline · 二十年，从作战中心到财报电话会</span>
      <p class="fd-widget-sub">每条右侧标了证据等级，别把 C 当 A 用</p>
    </div>

    <div class="fd-tl-rail">
      <article
        v-for="m in MILESTONES"
        :key="m.year"
        class="fd-tl-stop"
        :class="{ 'is-latest': m.latest }"
        :style="{ '--stop-color': toneVar[m.tone] }"
      >
        <p class="fd-tl-year">{{ m.year }}</p>
        <span class="fd-tl-dot" aria-hidden="true"></span>
        <h4>{{ m.title }}</h4>
        <p class="fd-tl-body">{{ m.body }}</p>
        <p class="fd-tl-tag">{{ m.tag }}</p>
      </article>
    </div>

    <p class="fd-cap">
      把最后两格并排看：<b>2024 年机构在警告项目会死，2026 年厂商在砸钱建编制</b>。
      这不矛盾——死掉的是"没有人在现场负责到底"的项目，砸钱买的正是"有人负责到底"这件事。这个岗位的时间轴，本质上就是 AI 落地难度被承认的过程。
    </p>
  </div>
</template>

<style scoped>
.fd-tl-rail {
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  gap: 10px;
  position: relative;
  padding-top: 6px;
}

.fd-tl-rail::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 42px;
  border-top: 1px dashed var(--line-strong);
}

.fd-tl-stop {
  position: relative;
  padding-top: 34px;
}

.fd-tl-year {
  margin: 0;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--ink-2);
}

.fd-tl-dot {
  position: absolute;
  left: 0;
  top: 36px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--panel);
  border: 2px solid var(--stop-color);
}

.is-latest .fd-tl-dot {
  background: var(--stop-color);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--stop-color) 22%, transparent);
}

.fd-tl-stop h4 {
  margin: 22px 0 0;
  font-size: 12.5px;
  font-weight: 720;
  line-height: 1.35;
  letter-spacing: -0.015em;
  color: var(--ink);
}

.is-latest h4 {
  color: var(--stop-color);
}

.fd-tl-body {
  margin: 6px 0 0;
  font-size: 11px;
  line-height: 1.6;
  color: var(--muted);
}

.fd-tl-tag {
  margin: 8px 0 0;
  font-family: var(--font-mono);
  font-size: 8.5px;
  letter-spacing: 0.08em;
  color: var(--faint);
}

@media (max-width: 1080px) {
  .fd-tl-rail {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    row-gap: 20px;
  }

  .fd-tl-rail::before {
    display: none;
  }

  .fd-tl-stop {
    padding-top: 0;
    padding-left: 22px;
  }

  .fd-tl-dot {
    top: 4px;
  }

  .fd-tl-stop h4 {
    margin-top: 4px;
  }
}

@media (max-width: 620px) {
  .fd-tl-rail {
    grid-template-columns: 1fr;
    row-gap: 16px;
  }
}
</style>
