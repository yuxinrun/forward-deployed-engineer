---
title: '任职要求逐条拆：一份真实 JD 里每一句在说什么'
description: '把 AWS、Anthropic、Vercel、Palantir、腾讯、中软的招聘正文拆开对照：哪些是硬门槛、哪些是关键词堆砌、哪些数字其实各家自相矛盾。'
---

# 任职要求逐条拆

这一页不讲道理，只把原文摊在桌上。我们抓到 30+ 条真实 FDE 招聘记录，其中 **16 份能读到任职要求正文**，下面所有计数都以这 16 份为分母。

::: tip 先看清分母
「16 份可读正文」不等于「市场上 FDE 岗的分布」。中文招聘站（BOSS 直聘、猎聘、中软国际等）多为 JS 动态页或直接 403，只取到快照的条目一律降级为 `[B]`，不进入分母。**所以这张图能用来拆「哪些词是真门槛」，不能用来算「行业需要多少人」。**
:::

<JdFreq />

## 拆一条完整的：AWS 高级 FDE（岗位号 10517491）

这是本次唯一抓到整页正文、且薪资与差旅都写明的云厂 JD `[A]`。逐句翻译成人话：

| JD 原句 | 它在筛什么 | 你要准备的证据 |
|---|---|---|
| "A Forward Deployed Engineer (FDE) embeds directly inside a strategic enterprise customer to design, build, deploy, and run AI-powered production systems alongside the customer's engineering team." | 定义句：嵌入、生产系统、和客户团队一起 | 一段你真的在别人系统里跑起来过东西的经历 |
| "FDEs write production-grade software and own outcomes end-to-end, from prototype through enterprise-scale deployment" | 代码要进主干 + 责任端到端 | 你能说出上线之后谁在维护、出了事怎么回滚 |
| "combining the technical rigor of an AWS SDE with the urgency and ownership required to deliver measurable customer business outcomes" | 工程严谨 + 业务结果可衡量 | 至少一个「指标 → 你做了什么 → 数字变化」的完整故事 |
| "5+ years of leading design or architecture (design patterns, reliability and scaling)" | 资历线：主导过设计，不是参与 | 你画过并被实现过的架构，最好有改版记录 |
| "Experience as a mentor, tech lead or leading an engineering team" | 带人 / 带过一小块 | 带教、评审、拆任务的具体例子 |
| "Experience leading agentic and spec-driven development at production scale (developing AI agents a plus)" | 2024 之后的新指纹 | 你写过的 Agent，以及它的失败模式 |
| "Experience with AI tools: eval frameworks, agent tooling, RAG pipelines, and prompt engineering" | 评测被写成独立资格条 | 你的评测集、通过率、灰度方式 |
| "Requires 30–50% travel." | 物理成本 | 想清楚自己的生活能不能接 |
| "Bachelor's degree in computer science or **equivalent**"（列在 Preferred） | 学历是优先项不是门槛 | 没有学位就用作品与上线经历替代 |

::: warning 同一家公司的另一份 JD 写 "Requires up to 25% travel"
岗位号 10585968（模型定制与优化方向）`[A]`。这不是矛盾，是**两个团队按不同方式排班**。你要问的是自己那条线的排班，不是"行业惯例"。
:::

## 门槛其实差异极大：三个极端样本

<div class="mp-grid">
  <div class="mp-card">
    <p class="mp-eyebrow">最低 · Palantir FDSE</p>
    <h2 class="mp-h2">"1+ years of relevant, post-college work experience."</h2>
    <p class="mp-lead">官方 Lever 页原文 <code>[A]</code>。同一条 JD 里还写差旅 "up to 25%, as needed to client sites, but <strong>flexible based on personal preferences</strong>"，base "$135,000 - $200,000/year" <code>[A]</code>。</p>
    <p class="mp-lead">注意别误会：门槛低不代表好进，它代表<strong>这家愿意自己培养</strong>。同一条 JD 还写着 "your responsibilities look similar to those of a startup CTO"（媒体转引）<code>[B]</code>——职责重、年限低，靠的是内部训练体系。</p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">中间 · Anthropic FDE</p>
    <h2 class="mp-h2">"4+ years of experience in a technical, customer facing role"</h2>
    <p class="mp-lead">镜像招聘页逐字 <code>[A]</code>，薪资字段 "Salary: $200,000—$300,000 USD"，差旅 "Travel frequently (25-50%)"，另加 "25% in-office minimum" <code>[A]/[B]</code>。</p>
    <p class="mp-lead">Greenhouse 另一个同名片段写 3+ 年 <code>[B]</code>。<strong>不同 posting、不同城市、不同年份的区间可以差一倍。</strong> 别把任何一条当"标准门槛"。</p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">最高 · Vercel Sr FDE</p>
    <h2 class="mp-h2">"6+ years … including 2+ years in a customer-facing technical role"</h2>
    <p class="mp-lead">原文还把可迁移来源点名了："consulting, solutions architecture, forward-deployed engineering, or technical founder" <code>[A]</code>。SF base "$137,000.00 - $207,000.00"（另有股权）<code>[A]</code>。</p>
    <p class="mp-lead">这一条对转型者最有价值：<b>它直接告诉你哪四种背景算对口。</b></p>
  </div>
</div>

<div class="mp-quote">
  <p>Metal（YC）甚至在岗位页把经验要求写成 "Any (new grads ok)" <code>[B]</code>；而国内 50+ 份 JD 的汇总口径写「经验要求集中在 5–10 年，不是新人岗」<code>[C]</code>。</p>
  <footer>两头都存在，所以「FDE 是不是新人岗」这个问题问错了 —— 要问的是「我投的那一家在筛什么人」。</footer>
