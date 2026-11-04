---
title: '十二周练手计划：从零攒出一个能讲的项目'
description: '四条并行轨道——写代码、抠数据、做评测、见人。每周交一份"能拿去讲"的东西，十二周后你能对着面试官说出一个真被三个人用过的系统，以及它每周花多少钱。'
---

# 十二周计划

先说清性质：<b>这是本站给转行者的排期建议，不是任何一家公司的培养方案</b>（没有任何一家公开过 FDE 的新人培养大纲，这条证据缺口在[职级那一页](/job/leveling)也声明过）。

为什么是十二周：初创侧的 JD 把单个交付周期写成 "typically 4–12 weeks per" engagement `[B]`，云厂的组织化模式是"约 45 天一轮" `[B]`。<b>一次真实的最小交付大概就是这个长度</b>，所以把练习排成一次交付的形状，而不是一个课程的形状。

<PlanGantt />

## 四条轨各自对着一栏 JD

这个分法不是凭感觉，四条轨一一对应本站统计过的招聘覆盖数（分母 = 16 份可读正文 JD）：

| 轨道 | 对应 JD 证据 | 为什么要单独立一条 |
| --- | --- | --- |
| 写代码 | Python 11/16、TypeScript 7/16 `[A]/[B]` | 这是入场券，不是差异化 |
| 抠数据 | ETL/数据集成 4/16、SQL 显式 3/16，但"脏数据/多源异构"是复盘里最一致的观察 `[B]/[C]` | <b>招聘方筛的不是工具名，是你能不能把别人的烂数据变成可信的东西</b> |
| 做评测 | evals 7/16，AWS 把它单列为资格条 `[A]` | 这是交付物里最常被少掉的一件 |
| 见人 | 客户面向经验年限 5/16 单列硬指标 `[A]/[B]` | 只会这条轨道的人被刷得最多（见[转型入口](/path/switch)的六个失分点） |

::: warning 最可能的失败方式，写在第一周
把「见人」放到最后。市面上几乎所有"AI 入门项目"只有第一条轨：跑通、截图、写博客。那样十二周之后你拥有的还是一个 demo，而这一行考核的是<b>有没有人真的用它上班</b>。
:::

## 项目选哪个：五个有招聘证据的场景

本站只推荐能在 JD 或面试回忆里找到对应物的练法（完整推导在[AI 栈](/stack/ai)与[数据这一层](/stack/data)）：

<div class="mp-grid">
  <div class="mp-card">
    <p class="mp-eyebrow">场景 01 · RAG（最推荐）</p>
    <p class="mp-lead">给一份杂乱文档做生产级检索问答：切块策略、embedding 选型、rerank、外加<b>一个评测集</b>。直接对应 OpenAI 面试被追问的那句 "why this chunking strategy" <code>[C]</code>，也对应真实调优案例（手册分点混 chunk → 改段落切块、换工业 embedding、加 rerank）<code>[C]</code>。</p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">场景 02 · MCP server / 子代理</p>
    <p class="mp-lead">Anthropic、Vercel、中软三份 JD 都把它当<b>交付物</b>写："Deliver technical artifacts for customers like MCP servers, sub-agents, and agent skills" <code>[A]</code>。做一个人家用起来的，比读十篇教程有用。</p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">场景 03 · 带权限边界的连接器</p>
    <p class="mp-lead">对接一个客户系统（Salesforce / SharePoint / 工单），Metal 那份 JD 的清单里还包括 "LLM-powered systems (agents, retrieval, evals)" <code>[A]</code>。重点不是接口，是<b>让不同的人看到不同的内容</b>，并做一次越权测试留证据。</p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">场景 04 · 工程小样：限流 + 退避</p>
    <p class="mp-lead">Palantir 编码轮的示例题里有这两类："实现同时支持每用户和全局限额的限流器"、"为不稳定第三方 API 实现带抖动的指数退避，并设置重试上限" <code>[C]</code>。半天能写完，但面试里能引出很多话。</p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">场景 05 · 交付 playbook</p>
    <p class="mp-lead">Roboflow 的原句是 "Shape the Deployment Playbook… make future deployments faster and more reliable." <code>[A]</code>。把上面任何一个场景的过程写成下一个人能接手的文档——<b>这一件是零成本、且直接被 JD 点名要求的能力。</b></p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">选不出题目？</p>
    <p class="mp-lead">那就从第一周的产出里长出来：找 5 个业务同事聊"你们每周重复做的那件破事"，选一件<b>你自己能碰到数据</b>的。题目来自真实痛点这件事，本身就是面试答案。</p>
  </div>
