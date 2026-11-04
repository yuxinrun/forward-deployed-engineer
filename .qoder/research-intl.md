# FDE（Forward Deployed Engineer）国际一手素材库

用途：为中文科普网站提供可核查事实底稿。只写研究结论，不含网站代码。

引用规则（全站统一）：
- `[A]` = 本次已抓到页面正文，引文可逐字复用。
- `[B]` = 只拿到搜索摘要/镜像页/二手转述，原文页面抓取失败（403/404/fetch failed）或引文来自他人转述；括号内写明限定条件。
- `[C]` = 流行说法，证据链弱或口径不明；文案中若要写必须加"据报道/二手统计"限定。
- 所有 JD（岗位描述）引文保留英文原文，不做中文化（便于读者回查原页）。
- 本次访问日期统一记 2026-11-04（部分页在 11-05 复抓，正文未变）。

抓取失败清单（决定了下面的 [B]/[C] 分布）：openai.com（403）、blog.palantir.com/Medium（403）、job-boards.greenhouse.io/anthropic 正文（只返回目录列表）、en.wikipedia.org（网络失败 ×3）、levels.fyi（405）、fortune.com（404）、nabeelqu.co（429）、businessinsider.com（fetch failed）、theregister.com（只回 JS/CSS）、morningstar.com（403）、netguru.com（只回 metadata）、linkedin.com（跳 linkedin.cn）。

---

## 一、起源：Palantir 的 FDE 到底是什么

- Palantir 官方定义："A Forward Deployed Software Engineer (FDSE), or "Delta," is a software engineer who embeds directly with our customers to configure Palantir's existing software platforms to solve their toughest problems." 来源: A day in the life of a Palantir Forward Deployed Software Engineer (Palantir blog, 2020-11-03) — https://blog.palantir.com/a-day-in-the-life-of-a-palantir-forward-deployed-software-engineer-45ef2de257b1 (访问日期 2026-11-04) [B]（限定：Medium 正文 403，引文为搜索结果逐字摘要）
- 最关键的"反差句"（可作为全篇定义锚点）："While a traditional software engineer, or "Dev," focuses on creating a single capability that can be used for many customers, FDSEs focus on enabling many capabilities for a single customer." 来源: Palantir blog 同上 — https://blog.palantir.com/a-day-in-the-life-of-a-palantir-forward-deployed-software-engineer-45ef2de257b1 (访问日期 2026-11-04) [B]（限定：同上，Palantir 自己博客的搜索摘要，可信度高但建议复核）
- 同一定义的第三方复述："one capability, many customers"（Dev）对 "one customer, many capabilities"（FDE）。 来源: Recruiting Forward Deployed Engineers: 2026 Guide (HeroHunt) — https://www.herohunt.ai/blog/recruiting-forward-deployed-engineers-2026/ (访问日期 2026-11-04) [A]
- 内部代号体系：FDSE = "Delta"（软件工程师），Deployment Strategist = "Echo"（洞察需求、定义 "What & Why" 的行业专家/分析师），二者常配对进客户现场。 来源: Palantir Technologies: FDE Profile (Plank research) — https://joinplank.com/research/palantir (访问日期 2026-11-04) [B]（限定：正文只拿到摘要表格；Echo/Delta 分工的另一独立来源见下条）
- Echo/Delta 双人组的通俗版本："该公司通常派遣两名员工组成团队，内部代号为 "Echo" 与 "Delta"，前者负责洞察客户需求，后者则具备实现需求的技术能力"（英文原口径未获取）。 来源: 招聘发布量激增800%（腾讯新闻转述 SCMP） — https://view.inews.qq.com/wxn/20251103A03S9M00 (访问日期 2026-11-04) [C]（限定：中文转述英文报道，具体原始出处未核到）
- Delta 的第一人称描述：作者 Chinemerem E. 自述 2020 年 9 月加入任 FDSE（"Delta"）。 来源: Who wants to be a Delta? (Palantir blog) — https://blog.palantir.com/who-wants-to-be-a-delta-8d2ea948035 (访问日期 2026-11-04) [B]（限定：仅搜索摘要，Medium 正文 403）
- "Delta" 岗位在 Palantir 官方社区里的解释（FDE 是什么）见官方社区帖。 来源: Who are Palantir FDEs? (Palantir Community) — https://community.palantir.com/t/who-are-palantir-fdes/6847 (访问日期 2026-11-04) [A]
- 词源认领：Palantir 高管 Shyam Sankar 称该词是他 2007 年造的，起因是 Karp 让他 "to build that, but for engineering"；他的总结是 "This approach built an engineering organization with unmatched creativity, responsiveness, and focus on the primacy of winning." 来源: The Register 关于 FDE 潮的长文 — https://www.theregister.com/2026-10-03/palantirs-fondness-for-french-food-cooked-up-techs-latest-fad-forward-deployed-engineers/5300360 (访问日期 2026-11-04) [B]（限定：Register 页面只返回 JS/CSS，引文来自搜索摘要 + 多个聚合站交叉复述；"2007 造词"另有 2016/2011 等竞争性说法，务必用"据 Sankar 本人回忆"限定）
- 灵感来源比喻（适合做"这活儿为什么像服务生"的段子）：Palantir 前商业化主管 Ted Mabrey 说角色灵感来自 Karp 对法国高级餐厅的观察——好餐厅的服务生是后厨向前延伸的一部分（英文原句未获取）。 来源: Palantir活成了所有FDE羡慕的模样（MIT 科技评论中国） — http://mittrchina.com/news/detail/16734 (访问日期 2026-11-04) [C]（限定：中文转述，未看到 Mabrey 原文）
- 制度化时间点：Palantir 把原有的 solutions engineers / integration engineers 改名为 forward-deployed engineer 是在 2011 年。 来源: Forward Deployed Job Titles (Tom Hollands, a16z, 2026-01-27) — https://a16z.com/forward-deployed-job-titles/ (访问日期 2026-11-04) [A]
- 改名动作的原始描述（批评视角也用它）："They took their solutions engineers and integration engineers—typically among the lower-status roles in any engineering org—and gave them a new title: forward-deployed engineer." 来源: 同上 a16z — https://a16z.com/forward-deployed-job-titles/ (访问日期 2026-11-04) [A]
- Palantir 招股书（2020 S-1）自陈："Our software is on the front lines, sometimes literally, and that means so are we. Our forward deployed engineers ("FDEs") have travelled to bases in Afghanistan and factories in the industrial Midwest to deploy our platforms." 来源: 2020 S-1 转引（From DevOps Engineer to Forward Deployed Engineer, CloudThinker） — https://www.cloudthinker.io/blogs/from-devops-engineer-to-forward-deployed-engineer (访问日期 2026-11-04) [B]（限定：引用的是 Palantir 2020 S-1，但未直接抓取 SEC 原文，发布前建议比对 SEC EDGAR）
- 10-K 风险因素里确实出现 "forward-deployed engineers"，即该岗位名已进入法定披露文件。 来源: Palantir Technologies Form 10-K (2021, SEC EDGAR) — https://www.sec.gov/Archives/edgar/data/1321655/000119312521060650/d65934d10k.htm (访问日期 2026-11-04) [A]
- Palantir 当前招聘侧的官方表述（JD 原文，可逐字引用）："Ability and interest to travel up to 25%, as needed to client sites, but flexible based on personal preferences." 来源: Forward Deployed Software Engineer — Lever (Palantir) — https://jobs.lever.co/palantir/dab396d4-2f14-4796-aac0-0d82883dccf0 (访问日期 2026-11-04) [A]
- 同一条 JD 的薪资与股权表述："The estimated salary range for this position is estimated to be $135,000 - $200,000/year. Total compensation for this position may also include Restricted Stock units, sign-on bonus and other potential future incentives." 来源: 同上 Lever — https://jobs.lever.co/palantir/dab396d4-2f14-4796-aac0-0d82883dccf0 (访问日期 2026-11-04) [A]
- 同一条 JD 的门槛："1+ years of relevant, post-college work experience." 来源: 同上 Lever — https://jobs.lever.co/palantir/dab396d4-2f14-4796-aac0-0d82883dccf0 (访问日期 2026-11-04) [A]
- Palantir 官方 JD 里最"抓人"的一句（媒体也反复引用）："As an FDSE, your responsibilities look similar to those of a startup CTO: you'll work in small teams with minimal supervision and own end-to-end execution of high stakes projects." 来源: Fortune（转引 Palantir JD）2026-09-03 — https://fortune.com/2026-09-03/forward-deployed-engineers-fast-growing-six-figure-silicon-valley-job-integrate-ai-with-customers-tech-careers-palantir/ (访问日期 2026-11-04) [B]（限定：Fortune 页面返回 404，引文来自搜索摘要，另有中文译文交叉）
- 同 JD 的日常描述："Your day might span discussing architecture with fellow engineers, wrangling massive-scale data, cod…"（后文为开发定制 Web 应用、与客户高管沟通、定策略）。 来源: 同上 Fortune — https://fortune.com/2026-09-03/forward-deployed-engineers-fast-growing-six-figure-silicon-valley-job-integrate-ai-with-customers-tech-careers-palantir/ (访问日期 2026-11-04) [B]
- 岗位家族（Palantir 招聘页现存头衔）：Forward Deployed Software Engineer（FDSE）、Forward Deployed Data Engineer、Forward Deployed Infrastructure Engineer、Deployment Strategist。 来源: Palantir Careers — https://www.palantir.com/careers/ (访问日期 2026-11-04) [B]（限定： careers 页只返回站点配置 JSON，头衔清单来自搜索摘要 + 第三方盘点）
- "Palantir 有多少 FDE"目前**没有可信硬数字**，只有两个可引用的间接数：Fortune 称"Palantir currently has around four dozen open forward-deployed positions, mostly in software development"（在招岗位约 48 个）；Plank 追踪称 Palantir FDE 序列"283 active postings (2026, +66.4% YoY)"。 来源: Fortune 2026-09-03 — https://fortune.com/2026-09-03/forward-deployed-engineers-fast-growing-six-figure-silicon-valley-job-integrate-ai-with-customers-tech-careers-palantir/ (访问日期 2026-11-04) [B]；来源: Plank — https://joinplank.com/research/palantir (访问日期 2026-11-04) [C]（限定：两数口径不同（岗位类别 vs 全部相关 posting），不能相加也不能互换）
- 面试流程（第三方面经归纳，非 Palantir 官方口径）：简历/筛选电话 → 技术面（含 coding + 客户情境题 "design for a vague customer problem"）→ 现场/虚拟 onsite → 价值观面（mission fit）。 来源: Palantir Interview Guide (OphyAI) — https://ophyai.com/blog/company-guides/palantir-interview-guide (访问日期 2026-11-04) [C]（限定：培训机构归纳，官方仅确认"会考察 customer-facing 与 ambiguity 处理"）
- Palantir 的标准化入口：AIP Bootcamp 官方目标为五天，客户带着自己的数据和场景来，五天内搭出初步 use case。 来源: 好产品也会丢单（雪球，转述 Palantir 官方 AIP Bootcamp 口径） — https://www.xueqiu.com/5899108858/411407108 (访问日期 2026-11-04) [B]（限定：未直抓 palantir.com 的 bootcamp 页；"五天"与官方 AIP Bootcamp 命名一致，可信度中高）

