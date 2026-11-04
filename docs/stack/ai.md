---
title: '技术栈地图：六层，各要挖多深'
description: '从工程基本功到现场约束：AI 应用层要能自己搭并救火，K8s 只要认得出，Terraform 可以让别人扛——深一度不是广度，是能救火的深度。'
---

# 技术栈地图这一章

这一章回答一个问题：<b>到底要会多少东西才够去客户现场</b>。

先给结论，避免你读完四层清单就想放弃：**FDE 的技术栈不是「广」，是「每一层都能撑到有人来救你之前」。** 深度只有三档，看图例。

<StackLayers />

::: tip 三档深度的定义
**1 认得出名词** —— 别人说的时候你知道在讲什么，不会当场漏怯。<br>
**2 能改别人的实现** —— 拿到一份不是你写的部署/管道/评测代码，能改对并且知道改坏了怎么回去。<br>
**3 能自己从零搭并救火** —— 现场断网、数据脏、没人接电话的时候，只有这一档有用。
:::

图里最有价值的一行是 L6：「现场约束」的 depth 是 3。原因是它不写进任何技能清单，却决定前五层做得对不对——**数据出不了域，你的 RAG 再准也是零。**

## AI 应用层（L5）到底要会什么

这层是 2024 年之后 FDE 和老一代驻场工程师最明显的差别。要会的不是模型本身，是<b>把会答错的系统交付出去</b>的那套件：

<div class="mp-split">
  <div class="mp-card">
    <p class="mp-eyebrow">01 · 接入</p>
    <h2 class="mp-h2">API、多模型路由与降级</h2>
    <p class="mp-lead">你要能回答：客户内网只有一个模型可用时会怎样？超时和限流怎么处理？换模型要改几处？海外 JD 的写法是 "deployments to your latency targets"（Baseten）<code>[A]</code>，国内 JD 的写法是「推理优化（vLLM / TensorRT-LLM / Ollama）」<code>[B]</code>。</p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">02 · 检索</p>
    <h2 class="mp-h2">RAG：切块策略是你的第一个技术判断</h2>
    <p class="mp-lead">不是「会不会调向量库」，是<b>能不能为一份具体的烂文档选一个切法并捍卫它</b>。OpenAI 面试被真实追问过："why this chunking strategy" <code>[C]</code>。一个一线调优案例：客户手册是分点混排的，按点切会把上下文切碎 → 改成按段落切块、chunk size 降 300 字、换工业 embedding 模型、加 rerank <code>[C]</code>。</p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">03 · 动手</p>
    <h2 class="mp-h2">工具调用与 MCP</h2>
    <p class="mp-lead">16 份可读正文 JD 里 <b>6 份</b>显式写 MCP <code>[A]/[B]</code>。Anthropic 把交付物直接点名："Deliver technical artifacts for customers like MCP servers, sub-agents, and agent skills." <code>[A]</code> 门槛不在协议，在权限边界：<b>你能不能设计一个不会误删东西的工具接口。</b></p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">04 · 编排</p>
    <h2 class="mp-h2">Agent 与它的失败模式</h2>
    <p class="mp-lead"><b>10/16</b> 提到 Agent <code>[A]/[B]</code>。AWS 的说法最有压迫感："Experience leading agentic and spec-driven development at production scale" <code>[A]</code>。国内岗写得更具体：「熟悉 ReAct / Plan-and-Execute」、「独立开发过 2 个以上完整 AI Agent」<code>[B]</code>。面试问的不是模式名，是<b>它跑歪了你怎么发现</b>。</p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">05 · 上下文</p>
    <h2 class="mp-h2">上下文工程与 Harness</h2>
    <p class="mp-lead">这一热词在国内 JD 里密度最高（「精通上下文工程、RAG、MCP、SDD、Harness 工程」<code>[B]</code>），海外只零散出现。本站的读法：<b>它是「把正确的信息在正确的时刻塞进去」的工程活</b>，包括检索、记忆、裁剪、并发会话的隔离。覆盖 ≤3/16，别当成入场券。</p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">06 · 微调</p>
    <h2 class="mp-h2">知道边界，会喊停</h2>
    <p class="mp-lead">LoRA / QLoRA / SFT 在 16 份里只出现 <b>2 份</b>，且全在国内岗 <code>[B]</code>；海外 JD 几乎不要求训练侧能力。所以正确目标不是「会微调」，而是<b>能判断这个用例到底该不该微调</b>——大多数时候答案是先做评测和检索。</p>
  </div>
</div>

## 五个可以直接写进简历的练手场景

这些不是本站拍脑袋列的，每一条都能回溯到某份 JD 的职责描述或某场面试的真实题目 `[A]/[C]`：