</div>

## 学历：比想象中宽松

16 份可读正文里，明确写「本科及以上」的只有 **5 份**，把专业限定为 CS/数据科学的只有 **3 份** `[A]/[B]`。

- AWS：学位列在 **Preferred**，且写 "or equivalent" `[A]`。
- Vercel：通篇不要求学历 `[A]`。
- Roboflow：不要求学位，改写成 "You're a tinkerer outside of work." 和 "Meaningful experience deploying technology in physical-world environments." `[A]`
- 中软国际：本科，但把开源项目、技术博客、已上线的生产级 LLM 产品列为**优先** `[B]`。
- 反例提醒：Novartis 的 FDE 岗反而要求生物/生物工程/生物信息学背景 + 8 年以上经验 `[B]`（快照）。**药企招的 FDE 首先要是懂药的人。**

::: tip 自学/无学位的人该往哪使劲
把 JD 里那些「优先项」变成可点击的东西：一个能被别人跑起来的开源项目、一篇写清踩坑过程的技术文章、一个已经上线并且有人用的 Agent。中软、Vercel、Roboflow 三家都把这类证据写进了加分项 `[A]/[B]`。
:::

## 拆 JD 的三问（可当 checklist 用）

<div class="mp-steps">
  <div class="mp-step">
    <b>01</b>
    <div>
      <strong>代码归谁</strong>
      <p>搜这几个字：生产级、测试、CI/CD、版本控制、"production-grade software"。有 → 真的写代码；只有「方案」「配置」「支持」→ 大概率是实施或售前。</p>
    </div>
  </div>
  <div class="mp-step">
    <b>02</b>
    <div>
      <strong>责任止于哪</strong>
      <p>看句尾。"own outcomes end-to-end" <code>[A]</code>、「上线后效果谁负责」= 端到端；「方案交付后移交实施团队」<code>[C]</code>、「按期验收」= 不负责到底。</p>
    </div>
  </div>
  <div class="mp-step">
    <b>03</b>
    <div>
      <strong>信号回不回</strong>
      <p>看有没有「反哺产品 / 沉淀可复用资产 / feed it directly back to our Product」<code>[A]</code>。没有，你就是工时售卖；有，你才在工程序列里。Valletta 那句最实用："Ask whether the role sits in engineering or in professional services. That single fact predicts the band, the ladder and whether you get to influence the product." <code>[A]</code></p>
    </div>
  </div>
</div>

一条实测支持：Databricks 的 FDE 岗位在自家岗位数据里被归入 "Professional Services Operations" 部门 `[B]`，而它的官方博客把这个团队叫 Forward Deployed Engineering `[A]`。**同一个团队，两个体系里的身份不一样——这就是第三问为什么重要。**

## 红旗清单

<div class="mp-grid">
  <div class="mp-card">
    <p class="mp-eyebrow">Red Flag 01</p>
    <h2 class="mp-h2">一行里塞满热词</h2>
    <p class="mp-lead">「精通上下文工程、RAG、MCP、SDD、Harness 工程」<code>[B]</code>——国内某大厂 JD 的真实一行。热词堆得越密，越可能是 HR 从别人 JD 里抄的。看它有没有写<b>交付物</b>。</p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">Red Flag 02</p>
    <h2 class="mp-h2">把售前职责写进来</h2>
    <p class="mp-lead">德勤某条 FDE 岗的 JD 里出现「报价与投标支持」<code>[C]</code>。Valletta 的判语更直接："Some postings labelled forward deployed engineer are presales roles with a rebrand." <code>[A]</code></p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">Red Flag 03</p>
    <h2 class="mp-h2">"一次招 20 个"</h2>
    <p class="mp-lead">从业者自述：「没见过哪个团队能一口气带 20 个真 FDE，师傅都不够分」<code>[C]</code>。带教能力是这个岗位的物理限制，Anthropic 用住院医师制培训不是作秀 <code>[A]</code>。</p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">Green Flag</p>
    <h2 class="mp-h2">写清「不负责什么」</h2>
    <p class="mp-lead">有用人方在 JD 里明确写"不负责售前商务谈判、不负责 7x24 小时运维值班、不负责跨部门资源协调"<code>[C]</code>。敢划边界的团队，通常真的懂这个岗位怎么做。</p>
  </div>
</div>

## 简历方向：一条来自从业者共识的提醒

<div class="mp-quote">
  <p>"如果你想以工程师身份入职 Anthropic，不要按照传统 AI 实验室的风格撰写简历，要对标基础设施类企业的招聘要求，重点展示你实际搭建、落地并完成规模化迭代的系统项目。"</p>
  <footer>—— 对 Anthropic 1,680 份工程师简历的分析报道 <code>[C]</code>（自媒体口径，只作方向参考）</footer>
</div>

本站认同这个方向，理由是 JD 自己就这么写：AWS 要 "own outcomes end-to-end" `[A]`、Metal 要 "You ship production software… You build with AI, you don't just follow it" `[A]`。<b>他们买的是「东西真的跑起来了」的经历，不是「我懂模型」的表述。</b>

## 接着读

- [硬技能：十项能力，哪些进门就得会](/job/hard-skills)
- [软技能：五个对话对象，五套语言](/job/soft-skills)
- [职级与薪资带](/job/leveling)
- [面试到底怎么考](/path/interview)