## 二、2023–2026 的 AI 浪潮：谁在招、JD 原文写了什么

- OpenAI 官方定义："Forward Deployed Engineers (FDEs) lead complex end-to-end deployments of frontier models in production alongside our most strategic customers"；同一条 JD 还写："Travel up to 50% is required." 与 "In addition, job duties require access to secure and protected information technology systems and related data security obligations." 来源: OpenAI Careers — Forward Deployed Engineer, SF — https://openai.com/careers/forward-deployed-engineer-(fde)-sf-san-francisco/ (访问日期 2026-11-04) [B]（限定：openai.com 全部返回 403，三句均为搜索结果逐字摘要，未看到整页）
- OpenAI 官方 FDE 团队的组建说明（另一独立复述）："established a Forward Deployed Engineering (FDE) team who will work closely with our most strategic customers to deeply understand their use cases and design, build, and implement products for them." 来源: LinkedIn 帖（Matt Schulman, 2025-11-04，引用 OpenAI 招聘信息） — https://www.linkedin.com/posts/matt-schulman-15911861_is-the-forward-deployed-engineer-fde-on-activity-7391459220447141888-Cdpl (访问日期 2026-11-04) [C]（限定：LinkedIn 跳转无法抓取，引文为搜索摘要）
- OpenAI FDE 负责人 Colin Jarvis 自述组建时间与理念："I founded the team in early 2025"；"If we make ourselves obsolete every couple of months, our FDE team is doing its job."；提出 "the deployment gap" 概念；并写 "What do we do when Codex can just one-shot the use cases we spent the last few months building?" 来源: OpenAI — What FDE means at OpenAI — https://openai.com/index/forward-deployed-engineering-means/ (访问日期 2026-11-04) [B]（限定：403，引文来自搜索摘要 + Business Insider 与中文全译交叉）
- 同篇的辅助信息：Business Insider 对 Colin Jarvis / OpenAI FDE 采纳角色的报道。 来源: Business Insider 2025-11 — https://www.businessinsider.com/openai-forward-deployed-engineer-ai-adoption-colin-jarvis-2025-11 (访问日期 2026-11-04) [C]（限定：BI 页面 fetch failed，只有标题与摘要）
- OpenAI 团队规模增长（截至 2025 年 8 月）：从 2 名工程师扩到十余人，覆盖三大洲八座城市。 来源: CloudThinker 汇编 — https://www.cloudthinker.io/blogs/from-devops-engineer-to-forward-deployed-engineer (访问日期 2026-11-04) [C]（限定：二手汇编，无 OpenAI 官方确认）
- OpenAI 当前在招搜索页（可用来自查岗位是否存在）。 来源: OpenAI Careers search — https://openai.com/careers/search/?q=forward+deployed+engineer (访问日期 2026-11-04) [B]（限定：403；另有第三方盘点确认岗位横跨旧金山/纽约/伦敦/巴黎/慕尼黑/首尔/东京）
- Anthropic 官方 JD 正文（镜像页抓到的逐字内容）："As a member of the Applied AI team at Anthropic, you will be a Forward Deployed Engineer (FDE) who embeds directly with our most strategic customers." 来源: Anthropic FDE, Applied AI（General Catalyst 招聘板镜像） — https://jobs.generalcatalyst.com/companies/anthropic/jobs/69674588-forward-deployed-engineer-applied-ai (访问日期 2026-11-04) [A]（限定：正文来自 Anthropic 岗位的第三方招聘板镜像，Greenhouse 原页正文未抓到）
- Anthropic 职责逐字："Work within customer systems to build production applications with Claude models" / "Deliver technical artifacts for customers like MCP servers, sub-agents, and agent skills" / "Provide white glove deployment support for Anthropic products in enterprise environments"。 来源: 同上 — https://jobs.generalcatalyst.com/companies/anthropic/jobs/69674588-forward-deployed-engineer-applied-ai (访问日期 2026-11-04) [A]
- Anthropic 差旅与门槛逐字："Travel frequently (25-50%) to customer sites to build in person with customers"；"4+ years of experience in a technical, customer facing role such as Forward Deployed Engineer"；薪资字段原文为 "Salary: $200,000—$300,000 USD"。 来源: 同上 — https://jobs.generalcatalyst.com/companies/anthropic/jobs/69674588-forward-deployed-engineer-applied-ai (访问日期 2026-11-04) [A]
- Anthropic 另一句常被引用的定位："Embed directly with our most strategic customers to drive transformational AI adoption." 以及软性要求 "High agency with an ability to navigate ambiguity present in complex organizations."、"…maintaining a low ego and collaborative approach."、"Former technical founders are also encouraged to apply." 来源: Anthropic FDE 岗位（Greenhouse 4985877008 / 5302966008） — https://job-boards.greenhouse.io/anthropic/jobs/5302966008 (访问日期 2026-11-04) [B]（限定：Greenhouse 只返回岗位列表，引文为多个搜索摘要拼合，建议发布前逐条回查原页）
- AWS 官方定义（本次抓到的最完整正文）："A Forward Deployed Engineer (FDE) embeds directly inside a strategic enterprise customer to design, build, deploy, and run AI-powered production systems alongside the customer's engineering team." 并强调 "FDEs write production-grade software and own outcomes end-to-end, from prototype through enterprise-scale deployment combining the technical rigor of an AWS SDE with the urgency and ownership required to deliver measurable customer business outcomes." 来源: Sr Forward Deployed Engineer, AWS Forward Deployed Engineering — https://www.amazon.jobs/en/jobs/10517491/sr-forward-deployed-engineer-aws-forward-deployed-engineering (访问日期 2026-11-04) [A]
- AWS 技能要求的"AI 时代指纹"逐字："Experience leading agentic and spec-driven development at production scale (developing AI agents a plus)."；"Experience with AI tools: eval frameworks, agent tooling, RAG pipelines, and prompt engineering."；差旅 "Requires 30–50% travel." 来源: 同上 — https://www.amazon.jobs/en/jobs/10517491/sr-forward-deployed-engineer-aws-forward-deployed-engineering (访问日期 2026-11-04) [A]
- AWS 另一条 JD 把差旅写得更轻："Requires up to 25% travel."（模型定制与优化方向的 Senior FDE）。 来源: Senior Forward Deployed Engineer (Model Customization and Optimization), AWS — https://www.amazon.jobs/en/jobs/10585968/senior-forward-deployed-engineer-model-customization-and-optimization (访问日期 2026-11-04) [A]
- AWS 的组织化：2026-06-30 在华盛顿峰会宣布成立 Forward Deployed Engineering 组织，初始投入 10 亿美元（内部资源承诺），5–6 人一个 pod、45 天一轮冲刺，负责人为 VP of Frontier AI Engineering & Services **Francessca Vasquez**，首批客户含艾伦人工智能研究所（AI2）、NBA、NFL、理光。 来源: AWS 官方公告（转述自中文聚合与百度百科整理） — https://baike.baidu.com/item/%E4%BA%9A%E9%A9%AC%E9%80%8A%E4%BA%91%E7%A7%91%E6%8A%80FDE%E9%83%A8%E9%97%A8/68314972 (访问日期 2026-11-04) [B]（限定：pod 人数/45 天/负责人三项均由 ≥2 个中文二手源交叉，未见英文原文页；"10 亿美元"须表述为内部资源投入而非现金预算）
- BCG X 的"咨询师改工程师"版本：Senior Forward Deployed AI Engineer（美国）。 来源: BCG Careers — https://careers.bcg.com/global/en/job/56794/-Senior-Forward-Deployed-AI-Engineer-United-States-BCG-X (访问日期 2026-11-04) [B]（限定：职位页存在性已确认，正文细节以搜索摘要为准；另 BCG 于 2026-04 把 BCG X 相关交付人员整体改称 FDE）
- Atlassian 把头衔滑向架构师：Principal Forward Deployed **Architect**——同名词根、不同工种，是"定义漂移"的样本。 来源: Atlassian Careers — https://www.atlassian.com/company/careers/details/25246 (访问日期 2026-11-04) [B]（限定：正文细节以摘要为准）
- Vercel 的版本（说明 FDE 也可能被归入 Professional Services）："As a Senior Forward-Deployed Engineer on the Professional Services team, you will embed with developer teams at strategic enterprise customers"；"You will report to the Global Manager of Forward Deployed Engineering."；"Our Forward-Deployed Engineers operate with high agency and autonomy."；职责含 "Build production AI agents… Lead migrations… Audit customer codebases." 来源: Vercel Careers — https://vercel.com/careers/forward-deployed-engineer-5752684004 (访问日期 2026-11-04) [A]
- Vercel 的门槛与薪资：base "6+ years of software engineering experience, including 2+ years in a customer-facing technical role (consulting, solutions architecture, forward-deployed engineering, or technical founder)"；薪资区间 $137,000–$207,000。 来源: Vercel Careers（两条同名片段） — https://vercel.com/careers/forward-deployed-engineer-5778418004 (访问日期 2026-11-04) [A]
- 初创侧（YC）样本：Roboflow 的 FDE 岗位写明单个交付周期 "typically 4–12 weeks per" engagement，并把入职流程标注为 "Process (~5 hours)"。 来源: Roboflow @ YC — https://www.ycombinator.com/companies/roboflow/jobs/VaMFHs6-forward-deployed-engineer (访问日期 2026-11-04) [B]（限定：YC 页面为 JS 渲染，摘要有截断）
- 另一侧极端：Metal（YC）的 "Forward Deployed Engineer, Strategic Account"，$150K–$240K • 0.10%–0.25% • NYC • 经验要求 "Any (new grads ok)"。 来源: Metal @ YC — https://www.ycombinator.com/companies/metal/jobs/7zlvBO4-forward-deployed-engineer-strategic-account (访问日期 2026-11-04) [B]
- 岗位扩散到非软件业：制药/医疗器械也在挂 FDE——诺华（巴塞尔，#LI-Hybrid，每周 3 天到岗）与强生（Mgr, Forward Deployed Engineer, Data & Intelligence）。 来源: Novartis Careers — https://prod1.novartis.com.cn/careers/career-search/job/details/req-10079038-forward-deployed-engineer-fde-data42 (访问日期 2026-11-04) [A]；来源: J&J Careers — https://www.careers.jnj.com/en/jobs/r-090548/mgr-forward-deployed-engineer-data-intelligence/ (访问日期 2026-11-04) [B]
- 岗位扩散到主权市场：ElevenLabs 在中东/全球扩张序列招 Deployment Strategist，职责含 "Build and lead a team of forward deployed engineers within the region"。 来源: ElevenLabs 招聘页（Deployment Strategist – Saudi Arabia, Global Expansion）——本次仅留存搜索摘要，完整岗位页 URL 未保存，未写入引用 (访问日期 2026-11-04) [C]（限定：引文来自搜索摘要，发布前需回到 ElevenLabs careers 页核对，不要凭记忆补 URL）
- 聚合看板（可查现存岗位与公司清单，含 Glean "Founding Forward Deployed Engineer"、Salesforce "FDE - Data 360"、Adobe "Senior AEM Forward Deployed Engineer"、Matroid "VLM & VFM Forward Deployed Engineer"）。 来源: FDE Pulse jobs — https://fdepulse.com/jobs/ (访问日期 2026-11-04) [B]（限定：聚合站，条目须回原厂 JD 复核；其记录 2026-04-30 追踪到 249 个在招 FDE 岗位、137 家公司）
- **与 Palantir 版的本质差别（写作要点，均有 JD 支撑）**：交付物从"把客户数据接进一个平台"变成"在生产环境里跑起来的 agent/RAG/MCP"；关键词从 ontology/data integration 变为 "MCP servers, sub-agents, and agent skills"（Anthropic）、"eval frameworks, agent tooling, RAG pipelines, and prompt engineering"（AWS）、"Build production AI agents"（Vercel）；模型由基础模型实验室提供，FDE 变成"前沿模型的企业侧翻译层"。 来源: 上文各 JD（Anthropic / AWS / Vercel） (访问日期 2026-11-04) [A]
- 机构化军备竞赛（2025-05 → 2026-07）：OpenAI 成立多数持股的交付公司（OpenAI Deployment Company / DeployCo，2026 年 5 月，初始 >40 亿美元、TPG 领投约 19 家投资方、由 COO Brad Lightcap 负责，并收购约 150 名 FDE/Deployment Specialist 的 Tomoro，据报道估值约 100 亿美元 pre-money）；Anthropic 与 Blackstone / Hellman & Friedman / Goldman 组约 15 亿美元合资体（"Ode with Anthropic"，7 月）；AWS 10 亿美元建 FDE 组织（6/30）；Microsoft Frontier Company 25 亿美元、约 6,000 名工程师与行业专家（7/2）；Google Cloud × Accenture 拟建 1,000 人 FDE 队伍；Databricks 把 Professional Services 改名为 Forward Deployed Engineering。 来源: CNBC（2026-10-15） — https://www.cnbc.com/2026-10-15/aws-anthropic-racing-to-deploy-army-of-specialized-ai-engineers.html (访问日期 2026-11-04) [A]；来源: HeroHunt — https://www.herohunt.ai/blog/recruiting-forward-deployed-engineers-2026/ (访问日期 2026-11-04) [B]（限定：DeployCo 的 $4B/$10B/Tomoro 人数为"据报道"，未见 OpenAI 官方全文）
- Anthropic 的人才工厂：Claude Frontier（Deployed Engineer）Residency——投 1 亿美元、目标到 2027 年底培养 10,000 名 "Frontier Deployed Engineers"，考核方式是 "judgment tested against a simulated enterprise deployment, not technical skills in"（ isolation），多日线下实训 + 12 周驻修 + 实操评分，城市含旧金山/纽约/伦敦，合作方含 Accenture、Bain、Capgemini、Deloitte、McKinsey、Morgan Stanley、Novo Nordisk；Steve Corfield 说 "No AI company has invested… at this depth." 来源: Anthropic News — https://www.anthropic.com/news/claude-frontier-academy (访问日期 2026-11-04) [A]；来源: CNBC（2026-10-02） — https://www.cnbc.com/amp/2026-10-02/anthropic-to-invest-100-million-to-train-ai-engineer-talent.html (访问日期 2026-11-04) [A]
- 命名之争（重要细节）：Anthropic 官方刻意用 "Frontier Deployed Engineers" 而非 Palantir 带火的 "forward-deployed engineer"。 来源: Anthropic 高管访谈中文报道（IT之家转载） — https://www.ithome.com/1/012/132.htm (访问日期 2026-11-04) [B]（限定：以 Anthropic 官方页命名为准，已在其 Academy 页交叉确认 "Frontier Deployed Engineers"）
- Accenture 的自我表述："At Accenture, forward deployed engineers translate AI ambition into enterprise-wide… scale." 来源: CNBC（2026-10-15） — https://www.cnbc.com/2026-10-15/aws-anthropic-racing-to-deploy-army-of-specialized-ai-engineers.html (访问日期 2026-11-04) [A]
- Palantir 也把这活儿产品化了：2026 年 3 月的官方更新里出现 "AI FDE"（把 FDE 的一部分判断做成 AIP 上的 agent 能力）。 来源: Palantir 2026-03 产品更新（经第三方引用） — https://www.bilibili.com/video/BV17yMR6gEHP (访问日期 2026-11-04) [C]（限定：仅见中文引用，未抓取 palantir.com 更新页；文案中应写成"Palantir 官方 2026 年 3 月更新提到 AI FDE"，不要描述其功能细节）

