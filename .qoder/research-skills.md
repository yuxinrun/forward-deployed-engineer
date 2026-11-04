# FDE（前线部署工程师）技能与要求实证清单

> 方法：WebSearch + WebFetch，检索窗口 2026-11-04 ~ 2026-11-05。共收集 30+ 条真实 FDE/相邻岗位招聘记录，其中 **16 份能读到任职要求正文**（下文以 ★ 标记，作为计数样本），其余为标题/薪资快照。所有计数均注明分母；读不到正文的一律降级为 [B]/[C] 并写"snippet-only"。
> 置信度：[A]=直接抓到招聘页正文；[B]=仅搜索快照/二手转述（含中文翻译版 JD）；[C]=从业者博客、面试回忆、聚合站口径。

---

## 一、硬技能分类表（按"出现在几份 JD 里"排序，分母=16 份可读正文 JD）

### 1. 编程语言
- Python 是默认硬门槛：出现在 **11/16** 份（AWS、Anthropic×2、Roboflow、Palantir FDSE、中软国际、国内聚合站岗、猎聘 AI Agent 岗、腾讯、J&J、OpenAI）。典型原文：`"Strong programming skills with proficiency in Python (and ideally in one or more additional languages)."`（Anthropic FDE）来源: Anthropic / jd-requirements 摘录 — https://job-boards.greenhouse.io/anthropic/jobs/4985877008 (访问 2026-11-04) [B]
- TypeScript/JavaScript：**7/16**，且是唯一"前端栈即硬技能"的公司群（Vercel 两份、AWS、Anthropic、Palantir FDSE、中软、OpenAI）。原文：`"Shipped production TypeScript applications on Next.js and React, including a legacy-to-Next.js migration, or built and deployed production LLM agents with human-in-the-loop patterns and sandboxed execution"` 来源: Vercel Careers — https://vercel.com/careers/forward-deployed-engineer-5752684004 (2026-11-04) [A]
- Go / C / C++ / Java：仅 **4/16**，均为"或"关系（AWS `"Experience with React, TypeScript, Python, and/or Go"`；国内聚合站 `"熟练掌握 Python / Go / C 至少一门语言"`）。结论：**没有一份 JD 把 Java/C++ 列为 FDE 必需**。[A]/[B]
- SQL：显式写入的只有 **3/16**（J&J、Palantir FDSE 隐含数据集成、国内某校招岗的 NL2SQL）。来源: Johnson & Johnson — https://www.careers.jnj.com/en/jobs/r-090548/mgr-forward-deployed-engineer-data-intelligence/ (2026-11-04，页面 403，snippet-only) [B]

### 2. 数据工程
- ETL/ELT、数据仓库、大规模数据集成：**4/16**（Accenture-Palantir 岗最重：`"Minimum of 3 years hands-on experience in data engineering, including ETL/ELT pipelines, data warehousing, and large-scale data integration."`）来源: Accenture — https://www.accenture.com/us-en/careers/jobdetails?id=R00324743_en (2026-11-04，页面动态，snippet-only) [B]
- Databricks / Spark / Delta Lake：仅 **2/16**（J&J 技能标签、Databricks 自家岗）。Spark/Airflow/dbt/Kafka 在这批 JD 正文里 **0 次显式出现**——不要写成"FDE 必须会 Airflow/dbt"。[A]/[B]
- 脏数据/多源异构系统（SAP、Excel、PDF、老旧本地系统）：出现在 Palantir FDSE 描述与从业者长文，JD 级证据 **1-2/16**。来源: 今日头条《成为成功FDE（前沿部署工程师）完整指南》 — https://m.toutiao.com/a7667203038843306536/ [C]

### 3. 云与基础设施
- 主流云（AWS/Azure/GCP）三选一：**5/16**；其中 AWS 显式优先（`"Experience working with AWS Services"`）。来源: Amazon Jobs — https://www.amazon.jobs/zh/jobs/10517491/sr-forward-deployed-engineer-aws-forward-deployed-engineering (2026-11-04) [A]
- Docker + Kubernetes：**4/16**（Roboflow `"Strong proficiency in Python; experience with systems-level work (Docker, Kubernetes, networking, Linux)."`、国内聚合站岗、猎聘 AI Agent 岗、腾讯）。[A]/[B]
- Linux + 网络：仅 **2/16**（Roboflow、国内聚合站 `"熟悉 Linux 系统运维…GPU 算力环境配置与调优"`）——但在"边缘/私有化"子类里是硬要求。[A]/[B]
- Terraform/IaC：**1/16**（J&J 技能标签 `"Infrastructure as Code (IaC)"`）。不要把 Terraform 说成 FDE 通用必备。[B]
- CI/CD + 测试 + 版本控制：**4/16**；Deloitte 岗写得最完整：`"交付生产级代码，包括测试、CI/CD、日志、版本控制"`（中文翻译版）。来源: CSDN《AI时代最火爆的新型技术岗位FDE》 — https://blog.csdn.net/DK_Allen/article/details/162700891 (2026-11-04) [B]
- GPU/推理优化/硬件：仅 **2/16**（Roboflow 的 `"edge computing hardware and constraints (NVIDIA Jetson, industrial cameras)"`；国内聚合站 `"vLLM / TensorRT-LLM / Ollama"`）。属于"边缘 FDE"子赛道，不是通用 FDE 要求。[A]/[B]

### 4. API 与集成
- REST/gRPC/API 网关/身份认证：显式写入 **3/16**（中软 `"熟悉企业 IT 系统架构（如身份认证、数据库、API 网关、云服务等），理解私有化、混合云等常见企业级部署模式"`；国内聚合站 `"熟悉 RESTful API / gRPC"`；Metal 的客户系统清单）。来源: 中软国际 FDE 岗 — http://www.chinasofti.com/pages/career/2 (2026-11-04，页面动态，snippet-only) [B]
- 具体企业系统名（比 SSO/SAML/SCIM 更常见）：Metal 写 `"Salesforce, DealCloud, SharePoint, LLM-powered systems (agents, retrieval, evals)"`；Harvey 侧写要求对接 `"DMS、知识库、工单和 SSO"`。来源: YC/Metal — https://www.ycombinator.com/companies/metal/jobs/7zlvBO4-forward-deployed-engineer-strategic-account (2026-11-04) [A]；搜狐《Harvey招FDE：26万刀做法务AI交付》 — https://m.sohu.com/a/1065978305_120176300 [B]
- 结论：本批 JD 中 **SAML/SCIM/webhook 零次显式出现**；"SSO"仅 1 次（二手转述）。文案里可写"对接企业现有系统与权限体系"，不宜写"必须会 SCIM/SAML"。

### 5. 现代 AI 栈（这是 FDE 与传统交付岗的真分水岭）
- "生产级 LLM 经验"类要求：**12/16**，Anthropic 表述最标准：`"Production experience with LLMs, including advanced prompt engineering, agent development and frameworks, evaluation frameworks, transcript analysis, MCP, and deployment at scale"` 来源: Anthropic Applied AI Engineer, Enterprise Tech — https://job-boards.greenhouse.io/anthropic/jobs/5057647008 (2026-11-04) [A]
- Agent / 多智能体：**10/16**（AWS `"Experience leading agentic and spec-driven development at production scale"`；Deloitte `"构建 AI 驱动的解决方案、Agent平台和工作流"`；腾讯 `"独立开发过 2 个以上完整 AI Agent（熟悉 ReAct / Plan-and-Execute）"`）。[A]/[B]
- 评测/evals：**7/16**，AWS 把它写成独立资格条 `"Experience with AI tools: eval frameworks, agent tooling, RAG pipelines, and prompt engineering"`；腾讯写 `"Prompt/RAG 鲁棒性评测"`。→ 可在文案里称"评测能力已被写进招聘硬条件"。[A]/[B]
- MCP / 工具调用 / function calling：**6/16**（Vercel `"Build production AI agents, Model Context Protocol (MCP) servers, and agentic workflows with the AI SDK and the eve framework inside customer environments"`；中软 `"交付 MCP 服务器、子代理与 Agent 技能等"`；Anthropic `"deliver MCP servers, sub-agents, agent skills"`）。[A]
- RAG：**5/16**（AWS、Metal、猎聘、腾讯、J&J）；向量数据库（Milvus/ES/Qdrant/Chroma）：**3/16**。→ "RAG 是高频但非普适要求"，别写成 100%。[A]/[B]
- 微调/LoRA/QLoRA/SFT：**2/16**（国内聚合站 `"了解模型微调（LoRA / QLoRA / SFT）基本流程"`、腾讯 `"模型微调、LoRA/QLoRA"`）。海外 JD 里几乎不要求训练侧能力。[B]
- 上下文工程 / Harness / SDD / Vibe Coding：主要出现在国内岗与 Vercel（`"AI coding tools such as harnesses, skills, and MCP servers"`）；从业者圈层热词，JD 覆盖率 **≤3/16**。[A]/[B]
- 具体框架名（LangChain/LlamaIndex/Dify）：**2/16**，均在国内岗（猎聘 `"深入掌握 LangChain 与 LangGraph…能够基于有向图构建复杂、可维护的智能体工作流"`；腾讯 `"精通 LangChain / LlamaIndex / Dify"`）。海外 JD 只写"agent frameworks"。[B]

