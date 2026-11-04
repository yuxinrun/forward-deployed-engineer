---
title: '硬技能：十项能力，哪些进门就得会、哪些现场才会'
description: '按 16 份可读正文 JD 的措辞强度给能力排序：Python 与生产级 LLM 是门槛，评测与 Agent 是新指纹，Terraform 和 dbt 其实没写。'
---

# 硬技能

先说一个反直觉的结论：**FDE 的硬技能清单，八成的内容和「资深后端工程师」重合，剩下两成才是这个岗位的分水岭。** 那两成不是「会更多框架」，而是三件事：在别人的系统里写、给会答错的系统做评测、把交付物写成人能接手的东西。

<SkillBars />

图上三条系列读法：<b style="color:var(--accent)">进门就得会</b>是面试会当场验证的；<b style="color:var(--blue)">干一年后再会</b>是现场逼出来的、面试不太考但你缺了会死；<b style="color:var(--coral)">可以让别人扛</b>指团队里通常有专人，你懂原理就够——**别把力气花在这一栏**。

::: tip 分数从哪来
0–5 分由本站按抓到的 16 份可读正文 JD 里「任职要求」的措辞归纳：写「必须 / 熟练 / strong」记高分，写「熟悉 / 了解」居中，正文压根没提的低分。**不是问卷统计，不是市场抽样。**
:::

## 按层拆：每一层的真实覆盖率

### L1 编程语言

| 项 | 覆盖 | 原句样本 | 本站的判断 |
|---|---|---|---|
| Python | **11/16** | "proficiency in Python (and ideally in one or more additional languages)"（Anthropic）`[B]` | 默认硬门槛，绕不过 |
| TypeScript / JavaScript | **7/16** | "Shipped production TypeScript applications on Next.js and React…"（Vercel）`[A]` | 前端栈能被当硬技能，只有 Vercel / AWS / OpenAI 这一群 |
| SQL | **3/16** 显式 | J&J 技能标签、Palantir FDSE 隐含数据集成 `[B]` | 显式写的人少，但**编码轮真的考**：见面试页那道「退货率超 30%」的 SQL 题 `[C]` |
| Go / C / C++ / Java | **4/16**，且全是「或」 | AWS "Experience with React, TypeScript, Python, **and/or** Go" `[A]` | **没有任何一份 JD 把 Java/C++ 列为必需** |

### L2 数据这一关

覆盖 **4/16**（ETL/ELT、数据仓库、大规模数据集成），最重的是 Accenture 的 Palantir FDE 岗：

> "Minimum of 3 years hands-on experience in data engineering, including ETL/ELT pipelines, data warehousing, and large-scale data integration." `[B]`

::: warning 两个 0
在这 16 份正文里，**Spark / Airflow / dbt / Kafka 出现 0 次**，Databricks 系只有 2/16。所以别写「FDE 必须会 Airflow」。真正出现在从业者长文里的要求是另一件事：**处理脏数据、多源异构系统（SAP、Excel、PDF、老旧本地系统）**——而这个 JD 里基本不写 `[B]/[C]`。
:::

### L3 AI 应用层（分水岭在这里）

| 项 | 覆盖 | 谁写的 |
|---|---|---|
| 生产级 LLM 经验 | **12/16** | Anthropic 表述最标准："Production experience with LLMs, including advanced prompt engineering, agent development and frameworks, evaluation frameworks, transcript analysis, MCP, and deployment at scale" `[A]` |
| Agent / 多智能体 | **10/16** | AWS "Experience leading agentic and spec-driven development at production scale" `[A]`；腾讯「独立开发过 2 个以上完整 AI Agent（熟悉 ReAct / Plan-and-Execute）」`[B]` |
| 评测 evals | **7/16** | AWS 单列一条 `[A]`；腾讯「Prompt/RAG 鲁棒性评测」`[B]`；Scale AI "implement evaluation frameworks" `[B]` |
| MCP / 工具调用 | **6/16** | Vercel "Build production AI agents, Model Context Protocol (MCP) servers, and agentic workflows" `[A]`；Anthropic "deliver MCP servers, sub-agents, agent skills" `[A]`；中软「交付 MCP 服务器、子代理与 Agent 技能」`[B]` |
| RAG | **5/16** | AWS、Metal、猎聘、腾讯、J&J `[A]/[B]` |
| 向量数据库 | **3/16** | Milvus / ES / Qdrant / Chroma，主要在国内岗 `[B]` |
| 微调 LoRA / QLoRA / SFT | **2/16** | 全在国内岗；海外 JD 几乎不要求训练侧能力 `[B]` |
| LangChain / LlamaIndex / Dify | **2/16** | 都在国内岗。海外只写 "agent frameworks" `[A]/[B]` |

