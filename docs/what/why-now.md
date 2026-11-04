---
title: '为什么是现在：AI 落地卡在哪儿，岗位就长在哪儿'
description: '模型能力、编码代理、试点到生产的漏斗、企业预算四条线交汇，才让"一个人去客户现场"这件事第一次算得过账。'
---

# 为什么是现在

同一个岗位名，2015 年是 Palantir 的编制，2026 年变成所有 AI 公司都在招。中间发生了什么？

答案是四件事同时到位了。缺任何一件，这个岗位都养不起。

<GapCliff />

::: warning 这条曲线没有单位
纵轴是本站画的示意形状，不是量出来的分数（阶段名称来自各家 JD 与从业者复盘里反复出现的词）。它想说明的只有一件事：**双方信心最低的地方，不是模型最笨的时候，是"要拿真实数据跑、要有人签字"的时候。**
:::

## 第一条：企业买了，但用不起来

这是需求侧。三条机构口径，都能回溯：

- Gartner 2024-07 新闻稿：预测到 2025 年底至少 30% 的生成式 AI 项目会在 POC 之后被放弃，原因是数据质量差、风险控制不足、成本攀升、业务价值不清晰 `[A]`。
- Gartner 2025-06：预测到 2027 年底超过 40% 的 agentic AI 项目会被取消 `[A]`。
- RAND 2024：超过 80% 的 AI 项目失败，约为普通 IT 项目失败率的两倍；基于 65 次访谈归纳的五条根因里，第一条是「缺乏领导支持」，第三条是「数据质量」`[A]`。

MIT NANDA 那份工作论文更精确地指出了错位的形状：**约 95% 的组织没有从 300–400 亿美元的投入里拿到可衡量的损益影响**；漏斗大约是 60% 进入评估 → 20% 进入试点 → 5% 进入生产。主笔 Aditya Challapally 描述的现象是「高管宣称成功、员工说几乎根本没在用」，同时约 90% 的员工在用**自己带进来的**个人 AI 工具 `[A]`。

翻译成人话：**买方不缺预算，缺一个能把东西接进去的人。**

## 第二条：一个人真的能干活了

这是供给侧，也是最关键的一条。具名从业者 ha7ch 的判断，原文照录：

> "Coding Agent is precondition for FDE wave: one person + Agent replaces full team, slashing cost from millions to hundreds of thousands."
> 来源：ha7ch.com — Thirteen Questions on FDE `[B]`，访问 2026-11-04

这句话的意思是：**FDE 这门生意以前算不过账。** 派驻一个五人小队三个月，成本压不住，只能服务付得起天价的客户（这就是 Palantir 早年的客户结构）。现在一个人带着编码代理，能在客户环境里同时做集成、写前端、跑数据、补测试——成本降一个数量级，于是「服务中型客户」第一次可行。

同一篇文章的另外三条也在解释这个岗位的性质：「FDE 从模糊问题开始，以业务结果结束，而不只是代码」；「FDE 与外包的区别在于把收入绑定在客户结果上，而不是功能完成度上」；「筛选比培训更重要」`[B]`。

## 第三条：AI 应用本身需要新的工程件

模型给的是概率，客户要的是可签字。中间多出来的工程件，五年前不需要，现在需要：