## 三、薪酬：能写的具体数字

- Palantir FDSE 公开招聘基本工资区间：**$135,000–$200,000/年**，另含 RSU、签字费与其他激励（"Total compensation for this position may also include Restricted Stock units, sign-on bonus and other potential future incentives."）。 来源: Lever JD — https://jobs.lever.co/palantir/dab396d4-2f14-4796-aac0-0d82883dccf0 (访问日期 2026-11-04) [A]
- Anthropic FDE (Applied AI) 公开区间：**$200,000–$300,000**（多地：Boston/Chicago/NYC/Seattle/SF/DC）。 来源: General Catalyst 镜像 — https://jobs.generalcatalyst.com/companies/anthropic/jobs/69674588-forward-deployed-engineer-applied-ai (访问日期 2026-11-04) [A]
- Anthropic 相邻岗位 Applied AI Engineer, Enterprise Tech：**$200,000–$320,000 USD**。 来源: Greenhouse — http://job-boards.greenhouse.io/anthropic/jobs/5057647008 (访问日期 2026-11-04) [B]（限定：仅摘要含薪资行）
- Anthropic 另一个 FDE posting 的上限更高：有汇编称其 FDE band 起点 $280,000，另有来源给出 "OpenAI/Anthropic 一线部署岗位 $162K–$325K plus equity"。 来源: Valletta Software — https://vallettasoftware.com/blog/post/forward-deployed-engineer-salary (访问日期 2026-11-04) [B]；来源: CloudThinker — https://www.cloudthinker.io/blogs/from-devops-engineer-to-forward-deployed-engineer (访问日期 2026-11-04) [C]（限定：与 Anthropic 官方 $200–300K 不一致，原因是不同 posting / 不同年份 / 不同城市；文案不要写"Anthropic FDE 就是 X"，要写"不同 posting 区间从 $200K 到 $400K 不等"）
- OpenAI FDE  Seattle：**280K base salary + equity**，要求 5 年以上工程或技术部署经验，最多 50% 出差；纽约同序列 **$162K–$280K**；FDE platform engineering **$230K–$385K**。 来源: OpenAI Careers 中文镜像/第三方盘点 — https://www.jiangyou-ai.com/insights/daily (访问日期 2026-11-04) [B]（限定：OpenAI 原页 403，区间来自转载与视频/博客二手，platform engineering 那条为 [C]）
- 市场级口径（最可引用的一组）：Lightcast 数据——美国 FDE 招聘帖从 **2023 年不足 200 条** → **2025 年约 1,200 条** → **2026 年前 9 个月超过 7,300 条**；同期 **招聘广告薪资中位数达 $195,456，较 2023 年上涨 40%，并超过美国全部招聘广告薪资中位数的 3 倍以上**。 来源: CNBC（2026-10-15，引用 Lightcast） — https://www.cnbc.com/2026-10-15/aws-anthropic-racing-to-deploy-army-of-specialized-ai-engineers.html (访问日期 2026-11-04) [A]
- 同一批数据的口径警告（必须一起写）："The figures represent advertised positions, not completed hires." 来源: 同上 CNBC — https://www.cnbc.com/2026-10-15/aws-anthropic-racing-to-deploy-army-of-specialized-ai-engineers.html (访问日期 2026-11-04) [A]
- 招聘方集中度：2026 年前 9 个月，Lightcast 统计 Deloitte 挂出 **872** 条 FDE 岗位、Accenture **688**、Google **499**、KPMG **447**。 来源: 同上 CNBC — https://www.cnbc.com/2026-10-15/aws-anthropic-racing-to-deploy-army-of-specialized-ai-engineers.html (访问日期 2026-11-04) [A]
- Lightcast 分析师的话（需求侧解释）："Demand for forward deployed engineers is rising fast, and growing wages suggest employers are competing for a limited pool of talent" — **Elena Magrini**, Lightcast；AWS 侧："The company is starting with hundreds of engineers" — **Asa Kalavade**, VP of forward-deployed engineering at AWS。 来源: 同上 CNBC — https://www.cnbc.com/2026-10-15/aws-anthropic-racing-to-deploy-army-of-specialized-ai-engineers.html (访问日期 2026-11-04) [A]
- 另一组市场数字（Fortune × Lightcast）：FDE 招聘广告薪资中位数 **超过 $188,000**，传统软件工程师 **约 $145,000**；"At some tech giants like Anthropic, compensation for some forward-deployed roles can even reach $400,000."；2026 年 1–8 月 FDE 招聘信息同比增 **>1000%**、较 2023 年增 **>4600%**（此口径为中文转述）。 来源: Fortune（2026-09-03，原页 404，另有中文译文） — https://www.fortunechina.com/shangye/c/2026-09/07/content_476586.htm (访问日期 2026-11-04) [B]（限定：$188K/$145K/$400K 为 Fortune 搜索摘要逐字；1000%/4600% 未见英文原口径）
- 又一口径（Entrepreneur × Lightcast）：岗位自 2022 年以来增长 **近 600%**，招聘广告薪资中位数 **$202,300**。 来源: Entrepreneur — https://www.entrepreneur.com/business-news/san-francisco-is-booming-again-unless-youre-a-laid-off-tech-worker (访问日期 2026-11-04) [B]（限定：与 CNBC 的 $195,456 并存，说明 Lightcast 不同切片时间/口径不同；两者都可引，但需注明统计窗口）
- 反直觉但可写的结论：**首创该岗位、把它当核心工程序列的 Palantir，公开招聘 base 反而最低**（"Palantir invented the role and now pays the least for it"；base 上限 $200,000 对 Anthropic 的 $280,000 起点）。原因是上市公司股票在 band 之外、自报总包口径不同。 来源: Valletta Software — https://vallettasoftware.com/blog/post/forward-deployed-engineer-salary (访问日期 2026-11-04) [A]
- 自我报告类总包（只能作为量级）：Levels.fyi 上 Palantir 软件工程师（含 FDSE 头衔族）美国 **总包中位数 $230,000**。 来源: nuecareer（转引 Levels.fyi Palantir 公司页） — https://nuecareer.com/careers/forward-deployed-engineer (访问日期 2026-11-04) [B]（限定：Levels.fyi 本次返回 405，未能核对页面；且"软件工程师"头衔族不等于 FDE）
- 另一组转引：Palantir FDSE 总包中位数约 **$211K**（2026-08）/ **约 $215K**（基于 1,200 个数据点，2026 上半年）。 来源: OphyAI — https://ophyai.com/blog/company-guides/palantir-interview-guide (访问日期 2026-11-04) [C]；来源: GetPerspective — https://getperspective.ai/blog/2026-forward-deployed-engineering-compensation-report-1200-fdes (访问日期 2026-11-04) [C]（限定：均为培训机构/博客对 Levels.fyi 的转述，无原始分布数据）
- "AI 溢价"的可写形式：前沿实验室 FDE/应用 AI 岗的中层（mid-level）总包市场报告常引 **约 $385,000**，股权在高级别占 **50%–70%**；对照之下 Palantir 同量级明显更低。 来源: Context Studios（转引市场报告） — https://www.contextstudios.ai/blog/forward-deployed-engineers-palantir-model (访问日期 2026-11-04) [C]（限定：未见原始报告，只能写成"有 2026 年市场报告称"）
- 培训机构给出的 Anthropic 分级总包表（L4 约 $390K–$425K，L5 约 $480K–$565K，L6 约 $600K–$685K，L7 $775K–$880K+，含 base/bonus/equity 拆分）——**这是全站最容易出错的一类数字**。 来源: FDE Academy — https://fde.academy/blog/anthropic-forward-deployed-engineer-guide (访问日期 2026-11-04) [C]（限定：无 Levels.fyi/官方页交叉，只能作为"民间估算"，且必须标注来源是培训机构）
- Palantir FDE 分级总包（同机构）：**$135K 到 $750K+**，按级别/地点/经验跨度极大；另一页给美国 FDE 年总包 **$110K–$180K**（明显偏保守、口径不清）。 来源: FDE Academy — https://fde.academy/blog/palantir-fde-salary (访问日期 2026-11-04) [C]（限定：两页自相矛盾，不可引用为事实）
- 基准对照（用来解释"这岗位工资算不算高"）：美国 BLS OEWS（2025 年 5 月）该职业族**中位年薪 $135,980**。 来源: nuecareer（引用 BLS） — https://nuecareer.com/careers/forward-deployed-engineer (访问日期 2026-11-04) [B]（限定：BLS 无 FDE 单独职业码，用的是相邻软件/数据职业族）
- 实习/入门锚点：Palantir "Year at Palantir" FDSE 实习**月报酬 $5,900–$10,500**；Valletta 特别警告把它当年薪换算会误导（"Annualising it would put a misleading number next to the salaried roles, and several salary pages covering this role appear to have made exactly that mistake."）。 来源: Valletta Software — https://vallettasoftware.com/blog/post/forward-deployed-engineer-salary (访问日期 2026-11-04) [A]
- 德勤（咨询侧）实际挂牌：2026-06-01 Cyber FDE **$113K–$208K**；06-08 Frontier GenAI FDE；06-22 Senior Forward Deployed Engineer（AWS 方向），JD 里把"驻场客户 + pod 制交付 + 报价与投标支持"写进职责。 来源: 智企易成 FDE 每日动态（转引德勤招聘页/fdepulse） — https://www.jiangyou-ai.com/insights/daily (访问日期 2026-11-04) [C]（限定：聚合站，需回 jobscareers.work/fdepulse 原始条目核对）
- 独立岗位样本（体现"premium"分布不均）："Senior FDE – Key Accounts (AI Solutions)" **$175K–$230K** NYC；QUADRIC **$170K–$230K** remote。 来源: FDE Pulse — https://fdepulse.com/jobs/ (访问日期 2026-11-04) [C]
- 结论写法（可核查）：薪资溢价**在"招聘广告"层面成立**（$188K–$202K–$195K 三个中位数都显著高于全岗位中位数与传统 SWE 的 $145K）；但在"实际总包"层面主要靠**股权与实验室 base**，Palantir 反而是低 base 高 RSU 的老派结构。 来源: 上文 CNBC / Fortune / Valletta (访问日期 2026-11-04) [B]（限定：这是综合推论，非任何单一来源的原话）