### 6. 前端与"快速搭 UI"交付力
- 显式要求快速搭 UI 的：**3/16**（Vercel 两份要求 Next.js 迁移/ISR/Server Components；AWS 把 React 列进技术栈）。
- 轻量工具（Streamlit/Retool）在全部抓取中 **0 次出现**——这是博客臆想，不能写。
- 性能调优以可量化指标出现：Vercel `"Diagnosed and fixed Core Web Vitals issues (Largest Contentful Paint, Cumulative Layout Shift, Interaction to Next Paint) at scale"`（Bonus 项）[A]

### 7. 安全、合规与私有化
- 显式合规条目：**3/16**（Palantir FDSE `"设计数据治理与合规方案（GDPR、HIPAA、FedRAMP）"`（中文版）、J&J `"AI Governance"`、中软 `"私有化、混合云"`）。SOC 2 在本批 JD 正文里 **0 次**，只在解释型文章里出现。[B]
- 权限/数据边界是实操层共识：`"先问清客户问题，再划定数据和权限边界"`（OpenAI 岗解读）。来源: 搜狐《OpenAI招FDE：28万刀做客户落地》 — https://m.sohu.com/a/1065298309_120176300 (2026-11-04) [B]

### 8. 可观测性、成本与时延
- JD 级证据薄弱：`"成本和时延优化"` 出现在国内 2026 届"AI 前线部署工程师/AI 应用交付工程师"岗（牛客快照，正文未直读）；Google Cloud 岗要求 `"理解 tokens/sec、cost-per-request 等 LLM 原生指标"`（二手英文摘写）。来源: CSDN《FDE 变天了》 — https://blog.csdn.net/starzhou/article/details/167173831 (2026-11-04) [B]
- Baseten 官方博客把这件事写成产品承诺：`"Forward-deployed engineers tune deployments to your latency targets"`。来源: https://www.baseten.co/blog/baseten-openai-partnership/ (2026-11-04) [A]

---

## 二、软技能分类表（JD 原文密度排序）

- **客户面向年限被单列成硬指标**：**5/16** 显式要求，最典型 Vercel `"6+ years of software engineering experience, including 2+ years in a customer-facing technical role (consulting, solutions architecture, forward-deployed engineering, or technical founder)"`；Anthropic `"3+ years of experience in a technical, customer facing role."` [A]/[B]
- **抗模糊/自主性**：**6/16**。Anthropic：`"Ability to navigate ambiguity and execute across domains with intellectual openness, finding simple solutions to complex problems"`；Vercel：`"Our Forward-Deployed Engineers operate with high agency and autonomy."`；中软：`"高度主动性与抗模糊性，像创始人一样对最终结果负责"`。[A]/[B]
- **对高管演讲/提案**：**3/16**。Vercel：`"Presented technical discovery findings and proposals to executives at enterprise customers, and mentored other engineers"`。[A]
- **教学/赋能客户团队（"让客户能自己维护"）**：**3/16**，是 FDE 区别于外包的关键句。Vercel：`"Run workshops and pair programming sessions so customer teams can maintain what you ship"`；Roboflow：`"Knowledge Transfer & Handoff… train the customer's team so they can operate."`；Deloitte 岗的"嵌入客户现场，识别业务需求"。[A]/[B]
- **冲突管理/低自我**：**2/16**。Anthropic：`"High cooperation mindset for cross-organizational collaboration, balancing competing priorities with integrity"`；中软：`"低自我（Low Ego）的协作心态，能跨组织合作，正直地平衡多方冲突优先级"`。[A]/[B]
- **写作/沉淀资产**：**4/16**。Anthropic：`"Create scalable public and internal assets documenting the latest LLM prompting, eval, agentic, and architecture techniques"` 以及 `"write blog posts and white papers"`；Roboflow：`"Shape the Deployment Playbook… make future deployments faster and more reliable."`；Vercel：`"share repeatable patterns with Product and Engineering"`；中软：`"识别并整理可重复使用的部署模式，将一线洞察与代码资产反馈给产品、工程团队"`。[A]/[B]
- **反馈闭环/影响产品路线图**：**5/16**（"产品化沉淀"是国内岗的高频词）。Anthropic：`"Identify common design patterns and contribute insights back to our Product and Engineering teams"`；Roboflow：`"Be Our Eyes and Ears in the Field… feed it directly back to our Product."`；OpenAI 侧写：`"eval-driven feedback"`、`"roadmap input"`。[A]/[B]
- **商业意识/ROI**：**3/16**。腾讯：`"能与非技术高管谈 ROI，也能与研发对齐技术方案"`；国内 JD 常见"跟踪客户业务指标、持续调优确保价值可感知"；OpenAI 岗成功标准写"生产采用、工作流影响"。[B]
- **需求界定（scoping/discovery）**：**4/16**，且被写成端到端链路：OpenAI 岗 `"从 discovery、技术范围、系统设计、全栈构建到生产 rollout 的端到端责任人"`（中文转述）。[B]
- **差旅接受度**：写明确百分比的 **7 份**（见第四节硬数字）。[A]/[B]

---

## 三、学历 / 经验画像与面试形式

- 年限分布（15 份写了年限的 JD）：1–3 年 1 份；3 年 4 份；3–5 年 2 份；4 年 1 份；5 年及以上 4 份；6 年及以上 2 份；8 年 1 份（J&J/Novartis 类甲方岗）。→ **主流区间是 3–6 年，不是新人岗**；国内 50+ 份 JD 的汇总口径也写"经验要求集中在 5–10 年，不是新人岗"。来源: CSDN《2026 年版 FDE 前沿部署工程师岗位爆发》 — https://blog.csdn.net/2401_85379281/article/details/166738196 [C]
- 学历：**只有 5/16 写"本科及以上"**，其中把专业限定为 CS/数据科学的仅 3 份（Deloitte、国内聚合站、Novartis 反而要求生物/生物信息学背景）。AWS 写法最宽松也最典型：`"Bachelor's degree in computer science or equivalent"`，且列在 **Preferred**（优先）而非必需；Vercel 通篇不要求学历。→ 可写"多数海外 FDE 岗可用等价经验替代学位"。[A]/[B]
- 接受自学/作品集的证据：Roboflow `"You're a tinkerer outside of work."`、`"Meaningful experience deploying technology in physical-world environments."`（不要求学位）；中软 `"拥有 AI 应用开源项目、技术博客或已上线的生产级 LLM 产品者优先"`；Vercel `"Contributed to Next.js, React, or the AI SDK, or maintain a popular related library"`；AWS `"Background as a founder, engineering lead, or startup builder..."`。[A]/[B]
- 面试轮次（多来源交叉，均为 [B]/[C]，不可当官方流程写）：
  - 综合七轮版（通过率来自该仓库整理）：招聘官 30min（约 80%）→ 经理 45–60min → 编码 45–60min（约 55–60%）→ 系统设计 60min → **模糊案例 45–60min（约 40%，权重最高的"签名轮"）** → 客户模拟 45min → 行为 45–60min。来源: CSDN《Forward-Deployed Engineer（FDE）面试完全指南》 — https://blog.csdn.net/gitblog_00755/article/details/151523867 (2026-11-04) [C]
  - Palantir 五轮版含原话：`"Palantir really cared about how I approached vague problems. They did not spoon-feed requirements and expected structure."` / `"They test if you can think like an engineer and a consultant at the same time."` 来源: NoraHQ Palantir FDE guide — https://interview.norahq.com/interview-guides/palantir-technologies-forward-deployed-engineer-associate-interview-guide-2025 (2026-11-04) [B]
  - OpenAI 流程（招聘回忆，2026-03-27 更新）：Recruiter Screen → **5 小时带视频的 take-home** → 60min technical screen → 3 轮虚拟 onsite（Hiring Manager / Solution Design / Technical Deep Dive）；被问原句 `"why this chunking strategy"`、`"how do you know your AI system is actually working well?"` 来源: gaijineer — https://gaijineer.co/openai-forward-deployed-engineer-interview-process (2026-11-04) [C]
  - Anthropic 五关（Reddit 指南转述）：HR 初筛动机 → Claude+MCP 推演 → 编码轮（额度限制器题）→ **客户模拟轮（六成淘汰）** → 使命/价值观冲突（"股价归零"类问题）。来源: 腾讯新闻《硅谷最火的新岗位，划出了 AI 时代职场的斩杀线》 — https://news.qq.com/rain/a/20260829A05RWF00 (2026-11-04) [C]
  - 通用结构：`Structure: 3-6 weeks, 4-6 rounds`；`Case study interview… The most important round. Ambiguous real-world problem.`；`Role-play a customer meeting`。来源: explainX — https://explainx.ai/blog/forward-deployed-engineer-hottest-tech-role-2026 [C]
  - 编码轮"刻意非 LeetCode"：`"这在大多数招聘 FDE 的公司是刻意非 LeetCode 式的算法题，它模拟真实部署工作"`；示例题原文包括：`"解析一个带不一致引号和缺失字段的杂乱 CSV/JSON，产出干净的结构化记录。"`、`"实现同时支持每用户和全局限额的限流器。"`、`"为不稳定第三方 API 实现带抖动的指数退避，并设置重试上限。"`、`"在一个文档文件夹上构建小 RAG pipeline：切块、嵌入、检索、回答，并捍卫你的切块选择。"`、`"写 SQL 找上季度退货率超 30% 的客户，再说明如何加速。"` 来源: 同上 CSDN 面试完全指南 [C]
  - Palantir onsite 形式的第三方描述含"team day/现场协作"元素，但本批抓取**未找到可逐字引用的官方"team day"JD**，文案只能写"多轮 + 现场协作环节"。[C]