<div class="mp-steps">
  <div class="mp-step">
    <b>01</b>
    <div>
      <p><b>给一份真实杂乱文档做生产级 RAG。</b> 要有切块策略选型理由、embedding 对比、rerank、以及一个<b>评测集</b>。交付形态：能跑的仓库 + 一篇讲清「为什么这样切」的文章。这一件直接对应面试追问。
      </p>
    </div>
  </div>
  <div class="mp-step">
    <b>02</b>
    <div>
      <p><b>写一个 MCP server 或子代理。</b> Anthropic、Vercel、中软三份 JD 都把它写成交付物 <code>[A]/[B]</code>。重点是<b>工具权限的最小化设计</b>：能读不能写、要审批、留日志。</p>
    </div>
  </div>
  <div class="mp-step">
    <b>03</b>
    <div>
      <p><b>给一个真实企业系统做带权限边界的连接器。</b> 参考 JD 里点名的系统：Metal 写 "Salesforce, DealCloud, SharePoint, LLM-powered systems (agents, retrieval, evals)" <code>[A]</code>，Harvey 侧写要求对接「DMS、知识库、工单和 SSO」<code>[B]</code>。用试用环境或本地 mock 都行。</p>
    </div>
  </div>
  <div class="mp-step">
    <b>04</b>
    <div>
      <p><b>做一个「限流 + 重试退避」的工程小样。</b> 面试编码轮原题：同时支持每用户与全局限额的限流器；为不稳定第三方 API 实现带抖动的指数退避并设重试上限 <code>[C]</code>。这三行代码暴露的工程素养比十个框架名多。</p>
    </div>
  </div>
  <div class="mp-step">
    <b>05</b>
    <div>
      <p><b>把一次交付过程写成 playbook。</b> 对应 Roboflow 的 "Shape the Deployment Playbook… make future deployments faster and more reliable." <code>[A]</code>。写清楚：进场第一天做什么、问哪五个问题、哪些数据一定会脏。</p>
    </div>
  </div>
</div>

## 关于课程与证书：一句实话

可核实存在、且真值得看的免费/官方资源：

| 资源 | 是什么 | 门槛与出口 | 证据 |
|---|---|---|---|
| Anthropic Academy | 官方免费 13 门课，覆盖 Claude / Agents / MCP / Claude Code / RAG | 6 门无需编程，7 门需 Python 或 CLI 经验；完成可获官方结业证书 | `[B]` |
| OpenAI Academy | 免费自定进度课程 | 官方帮助中心原文明确：徽章与结业证书<b>不属于认证</b>，也不保证有资格获得未来认证 | `[A]` |
| OpenAI Cookbook / 官方提示工程指南 | 可复现代码与写法 | 适合当「作品」而不是「证书」 | `[A]` |
| Palantir Learn + Foundry 认证 | Speedruns / 学习路径（含 AI Engineer track） | 官方文档写认证考试<b>要求 70% 通过率</b>，并建议先有 <b>3–6 个月</b>平台实践经验 | `[A]` |
| Databricks GenAI Engineer Associate | 200 美元 / 90 分钟 / 45 题 / 有效期 2 年 | 无前置认证；官方培训目录把 <b>Forward Deployed Engineering</b> 列为职业方向 | `[A]` |
| Claude Certified Architect（CCA） | 99 美元 / 60 题 / 全程监考、禁用 Claude 与外部文档 | 考纲权重：Agent 架构 27%、Claude Code 20%、Prompt 20%、MCP 18%、上下文 15% | `[B]` |
| Claude Frontier Academy | 1 亿美元投入，目标 2027 年底前培养 1 万名 Frontier Deployed Engineer | <b>企业提名制，个人不能直接报名</b>；首批合作含 Accenture / Bain / Deloitte / Morgan Stanley / Novo Nordisk | `[A]` |
| 其他 | Google Cloud PMLE、NVIDIA NCA-GENL/NCP 系列、Hugging Face Learn、W&amp;B 的 "RAG++: From POC to Production"、anthropics/courses、roadmap.sh | 都是补知识，不是入场券 | `[B]` |

::: warning 三条红线，本站替你把话说完
1. <b>没有「FDE 资格证」这种东西。</b> 国内也没有「工信部统一 FDE 认证」；把商业培训说成官方认证的都是营销。
2. <b>厂商认证不构成雇佣资格。</b> OpenAI 官方自己就写徽章「不属于认证」`[A]`；Anthropic 的 CCA 是给合作伙伴工程师的能力标尺，不是招聘通道。
3. <b>Frontier Academy 这类项目是客户侧培养，不是 Anthropic 在招人。</b> 把它写成「Anthropic 要雇一万名 FDE」是误读 `[A]`。
:::

一句可以直接抄下来的判断（来自 KDNuggets 的七步指南，标题即结论）：

> "The best way to prepare for a Forward Deployed Engineer role is not to search for an 'FDE certification.'" `[B]`

## 本章导航

- [数据这一层：脏数据不会报错，它会看起来像成功](/stack/data)
- [基础设施这一层：容器、内网与「代码出不了机房」](/stack/infra)
- [质量这一层：评测、可观测与成本账本](/stack/quality)
- [硬技能优先级：哪些进门就得会](/job/hard-skills)