</div>

## 三个必须自己造的约束

没有这三条，十二周会退化成一个周末项目。

<div class="mp-steps">
  <div class="mp-step">
    <b>01</b>
    <div>
      <strong>三个真用户，两周只观察</strong>
      <p>不许在旁边解释怎么用。<b>他们的第一反应就是客户需求</b>，而你之前完全不知道。产出物是"用户反馈原话 10 条"——这一条在第 8–10 周，正好是可以拿去讲的最有说服力的材料。</p>
    </div>
  </div>
  <div class="mp-step">
    <b>02</b>
      <div>
        <strong>断网安装演练</strong>
      <p>把容器镜像拉到一台没有外网的机器上跑起来（当作客户内网）。产出物是部署手册 + 断网安装录屏。这一条模拟的是国内最真实的一层约束：私有化、数据不出域、代码不出机房 <code>[C]</code>（详见<a href="/stack/infra">基础设施这一层</a>）。</p>
    </div>
  </div>
  <div class="mp-step">
    <b>03</b>
    <div>
      <strong>算出钱和时间</strong>
      <p>一次问答多少钱、P95 多久、每月总账多少，并写一个降级策略（超预算怎么办）。产出物是成本表。<b>"成本和时延优化"在国内 JD 里是明确写出来的要求</b> <code>[B]</code>，而绝大多数练习项目从来没有这两个数。</p>
    </div>
  </div>
</div>

## 十二周之后，那句话该怎么写

简历和面试的差别不在项目大小，在<b>你能不能给出可核查的细节</b>。对照一下：

| 不要写 | 要写 |
| --- | --- |
| 熟悉 RAG、LangChain、向量数据库 | 把某部门每周约 4 小时的人工核对压到 40 分钟，3 个用户连续使用两周 |
| 做过一个 AI 应用 | 切块从"按字数固定切"改成"按手册段落切"，准确率曲线上升，代价是索引时间 +30%——我记录了这组取舍 |
| 了解模型评测 | 手工标了 50 条坏例，分 4 类，其中 2 类是数据口径冲突，需要业务方定义 |
| 具备沟通能力 | 给不懂技术的领导讲了 10 分钟，第一版没讲清，改成一页纸后才过 |

<b>右列的共同点：每一行都有数字、有失败、有一个不是技术的决定。</b>这正是那句从业者判断的用法——"真干过的人会讲具体细节，比如'客户数据格式乱七八糟，光清洗就花了一周'" `[C]`。

::: warning 十二周做不完怎么办
那通常说明排期有问题，而不是能力问题——<b>而"发现排期撑不住并把范围砍小"本身就是这一行的核心技能</b>（范围蔓延是 POC 阶段的两大死因之一 `[C]`）。做法：砍功能，不砍「见人」和「评测」两条轨。
:::

::: tip 如果这十二周你只想做一件事
把它换成一件事：<b>找 5 个业务同事聊，交出一页纸问题清单，并选出那件你每周都能看见它在浪费时间的破事。</b>这一步不需要写代码，在面试里却是独立得分项，而且它决定后面十一周有没有意义。
:::

## 一句话总结计划

<div class="mp-band">
  <div class="mp-band-card">
    <p class="mp-eyebrow">计划的唯一目的</p>
    <h2 class="mp-h2">把"我学过"换成"我交付过"</h2>
    <p class="mp-lead">从业者给的那句话本站放在这里当结论："Start building small shipped projects intensely to truly understand Agents." <code>[B]</code> 关键词是 <b>shipped</b>。一个小到能维持、但有真用户、有评测、有成本表、有断网部署手册的项目，比五个开源 star 更值钱——因为它让你能在被问"上线后谁负责"时，答出一件具体的事。</p>
  </div>
</div>

## 接着读

- [面试怎么考，以及最常见的挂点](/path/interview)
- [怎么成为更好的 FDE：可以练的十二件事](/path/better)
- [AI 栈：模型、RAG、Agent 与评测](/stack/ai)
- [话术与模板：把话说明白，把责任写清楚](/field/phrases)