---

## 四、能力等级维度（初级 vs 资深/Principal，证据来自 JD 差异与从业者写作）

- 薪资带随职级跳升（同一公司同一岗位名）：Palantir `Forward Deployed Engineer - Assoc Director $151K–$434K`（芝加哥）vs `Forward Deployed Software Engineer $125K–$200K`；Atlassian `Senior Principal FDE（远程）$196K–$308K`；Anthropic FDE `$280K–$320K base`（NY/SF/Seattle）。来源: FDE Pulse — https://fdepulse.com/jobs/ (2026-11-04 快照，共 1313 条岗位) [B]；Valletta Software 薪资表（数据捕获 2026-09-08） — https://vallettasoftware.com/blog/post/forward-deployed-engineer-salary [B]
- 第三方的职级薪资骨架：`FDE: $180,000 – $250,000` → `Principal Forward Deployed Engineer: $250,000 – $310,000+`；晋升链 `Forward Deployed Engineer → Senior FDE → Principal FDE → Technical Solutions…`。来源: SecondTalent — https://www.secondtalent.com/occupations/forward-deployed-engineer/ (2026-11-04，页面 429，snippet-only) [C]
- JD 文本上"资深"的三条硬区别（AWS 原文，初级岗不会这么写）：`"5+ years of leading design or architecture (design patterns, reliability and scaling) of new and existing systems experience"`、`"Experience as a mentor, tech lead or leading an engineering team"`、`"Experience leading agentic and spec-driven development at production scale"`。[A]
- 交付物层级的差别：初级 = 在带教下辅助交付；高级 = 主导复杂交付并**沉淀方法论**；且"内部培养成功率高于外部招聘"。来源: CSDN《FDE招聘困局：从新物种论到场景能力矩阵的落地实践》 — https://bbs.csdn.net/weixin_32296621/article/details/100355491 (2026-11-04) [C]
- 时间配比随级别变化：`"精力配比参考：40% 写代码，60% 业务沟通、需求挖掘、项目推进，初级 FDE 编码占比更高。"` 来源: 51CTO《FDE Forward Deployed Engineer｜前沿部署工程师(前线部署工程师)》 — https://blog.51cto.com/teayear/14977107 [C]
- 责任边界的差别（从业者共识，最能写进文案）：`"彻底的所有权…责任边界停在'生产环境可用'，不是'演示成功'…这是 FDE 与顾问的分水岭"`；`"技术能力让你进门，沟通能力决定项目成败"`。来源: CSDN《FDE 前向部署工程师岗位拆解》 — https://blog.csdn.net/weixin_42226175/article/details/166236834 [C]
- 资深候选人的真实画像（Anthropic 1680 份工程师简历分析）：`"真正需要争抢的，是那些拥有大约 12 年工作经验、具备成熟工程落地能力的资深系统建设者"`，人才池来自 `Stripe、Databricks、Snowflake、Palantir`；应届生门槛为顶级实习/竞赛/论文。来源: 搜狐 — https://m.sohu.com/a/1037536213_115128/ [C]
- Palantir 侧对 FDE/PD 分工的经典表述（八年 FDE 从业者）：`"FDE先解决客户当下真实痛点，快速搭建定制化解决方案，允许适度技术债务；PD工程师再将成熟方案通用化、产品化沉淀到Foundry平台"`；小团队规模 `"4-5人独立负责客户项目"`、`"每周3-4天深度嵌入客户业务"`。[C]

---

## 五、学习路径证据（仅列可核实存在的）

- Anthropic Academy（官方免费，13 门课，出口 https://anthropic.skilljar.com）：覆盖 Claude 101 / Agents / MCP / Claude Code / Claude API / RAG；6 门无需编程、7 门需 Python 或 CLI 经验；完成可获官方结业证书。来源: 电脑王阿达 — https://www.kocpc.com.tw/archives/645273 (2026-11-04) [B]
- Claude Certified Architect（Anthropic 官方认证，2026-03-12 上线，$99/次、60 题、全程监考、禁用 Claude 与外部文档；考纲权重：Agent 架构 27%、Claude Code 20%、Prompt 工程 20%、MCP 集成 18%、上下文管理 15%；首批 5000 名合作伙伴员工免费）。来源: 什么值得买拆解 — https://post.m.smzdm.com/p/avg8k3g7/ (2026-11-04) [B]
- Claude Frontier Academy（2026-10-02 宣布，投入 1 亿美元、目标 2027 年底前培养 1 万名"Frontier Deployed Engineers"；4 天线下集训 + 12 周真实项目实战，通过者获 "Claude Resident Engineer" 徽章；**企业提名制**，首批含埃森哲、贝恩、德勤、摩根士丹利；旧金山/纽约/伦敦先开）。来源: 大数跨境 — https://www.10100.com/article/152899421 (2026-11-04) [B]；Anthropic 官方公告转述 — https://aihot.virxact.com/items/kb1sceant2zconyiwchpgbiwo [B] → 个人不能直接报名，文案必须写清门槛。
- OpenAI Academy（academy.openai.com，免费自定进度课程）；官方明确 `"OpenAI Academy 徽章…这些徽章和结业证书均不属于认证，也保证学习者有资格获得未来推出的认证"`（原文为"均不属于认证，也不保证…"）。来源: OpenAI 帮助中心 — https://help.openai.com/zh-hans-cn/articles/20001270-openai-academy-courses (2026-11-04) [A]
- OpenAI Cookbook / 官方提示工程指南（platform.openai.com/docs/guides/prompt-engineering、github.com/openai/openai-cookbook）——适合作为"可复现证据"的作品。[A]
- Palantir Learn（learn.palantir.com）：Speedruns/课程/学习路径（含 AI Engineer track），`"Experienced users can become officially certified in a Foundry domain by taking a Foundry Certification Exam"`；官方文档写 `"认证考试要求 70% 的通过率"`、`"我们建议在尝试认证考试之前拥有 3-6 个月的 Foundry 实践经验"`。来源: learn.palantir.com [A]；Palantir 官方文档 2023-03 公告 — https://www.palantir.com/docs/zh/foundry/announcements/2023-03 [A]
- Palantir AIP Bootcamp（面向客户而非求职者，但是最佳"真实场景样本"）：`"通常为期 1 到 5 天…客户不能空手来，必须带着自己企业真实的业务数据和目前最头疼的业务问题"`；场次数据 2022 年底 92 场 → 2023 年底 500+ 场（覆盖 465+ 机构）→ 2024 年 6 月累计 1300+ 场、560+ 独立机构、转化率约 70–75%（多源印证，作者自称"约 600 到 900+ 场"存差异）。来源: 数据猿 — http://www.datayuan.cn/article/24067.htm [B]；百度百科 AIP Bootcamp 词条 — https://baike.baidu.com/item/AIP%20Bootcamp/67961037 [C]
- Databricks：`Databricks Certified Generative AI Engineer Associate`（$200、90 分钟、45 题、有效期 2 年、无前置认证，建议有 LLM/RAG 实战）+ 免费课 `Get Started with Databricks for Generative AI`（3h，含 RAG 构建与评估、部署 GenAI agents、评测框架）；官方培训目录页明确把 **Forward Deployed Engineering** 列为职业方向。来源: https://www.databricks.com/learn/training/certification [A]；https://databricks.com/training/catalog/get-started-with-databricks-for-generative-ai-3480 [A]；认证对比表 — https://blog.csdn.net/u014177256/article/details/166645597 [B]
- 其他已核实存在的官方学习资源：Google Cloud Professional Machine Learning Engineer 认证（$200、2 小时、50–60 题、建议 3 年以上经验）；NVIDIA 认证 NCA-GENL/NCP-GENL/NCP-AAI（助理级 $125 起、专业级约 $400）；Hugging Face Learn（NLP Course、AI Agents Course）；Weights & Biases AI Academy（含 `RAG++: From POC to Production`，wandb.courses）；Anthropic 开源互动教程 github.com/anthropics/courses（prompt_engineering_interactive_tutorial）；roadmap.sh 的 AI/FDE 路线图与在线测验（`https://roadmap.sh/ai/quiz/forward-deployed-engineer-quiz-generation-…`）。来源: 认证对比表 [B]、adongwanai/AgentGuide 资源清单 https://github.com/adongwanai/AgentGuide/blob/main/resources/learning-resources.md [B]、cnblogs FDE 路线图 https://www.cnblogs.com/wintersun/p/23053486.html [C]
- 可练手的真实场景（有 JD/面试证据）：① 给一份杂乱文档做生产级 RAG（切块策略 + embedding 选型 + rerank + 评测集）——直接对应 OpenAI 面试被追问 `"why this chunking strategy"` 与真实调优案例（`手册分点混 chunk → 改段落切块，chunk size 降 300 字，换工业 embedding 模型，加 rerank`）；② 写一个 MCP server / 子代理（Anthropic、Vercel、中软岗都把它当交付物）；③ 给一个客户系统（Salesforce/SharePoint/工单）做带权限边界的连接器；④ 做一个"额度/限流+重试退避"的工程小样（Palantir 编码轮示例题）；⑤ 把交付过程写成 playbook/周报——对应 JD 里的 `"Shape the Deployment Playbook"`。[A]/[C]
- 反向证据（要写进"红线"）：`"The best way to prepare for a Forward Deployed Engineer role is not to search for an 'FDE certification.'"`（KDNuggets 7 步指南，正文因反爬未直读，仅标题与结论可见）来源: https://www.kdnuggets.com/7-steps-to-become-a-forward-deployed-engineer-in-2026 [B]；国内在售的《AI FDE 前沿部署工程师课程》（职坐标）、`fde.academy`（自称 IIT Certified）均为**商业培训**，不是厂商认证，且 fde.academy 首页把第三方招聘统计用作营销。[C]