## 四、真实的一天：出差、驻场时长、on-call

- 差旅比例逐字对照：Palantir "travel up to 25%, as needed to client sites, but flexible based on personal preferences"；OpenAI "Travel up to 50% is required."；Anthropic "Travel frequently (25-50%)"；AWS "Requires 30–50% travel."；AWS 模型优化方向 "Requires up to 25% travel."。 来源: 各官方 JD（Lever / OpenAI 摘要 / GC 镜像 / amazon.jobs） (访问日期 2026-11-04) [A]（OpenAI 一条为 [B]，原页 403）
- 驻场时长的三种可引用量级：AWS 组织化模式 **5–6 人 pod / 约 45 天一轮**；Roboflow（YC 初创）**"typically 4–12 weeks per"** engagement；Wikipedia 的通用描述 "a company may embed a forward-deployed engineer with a customer for a few months to help them use an AI product sold by the company"。 来源: 百度百科（AWS 条目） — https://baike.baidu.com/item/%E4%BA%9A%E9%A9%AC%E9%80%8A%E4%BA%91%E7%A7%91%E6%8A%80FDE%E9%83%A8%E9%97%A8/68314972 (访问日期 2026-11-04) [B]；来源: Roboflow @ YC — https://www.ycombinator.com/companies/roboflow/jobs/VaMFHs6-forward-deployed-engineer (访问日期 2026-11-04) [B]；来源: Wikipedia — https://en.wikipedia.org/wiki/Forward_Deployed_Engineer (访问日期 2026-11-04) [B]（限定：Wikipedia 三次抓取失败，引文为搜索摘要；AWS 的 45 天为中文/港媒交叉转述）
- 最长的驻场实例（第一人称）：前 Palantir FDE Nabeel Qureshi 为服务空客，搬到图卢兹住了一年、每周 4 天在空客工厂与制造团队一起工作，最终帮助 A350 生产节奏提升 4 倍。 来源: Lenny's Podcast 访谈页（Inside Palantir, 2025-05-11） — https://www.lennysnewsletter.com/p/inside-palantir-nabeel-qureshi (访问日期 2026-11-04) [B]（限定：nabeelqu.co 原文返回 429，具体数字经 MIT 科技评论中国与 theforwarddeployed.io 案例页交叉；空客案例另有官网级复述）
- 空客案例的独立页面（可作图注来源）。 来源: The Forward Deployed — Airbus engagement — https://www.theforwarddeployed.io/engagements/airbus (访问日期 2026-11-04) [B]
- 早期驻场的强度样本（战场）：Palantir FDE 曾驻阿富汗与伊拉克军事基地、美国中西部工厂与炼油厂（S-1 原文见第一节）。 来源: 腾讯新闻转述 SCMP — https://view.inews.qq.com/wxn/20251103A03S9M00 (访问日期 2026-11-04) [B]
- 极端后勤细节（适合做"现场苦不苦"的素材，但需注明是报道级传闻）：Matt Grimm（后创办 Anduril）在伊拉克/阿富汗派驻时，带着装满服务器与笔记本的集装箱在各军事前哨间移动，甚至需要用香烟换搭乘军用直升机的机会。 来源: 帕兰蒂尔的前生今世（B 站视频文案，2026-09-18） — https://www.bilibili.com/video/BV1vAem6LEB9 (访问日期 2026-11-04) [C]（限定：未见英文一手出处；若要写，表述为"有报道称"）
- 出差是流失主因，但招聘广告几乎从不量化它："Travel is the most common cause of first-year attrition in this role and the least likely thing to be quantified in the advert." 来源: Valletta Software — https://vallettasoftware.com/blog/post/forward-deployed-engineer-vs-software-engineer (访问日期 2026-11-04) [B]（限定：Valletta 编辑判断，无引用数据集；但是全站最实用的"提醒读者"句）
- 混合办公与驻场的叠加：Anthropic FDE 岗位同时要求 "25% in-office minimum" 与 25–50% 客户现场差旅；诺华该岗 #LI-Hybrid（每周 3 天到岗）。 来源: GitHub JD 摘录（harrisliangsu/ai-agent-engineer-handbook，2026-05-02 抓取） — https://github.com/harrisliangsu/ai-agent-engineer-handbook/blob/main/interview-prep/jd-requirements.md (访问日期 2026-11-04) [B]；来源: Novartis — https://prod1.novartis.com.cn/careers/career-search/job/details/req-10079038-forward-deployed-engineer-fde-data42 (访问日期 2026-11-04) [A]
- 安全侧的现场约束（OpenAI JD 原文，别漏掉）："In addition, job duties require access to secure and protected information technology systems and related data security obligations." 来源: OpenAI Careers（403，摘要） — https://openai.com/careers/forward-deployed-engineer-(fde)-sf-san-francisco/ (访问日期 2026-11-04) [B]
- "入职流程 ~5 小时"这种细节（说明甲方流程本身就是交付物的一部分）。 来源: Roboflow @ YC — https://www.ycombinator.com/companies/roboflow/jobs/VaMFHs6-forward-deployed-engineer (访问日期 2026-11-04) [B]
- **未获取到的细节（不要编）**：FDE 的 on-call 轮值制度、第一周与第三个月的对比、每日工时、客户内网/跳板机限制的具体条款——没有任何一家 JD 或第一人称文提供可引用证据，只能在网站里写成"读者须知：这些没公开口径"。 来源: 本次检索全域 (访问日期 2026-11-04) [C]