这一层最重要的读法：**「评测」已经从加分项变成资格条。** 这不是本站的判断，是 AWS 把它写成一条独立任职要求 `[A]` 的结果。

### L4 云、容器与运维

主流云三选一 **5/16**（AWS 显式优先）、Docker/K8s **4/16**、CI/CD+测试+版本控制 **4/16**、Linux+网络 **2/16**、Terraform/IaC **1/16**（只有 J&J 的技能标签）`[A]/[B]`。

Deloitte 那份写得最完整（中文译文）：「交付生产级代码，包括测试、CI/CD、日志、版本控制」`[B]`。**这十二个字是「FDE 不是实施岗」的最短证明。**

GPU / 推理优化是**子赛道**，不是通用要求：只有 **2/16**，一条是 Roboflow 的边缘硬件约束（"NVIDIA Jetson, industrial cameras"）`[A]`，一条是国内岗的 "vLLM / TensorRT-LLM / Ollama" `[B]`。

### L5 界面：只要「能看」

显式要求快速搭 UI 的 **3/16**（Vercel 两份 + AWS 把 React 列进技术栈）。Vercel 甚至把可量化性能指标写进加分项："Diagnosed and fixed Core Web Vitals issues (Largest Contentful Paint, Cumulative Layout Shift, Interaction to Next Paint) at scale" `[A]`。

::: warning 又一个 0
**Streamlit 和 Retool 在这批 JD 里出现 0 次。** 博客把它们写成 FDE 标配，正文里没有依据。你要达到的标准不是「会哪个工具」，是「能不能在客户面前当场搭出一个他能点的东西」。
:::

### L6 安全、合规与现场约束

JD 里显式写合规条目的只有 **3/16**：Palantir FDSE 中译「设计数据治理与合规方案（GDPR、HIPAA、FedRAMP）」`[B]`、J&J 的 "AI Governance" 标签 `[B]`、中软的「理解私有化、混合云等常见企业级部署模式」`[B]`。**SOC 2 在这批正文里 0 次**，只出现在解释型文章里。

但这一层的真实要求来自另一句话，OpenAI 岗位 JD 原文：

> "In addition, job duties require access to secure and protected information technology systems and related data security obligations." `[B]`

翻译：**在客户网络里，你的笔记本可能连不上你想连的任何东西。** 这条不会写在技能清单里，却决定了前两层做得对不对。国内的版本更硬：券商场景「代码不能出机房」，开发机在客户侧、评审靠远程 `[C]`。

## 成本与延迟：证据最薄，但最值钱

本站抓到的 JD 里，「成本和时延优化」只出现在国内 2026 届岗位的快照与 Google Cloud 岗的二手摘写（"理解 tokens/sec、cost-per-request 等 LLM 原生指标"）`[B]`。厂商侧的表述更直接，Baseten 官方博客："Forward-deployed engineers tune deployments to your latency targets" `[A]`。

为什么值得单独学：这是**唯一能让业务主管当场听懂的技术语言**。你要能报出三个数——一次调用多少 token、并发上来 P95 是多少、这个用例每月花多少钱。会算这笔账的人，才有资格说「这个用例值不值得上线」。

<div class="mp-band">
  <div class="mp-band-card">
    <p class="mp-eyebrow">学习顺序建议</p>
    <h2 class="mp-h2">按「能不能被当场验证」排序</h2>
    <p class="mp-lead">优先级不是「哪个技术更火」，而是<b>哪个能在面试或现场被追问第三层</b>。按这个标准：① 一门语言能写生产代码；② 一份脏数据你能讲清怎么变干净；③ 一个 RAG/Agent 你能说清切块策略为什么这样选、评测集怎么建；④ 一次上线你能说清谁维护、怎么回滚。四项讲得清，硬技能这关就过了。</p>
  </div>
</div>

## 接着读

- [技术栈地图：六层各要挖多深](/stack/ai)
- [软技能：五个对话对象，五套语言](/job/soft-skills)
- [评测与质量：交付物里最容易少的那一件](/stack/quality)
- [现场风险清单：数据、环境、范围、人](/field/pitfalls)