---

## 六、转型入口：哪些相邻岗位最容易切进来（JD 原文证据）

- 最直接的自证清单在 Vercel：`"…a customer-facing technical role (consulting, solutions architecture, forward-deployed-engineering, or technical founder)"` → **售前/咨询/SA/技术创始人**被点名。[A]
- Anthropic 承认的来源岗位：`"4+ years of experience in technical roles such as Forward Deployed Engineer, Product Engineer, Software Engineer, or Technical Product Manager..."` → **产品工程/软件工程/技术 PM** 可平移。[A]
- AWS 的加分背景：`"Background as a founder, engineering lead, or startup builder..."`、`"Experience leading customer-facing technical projects..."`。[A]
- Accenture-Palantir 岗把**数据工程师**当主入口：`"Minimum of 3 years hands-on experience in data engineering…"` + `"Minimum of 1 years' experience with Palantir Foundry building data pipelines"`。[B]
- Roboflow 把**交付/专业服务/SRE 类**当主入口：`"Experience in a professional services, deployment engineering, or forward deployed engineering role."`、`"Background in IoT, embedded systems, or infrastructure engineering."`。[A]
- 中软国际写国内口径：`"3 年以上技术型客户-facing 岗位经验（如前向部署工程师、具备咨询经验的软件工程师）"`。[B]
- 国内岗位改名现实（同一工作的不同标题）：腾讯云社招 3 个"前线部署工程师"岗（3–5 年，归在**产品**职类）、字节叫"AI FDE 工程师"（归在**研发**职类，飞书/火山引擎/数据平台都有，还有归在"销售-销售支持"类的 FDE 实习生）、阿里云叫"前沿部署工程师"。来源: https://news.qq.com/rain/a/20260829A05RWF00 [C]；同一岗位在国内还有"AI 交付工程师/大模型应用实施工程师/AI 平台运维工程师/解决方案实施工程师"等译名（Boss 直聘口径月薪 12K–25K）。来源: 新浪财经/职坐标 — https://finance.sina.cn/2026-09-18/detail-inisfyev3246529.d.html [C]
- 找岗技巧（可直接写成文案的"实操"）：`"只搜 'Forward Deployed Engineer' 会漏掉大量岗位…职位描述里出现 'post-sale ownership'『embedded with the customer』『commit to client repositories』『驻场'这类表述的，大概率就是 FDE 性质的岗位"`；相邻岗名：Applied AI Engineer、Customer Engineer、Solutions Architect（拥有上线后生产代码责任时）、Deployment Strategist、Integration Engineer、Agent Engineer。来源: https://blog.csdn.net/weixin_42226175/article/details/166236834 [C]
- 后端/数据/测试/实施的可迁移判断（从业者视角）：`"如果你是后端、全栈、测试或实施工程师…FDE 恰恰是 AI 浪潮里最不容易被淘汰的职位"`；`"你做 Java RAG 非常对口"`（工程能力条：Java/Python、数据库、API 集成、Docker、RAG 全链路、私有化部署/权限/数据安全）。来源: https://blog.csdn.net/2501_94660483/article/details/169547914 [C]；https://blog.51cto.com/teayear/14977107 [C]
- 角色区分表（可直接引用做"别投错"提示）：`实施工程师 | 系统上线 | 客户现场 | 中低 | 高（但偏执行）` vs `FDE | 业务价值落地 | 客户现场/混合 | 高 | 极高（偏主动探索）`；SA `"画架构方案、写 PPT，一般不写生产代码，方案交付后移交实施团队"`；售前 `"主要在签单前做 Demo、技术宣讲，签单后基本不跟进落地"`。来源: 同上 51CTO + https://bbs.csdn.net/weixin_34199764/article/details/100378361 [C]

---

## 七、常见失败/被拒理由（尽量保留原句）

- 技术强、讲不清业务价值：`"只会技术的人基本走不到后面几轮"`、`"代码写得再漂亮，讲不清楚业务价值"`。来源: 测试之家《FDE 到底是个什么岗位》 — https://testerhome.com/topics/44826/show_wechat (2026-11-04) [C]
- 编码轮典型失分（指南原文）：`"不澄清环境或约束就直接写代码；思考时沉默；追求算法优雅而忽视鲁棒性、错误处理与客户约束。"` 同页还写 `"干净、可读、有测试的代码优先于'聪明的最优解'"`。来源: https://blog.csdn.net/gitblog_00755/article/details/151523867 [C]
- 客户模拟轮是最狠的一关：`"客户模拟轮（六成淘汰）"`。来源: https://news.qq.com/rain/a/20260829A05RWF00 [C]
- 判断"有没有真交付过"的一句话：面试官问 `"你遇到过最难的客户场景是什么"` —— `"真干过的人会讲具体细节，比如'客户数据格式乱七八糟，光清洗就花了一周'；没干过的人会讲得很空泛，比如'客户需求变更频繁，沟通比较困难'"`。来源: https://bbs.csdn.net/weixin_32296621/article/details/100355491 [C]
- 需求侧失分：`"很多技术功底极强的程序员做交付，容易陷入'客户要啥就给改啥'的陷阱…需求无限膨胀 → 项目延期 → 项目死掉"`。来源: https://m.blog.csdn.net/2301_76168381/article/details/166245635 [C]
- 简历方向错（对 AI 实验室公司）：`"如果你想以工程师身份入职 Anthropic，不要按照传统 AI 实验室的风格撰写简历，要对标基础设施类企业的招聘要求，重点展示你实际搭建、落地并完成规模化迭代的系统项目"`。来源: https://m.sohu.com/a/1037536213_115128/ [C]
- 岗位本身被劝退的一手吐槽：`"FDE简直是他从事工程师以来接触过最糟糕的岗位"`；`"驻场是常态、漂泊是代价，前期，销售、交付、售后全是你一个人"`；真实工作画面是 `"钻进车间，在轰鸣的机器声里记录每台设备的'外号'，并亲手把二维码贴到设备上做定位"`。来源: 腾讯新闻《大规模裁员潮下的AI金饭碗FDE》 — http://view.inews.qq.com/k/20260929A0A3KZ00 [C]
- 假 FDE 的识别（对求职者同样是"被拒/踩坑"原因）：`"写着'驻场交付、按期验收'、挂 8–15k 的，面都不用去面"`；`"有家第三方公司招'大厂FDE-初级'，硕士起，1–3 年，30岁以内，一次招 20 个，接受驻场…我干这行这么久，没见过哪个团队能一口气带 20 个真 FDE，师傅都不够分"`；`"回流这件事，断一次，人就凉了"`（把需求整理成十几页文档发给产品团队，三个月没人回）。来源: 今日头条/网易《都叫FDE，有人在装，有人在玩真的》 — https://3g.163.com/news/article/LAO259O10511805E.html (2026-11-04) [C]
- 面试"反选"七问（作者自述会当面问）：`交付的是这家客户的一套系统，还是产品的一个功能？/ 考核看使用率和稳定性，还是看验收单？/ 现场的反馈回到哪儿，回去以后谁接？/ 薪资挂在哪一档？/ 驻场是手段，还是全部工作？/ 要不要背增购？/ 上线以后，效果谁负责？` 并说 `"对面要是支支吾吾，说'这个看项目情况'，基本就有数了"`。[C]
- JD 里主动划边界的用人方（反向证据，说明"什么都做"是被吐槽出来的）：`"我现在的 JD 里会明确写'不负责售前商务谈判、不负责 7x24 小时运维值班、不负责跨部门资源协调'"`。来源: https://bbs.csdn.net/weixin_32296621/article/details/100355491 [C]