## 五、出路：下一份工作、晋升阶梯、知名 alumni

- Anduril 的三位创始人都有 Palantir FDE 背景：Alex Stephens（约 5.5 年 FDE）、Matt Grimm（约 6 年 8 个月 FDE）、Dian Schimpf（工程总监级）。 来源: Business Insider（Palantir Mafia 报道, 2025-03） — https://www.businessinsider.com/palantir-mafia-former-employees-startups-anduril-2025-3 (访问日期 2026-11-04) [B]（限定：BI 页 fetch failed，年限数字来自摘要/中文转载；Anduril 官方 bio 也写明 Grimm/Stephens 前 Palantir 身份）
- Palantir 前员工创办的公司总量（"Palantir Mafia"规模）：截至 2026 年 1 月约 **335 家**，其中约 **五分之一由前 FDE 创办**——这是"前线经历 → 创始人"最有力的一个说法，但属第三方/自媒体统计。 来源: Business Insider（Palantir Mafia 报道, 2025-03） — https://www.businessinsider.com/palantir-mafia-former-employees-startups-anduril-2025-3 (访问日期 2026-11-04) [C]（限定：BI 页面 fetch failed，只拿到标题级信息；335 与 1/5 两个数字本次未在英文原文中核对，务必写成"据校友统计/据报道"）
- FDE → 风投：a16z 合伙人 Erin Price-Wright 出身 Palantir FDE 序列（a16z 多篇 FDE 文章即出自该背景）。 来源: a16z 作者页/文章（Tom Hollands 等署名） — https://a16z.com/forward-deployed-job-titles/ (访问日期 2026-11-04) [C]（限定：本次未直接抓取其个人主页，属于广为记载但需复核）
- FDE → 产品/研究：Anthropic 与 Vercel 的 JD 主动欢迎技术型创始人加入（"Former technical founders are also encouraged to apply." / "…forward-deployed engineering, or technical founder"）——说明双向流动已成设计。 来源: Anthropic（GC 镜像） + Vercel Careers (访问日期 2026-11-04) [A]
- 反向流动（岗位本身欢迎应届生）：Metal 的 FDE 标注 "Any (new grads ok)"。 来源: Metal @ YC — https://www.ycombinator.com/companies/metal/jobs/7zlvBO4-forward-deployed-engineer-strategic-account (访问日期 2026-11-04) [B]
- OpenAI 收购 Tomoro（约 150 名 FDE/Deployment Specialist）——"整队被买走"成为新的出路形态。 来源: HeroHunt — https://www.herohunt.ai/blog/recruiting-forward-deployed-engineers-2026/ (访问日期 2026-11-04) [B]（限定：报道级，非 OpenAI 官方新闻稿）
- 晋升阶梯：**Palantir 官方从未公布 FDE 的职级序列**。公开可见的只有：招聘页里的 L1/L2/L3 之类工程级别命名传统（媒体转述）、以及 "Year at Palantir" 实习 → FDSE → 资深/带团队的路径传闻；"FDE → FDPM（Forward Deployed Project/Program Manager）"这类链条**只在中文自媒体里出现，无英文一手**。 来源: 本次检索全域 (访问日期 2026-11-04) [C]（限定：这条本身就是"证据缺口"声明）
- 可写的一条软性阶梯：AWS 组织化路径明确"从数百名工程师起步"并配套"知识转移，让客户团队最终能自主开发维护"。 来源: CNBC（Kalavade 引语） — https://www.cnbc.com/2026-10-15/aws-anthropic-racing-to-deploy-army-of-specialized-ai-engineers.html (访问日期 2026-11-04) [A]；来源: 百度百科 AWS 条目 — https://baike.baidu.com/item/%E4%BA%9A%E9%A9%AC%E9%80%8A%E4%BA%91%E7%A7%91%E6%8A%80FDE%E9%83%A8%E9%97%A8/68314972 (访问日期 2026-11-04) [B]