<div class="mp-grid">
  <div class="mp-card">
    <p class="mp-eyebrow">New Artifact 01</p>
    <h2 class="mp-h2">评测集（evals）</h2>
    <p class="mp-lead">不是单元测试：你要回答「这个系统今天答错了多少」，还得让对方信。Anthropic 的《Building effective agents》与 Thoughtworks Technology Radar 都把 evals / LLM Guardrails 列为把原型推向生产的必备件 <code>[A]</code>。招聘侧已经把它写成硬条件：AWS 单独列一条 "Experience with AI tools: eval frameworks, agent tooling, RAG pipelines, and prompt engineering" <code>[A]</code>；本站抓到的 16 份可读正文 JD 里有 <b>7 份</b>提到评测 <code>[A]/[B]</code>。</p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">New Artifact 02</p>
    <h2 class="mp-h2">工具接口（MCP / function calling）</h2>
    <p class="mp-lead">模型要动客户系统，就得有边界清晰的工具。16 份 JD 里 <b>6 份</b>显式写 MCP <code>[A]</code>，Anthropic 直接把交付物写成 "MCP servers, sub-agents, and agent skills" <code>[A]</code>，国内中软国际的 JD 写「交付 MCP 服务器、子代理与 Agent 技能」<code>[B]</code>。</p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">New Artifact 03</p>
    <h2 class="mp-h2">上下文与检索（RAG）</h2>
    <p class="mp-lead">16 份 JD 里 <b>5 份</b>显式写 RAG、3 份写向量库 <code>[A]/[B]</code>。注意口径：<strong>它是高频要求，不是普适要求</strong>，任何写「95% 的 FDE 岗位都要求 RAG」的说法都可以当噪声处理。</p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">New Artifact 04</p>
    <h2 class="mp-h2">成本与时延账本</h2>
    <p class="mp-lead">Google Cloud 的岗要求 "理解 tokens/sec、cost-per-request 等 LLM 原生指标"（二手摘写）<code>[B]</code>；Baseten 官方博客把这件事写成产品承诺："Forward-deployed engineers tune deployments to your latency targets" <code>[A]</code>。会算这笔账的人，才有资格说「这个用例值不值得上线」。</p>
  </div>
</div>

## 第四条：厂商把预算和编制都摆上桌

这条在[身世页](/what/origin)已经摊开过，这里只留一句：**微软 25 亿美元 / 6,000 人、AWS 10 亿美元、OpenAI 牵头超 40 亿美元建 DeployCo、Anthropic 1 亿美元建学院** `[A]`。YC 的 Jared Friedman 说「超过 100 家 YC 公司在招 FDE」，而三年前基本为零 `[A]`。

资本砸钱有两种可能：一是发现了新生产方式，二是追一个词。判断依据看第 3 页那张表——**这些钱投的是「人 + 交付方法」，不是「模型能力」**。如果瓶颈在模型，钱会进实验室。

## 一条来自现场的反证

别把上面四条读成「所以这岗位稳了」。Barry Zhang（前 Palantir）给出的成立条件非常苛刻，原文照录，三条缺一都别学 `[B]`：

1. 市场必须能收 "extremely high prices"；
2. 客户 "don't actually know the thing to build"；
3. 平台要为 "extensibility" 而设计。

他的另一句是这一页最该配的对冲：**试点期的利润率可能 "literally negative infinity"**，对绝大多数公司的答案是 "absolutely f%#&ing not!" `[B]`。

Bob McGrew 也讲过同一个方向的事实：早期 FDE 带着演示去现场，经常被客户当场判定为「和我们干的活没关系」`[A]`。**演示不能替代 discovery**——这是岗位存在的原因，也是它容易做得很差的原因。

<div class="mp-band">
  <div class="mp-band-card">
    <p class="mp-eyebrow">这一页的判断</p>
    <h2 class="mp-h2">风口不在模型，在最后一公里</h2>
    <p class="mp-lead">四条线里，<b>只有第二条是新的</b>：编码代理把「一个人」变成可行单位。第一条（企业用不起来）、第三条（新工程件）、第四条（厂商砸钱）都是它的配菜。所以转行的人该把力气花在<b>能被代理放大的那部分能力</b>上：判断问题、抠数据、做评测、跟人对齐——而不是背 20 个框架名。</p>
  </div>
</div>

## 接着读

- [技术栈地图：六层，各要挖多深](/stack/ai)
- [现场生命周期：五个阶段各自的死法](/field/lifecycle)
- [FDE 不是什么：别投错岗位](/what/not-fde)
- [硬数字速查表](/evidence/numbers)