---

## JD 原文清单

> ★ = 读到了任职要求正文；其余为 title/薪资快照或二手转述。**（）内为置信度**。

1. ★ **Vercel — Senior Forward-Deployed Engineer（Professional Services）** | Austin / New York City / San Francisco | `The San Francisco, CA base pay range for this role is $137,000.00 - $207,000.00`（另有股权）| 2026-10-28 页 | https://vercel.com/careers/forward-deployed-engineer-5752684004 [A]
   - `"Build production AI agents, Model Context Protocol (MCP) servers, and agentic workflows with the AI SDK and the eve framework inside customer environments"`
   - `"Lead migrations of legacy React, Vue, and other frontends to Next.js, including Pages Router to App Router, and automate the repeatable steps"`
   - `"6+ years of software engineering experience, including 2+ years in a customer-facing technical role (consulting, solutions architecture, forward-deployed engineering, or technical founder)"`
   - Bonus：`"Diagnosed and fixed Core Web Vitals issues … at scale"`
2. ★ **Vercel — Senior Forward-Deployed Engineer** | Berlin / London | 未标价 | 2026-10-28 | https://vercel.com/careers/forward-deployed-engineer-5778418004 [A]
   - `"Our Forward-Deployed Engineers operate with high agency and autonomy."`；`"You will report to the Global Manager of Forward Deployed Engineering."`；要求 6+ 年、`"exceptional communication"`；加分：企业 AI 转型、大会演讲、开源贡献
3. ★ **Amazon Web Services — Sr Forward Deployed Engineer, AWS Forward Deployed Engineering** | Mountain View/SF/Boston/NY/Arlington/Herndon/Bellevue/Seattle | `$168,100.00 - $261,500.00 USD annually` | `"Requires 30–50% travel"` | https://www.amazon.jobs/zh/jobs/10517491/… [A]
   - `"A Forward Deployed Engineer (FDE) embeds directly inside a strategic enterprise customer to design, build, deploy, and run AI-powered production systems"`
   - `"5+ years of leading design or architecture (design patterns, reliability and scaling) of new and existing systems experience"`；`"Experience as a mentor, tech lead or leading an engineering team"`
   - `"Experience leading agentic and spec-driven development at production scale…"`；`"Experience with AI tools: eval frameworks, agent tooling, RAG pipelines, and prompt engineering"`
   - Preferred：`"Background as a founder, engineering lead, or startup builder…"`、`"Experience with React, TypeScript, Python, and/or Go"`、`"Bachelor's degree in computer science or equivalent"`
4. ★ **AWS — Senior Forward Deployed Engineer (Model Customization and Optimization)** | Boston / Seattle / Arlington / New York | `168,100.00 - 250,200.00 USD annually` | `"Requires up to 25% travel"` | https://www.amazon.jobs/zh/jobs/10585968/… [A]
   - `"As a Senior Forward Deployed Engineer (Senior FDE) on the Custom Model and Optimization team, you are the technical lead embedded inside a strategic…"`
   - 基本资格：`"5+ years of non-internship professional software development experience"`；优先：`"Bachelor's degree in computer science or equivalent"`
5. ★ **Anthropic — Applied AI Engineer, Enterprise Tech** | San Francisco / NYC / Seattle | `$200,000 - $320,000 USD` | http://job-boards.greenhouse.io/anthropic/jobs/5057647008 [A]
   - `"Production experience with LLMs, including advanced prompt engineering, agent development and frameworks, evaluation frameworks, transcript analysis, MCP, and deployment at scale"`
   - `"Strong programming skills with proficiency in Python or TypeScript and experience building production applications"`
   - `"Lead hands-on technical workshops and code reviews with customer engineering teams"`；`"Create scalable public and internal assets documenting the latest LLM prompting, eval, agentic, and architecture techniques"`
   - `"Attend conferences, lead speaking engagements, and write blog posts and white papers…"`；`"Travel occasionally to customer sites for workshops, implementation support, and building relationships"`
6. ★ **Anthropic — Forward Deployed Engineer, Applied AI** | Boston/Chicago/NYC/Seattle/SF/DC | `$200,000 – $300,000`（第三方快照口径为 `$280,000 to $320,000`）| 差旅 25–50%、`25% in-office minimum`、提供签证支持 | https://job-boards.greenhouse.io/anthropic/jobs/4985877008（正文经镜像站读取）/ 镜像 https://jobs.generalcatalyst.com/companies/anthropic/jobs/69674588-forward-deployed-engineer-applied-ai [A/B]
   - `"Embed directly with our most strategic customers to drive transformational AI adoption."`
   - `"Deliver technical artifacts for customers like MCP servers, sub-agents, and agent skills."`
   - `"Provide white glove deployment support for Anthropic products in enterprise environments."`
   - `"3+ years of experience in a technical, customer facing role."`（GC 镜像同岗位写 4+ 年）
7. ★ **Roboflow（YC）— Forward Deployed Engineer** | Remote (US)，枢纽 NYC/SF/São Paulo | `$180,000–$250,000, with additional equity compensation` | `"Willingness to travel ~40–50% for on-site customer deployments"` | https://www.ycombinator.com/companies/roboflow/jobs/VaMFHs6-forward-deployed-engineer [A]
   - `"Embed with Customers… typically 4–12 weeks per engagement."`；`"Knowledge Transfer & Handoff… train the customer's team so they can operate."`
   - `"Strong proficiency in Python; experience with systems-level work (Docker, Kubernetes, networking, Linux)."`
   - `"Experience with edge computing hardware and constraints (NVIDIA Jetson, industrial cameras)."`
   - `"Strong interpersonal skills… talk to executives, engineers, and machine operators."`；`"You're a tinkerer outside of work."`
8. ★ **Metal（YC）— Forward Deployed Engineer, Strategic Account** | 现场岗：客户办公室 + `"Metal's office in Brooklyn, NY"` | `Base salary: $150,000 to $240,000 USD` | https://www.ycombinator.com/companies/metal/jobs/7zlvBO4-forward-deployed-engineer-strategic-account [A]
   - `"Own deployment end to end. Build on the platform. Integrate customer stack. Debug and operate. Earn trust at top. Feed product."`
   - `"You ship production software… 3 to 5+ years… You build with AI, you don't just follow it… Entrepreneurial mindset."`
   - 客户系统：`"Salesforce, DealCloud, SharePoint, LLM-powered systems (agents, retrieval, evals)."`
9. ★ **Accenture — "Palantir Forward Deployed Engineer"（R00324743）** | 美国（页面对爬虫关闭） | 未标价 | `"The amount of travel will vary from 0 to 100% depending on business need and client requirements."` | https://www.accenture.com/us-en/careers/jobdetails?id=R00324743_en [B]
   - `"Minimum of 3 years hands-on experience in data engineering, including ETL/ELT pipelines, data warehousing, and large-scale data integration."`
   - `"Minimum of 1 years' experience with Palantir Foundry building data pipelines, managing datasets, and deploying applications within Palantir Foundry and/or Palantir Gotham"`
   - `"Minimum of 1 year experience prompt engineering and applied AI techniques within Palantir (AIP, model deployment, feature engineering)"`
   - `"Minimum of 3 years working with cloud platforms (AWS, Azure, or GCP)"`
10. ★ **Deloitte — Forward Deployed Engineer, Frontier GenAI** | 全球 34 个城市可选 | 未标价 | 50% 出差 | https://blog.csdn.net/DK_Allen/article/details/162700891（中文译文快照）[B]
    - 任职要求（中译）：`"3 年以上软件工程、数据工程或分析工程经验"`、`"1 年以上构建和部署 GenAI/LLM 解决方案的实战经验"`、`"1 年以上使用 Anthropic、Google 或 OpenAI 前沿 AI 平台的经验"`、`"本科及以上学历，计算机、数据科学或工程专业"`、`"能够 50% 的时间出差"`
    - 职责（中译）：`"嵌入客户现场，识别业务需求，将高价值 GenAI 用例转化为解决方案"`、`"交付生产级代码，包括测试、CI/CD、日志、版本控制"`