## 六、从业者自己说的坑与批评（原话为据）

- 头衔通胀（最权威的一句）：a16z 直接把现象命名为 "forward-deployed job titles"，并承认 "titles can be an effective way of meme-ing into existence the change you want to see." 来源: Tom Hollands, a16z（2026-01-27） — https://a16z.com/forward-deployed-job-titles/ (访问日期 2026-11-04) [A]
- 售前换皮："Some postings labelled forward deployed engineer are presales roles with a rebrand." 来源: Valletta Software — https://vallettasoftware.com/blog/post/companies-hiring-forward-deployed-engineers (访问日期 2026-11-04) [A]
- 判别动作（可直接进文案，很实用）："Ask whether the role sits in engineering or in professional services. That single fact predicts the band, the ladder and whether you get to influence the product." 来源: Valletta Software — https://vallettasoftware.com/blog/post/forward-deployed-engineer-vs-software-engineer (访问日期 2026-11-04) [A]
- 实证支持：Databricks 的 FDE 岗位在自家岗位数据里被归入 "Professional Services Operations" 部门——即名义与归属不一致。 来源: Valletta Software — https://vallettasoftware.com/blog/post/companies-hiring-forward-deployed-engineers (访问日期 2026-11-04) [B]（限定：为 Valletta 抓取 Databricks 岗位数据的结论，非 Databricks 官方声明；Databricks 官方博客亦把该团队称作 Forward Deployed Engineering）
- "只有改名的壳，没有设计的魂"："the rebrand without the design"。 来源: Rohit Ghumare — What a Forward Deployed Engineer Does — https://rohitghumare.com/blog/what-a-forward-deployed-engineer-does/ (访问日期 2026-11-04) [B]
- 咨询化嘲讽（最扎心的一句）："You're Accenture for X with a nicer front-end." 来源: Marc Andrusko, a16z（The Palantirization of Everything, 2026-01-16） — https://a16z.com/the-palantirization-of-everything/ (访问日期 2026-11-04) [A]
- 同一篇给出的正当性判据（可用来反驳上面的嘲讽，形成平衡）："What breaks if you sign 50 customers next year?" 与 "The higher the stakes, the more a forward-deployed model can be justified." 来源: 同上 a16z — https://a16z.com/the-palantirization-of-everything/ (访问日期 2026-11-04) [A]
- 身份危机（销售 vs 工程）：Sierra 的 Natalie Meurer 演讲标题即为 "The Dirty Secret of Forward Deployed Engineering"，文中承认 "Forward deployed engineering can mean so many things."、该角色 "lacks a consistent definition"，并给出反直觉的方向判断："If you are a product engineer, you should be talking to customers. If you are a forward deployed engineer, you should be building the product." 与 "Product engineering and forward deployed engineering are therefore converging in some respects." 来源: Latent Space（Natalie Meurer） — https://www.latent.space/p/forward-deployed-engineers-aiewf (访问日期 2026-11-04) [A]
- 被当成产品缺陷的兜底方：FDE 的价值来自 "embed with a customer, finds the gap between what the product does and what the customer needs, and closes it in code"；而同一句也意味着——产品缺口会由现场工程师用体力补上。 来源: Rohit Ghumare — https://rohitghumare.com/blog/what-a-forward-deployed-engineer-does/ (访问日期 2026-11-04) [B]
- 规模化的经济账质疑（服务毛利问题）：a16z 的另一篇文章直接把 FDE 定性为 "services-led growth"，标题即论点 "Trading Margin for Moat: Why the Forward Deployed Engineer Is the Hottest Job in Startups"，并写 "Enterprises buying AI are like your grandma getting an iPhone: they want to use it, but they need you to set it up." 与 "The only thing businesses should be optimizing for today is growing total gross profit as fast as possible." 来源: Joe Schmidt, a16z（2025-06-04） — https://a16z.com/services-led-growth/ (访问日期 2026-11-04) [A]
- "AI 包装旧工种"的评论界共识："A forward-deployed engineer job has already existed, but AI branding makes it sound edgy and new… Now, it's a customer-facing software engineer, or sales engineer, or solutions engineer, often with an AI focus." 来源: GitHub Changelog 播客解读（AI 术语盘点） — https://aihot.virxact.com/items/cmtklzxjb029qro5q46ci471c (访问日期 2026-11-04) [C]（限定：聚合站摘要，原播客页未抓取）
- 咨询/人海战术的历史包袱：Palantir 长期因这套模式被批 "更像咨询公司"、被说"人海战术"，华尔街多年看不懂；2026 年被中文财经标题总结为 "被骂十年外包，股价一天暴涨 29%"。 来源: MIT 科技评论中国 — http://mittrchina.com/news/detail/16734 (访问日期 2026-11-04) [C]（限定：情绪化标题；Palantir 自身在财报电话里也承认交付成本与毛利率的张力，需另找英文原话再写）
- 招聘方自己的承认（说明交付不标准、KPI 难定）："defined more by accountability to customers than by the shape of the role." 与 "generalists will become more valuable"。 来源: Latent Space / Natalie Meurer — https://www.latent.space/p/forward-deployed-engineers-aiewf (访问日期 2026-11-04) [A]
- 需求真实性存疑（岗位数 ≠ 就业数）：CNBC 明确 "The figures represent advertised positions, not completed hires."，且四大会计师事务所占据了大量 posting。 来源: CNBC（2026-10-15） — https://www.cnbc.com/2026-10-15/aws-anthropic-racing-to-deploy-army-of-specialized-ai-engineers.html (访问日期 2026-11-04) [A]