11. ★ **Palantir — Forward Deployed Software Engineer, Tactical Edge** | 未列 | `"年薪 17 - 20 万美元起"`（二手中文） | https://blog.csdn.net/DK_Allen/article/details/162700891 [B]（Palantir 官方原句另见 `"a software engineer who embeds directly with our customers to configure Palantir's existing…"`，来自 beam.ai 对 Palantir 官方描述的引用 https://beam.ai/agentic-insights/agent-deployment-engineers-the-evolution-of-deployment-roles-in-enterprise-software [B]）
    - 中译要求：`"5 年以上工作经验"`、`"2 年以上软件工程、数据工程、解决方案架构或客户现场交付经验"`、`"精通至少一门编程语言（Python 优先）"`、`"熟悉 Palantir Foundry / Gotham / AIP 任一平台"`
    - 中译职责：`"驻场客户侧，从需求定义、架构设计、POC 验证到生产部署"`、`"设计数据治理与合规方案（GDPR、HIPAA、FedRAMP）"`
12. ★ **中软国际 — FDE 工程师** | 北京/上海/深圳 | 本科 | 未标价（`基础薪资 + 项目奖励 + 客户成功激励`）| http://www.chinasofti.com/pages/career/2 [B]（页面动态加载，正文取自搜索快照）
    - `"嵌入客户系统内部，使用大语言模型构建生产级 AI 应用程序，交付 MCP 服务器、子代理与 Agent 技能等。"`；`"承担约 25% 的差旅，深入客户现场面对面共建。"`
    - `"本科及以上学历，3 年以上技术型客户-facing 岗位经验（如前向部署工程师、具备咨询经验的软件工程师）。"`
    - `"具备 LLM 生产级实战经验，包括高级提示工程、Agent 开发、评估框架设计以及大规模部署与运维。"`
    - `"或具备'Echo 型'业务专家特质：对业务语义'有品味'，能将客户深层痛点高质量转化为 Prompt、Ontology 与 Agent 设计。"`；加分：`"拥有 AI 应用开源项目、技术博客或已上线的生产级 LLM 产品者优先。"`
13. ★ **国内某公司 — FDE（向前部署工程师）**（经安徽就业服务聚合站发布） | 未列 | 未标价 | https://yun.ahbys.com/Job.html?cid=434272&jid=324343 [B]
    - `"1-3 年 AI 应用工程 / 模型部署 / 系统集成 / 技术交付相关工作经验；优秀应届毕业生亦可，由资深工程师带教培养。"`
    - `"熟悉大语言模型（LLM）的部署、推理优化（vLLM / TensorRT-LLM / Ollama 等），了解模型微调（LoRA / QLoRA / SFT）基本流程。"`
    - `"具备 Agent 编排与多模态应用开发经验，熟悉 LangChain / LlamaIndex / Dify 等主流框架。"`
    - `"熟悉 Linux 系统运维、Docker / K8s 容器化部署、GPU 算力环境配置与调优。"`；学历：`"计算机科学、人工智能、软件工程、电子信息等相关专业，本科及以上学历"`
14. ★ **猎聘在招 — AI Agent 开发工程师**（国内 FDE 变形岗） | — | https://www.liepin.com/job/1985451489.shtml [B]
    - `"熟练运用 RAG（检索增强生成）技术栈，包括向量数据库、文档分块策略、混合检索及重排序，能优化知识召回与生成质量。"`
    - `"熟悉 Harness 相关工具链：具备设计 Agent 测试的经验，能对 Agent 的准确性、延迟、工具调用成功率、记忆系统等进行量化评估。"`
    - `"熟悉常见 Agent 模式（ReAct、Plan-and-Execute、Reflection、Multi-Agent 协作）。"`；`"了解 Docker、Kubernetes 及云部署（AWS/GCP/Azure），能够将 Agent 服务化并监控其运行状态。"`
15. ★ **腾讯云 — AI 前线部署工程师（社招 3 岗）** | — | `"50-80K/月"`（转述） | 3–5 年以上、归"产品"职类 | https://www.toutiao.com/a7694673992019444264/（作者从三份 JD 扒的"招聘原文要求"表）[B/C]
    - `"Python / TypeScript / Java 至少两门，精通 Python"`；`"精通上下文工程、RAG、MCP、SDD、Harness 工程"`
    - `"独立开发过 2 个以上完整 AI Agent（熟悉 ReAct / Plan-and-Execute）"`；`"独立构建过 1 个以上生产级 RAG 知识库"`
    - `"Docker/K8s、向量数据库（Milvus/ES）、公有云、CI/CD"`；`"深度使用 CodeBuddy/Claude Code/Cursor，懂上下文管理"`；`"能与非技术高管谈 ROI，也能与研发对齐技术方案"`
    - 另一份国内 JD 亮点句（腾讯）：`"沉淀为可复用的交付资产与行业方案模板，反哺产品竞争力提升"`，并列交付周期缩短率、代码采纳率、办公效率三个指标 [C]
16. ★ **Johnson & Johnson — Mgr, Forward Deployed Engineer, Data & Intelligence** | — | 未标价 | 页面 403，正文取自搜索快照 https://www.careers.jnj.com/en/jobs/r-090548/mgr-forward-deployed-engineer-data-intelligence/ [B]
    - 技能标签原文：`"Databricks Apache Spark Delta Lake SQL Python"`、`"Infrastructure as Code (IaC) DevOps & CI/CD LLMs Generative AI Agentic AI RAG Vector Databases MLOps AI Governance Machine Learning Engineering Clinical Trial Data"`
    - `"Databricks, Azure, or AWS certifications. Experience building AI-enabled products and data platforms."`
17. **OpenAI — Forward Deployed Engineer (FDE) - SF / Seattle / Gov** | SF、Seattle、NYC、东京、首尔、新加坡、Dublin、London、Madrid、Munich、Paris、Stockholm | Seattle base `16.2 万–28 万美元 + equity`；Gov `14.58 万–28 万美元 + equity`；第三方口径 `$185,000 to $300,000` | `"最多 50% 出差"` | https://openai.com/careers/forward-deployed-engineer-(fde)-sf-san-francisco/（403，snippet-only）[B]
    - 转述原句：`"与最重要的战略客户合作，主导前沿模型在生产环境里的端到端部署"`；`"从需求梳理、技术评估、系统设计，一路负责到开发上线"`；`"五年以上工程或技术部署经验，其中要有面向客户的工作经历"`；`"能用 Python、JavaScript 写生产级代码"`；关键词 `"production deployment / embed with customer teams / eval-driven feedback / roadmap input"`（来源: 搜狐 https://m.sohu.com/a/1065298309_120176300；掘金/CSDN 核验清单 https://github.com/dongzhang84/snowboat-blog [B]）
18. **Databricks — Sr. Forward Deployed Engineer（Retail / Public Sector & National Security）** | Remote/US 分带；Baltimore MD | `Zone 1–4: $182,000 — $250,208 USD` | https://www.reddit.com/r/jobhuntify/comments/1v71euw/（正文抓取失败）与 https://fdepulse.com/jobs/ [B]
    - 团队定位（Databricks 官方口径转述）：`"AI Forward Deployed Engineering 团队是一个高度专业化、面向客户的 AI 团队，帮助客户构建并生产化 first-of-its-kind AI applications"`；要求含 `"RAG、多智能体系统、Text2SQL、fine-tuning"` [B]
19. **Google Cloud — Forward Deployed Engineer, Generative AI（IV / Staff / Senior）** | NYC / Seattle / Frankfurt / Sydney 等 | 未标价（本次未直读 careers 页） | https://fdepulse.com/jobs/ 与 https://www.linkedin.com/jobs/… [B]
    - 岗位原句（二手英文摘写）：`"embedded builder, connecting frontier AI products to production-grade reality… code, debug, and jointly ship."`；技能原句：`"实现多智能体系统，懂 ReAct、自我反思、层级委派"`、`"理解 tokens/sec、cost-per-request 等 LLM 原生指标"`、`"包含 MCP、tool-calling 和 OAuth 认证的 agentic workflows"` [B]
20. **Scale AI — Forward Deployed AI Engineer** | 未列 | https://blog.csdn.net/starzhou/article/details/167173831（引用 JD 英文片段）[B]
    - `"develop production-grade AI agents… architect multi-agent systems… implement evaluation frameworks."`