## 七、定义之争：FDE 与 SA / SE / PSE / CSM / 数据工程师 怎么分

- **框架 1（Palantir：能力/客户的反转）**——判据是"一个能力服务多客户"还是"一个客户用很多能力"："While a traditional software engineer, or "Dev," focuses on creating a single capability that can be used for many customers, FDSEs focus on enabling many capabilities for a single customer." 来源: Palantir blog — https://blog.palantir.com/a-day-in-the-life-of-a-palantir-forward-deployed-software-engineer-45ef2de257b1 (访问日期 2026-11-04) [B]
- **框架 2（交付物判据：写不写生产代码）**——"FDEs write production code inside customer systems; others advise or demo"，配合一句话检验："customer is blocked, figure it out"。 来源: HeroHunt（Recruiting FDEs 2026） — https://www.herohunt.ai/blog/recruiting-forward-deployed-engineers-2026/ (访问日期 2026-11-04) [A]
- **框架 3（组织归属判据）**——同一个 title 落在工程序列还是专业服务序列，决定薪资带、职级与产品影响力："Ask whether the role sits in engineering or in professional services. That single fact predicts the band, the ladder and whether you get to influence the product." 来源: Valletta Software — https://vallettasoftware.com/blog/post/forward-deployed-engineer-vs-software-engineer (访问日期 2026-11-04) [A]
- **框架 4（问责判据，不看岗位形状）**——"defined more by accountability to customers than by the shape of the role."，并明确该词 "lacks a consistent definition"。 来源: Latent Space / Natalie Meurer（Sierra） — https://www.latent.space/p/forward-deployed-engineers-aiewf (访问日期 2026-11-04) [A]
- **框架 5（时间轴判据：上线之后才算数）**——Ghumare 给出的度量是系统 "the system keeps working after go-live"，即 FDE 的考核在 go-live 之后仍在继续，这正是与传统 SA/SE（演示完交接）与 CSM（续约与满意度）的分界。 来源: Rohit Ghumare — https://rohitghumare.com/blog/what-a-forward-deployed-engineer-does/ (访问日期 2026-11-04) [B]
- **框架 6（头衔合法性判据）**——Hollands 的测试是：改名是否真的改变激励与行为；他既记录了 Palantir 2011 年把 solutions/integration engineer 改名为 FDE 的历史，也承认 "titles can be an effective way of meme-ing into existence the change you want to see." 来源: a16z — https://a16z.com/forward-deployed-job-titles/ (访问日期 2026-11-04) [A]
- **框架 7（维基百科的"重叠清单"，用于承认边界模糊）**："A forward-deployed engineer (FDE), also called a forward-deployed software engineer (FDSE), is a customer-facing software engineer"，与 "solutions architects, sales engineers, customer engineers, professional services engineers, systems…" 高度重叠，且 "The role was popularized by Palantir Technologies." 来源: Wikipedia — https://en.wikipedia.org/wiki/Forward_Deployed_Engineer (访问日期 2026-11-04) [B]（限定：抓取失败，三句均为搜索摘要；引用时以"维基百科将其定义为…"的转述形式出现）
- **逐角色区分（可直接改成对照表，均有来源）**：
  - vs **Solutions Architect**：SA 通常在售前/方案阶段，多客户复用参考架构，不以"在生产里长期跑起来"为 KPI；FDE 在客户系统内交付并负责结果。 来源: HeroHunt / Valletta 综合 (访问日期 2026-11-04) [A]
  - vs **Sales Engineer / SE**：SE 的核心是赢单（demo、POC、投标支持），FDE 的核心是交付与留存；但德勤等"把报价与投标支持写进 FDE 职责"的 JD 说明现实中正在混合。 来源: 智企易成（德勤 JD 描述） — https://www.jiangyou-ai.com/insights/daily (访问日期 2026-11-04) [C]
  - vs **Professional Services Engineer**：PSE 按项目卖工时、交付后离场；FDE 更强调"把现场经验沉淀成可复用架构"（AWS 原文："They create reusable architectures, patterns, and engineering mechanisms that scale the entire FDE practice."）。 来源: amazon.jobs — https://www.amazon.jobs/en/jobs/10517491/sr-forward-deployed-engineer-aws-forward-deployed-engineering (访问日期 2026-11-04) [A]
  - vs **Customer Success Manager**：CSM 负责采纳与续约、通常不写代码；FDE 的判据是 "write production code inside customer systems"。 来源: HeroHunt — https://www.herohunt.ai/blog/recruiting-forward-deployed-engineers-2026/ (访问日期 2026-11-04) [A]
  - vs **Data Engineer**：DE 建数据管道但不对外承担客户业务结果；Palantir 侧的 Forward Deployed Data Engineer 是"带着客户业务问题做数据管道"的混合体。 来源: Palantir Careers — https://www.palantir.com/careers/ (访问日期 2026-11-04) [C]
  - vs **Deployment Strategist（Echo）**：Echo 偏需求发现/业务定义，FDE/Delta 偏工程实现；二者常同组。 来源: Plank research — https://joinplank.com/research/palantir (访问日期 2026-11-04) [B]
  - vs **FAE（Field Application Engineer，半导体）**：FAE 也是"到客户现场"，但交付多为芯片级支持，不改客户业务系统；命名同源、职责不同，写文案时不要混用。 来源: 综合（本次检索中 FAE 未取到可引 JD） (访问日期 2026-11-04) [C]
- 关于"谁更早"的反方观点（必须保留）：有风投与研究认为"把工程师嵌进客户现场"这套打法，IT 服务公司比 Palantir 做得更早（埃森哲式实施顾问传统），Palantir 的贡献是把它制度化并产品化。 来源: xdash《FDE 手册》第 1 章（提出争议并留待第 7 章举证） — https://github.com/xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer/blob/main/01-%E7%AC%AC1%E7%AB%A0-FDE%E7%9A%84%E5%B4%9B%E8%B5%B7.md (访问日期 2026-11-04) [C]（限定：GitHub 个人整理，且自陈争议未证）
- 另一位"有分量"的定义（Bob McGrew，前 OpenAI 首席研究官）——但本次只拿到中文转译："驻扎在客户现场、填补「产品能做的事」与「客户需要的事」之间鸿沟的工程师。" 来源: xdash《FDE 手册》第 1 章 — https://github.com/xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer/blob/main/01-%E7%AC%AC1%E7%AB%A0-FDE%E7%9A%84%E5%B4%9B%E8%B5%B7.md (访问日期 2026-11-04) [C]（限定：未找到英文原话，引用必须标注"据其访谈中译"）

---

## 红线：不能写的说法