21. **Cognition — Deployed Engineer (Devin)** | — | `$98K–$241K` | https://github.com/harrisliangsu/ai-agent-engineer-handbook/blob/main/interview-prep/jd-requirements.md（2026-05-02 抓取）[B]
    - `"Deployed Engineers are customer-facing technical experts…"`
22. **Glean — Machine Learning Engineer, AI Assistant & Autonomous Agents** | — | `$240K–$300K` | 同上 jd-requirements.md [B] — `"Build frameworks for LLM-powered agents to use tools…"`
23. **Harvey — Senior Forward Deployed Engineer** | New York（线下/混合）| `"260K base salary"` + equity + bonus | `"5 年以上面向产品的全栈软件工程经验"` | https://m.sohu.com/a/1065978305_120176300（引用 Harvey Careers 官方页）[B]
    - 交付描述（转述）：`"把检索、工具或 Agent、prompt、guardrails 与客户级 evals 组合成可操作的工作流"`、`"对接 DMS、知识库、工单和 SSO"`
24. **Booz Allen Hamilton — Forward Deployed Engineer** | Remote | `$78K–$176K` | https://fdepulse.com/jobs/ [B]（快照级，正文未读）
25. **LiveKit / Baseten / Socure / Pragmatike / VAST Data / Nanonets / Aircall / Computer Futures / 东京&巴黎多岗** | Seattle $180,000–$320,000（LiveKit）、$165,000–$330,000（Baseten）、$250,000–$280,000（Socure "Forward Deployed Engineer - RiskOS Agents"）、$200,000–$400,000（Pragmatike, YC 经验）| https://fdepulse.com/jobs/、LinkedIn 职位列表 [B]
26. **Atlassian — Principal Forward Deployed Engineer / Principal Forward Deployed Architect** | Remote（FDE）$196K–$308K；官方岗详页 https://www.atlassian.com/company/careers/details/25246（本次未直读正文）| [B]
    - 岗位定位（转述）：`"将企业级技术设计与业务和咨询技能相结合…定义目标状态架构、推动转型"`；并明确 `"不是传统的解决方案工程师角色，也不是主要以键盘为工具、动手写代码的工程角色"`
27. **SAP — Forward Deployed Application Engineering Chief Expert (f/m/d)**（Munich / Garching）、**Forward Deployed Application/ML Engineering Expert**（Bangalore）| https://jobs.sap.com/go/Development-and-Technology/4943701/125/ [B]（仅标题级证据，说明"forward deployed"已进入欧洲传统企业软件职级体系）
28. **全国大学生就业服务平台（源自 BOSS 直聘）— 前沿部署工程师** | 辽宁沈阳 | `5.0 - 9.0 K/月`，`硕士及以上`，专业不限，招聘人数不限 | https://m.job.ncss.cn/student/jobs/XJvAktSeeaTxDtUJPUzVB3/detail.html [B] → 国内同名岗位薪资跨度极大的下界样本。
29. **Apple — Engineering Manager (Customer Engagement), AI & Data Platforms** | https://jobs.apple.com/zh-cn/details/200662407-3956 [B] — `"A key part of this role is the opportunity to help stand up a forward-deployed engineering team"`；`"10+ years of software or data engineering experience, with at least 5 years in engineering management"`（甲方在建 FDE 组织的证据）
30. **Novartis — Forward Deployed Engineer (FDE) Data42** | 页面 404（原 URL 已失效）| `"Bachelors degree in Biology, Bioengineering, Bioinformatics, Biostatistics or related discipline. 8+ years of experience…"`、`"an embedded technical delivery leader who partners directly with domain teams to turn high-value problems into working data and AI applications"` [B]（快照）

---

## 红线：不能写的说法

- 不能写"OpenAI FDE 总包 50 万美元起 / Anthropic FDE base 34–48.5 万美元"这类来自自媒体换算的数字当作招聘页事实；可核到的官方口径只有 AWS `$168,100–$261,500`、Anthropic `$200,000–$320,000`、Vercel `$137,000–$207,000`、Roboflow `$180,000–$250,000`、Metal `$150,000–$240,000`、Databricks `$182,000–$250,208`。匠人学院页的"总包轻松破 $500K""FDE 占一线 AI 公司工程领导层大半壁江山"**无任何来源**。
- 不能写"95% 的 FDE 岗位都要求 RAG/MCP/向量库/SOC2/SCIM/Terraform"——本批 16 份可读正文 JD 的实际覆盖率分别是 RAG 5/16、MCP 6/16、向量库 3/16、SOC2 0/16、SCIM/SAML 0/16、Terraform/IaC 1/16。
- 不能写"FDE 是应届生/转行零基础友好岗"：主流区间 3–6 年，1/16 允许 1–3 年（且是"由资深工程师带教培养"）；国内 50+ 份 JD 汇总口径写"5–10 年"。Anthropic 简历分析写"应届生几乎没机会"。
- 不能把"面试有 7 轮 / 编码轮通过率 55-60% / 客户模拟轮淘汰六成 / team day"当官方事实陈述，必须加"据面试指南/面试回忆"限定；不同来源给出的轮次数（5 轮 / 5 关 / 7 轮 / 4-6 轮）互相矛盾。
- 不能写"FDE 时间分配 = 1/4 写码、1/2 集成、1/4 沟通"：该比例已被中文研究博客明确标注为"没有找到一手来源"。可用的是 [C] 级从业者经验句（40% 写码/60% 沟通、约三分之一时间在路上、写代码只占三分之一），且必须标为个人经验。
- 不能写"FDE Academy / IIT Certified / 职坐标课程 = 官方认证"、不能写"考个 FDE 证就能上岗"；Anthropic/OpenAI 官方徽章与 Palantir/Databricks 认证都不构成雇佣资格，OpenAI 帮助中心原文就写徽章"不属于认证"。国内也没有"工信部统一 FDE 认证"（企业信用平台口径也是这么说的）。
- 不能写"Claude Frontier Academy 谁都能报名"（企业提名制）；不能写"考了 CCA 就能进 Anthropic 做 FDE"。
- 不能写"Indeed 数据 = 年薪 17–20 万美元是 FDE 普遍水平"作为本文主数字（该口径为转载二手），且不能把美国 base 换算成"年薪百万人民币"给国内读者当预期。
- 不能写"xAI / Cohere / Mistral / Hugging Face / Stripe / Anduril 有 FDE 岗位"——本次检索**未取到这些公司的 FDE JD**（Stripe 仅出现在媒体并列名单里；Hugging Face 仅出现"Deployment Engineer"字样于求职中介文章，不可信）。Cohere 只出现在"前 Palantir FDE 去了哪儿"的自述里。
- 不能把 Palantir `Echo/Delta`、`Deployment Strategist` 说成当前 JD 的正式要求（Echo/Delta 是团队分工说法，来源为官方博客与行业复盘）；不能写"Palantir 官方招聘页把自己称为这一职位的开创者"这类无法定位原句的表述。
- 不能引用 `中软国际/字节/豆包 FDE 月薪 3.5–7 万`、`智谱 FDE 负责人 6–8 万`、`AI 岗位月均 60738 元、缺口超 120 万、供需比 0.5` 作为权威统计（均来自自媒体汇编或转载，未取到平台原始截图页）；可写"有自媒体报道过"。
- 不能写"国家文件已把 FDE 纳入职称评定"为确定事实：现有证据为 [C] 级（2026-08-27 主管部门文件鼓励服务商搭建"前线部署工程师"团队；上海 2025 年 11 月办首期培训并与中级职称挂钩，出自企业信用平台聚合页，未取到政府原文）。
- 不能把 `95% 的企业 GenAI 试点没有可衡量业务影响`（MIT NANDA 报告）说成 FDE 岗位的直接原因，只能作为"行业动因引用"，并标注为二手引用。
- 不能伪造 JD URL 或公司岗位标题；本文件中所有未直读页面均已标注 [B]/[C] 与"snippet-only/页面 403/404"。

## 可直接用于文案的硬数字清单