- "Palantir 有 N 千名 FDE / FDE 占员工一半"。无官方口径。可写的只有 "around four dozen open forward-deployed positions"（Fortune）与第三方"283 active postings"；"FDE 已占员工总数将近一半"仅为中文转述 SCMP 的说法 [C]，不得作为硬事实。
- "Until 2016, Palantir had more FDEs than software engineers"（以及"高峰期 FDE 超过产品工程师"）。来源仅为 LinkedIn 帖与中文自媒体，无 Palantir 文件/新闻稿支撑。要写必须写"有前员工称"。
- "FDE 一词由 Palantir 于 20XX 年正式创立"。 2007（Sankar 自述）/2011（a16z：改名制度化）/"around 2010"（Valletta）三种口径并存。建议表述为"2000 年代中后期出现、2011 年前后成为正式岗位名"。
- "AWS 为 FDE 掏了 10 亿美元现金"。原文口径是内部资源投入（initial commitment），且"数千名工程师"为计划值。
- "Anthropic 要雇 10,000 名 FDE"。官方是 **通过 Claude Frontier Academy 培养 10,000 名 Frontier Deployed Engineers（到 2027 年底）**，是客户/伙伴工程师的培训，不是 Anthropic 自己的雇佣数。
- "OpenAI 有 50 名 FDE" / "Anthropic 应用 AI 团队扩 5 倍"。仅见百度百科与二手文章，无官方页确认（OpenAI 页 403 全挂）。
- 任何具体 Levels.fyi 数值（Palantir FDE 分级总包、frontier lab $385K–$1.2M、Anthropic L4 $665K、FDE Academy 的 L4–L7 表）。Levels.fyi 返回 405，全部为培训机构/博客转述。
- "FDE 平均年薪 100 万人民币 / 50 万美元"。市场级唯一稳的中位数是 Lightcast 的**招聘广告薪资**（$188K–$202K–$195,456，不同窗口），不等于从业者实际总包。
- 增长率数字（42 倍 / 729% / 800% / 1000% / 4600% / 600%）。口径分别来自 LinkedIn Workforce Report、Indeed、Fortune×Lightcast、Entrepreneur，窗口与统计方法互不一致，且**均为 posting 而非 hire**；文案一次只用一个并注明来源与窗口。
- OpenAI 的逐字 JD 长句、Palantir Medium 博客整段、The Register 全文、Wikipedia 全文、MarketWatch 正文、Business Insider 正文——这些页面均抓取失败，只能引"逐字摘要级"短句并标 [B]。
- "NVIDIA / Tesla / Scale AI / Sierra / Anduril 的 FDE 岗位 JD 原文"。本次未取到任何一条可核对的逐字 JD，只能写"这些公司在招聘客户侧 AI 工程角色"这类弱表述。
- Reddit/脉脉式吐槽原话（如"不优雅……三星级酒店"、"只有不到 10% 的工程师愿意干这活"）。未定位到可引用出处。
- 与本·拉登行动相关的"Palantir FDE 参与击毙本·拉登"。传言从未证实，属神话级营销素材，不得写成事实。
- "FDE 晋升为 FDPM/FD Architect 的官方阶梯"。Palantir/AWS/OpenAI 均未公布 FDE 专属职级表。
- Andrew Ng 等名人对 FDE 的质疑原话。LinkedIn 跳转 linkedin.cn，未取到原文，不得引用。
- "FDE 就是外包/售前"（反向过度纠正）。同样不成立：AWS/Anthropic/OpenAI 的 JD 明确要求在生产系统内写代码并 own outcomes；正确写法是给读者判别清单，而不是给结论。
- 空客 "A350 节奏提升 4 倍 / 每周 4 天 / 驻图卢兹一年"。为前员工自述经中文二次转述，可写但必须标注"前员工自述"，不要作为 Palantir 官方业绩引用。
- "德勤 872 条 / 埃森哲 688 条 FDE 岗位"是 2026 年前 9 个月的**广告数**（Lightcast），不能写成"招了这么多人"。
- 中文自媒体关于"上海 FDE 百千万工程/中国首个 FDE 培训班"等，属国内线，不在本篇国际素材的可引用范围（由另一份文件负责）。

## 可直接用于文案的硬数字清单

- Palantir FDSE 公开招聘 base：**$135,000–$200,000/年**（+RSU/签字费） [A]
- Palantir FDSE 差旅：**up to 25%**，且"flexible based on personal preferences" [A]
- Palantir FDSE 门槛：**1+ 年** 毕业后工作经验 [A]
- Palantir "Year at Palantir" FDSE 实习：**$5,900–$10,500/月**（禁止年化） [A]
- Palantir 在招 FDE 岗位：**约 48 个**（Fortune）/ **283 条**（第三方，口径不同） [B]/[C]
- OpenAI FDE 差旅：**up to 50% is required** [B]；团队组建于 **2025 年初**，负责人 Colin Jarvis [B]
- OpenAI FDE 西雅图：**280K base + equity**（镜像口径） [B]
- Anthropic FDE 薪资带：**$200,000–$300,000** [A]；另一 posting 上限 **$320,000** [B]；市场称部分岗位可达 **$400,000** [B]
- Anthropic FDE 差旅 **25–50%** + **25% in-office 最低**，门槛 **4+ 年** 客户侧技术岗 [A]/[B]
- Anthropic Claude Frontier Academy：**$100M**、**10,000 名 Frontier Deployed Engineers**、**到 2027 年底**、**12 周驻修** [A]
- AWS FDE 组织：成立 **2026-06-30**、**$1B** 初始投入、**5–6 人 pod**、**约 45 天/轮**、差旅 **30–50%** [A]（45 天/pod 为 [B]）
- Microsoft Frontier Company：**$2.5B**、约 **6,000** 名工程师与行业专家（2026-07-02） [B]
- Google Cloud × Accenture：拟建 **1,000 人** FDE 队伍 [A]
- OpenAI DeployCo：2026-05、**>$4B** 初始、约 **19** 家投资方、TPG 领投、Brad Lightcap 负责、收 Tomoro（约 **150** 名 FDE） [B]
- 美国 FDE 招聘帖：2023 **<200** → 2025 **约 1,200** → 2026 前 9 月 **>7,300** [A]
- 美国 FDE 招聘广告薪资中位数：**$195,456**（2026 前 9 月，较 2023 **+40%**，为全岗位中位数 **3 倍以上**） [A]
- 另一窗口：**>$188,000**，传统 SWE **约 $145,000**（Fortune×Lightcast） [B]
- 再一窗口：**$202,300**、岗位自 2022 **+近 600%**（Entrepreneur×Lightcast） [B]
- 2026 前 9 月发布量 Top：Deloitte **872**、Accenture **688**、Google **499**、KPMG **447**（广告数） [A]
- 参考基线：BLS OEWS（2025-05）相邻职业族中位年薪 **$135,980** [B]
- Vercel FDE base：**$137,000–$207,000** [A]；门槛 **6+ 年工程 / 2+ 年客户侧** [A]
- Metal（YC）FDE：**$150K–$240K + 0.10%–0.25%**，接受应届生 [B]
- Roboflow（YC）驻场周期：**4–12 周** [B]
- 第三方追踪（2026-04-30）：**249** 个在招 FDE 岗位 / **137** 家公司 [B]
- 自报总包（弱证据，只作量级）：Palantir 软件工程师序列总包中位 **$230,000**（Levels.fyi 转引） [B]/[C]

## 幽默素材观察（来自真实 JD/自述，非段子库）

- 403 的荒诞本身：openai.com 与 blog.palantir.com 全部拒绝抓取——"你想了解 FDE，先被 FDE 公司拦在门外"。（写文案时不能自夸，但可暗示"官网只给摘要"。） [事实级]
- 差旅条款的反差萌：Palantir 写 "flexible based on personal preferences"，OpenAI 写 "Travel up to 50% is required."。同一职业，一句话是福利，一句话是军令。 [A]
- "white glove deployment support"（Anthropic 原话）——白手套交付，配 45 天的 pod（AWS），一个像酒店礼宾，一个像施工队。 [A]
- AWS 的 45 天冲刺 + 语义层部署进客户自己的 AWS 账户：交付结束时，客户账户里多了一整套"你没有写但确实是别人写的"代码。 [B]
- Roboflow 的 "Process (~5 hours)"：把入职/权限流程直接写进 JD，是现场工程师最朴素的幽默。 [B]
- Palantir JD 里最像简历的一句话："your responsibilities look similar to those of a startup CTO"——而门槛是 "1+ years of relevant, post-college work experience"，反差可写成"新毕业就当 CTO"的温和吐槽。 [A]
- 现场生活的真实物件：早期 FDE 去的是阿富汗/伊拉克基地与"工业中西部的工厂"（S-1 原文措辞 "factories in the industrial Midwest"），不是会议室——这是最干净的"前线"叙事素材。 [B]
- 内网/权限的永恒素材：OpenAI JD 提到岗位需接触 "secure and protected information technology systems" 与数据安全义务——暗示"在客户网络里，你的 laptop 可能连不上你想连的任何东西"。 [B]
- 客户改需求与临场救火的可引证表达："customer is blocked, figure it out"（HeroHunt 的判断句）与 "High agency with an ability to navigate ambiguity present in complex organizations"（Anthropic 软性要求）。前者是土话，后者是 HR 土话，两者对照即可笑。 [A]
- "If we make ourselves obsolete every couple of months, our FDE team is doing its job."（Colin Jarvis）——自评为"把自己干掉"的岗位，天然适合写自嘲。 [B]
- "What do we do when Codex can just one-shot the use cases we spent the last few months building?"（OpenAI FDE 团队博客自问）——现场工程师的的存在焦虑被官方账号问出来，力度远超段子。 [B]
- "Enterprises buying AI are like your grandma getting an iPhone: they want to use it, but they need you to set it up."（a16z）——可翻译成中文，但请保留"a16z 的说法"这一归属。 [A]
- "You're Accenture for X with a nicer front-end."（a16z 记录的嘲讽）——被骂成咨询公司这件事本身就是行业老梗，Palantir 被骂了十几年。 [A]
- 差旅是这个岗位"第一年离职主因"，但招聘广告几乎从不量化（Valletta 原句）——把这句话改成"JD 里最不说、同事最爱问的一件事"，比任何段子都有效。 [A]
- 头衔漂移的现场证据：Atlassian 挂的是 "Principal Forward Deployed Architect"，BCG 挂的是 "Forward Deployed AI Engineer"，诺华挂的是 "Mgr, Forward Deployed Engineer"（还有经理岗）。同一个词，四条街。 [A]/[B]