- 岗位数量增速：`FDE 岗位由 2025 年 4 月的 643 个增至 2026 年 4 月的 5,330 个，同比增长约 729%`（Indeed 数据，Business Insider 报道，被多篇中文转载）。来源: https://blog.csdn.net/weixin_42226175/article/details/166236834 / https://www.bilibili.com/video/BV17yMR6gEHP [B]
- `2025 年 1 月至 9 月间，FDE 的招聘量激增了 800%`（Indeed 口径，转载）来源: http://cj.sina.com.cn/article/normal_detail?url=…inircrnn9223430 [C]
- `As of May 30, 2026, … "224 open Forward Deployed Engineer roles across 39 distinct companies."`（JBC 职位指数，经 Uplers 转引）来源: https://www.uplers.com/article/forward-deployed-engineer-guide/ [B]
- FDE Pulse 聚合站在招条目：`Total roles: 1313`（2026-11-04 快照）。来源: https://fdepulse.com/jobs/ [B]
- Palantir：`283 active postings (2026, +66.4% YoY)`，岗位族含 FDSE（Delta）、Deployment Strategist（Echo）、Forward Deployed Data Engineer。来源: https://joinplank.com/research/palantir [C]
- 地理分布：`New York now accounts for 35% of all FDE postings.` 来源: https://www.paraform.com/blog/openai-forward-deployed-engineer [C]
- 官方薪资带（可直接写"招聘页公开区间"）：AWS `168,100–261,500`；AWS（模型定制岗）`168,100–250,200`；Anthropic（Applied AI/Enterprise Tech）`200,000–320,000`；Anthropic FDE `200,000–300,000`（另一快照 `280,000–320,000`）；Vercel SF `137,000–207,000`；Roboflow `180,000–250,000`；Metal `150,000–240,000`；Databricks `182,000–250,208`；Booz Allen `78,000–176,000`；Socure `250,000–280,000`；Baseten `165,000–330,000`；LiveKit `180,000–320,000`；Atlassian Principal `196,000–308,000`；Palantir Assoc Director `151,000–434,000`。
- Anthropic 招聘带（Valletta 2026-09-08 抓取）：OpenAI FDE `$185,000 to $300,000`（含股权），Gov FDE `$145,800–$280,000`；Palantir FDSE `$125,000–$200,000`、Forward Deployed AI Engineer（NY）`$135,000–$200,000`、Enablement `$110,000–$147,000`、Security `$90,000–$150,000`。来源: https://vallettasoftware.com/blog/post/forward-deployed-engineer-salary [B]
- 咨询/大厂跟进：BCG 2026 年 4 月把 BCG X 工程与设计组织员工统一更名 FDE，应届"前线部署 AI 工程师/科学家"第一年基础年薪 `11 万–19 万美元`；德勤计划在 2027 财年前招聘、培训并认证 FDE；微软向 Microsoft Frontier Company 投入 `25 亿美元`、组织 `6,000 名`工程师与行业专家；AWS 宣布 `10 亿美元`建设 Forward Deployed Engineering 组织。来源: sina/BCG 转述 [C]、https://www.bilibili.com/video/BV17yMR6gEHP [B]、https://github.com/dongzhang84/snowboat-blog [B]
- Anthropic 生态与培训数字：2025-12 联合埃森哲训练约 3 万名员工用 Claude；2026-10-02 Claude Frontier Academy 投入 `1 亿美元`、目标 2027 年底前 `1 万名 Frontier Deployed Engineers`；CCA 认证 `60 题 / $99`、权重 `Agent 架构 27% / Claude Code 20% / Prompt 20% / MCP 18% / 上下文 15%`。来源: https://m.163.com/dy/article/L9PPVRVM05118I96.html [C]、https://post.m.smzdm.com/p/avg8k3g7/ [B]
- OpenAI 组织动作：2026-05-11 成立 DeployCo/OpenAI Deployment Company，初始投资超 `40 亿美元`、`19 家`机构参投，收购 Tomoro 一次性带入 `150 名`部署工程师。来源: https://m.163.com/dy/article/L9PPVRVM05118I96.html [C]、https://openai.com/index/openai-launches-the-deployment-company/ [B]
- Palantir AIP Bootcamp：`1–5 天`；场次 92（2022 年底）→ 500+（2023 年底，覆盖 465+ 机构）→ 1300+（2024 年 6 月，560+ 机构）；转化率约 `70–75%`；Walgreens 借 Foundry+AIP `8 个月`内试点从 `10 家店`扩至约 `4000 家`；AT&T 的 Foundry 上运行 `660 个`应用、其中 S.C.O.U.T. 由 `100+ 名`AT&T 工程师参与。来源: http://www.datayuan.cn/article/24067.htm [B]、https://qifukexue.com/?p=39863 [B]
- 学历/年限门槛数字：16 份可读正文 JD 中，明确写"本科及以上"仅 5 份、把专业限定为 CS/数据/相关学科仅 3 份；显式写"客户面向经验年限"的 5 份（2 年 / 3 年 / 1 年主导项目 / 3 年 / 有面向客户经历）；明确写差旅百分比的 7 份，区间从 `up to 25%` 到 `50%`，Roboflow 是 `~40–50%` 且嵌入周期 `4–12 weeks per engagement`。
- 官方认证可写数字：Databricks GenAI Engineer Associate `200 美元 / 90 分钟 / 45 题 / 2 年`；Google Cloud PMLE `200 美元 + 税 / 2 小时 / 50–60 题`；NVIDIA 助理级 `125 美元起`、专业级约 `400 美元`；Palantir Foundry 认证 `70% 通过率`，官方建议 `3–6 个月`平台实践经验；OpenAI Academy 徽章需测评 `80%` 以上。来源: https://blog.csdn.net/u014177256/article/details/166645597 [B]、https://www.palantir.com/docs/zh/foundry/announcements/2023-03 [A]、https://help.openai.com/zh-hans-cn/articles/20001270-openai-academy-courses [A]
- 市场规模类（慎用，标"官方财报口径"）：Palantir 2026 Q1 总收入同比 `+85%`、美国商业收入同比 `+133%`；另有转载口径"市值超 4000 亿美元、季度营收 19.4 亿美元同比 +93%"（两处不一致，需注明不同季度）。来源: https://www.bilibili.com/video/BV17yMR6gEHP [B]、https://m.toutiao.com/article/7683504090755662399/ [C]
- 国内薪资跨度样本：最高端 `50-80K/月`（腾讯系转述）与最低端 `5.0-9.0 K/月（硕士及以上，沈阳，专业不限）`（国家大学生就业平台转载 BOSS 直聘）——同名岗位价差可达 10 倍，可用作"看 JD 别看名字"的论点。

## 幽默素材观察

> 只列真实场景细节，供轻度情景幽默；不要编造"某公司 FDE 的一天"。

- 高薪与贴二维码的反差：`一位拿到月薪 5 万 offer 的工程师，第一天上班，却要进厂贴二维码、敲台账`；另一处：`钻进车间，在轰鸣的机器声里记录每台设备的"外号"`（设备外号→资产编号→AI 才能用）。来源: https://m.toutiao.com/article/7701991670681797156/ [C]、http://view.inews.qq.com/k/20260929A0A3KZ00 [C]
- 出差体感：AWS 一份岗写 `30–50% travel`、另一份写 `up to 25%`，同一个部门两个数字；Deloitte 直接写"能 50% 时间出差"；OpenAI 岗"一半时间在出差"。可玩"同一家公司的两份 JD 对差旅都不一致"。
- 客户说不清需求的经典句式（来自 Palantir 官方描述转述）：`"为什么我们的航班总在延误？""怎样更有效发现洗钱？""我们为什么在流失客户？"` —— 客户不给表结构，只给麻烦。来源: https://xueqiu.com/5165301084/409910958 [B]
- 面试轮的荒诞感：Anthropic 面试被问 `管理层想要让 Agent 直接修改已有的生产系统，但安全团队表示坚决反对，工程师应该听谁的？`、`一家公司已经购买了 AI 服务…反馈说根本不好用，问题是出在 AI 模型、数据、权限，还是选错了工作流？`；价值观关直接问"股价归零"。[C]
- "假 FDE"的现场味：`写着"驻场交付、按期验收"、挂 8–15k 的，面都不用去面`；`一次招 20 个 FDE…师傅都不够分`；`把客户的需求整理成十几页文档发给产品团队，三个月没人回，后来他就不写了`。[C]
- 比喻现成可用：`企业花大价钱买回一整套智能厨房设备…FDE 就是厂家派来的师傅，常驻你家后厨`；`Palantir 用剧团来指面对客户时的状态`，并把塑造客户认知称为"黑暗的艺术"，底线是`先把产品做好，交付真实的价值`。[C]
- 一线调优的段子素材：`远程看日志只会发现"召回率低"，不在现场看不出"切块太粗"`——因为要看原始文档才知道手册是分点混排的；`先集中解决切块和 embedding 这两个影响最大的，客户信心就上来了`。[C]
- 术语堆砌自嘲：国内 JD 一行里同时出现 `"精通上下文工程、RAG、MCP、SDD、Harness 工程"`；聚合站 JD 把 `"享受 Vibe Coding 与 Harness 驾驭工程"`写成"Delta 型手搓党特质"；GitHub 播客则直接说 `"A forward-deployed engineer job has already existed, but AI branding makes it sound edgy"`。[B]/[C]
- 同一岗位四种叫法（求职者的迷宫）：阿里云"前沿部署工程师"、腾讯"AI 前线部署工程师"、字节"AI FDE 工程师"（还归在研发类），字节的 FDE 实习生归在"销售-销售支持"类。[C]
