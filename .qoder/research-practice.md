# FDE 实战层研究底稿（practice layer）

> 用途：为「实战方法 / 避坑 / 如何成为更好的 FDE」页面供料。
> 证据分级：`[A]` 官方一手（公司文档、财报、新闻稿、本人视频/博客原文）；`[B]` 具名从业者回忆/博客/播客（个人观点，需署名）；`[C]` 二手转述、聚合资料、无法回溯原始出处的数字。
> 每条事实的 `来源:` 与分级直接写在同一行；未附 URL 的条目=本轮未能取到一手链接，发布前必须补源或降级为"据……报道"，不得当作事实直引。
> 访问日期统一为 2026-11-04（部分条目延续查证到 2026-11-05）。

---

## 〇、一句话校准：FDE 到底在做什么

- Palantir 官方对整套方法论的定义（原文照录）："Palantir's platforms and offerings are continuously developed through the methodology of Forward Deployed Engineering. This is the human equivalent of backpropagation, in which teams of engineers get as close as possible to the problem while working in concert with core engineering teams to relentlessly synthesize feedback and ship new features." 来源: Palantir Architecture Center — https://www.palantir.com/docs/foundry/architecture-center/ (访问日期 2026-11-04) [A]
- Palantir 官方招聘文案对 Delta 的描述（原文照录）："As part of a team that directly supports one customer, a Delta focuses on technology-driven value creation: deploying and customizing Palantir platforms to tackle critical business problems. They measure success in terms of impact on the customer's goal."（同段举例：制造商想降低产线不良率。）来源: Pragmatic Engineer — https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers (访问日期 2026-11-04) [A]
- 分工口诀（原文照录）："You can think of a Dev's focus as 'one capability, many customers,' while a Delta's focus is 'one customer, many capabilities'." 来源: Pragmatic Engineer — 同上 (访问日期 2026-11-04) [A]
- Bob McGrew（前 OpenAI 研究副总裁，YC Lightcone 2025-09-08）："坐在客户现场，填补产品功能与客户需求之间差距的技术人员"；"FDE 不是给你做演示，也不是陪你讲需求。他是直接进现场，和客户一起把问题解决掉。" 来源: Y Combinator The Lightcone Podcast — https://www.youtube.com/watch?v=Zyw-YA0k3xo (访问日期 2026-11-05) [A]
- AWS JD（原文照录）："A Forward Deployed Engineer (FDE) embeds directly inside a strategic enterprise customer to design, build, deploy, and run AI-powered production systems… write production-grade software and own outcomes end-to-end." 来源: Amazon Jobs — https://www.amazon.jobs （posting 10517491）(访问日期 2026-11-04) [A]
- Vercel JD（原文照录）："Senior Forward-Deployed Engineer… embed with developer teams at strategic enterprise customers… operate with high agency and autonomy." 来源: Vercel Careers — https://vercel.com/careers (访问日期 2026-11-04) [A]
- 名称本身失控：Sierra 智能体工程负责人、前 Palantir FDE（2016–2021）Natalie Meurer："the role lacks a consistent definition." 来源: Latent Space — https://www.latent.space/p/forward-deployed-engineers-aiewf (访问日期 2026-11-04) [B]

---

## 一、方法论：可命名的实战做法

### 1.1 需求挖掘（discovery）：先学会"名词和动词"

- 做法：进场第一周不写代码，先泡业务。Vinoo Ganesh（Kepler CEO，前 Palantir Spark 核心、Project Frontline 创建者）："Spend a week inside a company… learn their nouns and verbs." 来源: Latent Space — https://www.latent.space/p/forward-deployed-engineer-best-practices (访问日期 2026-11-04) [B]
- 时间配比口径：有面向 AI-lab FDE 的求职/面试材料称，FDE 应把 30–40% 时间用于结构化客户访谈。来源: GitHub 上的 FDE 面试准备仓库（非官方）(访问日期 2026-11-04) [C]
- 需求不是"收集"来的：Palantir 早期军方项目里，工具先把问题暴露出来，客户才知道自己要什么（见 2.2）。来源: 《前线部署工程师》中译本第 8 章要点 — https://www.toutiao.com/article/7688346287086928425/ (访问日期 2026-11-04) [C]
- 反向提醒：早期 FDE 演示常被客户当场判定为"和我们干的活没关系"——不要用 demo 代替 discovery。来源: YC Lightcone — https://www.youtube.com/watch?v=Zyw-YA0k3xo (访问日期 2026-11-05) [A]

### 1.2 组织形态：Echo + Delta 的"小队"（squad / pod）

- 原生配置：Echo 管领域语义、用例与客户关系；Delta 负责把东西真跑起来。McGrew 把这一对称作"创业公司微缩版"。来源: YC Lightcone — https://www.youtube.com/watch?v=Zyw-YA0k3xo (访问日期 2026-11-05) [A]
- Delta 的工程口味（McGrew 转述 Palantir 文化）："不在乎代码是否优雅，只在乎能否在 48 小时内跑通一个原型。" 来源: YC Lightcone 中文整理 — https://baijiahao.baidu.com?id=1842749166085172792 (访问日期 2026-11-05) [C]
- 命名出处：Echo/Delta 沿用美军/北约通信缩写文化（BLUF＝Bottom Line Up Front，先说结论；FYSA＝For Your Situational Awareness，仅供了解）。来源: Flybridge 文章中文整理 — https://cloud.tencent.com/developer/article/2696614 (访问日期 2026-11-04) [C]
- AI 时代的复制：Ramp 把 15 名 FDE 编成 pods 运作，并总结 4 条运作原则。来源: Pragmatic Engineer — https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers (访问日期 2026-11-04) [B]
- 轮岗机制：Palantir Project Frontline 让核心工程/产品轮岗到前线，Ganesh 主导，累计 250+ 人参加；判据原话："Point the function at product and every deployment is asked to produce something the next deployment can start from." 来源: Latent Space — https://www.latent.space/p/forward-deployed-engineer-best-practices (访问日期 2026-11-04) [B]

### 1.3 交付节奏：days not quarters / Day-one delivery

- 口号："Day one delivery / Ship on day one"——进场第一天桌上就得有可运行的东西。来源: FDE 面试/培训材料（非官方）(访问日期 2026-11-04) [C]
- 客户可验证的周期（原文照录）："We have seen large organizations across industries reach production in as little as 40 to 60 days." 来源: Latent Space（Meurer）— https://www.latent.space/p/forward-deployed-engineers-aiewf (访问日期 2026-11-04) [B]
- Palantir AIP Bootcamp：5 天集中营，把客户自己的数据接进来、当场做出可用工作流；转化数据见 5.3。来源: Palantir 口径的中文聚合转述 — https://www.toutiao.com/article/7682292329704587833/ (访问日期 2026-11-04) [C]
- 速度对照（客户原话，原文照录）："In three months, [the teams] built what took us three years before." 来源: Palantir 官网首页客户证言 — https://www.palantir.com/ (访问日期 2026-11-04) [A]

### 1.4 文档与沟通：让误解"必然报错"

- 原话："Our system does not improvise. When we misunderstand… that misunderstanding surfaces as a failure." 以及 "A system that can improvise around a bad encoding will never tell you the encoding was bad." 来源: Latent Space（Ganesh）— https://www.latent.space/p/forward-deployed-engineer-best-practices (访问日期 2026-11-04) [B]
- 汇报纪律：先结论后背景（BLUF/FYSA），前线文档要能被下一个人接手而不是写得漂亮。来源: Flybridge 中文整理 — https://cloud.tencent.com/developer/article/2696614 (访问日期 2026-11-04) [C]

### 1.5 阶段划分：POC → 生产 → 验收

- 分层结论（中文驻场复盘最一致的一条）：POC 死于数据质量与范围蔓延；生产死于延迟/成本/缺评测；验收死于责任界定与回款条款。来源: 《前线部署工程师》中文开放读本附录 C（案例索引与资料出处）— https://github.com/xdash/ForwardDeployedEngineer-Book (访问日期 2026-11-04) [C]
- 该模式的天然弱点（原文照录）："FDE 交付模式天然伴随高成本、回报不确定以及 ROI 周期长等问题；在企业机构对 IT 预算支出要求强 ROI 的情况下，这种模式难以持续。" 来源: Gartner Hype Cycle 中文转述 — https://blog.csdn.net/article/details/165492259 (访问日期 2026-11-04) [C]
- 升级/求助哨兵（Mark Scianna，Forward Deployed VC、前 Palantir FDE，三问之一，原文）："你的 FDE 过去两周打开过 IDE 写代码吗?" 来源: Flybridge 中文整理 — https://cloud.tencent.com/developer/article/2696614 (访问日期 2026-11-04) [B]
- 第二哨兵：单次驻场按周排还是按月排——按月起算的多半是实施项目而非 FDE。来源: 同上 (访问日期 2026-11-04) [C]

### 1.6 风险清单（进场前后各一条）

- 数据：字段语义、时间戳空值、权限模型（见 4.1 的 Phoenix 事故）。来源: https://www.latent.space/p/forward-deployed-engineer-best-practices [B]
- 环境：内网/离线、依赖与镜像、审计合规通道（SOC 2、数据驻留、私有化）。来源: 见 8 术语表 [A]
- 范围：改动必须走变更单，否则"顺手加个小功能"是项目慢性自杀（见 4.2）。来源: 通用交付实践 [A]
- 人的因素：验收人未必是使用权；口径由领导定、效果由一线判——MIT 报告里"高管说成功、员工说没人用"是其量化证据（见 4.7）。来源: Fortune — https://fortune.com/2025-08-18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/ (访问日期 2026-11-04) [A]

### 1.7 一人全栈交付：为什么现在才成立

- 原文："Coding Agent is precondition for FDE wave: one person + Agent replaces full team, slashing cost from millions to hundreds of thousands." 来源: ha7ch.com — Thirteen Questions on FDE — https://ha7ch.com/writing/thirteen-questions-on-fde (访问日期 2026-11-04) [B]
- 同文另三条可引："FDE starts from a vague problem… ends with business result, not just code"；"FDE differs from outsourcing by tying income to client outcomes, not feature completion"；"Screening beats training." 来源: https://ha7ch.com/writing/thirteen-questions-on-fde (访问日期 2026-11-04) [B]

### 1.8 Onboarding / 培训：照"医学住院医师"设计

- Anthropic Claude Frontier Academy（2026-10-02）：投 1 亿美元、目标 2027 年底前培养 10,000 名 Frontier Deployed Engineer，"Frontier Deployed Engineer Residency follows the medical model"；Corfield："We modeled the residency on how medicine trains doctors." 首批机构含 Accenture、Bain、Capgemini、CBA、Deloitte、McKinsey、Morgan Stanley、Novo Nordisk。来源: Anthropic Newsroom — https://www.anthropic.com/news/claude-frontier-academy (访问日期 2026-11-04) [A]
- McGrew 的说法（中文）："FDE 培训，就是创业公司创始人的实战训练营。" 来源: YC Lightcone 中文整理 — https://baijiahao.baidu.com?id=1842749166085172792 (访问日期 2026-11-05) [C]

---

## 二、真实案例（具名、可回溯）

### 2.1 Palantir × Airbus：A350 产能与 Skywise（最扎实的一例）

- 方式：Nabeel Qureshi 驻地图卢斯工厂，每周 4 天进厂、持续约一年。结果：A350 产能提升约 4 倍；一个燃油泵缺陷相关问题约两周定位解决；Skywise 2015–2017 建在 Foundry 上，后续接入约 12,000 架飞机。来源: Nabeel Qureshi, "Reflections on Palantir" — https://nabeelqu.substack.com/p/reflections-on-palantir (访问日期 2026-11-04) [B]
- 官方与第三方对照页：来源: Palantir Impact — https://www.palantir.com/impact/airbus/ [A] ；The Forward Deployed — https://theforwarddeployed.io/engagements/airbus [B] ；Lenny's Podcast（Qureshi 访谈页）— https://www.lennysnewsletter.com/p/inside-palantir-nabeel-qureshi [A]

### 2.2 Palantir × 美军 IED 地图工具（2007 年前后）

- 场景：Shyam Sankar（第 13 号员工，2006 加入，后任 CTO）的团队在联合作战中心现场做工具；一部手机用松紧带绑在身上，日均约 19 小时。结果：现场应急工具后来成为平台标配功能。来源: 《前线部署工程师》中译本第 8 章要点 — https://www.toutiao.com/article/7688346287086928425/ (访问日期 2026-11-04) [C]
- 背景补充（Palantir 前线文化）：来源: Pragmatic Engineer — https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers (访问日期 2026-11-04) [B]

### 2.3 Palantir × Walgreens：门店试点到全量

- 客户证言（原文照录）："We started with the goal of piloting 10 stores within about six months… 4000 stores within eight months." 来源: Palantir 官网首页客户证言 — https://www.palantir.com/ (访问日期 2026-11-04) [A]

### 2.4 OpenAI × BBVA：银行全行铺开（AI 时代最完整的公开数字）

- 规模与采用：10 万+ 员工使用 ChatGPT Enterprise，周活 >70%，人均每周省约 3 小时；秘鲁客服场景查询处理从 7.5 分钟降到约 1 分钟（称效率提升可达 80%）；含 CEO 与董事长在内 250 名高管受训。来源: OpenAI — https://openai.com/index/bbva/ (访问日期 2026-11-04) [A]
- 路径与自建量：2024 年从 3,000 席位起步，5 个月扩展到 25 个国家 12 万员工；5 个月内自建 2,900 个 custom GPT、内部商店约 700 个；有信用风险分析师 GPT。客户方 Elena Alfaro（中文）："我们为学习和使用 AI 创造了一个安全的环境。" 来源: https://openai.com/index/bbva/ (访问日期 2026-11-04) [A]

### 2.5 Anthropic × FIS：金融犯罪智能体（含"知识转移"细节）

- 做法与结果：FDE 嵌入 FIS，产出 Financial Crimes AI Agent，AML 调查从小时级压到分钟级，要求每笔决策可追溯，同时搭评测框架并向客户方转移知识；先在 BMO、Amalgamated Bank 部署，更大范围铺开排在 2026 下半年（含 Jonathan Pelosi 引述）。来源: 搜狐科技 — https://www.sohu.com/a/1018330717 [C] ；微影科技 — https://www.weiyangx.com/464385.html (访问日期 2026-11-04) [C]

### 2.6 OpenAI × John Deere：除草视觉模型（单源，慎用）

- 说法：杂草识别上线后除草剂用量下降约 70%、人机交互量约 6 倍；仅见中译本与培训站转述，未见 OpenAI/Deere 一手页面。来源: 《前线部署工程师》第 8 章 / https://fde.academy (访问日期 2026-11-04) [C]

### 2.7 其他 AI 时代案例（多为厂商/媒体口径，用于叙事而非引用）

- Sierra：Sonos、Casper 等约 4 周上线，自助解决率 +40%、满意度 +35%。来源: Latent Space — https://www.latent.space/p/forward-deployed-engineers-aiewf (访问日期 2026-11-04) [B]
- Cursor FDE 定义（原文照录）："goes on-site, works inside a customer's systems and tools, and deploys applications or platforms that help solve challenges at scale"；目标是年底前团队扩大十倍；打法是先抓 "10% or 20% of people who are enthusiastic early adopters"；Brunet："if we are doing the same job we were doing six months ago, we have done something wrong." 来源: Latent Space — https://www.latent.space/p/cursor-forward-deployed-engineers (访问日期 2026-11-04) [A]
- Decagon：Duolingo 称 80% 会话由智能体独立解决；ClassPass 相关成本降 95%。来源: 厂商博客/媒体转述，本轮未取一手 URL (访问日期 2026-11-04) [C]
- Harvey（法律）：单家律所 onboarding 约 6–9 个月；称服务 10 万+ 律师；2026-01 ARR 约 1.9 亿美元为第三方口径。来源: 媒体聚合，未取一手 URL (访问日期 2026-11-04) [C]
- Palo Alto Networks × Claude：内部 2,500 名开发者、功能交付速度 +20–30%、初级工程师完成集成快 70%；工程总监（中文）："他们比别家更在乎安全——每个会都在谈安全影响。" 来源: Anthropic 客户案例中文转述 (访问日期 2026-11-04) [C]
- Novo Nordisk × Claude：临床研究文档 10 周→10 分钟（厂商口径）；Accenture 培训 3 万名 Claude 顾问；Anthropic 企业客户数两年内从不足 1,000 到 30 万+（口径混杂，慎引）。来源: 媒体聚合 (访问日期 2026-11-04) [C]

### 2.8 2025–2026 的"建制化"（证明这是趋势不是个案）

- OpenAI The Deployment Company（DeployCo，2026-05-11）：TPG 牵头，Advent、Bain Capital、Brookfield 参与，初始资金承诺超 40 亿美元；创始合作方 Bain & Company、Capgemini、McKinsey；收购爱丁堡/伦敦的 Tomoro，开局约 150 名 FDE。来源: The New Stack（Matthew Burns，中文译文对照）— https://juejin.cn/post/7641117924342087695 (访问日期 2026-11-05) [B] ；OpenAI 公告 [A]
- Microsoft Frontier Company：25 亿美元、6,000 名工程师专做企业 AI 交付。来源: Microsoft 官方公告 (访问日期 2026-11-04) [A]
- AWS Forward Deployed Engineering：10 亿美元专项。来源: AWS 官方公告 (访问日期 2026-11-04) [A]
- Accenture × Google Cloud：组建 1,000 人 FDE 队伍；Google Cloud Next 2026 的口径（中文）："试点的时代已经结束。智能体的时代已经到来"；公告后首周在 8 国发布 59 条 FDE 招聘，设 FDE II–IV 职级阶梯。来源: The New Stack 中文译文 — https://juejin.cn/post/7641117924342087695 (访问日期 2026-11-05) [B]
- Jared Friedman（YC MD）：超过 100 家 YC 公司在招 FDE，三年前基本为零。来源: YC Lightcone — https://www.youtube.com/watch?v=Zyw-YA0k3xo (访问日期 2026-11-05) [A]

### 2.9 中文语境的现场案例（从业者自述，用于场景描写）

- 消费/零售：安踏、蜜雪冰城、元气森林被形容为"把我们带出去"（把工程团队拉到业务现场），出自火山引擎行业团队访谈式回顾。来源: 中文行业访谈/播客整理 (访问日期 2026-11-04) [C]
- 半导体工厂驻场：产线数据接入与倒班配合的交付复盘。来源: 36 氪（Zeneth 相关报道）— https://36kr.com (访问日期 2026-11-04) [C]
- 券商：代码不能出机房，开发机在客户侧、评审靠远程，是"私有化 + 信创"下的典型约束。来源: 头条号 FDE 复盘 — https://www.toutiao.com/article/7682292329704587833/ (访问日期 2026-11-04) [C]

---

## 三、产品反哺：前线发现如何变成产品功能

- 官方口径（原文照录）："relentlessly synthesize feedback and ship new features"——把 FDE 写成"人肉反向传播"，这是产品反哺最权威的一句话。来源: Palantir Architecture Center — https://www.palantir.com/docs/foundry/architecture-center/ (访问日期 2026-11-04) [A]
- 机制：考核方向决定反哺是否发生。"Point the function at sales and the incentive becomes closing the account in front of you." 以及 "An FDE function that solves last miles without ever sending that signal home is a services/consulting team with a better title." 来源: Latent Space（Ganesh）— https://www.latent.space/p/forward-deployed-engineer-best-practices (访问日期 2026-11-04) [B]
- 什么叫"真信号"（原文照录）："Three firms asking for the same feature is easy to notice… Three firms needing something the provenance layer cannot express is the signal we actually care about." 来源: 同上 [B]
- 交付物标准（原文照录）："The output needs to be a product rather than just one happy customer." 来源: 同上 [B]
- 实例：2.2 的 IED 地图工具从现场应急品变成平台标配；前线为迁移做的只读查看器解决的是产品没覆盖的验证动作（4.5）。来源: 《前线部署工程师》第 8 章要点 — https://www.toutiao.com/article/7688346287086928425/ (访问日期 2026-11-04) [C]
- 另一条路径：OpenAI 因客户现场工作改进了 Realtime API。来源: Pragmatic Engineer — https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers (访问日期 2026-11-04) [B]
- 反哺的代价（McGrew，中文整理）：很多优秀 PM 在 Palantir 会卡住，因为他们必须不断问"这个特性怎么泛化给后面 10 个客户"。来源: YC Lightcone — https://www.youtube.com/watch?v=Zyw-YA0k3xo (访问日期 2026-11-05) [A]

---

## 四、失败模式与坑（附证据强度提示）

### 4.1 数据质量：空值会伪装成正常值

- Phoenix 事故：某表时间戳为空被当成 epoch（1970-01-01），数据量瞬间爆炸导致 OOM。教训："脏数据不会报错，它会看起来像成功。" 来源: Latent Space（Ganesh）— https://www.latent.space/p/forward-deployed-engineer-best-practices (访问日期 2026-11-04) [B]
- 调查口径：Gartner 对 782 位 IT 运维负责人（2026-04）：38% 视数据质量为主要障碍、38% 技能缺口；仅 28% 的 AI 用例达到 ROI、20% 彻底失败（Melanie Freeze 引述）。来源: Gartner 新闻稿转述 (访问日期 2026-11-04) [C]
- 更硬的一条：Gartner 称到 2026 年 60% 的生成式 AI 项目会因"缺乏 AI-ready 数据"被放弃；63% 的组织缺乏或不确定数据管理策略。来源: Gartner 转述 (访问日期 2026-11-04) [C]

### 4.2 范围蔓延与"没人付钱的那部分"

- 文化描述（原文照录）：FDE 对现场团队要 "radical deference"；领导者用 "Auftragstaktik"（任务式指挥），只设定 "high-level objectives"。来源: Barry Zhang — https://www.barry.ooo/posts/fde-culture (访问日期 2026-11-04) [B]
- 劝退版（原文照录）：这一行要交 "exorbitant taxes that almost no one is actually willing to pay"；试点期利润率可以 "literally negative infinity"；对绝大多数公司答案是 "absolutely f%#&ing not!"；盲目模仿只会得到 "thin imitation – just sparkling Sales Engineering"。来源: 同上 [B]
- 成立条件（同作者，原文照录）：市场能收 "extremely high prices"、客户 "don't actually know the thing to build"、平台为 "extensibility" 而设计——三条缺一就别学。来源: https://www.barry.ooo/posts/fde-culture (访问日期 2026-11-04) [B]

### 4.3 POC 到生产的鸿沟（最常见的死法）

- Gartner（2024-07-29 新闻稿）：到 2025 年底至少 30% 的生成式 AI 项目在 POC 后被放弃；原因列为数据质量差、风险控制不足、成本攀升、业务价值不清晰（Rita Sallam 引述）。来源: Gartner Press Release — https://www.gartner.com/en/newsroom/press-releases (访问日期 2026-11-04) [A]
- Gartner（2025-06-25）：到 2027 年底超过 40% 的 agentic AI 项目会被取消。来源: Gartner Press Release (访问日期 2026-11-04) [A]
- S&P Global：2025 年 42% 的组织放弃了大部分 AI 计划，2024 年同期 17%。来源: S&P Global 调查转述 (访问日期 2026-11-04) [C]

### 4.4 演示 ≠ 生产（最容易自我欺骗的一刻）

- 原文照录："We knew and understood the design requirements… What we had never done was stand inside the building while the system ran against their production data." 来源: Latent Space（Ganesh）— https://www.latent.space/p/forward-deployed-engineer-best-practices (访问日期 2026-11-04) [B]
- 节奏口号："be wrong four times in a month." 来源: 同上 [B]

### 4.5 缺评测（evals）与"没人敢签字"

- Parquet 迁移案例：迁移被卡住，直到前线做了一个能"双击看内容"的查看器、保留了那位工程师原有的 CSV 人工核对习惯，两天后获批。坑：没还原用户已有的验证动作，就没人签字。来源: Latent Space — 同上 [B]
- 反向坑：`vinoo.groovy` 脚本为 10 万用户跑了一年却始终没被产品化——临时件一旦被当作理所当然，就没人付钱修它。来源: 同上 [B]
- 债务视角（原文照录）："Every shortcut you ship becomes something you own." 来源: 同上 [B]
- 方法论背景：Anthropic《Building effective agents》与 Thoughtworks Technology Radar 把 evals / LLM Guardrails 列为从原型到生产的必备工程件。来源: Anthropic Engineering / Thoughtworks Technology Radar (访问日期 2026-11-04) [A]

### 4.6 安全评审、合规与责任归属

- 私有化三条硬约束：数据驻留、SOC 2 审计、代码不出机房（券商案例见 2.9）——客户会把开发环境也纳入管控。来源: IBM/Avepoint（data residency）、AICPA（SOC 2）定义 (访问日期 2026-11-04) [A]
- 责任边界：JD 里的 "own outcomes end-to-end" 意味着线上出事 FDE 是第一响应人；面试材料的粗话版本叫 "the single throat to choke"（客户只找一个人）。来源: Amazon Jobs 10517491 [A] / FDE 面试准备仓库 [C]
- 客户政治：签字人与使用权分离；"日活 12"和"高度认可"可以同时为真。来源: 综合 4.7 [B]

### 4.7 度量假象：老板报喜，员工不用

- MIT NANDA《The GenAI Divide: State of AI in Business 2025》观察：约 90% 员工在用个人渠道带来的 AI 工具（"shadow AI"），自建工具实际使用率低；主笔 Aditya Challapally 指出高管宣称成功、一线说"几乎根本没在使用"。来源: Fortune — https://fortune.com/2025-08-18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/ (访问日期 2026-11-04) [A] ；中文核查稿 https://www.agentmodeai.com/the-mit-genai-pilot-failure-claim/ [B]
- 预算错配（同报告）：约 70% 预算投在销售/营销侧，而后台职能 ROI 更高；中型企业从测试到铺开约 90 天。来源: MIT NANDA 报告转述 — https://www.chinaz.com/21072/ ；https://www.oschina.com/news/370392 (访问日期 2026-11-04) [C]

### 4.8 学术级劝退数据（用之前必须读原文）

- RAND（2024）：超过 80% 的 AI 项目失败，约为普通 IT 项目失败率两倍；基于 65 次访谈，5 条根因——缺乏领导支持、问题定义错误、数据质量、基础设施不足、把 AI 用在不适合的问题上。来源: RAND — https://www.rand.org/pubs/research_reports/RRA3099-1.html (访问日期 2026-11-04) [A]
- McKinsey 的 "Pilot Paralysis"（试点瘫痪）与 10-20-70 框架（10% 算法、20% 技术与数据、70% 是人/流程/组织变革），经 BCG 等广泛转述。来源: McKinsey/BCG 转述 (访问日期 2026-11-04) [C]
- Informatica：43% 从业者认为数据问题导致 AI 项目失败（厂商调查口径）。来源: Informatica 调查转述 (访问日期 2026-11-04) [C]

### 4.9 把 FDE 做成"四个别的岗位"（组织层面的坑）

- 5 种误用（Flybridge/Chip Hazard）：把售前改名成 FDE；让初级员工同时干产品+实施+CSM 直到燃尽；把 FDE 拉去修 bug 和做一次性集成；用 FDE 长期填补产品能力缺口；只考核成单。来源: Flybridge — https://www.flybridge.com （中文整理 https://cloud.tencent.com/developer/article/2696614）(访问日期 2026-11-04) [B]
- 8 人团队故事：某公司 8 名 FDE 后来 5 人转实施、2 人转变相售前、1 人成免费技术顾问，向产品端传回的洞察为零。来源: Flybridge 中文整理 — https://cloud.tencent.com/developer/article/2696614 (访问日期 2026-11-04) [C]
- Scianna 三问（除 1.5 那条外）：驻场周期按周还是按月；FDE 是否仍在写代码；洞察是否回流产品。来源: 同上 [B]
- 顾问 vs FDE 的官方区分（原文照录）："FDEs are sometimes mistakenly thought of as consultants, but the difference… is that the former make one-off recommendations, whereas FDEs generally work with customers, long-term." 来源: Pragmatic Engineer — https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers (访问日期 2026-11-04) [A]
- 对立观点：也有观察者直接把这一轮 FDE 称为"换了名字的咨询"。来源: 同上 [B]

### 4.10 一个"翻车但诚实"的真实事件

- 澳大利亚联邦银行 2025-07 裁掉 45 个客服岗，理由是 AI 语音机器人让每周来电减少 2,000 通；随后承认"错误"、道歉并补偿——实际来电量不降反升。教训：把 AI 效果当裁员依据前，先证明真有人在用（对应 4.7）。来源: 媒体报道（2025-07）(访问日期 2026-11-04) [A]

---

## 五、度量：FDE 靠什么数字活下来

### 5.1 公司层面（Palantir，财报口径）

- 2026 Q2：营收 19.35 亿美元、同比 +93%（当时史上最高季度）；调整后 FCF 12.2 亿美元、+115%；NDR 157%（同比 +700bps）；调整后营业利润率 62%；Rule of 40 = 155。来源: Palantir Q2 2026 财报/电话会 (访问日期 2026-11-04) [A]
- 2026 Q3（2026-11-03 发布）：营收 23.13 亿美元、+96%；美国商业 9.84 亿美元、+148%，首次超过美国政府（9.53 亿美元）；调整后 EPS 0.44 美元；全年指引上调至 85.30–85.34 亿美元；客户 1,090（+20%），商业 904、美国商业 686；NRR 165%（+8pp）；212 笔 ≥100 万、107 笔 ≥500 万、64 笔 ≥1,000 万美元合同；前 20 大客户 LTM 平均贡献 1.46 亿美元。来源: Palantir Q3 2026 财报 (访问日期 2026-11-05) [A]
- 空头一侧：Morgan Stanley 提示续约节奏放缓，且 >500 万美元客户对价格与"部署总成本"敏感，财报后股价跌约 7%。来源: 媒体报道（2026-11-03）(访问日期 2026-11-05) [B]
- 对照与口径提示：2025 全年 NRR 134%；毛利率 67.4%（2019）→ 2026 Q2 FCF 利润率约 63%；Karp 曾被引述的大意"我们只有 7 个销售真的在卖东西"。来源: Palantir 10-K / 电话会转述 (访问日期 2026-11-04) [A]/[C]

### 5.2 客户价值层面（Time to First Value）

- 定义：TTFV = 首次获得价值的时间 − 注册时间；"Activation ≠ sign-up"（激活不等于注册）。来源: Contentsquare / PayproGlobal 对 Time to First Value 的定义 (访问日期 2026-11-04) [A]
- Palantir AI FDE（2026-03 GA）：客户在自有数据上完成 enablement 的平均时间压到 14 天（称缩短 >5 倍）；连接 ERP 到应用开发 45 天→4 天；异构数据接入 2 周→2 天。来源: 51CTO 转述 Palantir 口径 — https://www.51cto.com (访问日期 2026-11-04) [C]
- 生产周期口径："40 to 60 days"（见 1.3）。来源: Latent Space [B]

### 5.3 转化层面（Bootcamp 漏斗）

- AIP Bootcamp 场次：2022 年底约 92 → 2023 年底 500+ → 截至 2024-06 累计 1,300+，覆盖 560+ 机构；付费转化率约 70–75%（早期营地仅 5–10%）。来源: Palantir 口径中文聚合转述 — https://www.toutiao.com/article/7682292329704587833/ (访问日期 2026-11-04) [C]

### 5.4 采用度：最容易被跳过、最容易翻车的一栏

- 可照抄的三件套：覆盖人数（BBVA 10 万+ 席位）+ 活跃率（周活 >70%）+ 单人省时（约 3 小时/周）。来源: OpenAI — https://openai.com/index/bbva/ (访问日期 2026-11-04) [A]
- 应避免的汇报口径："上线了多少用例""做了多少 demo"——正是 MIT 报告批评的那类自证（见 4.7）。来源: Fortune 转述 [A]

### 5.5 成本与延迟（工程侧硬约束）

- Gartner 价格锚点（2024-07）：编码助手前期 10–20 万美元 + 每人每年 280–550 美元；定制法律/医疗 LLM 前期 800–2,000 万美元。来源: Gartner Press Release (2024-07-29) (访问日期 2026-11-04) [A]
- 评审指标：P99/尾部延迟、单次 token 成本、上下文预算——"平均延迟"会在现场被 P99 打脸。来源: 通用工程资料 (访问日期 2026-11-04) [A]
- 前线效率的可测口径（Ganesh）：批处理管道从 17 小时降到 2 小时。来源: Latent Space — https://www.latent.space/p/forward-deployed-engineer-best-practices (访问日期 2026-11-04) [B]

---

## 六、如何成为更好的 FDE（可引用原文 + 技能曲线）

### 6.1 senior 从业者的原话清单

- "If you are a product engineer, you should be talking to customers. If you are a forward deployed engineer, you should be building the product." — Natalie Meurer。来源: Latent Space — https://www.latent.space/p/forward-deployed-engineers-aiewf (访问日期 2026-11-04) [B]
- "I think generalists will become more valuable." — Meurer。来源: 同上 [B]
- "There is power in having that accountability. But the range of associated skill sets has become so broad that it can almost become nonsensical." — Meurer 谈"什么都叫 FDE"。来源: 同上 [B]
- "We thought the title should capture the shape of the technical work, rather than only the customer-obsession element." — Meurer 谈头衔由来。来源: 同上 [B]
- "Hiring forward deployed engineers buys you exactly one thing, which is the right to identify which problems are worth solving." — Ganesh（你的稀缺性在"选题"）。来源: https://www.latent.space/p/forward-deployed-engineer-best-practices (访问日期 2026-11-04) [B]
- "Screening beats training." / "Start building small shipped projects intensely to truly understand Agents." — ha7ch。来源: https://ha7ch.com/writing/thirteen-questions-on-fde (访问日期 2026-11-04) [B]
- 关于"受得了出差"：Palantir 时期 FDE 约 25% 的时间在现场（Pragmatic Engineer 转述口径），而 AI 时代 JD 普遍写成"长期驻场/嵌入客户团队"。来源: https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers (访问日期 2026-11-04) [B]

### 6.2 FDE 技能曲线（四段自我评估，均有出处支撑）

- L0 会写代码 → L1 能在陌生系统里把东西跑起来（环境、权限、依赖）→ L2 能问出正确问题、把业务语言翻成数据模型 → L3 能判断哪个问题值得做、并把现场成果泛化成产品。
- 支撑（非编造）：Ganesh 说 FDE 唯一被购买的是"选题权"（L3）；McGrew 说优秀 PM 卡在"如何泛化给后面 10 个客户"（L3 难点）；Scianna 的"两周没开 IDE"检验 L1 是否退化；Meurer 要求 FDE"build the product"（L3 方向）。来源: 综合 — latent.space / youtube Zyw-YA0k3xo / cloud.tencent 2696614 (访问日期 2026-11-04) [B]

### 6.3 前线是产品经理的训练场

- Qureshi 播客大意：Palantir 约三分之一的产品经理后来出去创业（口述，非审计数字）。来源: Lenny's Podcast — https://www.lennysnewsletter.com/p/inside-palantir-nabeel-qureshi ；小宇宙同步页 https://www.xiaoyuzhoufm.com/episode/682089acc658115399607b86 (访问日期 2026-11-04) [B]

### 6.4 面向中文读者的三条落地建议（由已引证据推出，不新增事实）

- 先证明"有人在用"再谈"模型多强"（依据 4.7、4.10）。来源: 本书内交叉引用 [B]
- 把驻场成果写成下一个人能接手的产物：查看器、评测集、口径词典（依据 4.5、1.1）。来源: 同上 [B]
- 接单前先确认你收得起那个价（依据 4.2 Barry Zhang 三条件 + 1.5 Gartner 的 ROI 压力原文）。来源: 同上 [B]

---

## 七、岗位未来：真需求还是 2024–2026 的炒作

### 7.1 看涨证据

- 招聘量（Lightcast，经 CNBC 引用）：美国 FDE 职位发布 2023 年不足 200 条 → 2025 年约 1,200 条 → 2026 年前 9 个月超过 7,300 条；招聘中位薪资 195,456 美元，较 2023 年 +40%，约为全美中位 3 倍；发布最多的雇主 Deloitte 872、Accenture 688、Google 499、KPMG 447。来源: CNBC（引 Lightcast）(访问日期 2026-11-04) [A]
- 另一口径：Indeed（经 Business Insider）643（2025-04）→ 5,330（2026-04），+729%。来源: Business Insider [B] ；Dice/Lightcast：FDE 中位 18.8 万 vs 软件工程师 14.5 万，2026 年 1–8 月同比 +1,000%、较 2023 年 +4,600%，同期整体技术岗仅 +13% [C]。来源: Dice 报告转述 (访问日期 2026-11-04) [B]/[C]
- LinkedIn 2026-01 人力报告：FDE 岗位自 2023 年增长 42 倍（AI Engineer 13 倍）；WSJ 称其为"科技行业最热门的工作"。来源: LinkedIn Economic Graph / WSJ 转述 (访问日期 2026-11-04) [C]
- 资本承诺：Microsoft 25 亿 / AWS 10 亿 / OpenAI DeployCo 初始 >40 亿 / Anthropic 1 亿 Frontier Academy（见 2.8）。来源: 各家官方公告 (访问日期 2026-11-04) [A]
- YC 侧：>100 家 YC 公司在招 FDE，三年前基本为零（Jared Friedman 口述）。来源: YC Lightcone — https://www.youtube.com/watch?v=Zyw-YA0k3xo (访问日期 2026-11-05) [A]
- 中国薪酬侧：FDE/驻场 AI 工程师月薪约 3 万–8 万元，个别日薪 1 万元，小团队项目报价 5.8 万元起；国内大厂岗位归类很混乱（腾讯挂在"产品"、字节实习生挂在"销售-销售支持"）。来源: 时代周报 / 新浪财经 转述 (访问日期 2026-11-04) [C]

### 7.2 看跌证据（同样必须署名）

- Gartner 定性（原文照录）："FDE 交付模式天然伴随高成本、回报不确定以及 ROI 周期长等问题；在企业机构对 IT 预算支出要求强 ROI 的情况下，这种模式难以持续。" 来源: https://blog.csdn.net/article/details/165492259 (访问日期 2026-11-04) [C]
- Flybridge 定性：95%+ 的公司把这个岗位做错了（见 4.9）。来源: https://cloud.tencent.com/developer/article/2696614 (访问日期 2026-11-04) [B]
- Barry Zhang：绝大多数公司不该做 FDE，模仿的结果是"just sparkling Sales Engineering"（见 4.2）。来源: https://www.barry.ooo/posts/fde-culture (访问日期 2026-11-04) [B]
- Ganesh：没有反哺通道的 FDE 是"a services/consulting team with a better title"（见 3）。来源: https://www.latent.space/p/forward-deployed-engineer-best-practices (访问日期 2026-11-04) [B]
- 存量另一面（Valletta 的怀疑式核查）：Palantir 在招 FDE 77 个、中位发布时长 452 天，其中含 2009 年 12 月创建的老需求；Databricks 94 个 / 91 天；OpenAI 21 个；Anthropic 3 个（中位 26 天，6 个里 4 个近期新开）——部分"海量需求"来自长期挂着不关的招聘位。来源: Valletta Software 分析 (访问日期 2026-11-04) [B]
- 卖方谨慎：Morgan Stanley 提示"部署总成本"与大客户价格敏感度（5.1）。来源: 媒体报道 (访问日期 2026-11-05) [B]
- McGrew 自己给出的滑坡风险：FDE 团队会滑向低利润咨询公司。来源: https://baijiahao.baidu.com?id=1842749166085172792 (访问日期 2026-11-05) [C]

### 7.3 被智能体自动化之后还剩什么（正反原话）

- 多头：Brunet——"if we are doing the same job we were doing six months ago, we have done something wrong."（岗位内容被 agent 推着换）；Meurer——通才更值钱；ha7ch——coding agent 把交付成本从百万级降到十万级，是 FDE 成立的前提而非威胁。来源: https://www.latent.space/p/cursor-forward-deployed-engineers / https://www.latent.space/p/forward-deployed-engineers-aiewf / https://ha7ch.com/writing/thirteen-questions-on-fde (访问日期 2026-11-04) [A]/[B]
- 中性/空头：Gartner 预测到 2027 年底 >40% 的 agentic AI 项目被取消；Palantir 自己推出 AI FDE（2026-03 GA），官方叙事是压缩 enablement 时间——即 onboarding 里最像流水线的一段会被自动化，剩下的是选题与客户信任。来源: Gartner（2025-06-25）[A] / 51CTO 转述 https://www.51cto.com [C]
- Palantir 对"为什么还需要人"的回答（原文照录）："teams of engineers get as close as possible to the problem… relentlessly synthesize feedback and ship new features." 来源: Palantir Architecture Center (访问日期 2026-11-04) [A]

---

## 八、术语表（前线黑话，26 条候选，每条一句准确定义）

- Forward Deployed Engineer（FDE）：嵌入客户现场、把产品能力拼成客户生产系统并为端到端结果负责的人，不做一次性建议。来源: Palantir / Pragmatic Engineer [A]
- Delta / Echo：Palantir 对前线工程师（Delta）与领域/用例专家（Echo）的称呼，沿用美军/北约缩写文化。来源: Latent Space / Pragmatic Engineer [B]
- Dev vs Delta 口诀："one capability, many customers" 对 "one customer, many capabilities"。来源: Palantir 文案 [A]
- Project Frontline：让核心工程/产品人员轮岗到前线的机制。来源: Latent Space [B]
- AIP Bootcamp：5 天集中式打样营，用客户真实数据当场做出可用工作流。来源: 厂商口径 [C]
- Design partner：产品期就深度试用、承担风险的首批客户；对应 YC "do things that don't scale"。来源: YC [A]
- Ontology（本体）：把客户业务对象、属性、关系、动作建模的一层，让应用说业务语言。来源: Palantir Foundry 文档 [A]
- Foundry / Gotham / Apollo / AIP / Workshop / Contour：Palantir 产品家族——数据平台 / 政府情报与作战 / 持续交付 / 生成式 AI 层 / 低代码应用 / 分析工具。来源: Palantir 文档 [A]
- POC（试点）：验证可行性的小范围实验，通常不进生产 SLA。[通用]
- UAT（用户验收测试）：客户业务方按验收标准执行、决定是否签字的环节。[通用]
- SOW（工作说明书）：约定范围、交付物、里程碑与变更机制的合同附件，是需求蔓延的第一道闸。[通用]
- SLA：服务等级协议，量化可用性、延迟、响应时长与违约后果。[通用]
- Change order（变更单）：范围变更的书面定价与审批，防"顺手加个小功能"。[通用]
- 验收 / 回款：中文交付项目里决定现金流的两个正式节点；验收单晚一天，账期就长一天。[通用]
- 驻场：把工程师派到客户场地工作，对应 embedded / onsite。[通用]
- 私有化部署：软件跑在客户控制的机房或专有云内，数据与依赖不出边界。来源: IBM 等定义 [A]
- 信创：中国"信息技术应用创新"替代体系（信创工委会 2016-03-24 成立，常表述为"2+8+N"推进节奏），落地意味着特定 CPU/OS/DB 与安全审查。来源: MBA智库 [C]
- 数据驻留（data residency）：法规或合同要求数据必须存放在特定司法辖区内。来源: IBM/Avepoint [A]
- 气隙（air gap）：网络与外部物理隔离、无任何共享连接或传输路径。来源: NIST / NCSC 定义 [A]
- SOC 2：AICPA 针对服务组织安全性、可用性、处理完整性、保密性与隐私的审计框架。来源: AICPA [A]
- RAG / Evals / LLM Guardrails：检索增强生成（外部证据入上下文、可追溯）/ 用固定数据集与指标做上线与回归门禁 / 输入输出两侧的防护（越权、注入、敏感信息、格式）。来源: Anthropic Engineering《Building effective agents》、Thoughtworks Technology Radar [A]
- P99 延迟 / token 成本：99% 请求的耗时上限（现场评审时"平均值"掩盖的正是它）/ 模型按输入输出计费的可变成本，决定 demo 能否承受规模化。[通用]
- TTFV（Time to First Value）：从注册/上线到第一次获得可感知价值的时间。来源: Contentsquare 等 [A]
- NDR / NRR、NPS：净留存收入（含扩张与流失，FDE 模式经济性的核心）/ 净推荐值（主观满意度，不能替代采用率）。[通用]
- BLUF / FYSA：先说结论 / 仅供你了解背景——前线汇报与文档的缩写纪律。来源: Flybridge 中文整理 [C]
- "规模化地做不可规模化的事"：McGrew 段落对 FDE 悖论的中文概括（措辞出自中文整理）。来源: YC Lightcone 中文 [C]

（上面为 26 条候选，正文建议选 18–22 条；标 [C] 或无 URL 的条目引用时须写"据公开资料/口径不一"。）

---

## 红线：不能写的说法

- ❌「MIT 报告说 95% 的生成式 AI 试点失败」。原始报告是 MIT NANDA《The GenAI Divide: State of AI in Business 2025》（2025-07 工作论文，标注 "preliminary findings"、观点不代表机构、曾从服务器撤下、未同行评审）。Fortune 标题确为 "MIT report: 95% of generative AI pilots at companies are failing"（2025-08-18），但报告的实际陈述是：约 95% 的组织未从约 300–400 亿美元的 AI 投入中获得可衡量的损益影响；漏斗是"60% 评估过 → 20% 做过试点 → 5% 进入生产"，即四分之三的试点没达标，而不是"95% 失败"。方法学：300+ 公开项目、52 家机构访谈、约 153 名高管；成功定义含"走出试点 + 可测量指标 + 6 个月内回本"。批评：计算过程不透明、样本偏小（有沃顿学者公开质疑）、NANDA 自身在做 agent-Internet 研究存在利益相关。
  来源: Fortune — https://fortune.com/2025-08-18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/ [A] ；中文核查稿 https://www.chinaz.com/21072/ 、https://www.oschina.com/news/370392 、https://www.agentmodeai.com/the-mit-genai-pilot-failure-claim/ (访问日期 2026-11-04) [B]
- ❌「Gartner 说 30% 的 AI 项目失败」。Gartner 原口径是"到 2025 年底至少 30% 的生成式 AI 项目在 POC 后被放弃"，是对未来的预测值，不是失败率统计；">40% 的 agentic AI 项目到 2027 年底被取消"同样是预测。
- ❌「RAND 说 80% 的 AI 项目失败」。RAND 的表述是"超过 80% 的 AI 项目未能产生预期价值"，基于 65 次访谈的研究估计，约为普通 IT 项目失败率的两倍；不得写成"MIT/Gartner/RAND 一致认定"。
- ❌「Palantir 靠 FDE 做到 157% NDR，所以 FDE 一定赚钱」。157%/165% 是 Palantir 2026 年的公司数字，不是 FDE 品类的普遍数字；Barry Zhang 指出试点期利润率可以 "literally negative infinity"。不要用一家公司的数据为一个岗位模式背书。
- ❌ 以下数字目前只有单一中文聚合源或厂商口径，引用必须写成"据……报道/厂商称"：Palantir × 美国海军 4.48 亿美元合同 / 船厂排产 160 小时→10 分钟；OpenAI × John Deere 除草剂 −70%；Harvey ARR 约 1.9 亿美元；Merck 药物发现周期 −40%；BP 上游停机事件 −14%；Panasonic / HCA 相关数字；AI FDE 的 14 天、45 天→4 天、2 周→2 天。
  来源: https://www.datayuan.cn/article/24067.htm （该文自身即标注 Merck/BP/Panasonic/HCA 为单源） ；https://fde.academy ；https://www.51cto.com (访问日期 2026-11-04) [C]
- ❌「FDE 平均年薪 48.5 万 / 72.5 万美元」。未找到一手来源；可引的只有 Lightcast 中位招聘标价 195,456 美元与 Dice 中位 18.8 万美元，且口径是"招聘广告薪资"，不是成交薪资。
- ❌「Palantir 规定 FDE 25% 时间在现场」。25% 是 Pragmatic Engineer 转述的历史口径，不是官方政策，团队差异极大。
- ❌「超过 100 家 YC 公司在招 FDE」必须注明是 Jared Friedman 在 2025-09 播客里的口头估计，不是 YC 官方统计。
- ❌「AI FDE 已取代人类 FDE / 让交付成本趋零」。官方叙事是压缩 enablement 时间，架构文档仍把 FDE 描述为"人的反向传播"。
- ❌ 不要简单把 FDE 等同于外包/实施，也不要宣称二者毫无关系。正确写法：Palantir 自己强调"与客户长期共事、不做一次性建议"（原文见 4.9），而批评者认为这一轮 FDE 是"换了名字的咨询"（Pragmatic Engineer 收录的对立观点）。
- ❌ 不得伪造案例：任何"某银行 3 周上线反洗钱""某车企 POC 三个月归零"式写法，若无公司名与出处，一律不得进入正文。

---

## 可直接用于文案的硬数字清单

- "human equivalent of backpropagation"——Palantir 官方对 FDE 方法论的自述。[A] https://www.palantir.com/docs/foundry/architecture-center/
- "one customer, many capabilities" / "one capability, many customers"——前线与产品的分工。[A] https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers
- Palantir 2026 Q3：营收 23.13 亿美元 +96%；美国商业 9.84 亿美元 +148%，首次超过美国政府（9.53 亿）；NRR 165%；客户 1,090（+20%）；64 笔 ≥1,000 万美元合同；前 20 大客户 LTM 平均 1.46 亿美元。[A] Palantir 财报
- Palantir 2026 Q2：NDR 157%（+700bps）、调整后营业利润率 62%、Rule of 40 = 155、调整后 FCF 12.2 亿美元（+115%）；2025 全年 NRR 134%。[A]
- Walgreens 证言："4000 stores within eight months"；"In three months, built what took us three years before."[A] https://www.palantir.com/
- Airbus：A350 产能约 ×4；驻场者每周 4 天进厂、约一年；Skywise 后续接入约 12,000 架飞机。[B] https://nabeelqu.substack.com/p/reflections-on-palantir
- BBVA：10 万+ 席位、周活 >70%、人均每周省约 3 小时、25 国 12 万员工、5 个月 2,900 个 custom GPT、250 名高管受训、秘鲁查询 7.5 分钟→约 1 分钟。[A] https://openai.com/index/bbva/
- Sierra/Meurer：跨行业大型组织 "40 to 60 days" 到生产。[B] https://www.latent.space/p/forward-deployed-engineers-aiewf
- Ganesh 的工程细节：批处理管道 17 小时 → 2 小时。[B] https://www.latent.space/p/forward-deployed-engineer-best-practices
- 失败面（保守可引的说法）：Gartner "≥30% 生成式 AI 项目在 POC 后被放弃（2025 年底前的预测）"；">40% agentic AI 项目到 2027 年底被取消（预测）"；782 位 I&O 负责人调查中 38% 数据质量 / 38% 技能 / 28% 达标 ROI / 20% 彻底失败；S&P Global 42%（2025）对 17%（2024）；RAND >80%（约普通 IT 两倍，65 次访谈，5 条根因）。[A]/[C]
- 成本锚点（Gartner）：编码助手前期 10–20 万美元 + 每人每年 280–550 美元；定制法律/医疗 LLM 前期 800–2,000 万美元。[A]
- 招聘热度：美国 FDE 发布量 <200（2023）→ 约 1,200（2025）→ >7,300（2026 前 9 个月）；中位招聘薪资 195,456 美元、+40% vs 2023、约全美中位 3 倍；雇主榜 Deloitte 872 / Accenture 688 / Google 499 / KPMG 447。[A]（CNBC 引 Lightcast）
- 另一口径：Indeed 643（2025-04）→ 5,330（2026-04），+729%；Dice：FDE 中位 18.8 万 vs 软件工程师 14.5 万，同比 +1,000%（2026 年 1–8 月）、较 2023 年 +4,600%，同期整体技术岗 +13%。[B]/[C]
- 反面对照（Valletta）：Palantir 在招 FDE 77 个、中位发布时长 452 天（含 2009-12 创建的老需求）；Databricks 94 个 / 91 天；OpenAI 21 个；Anthropic 3 个（中位 26 天）。[B]
- 建制化投入：Microsoft Frontier Company 25 亿美元 / 6,000 工程师；AWS 10 亿美元；OpenAI DeployCo 初始 >40 亿美元（TPG 牵头 + Bain/Capgemini/McKinsey，收 Tomoro 约 150 名 FDE）；Anthropic Frontier Academy 1 亿美元 / 2027 年底前 1 万名；Accenture × Google Cloud 1,000 人；Google 公告后首周 8 国 59 条 FDE 招聘。[A]/[B]
- Bootcamp 漏斗：AIP Bootcamp 92 场（2022 年底）→ 500+（2023 年底）→ 1,300+（截至 2024-06，560+ 机构），付费转化约 70–75%（早期 5–10%）。[C]
- Palantir AI FDE（2026-03 GA，厂商口径）：enablement 平均 14 天（称缩短 >5 倍）、ERP 接入到应用 45 天→4 天、异构数据 2 周→2 天。[C]
- 中国侧：FDE/驻场 AI 工程师月薪 3 万–8 万元；个别日薪 1 万元；小团队报价 5.8 万元起。[C]

---

## 幽默素材观察（真实场景，温和自嘲向，均可回溯）

- 松紧带绑手机：Palantir 军方项目里为随时被呼叫，把手机绑在身上、日均 19 小时——"前线的 SLA 是用松紧带实现的"。来源: 《前线部署工程师》第 8 章要点 https://www.toutiao.com/article/7688346287086928425/ [C]
- 内网装依赖：私有化机房没外网，`pip install` / `npx` 全灭，FDE 的第一份交付物是一个 15GB 离线 Docker 镜像——"我们的模型效果很好，前提是镜像能拷进机房"。来源: 券商案例 https://www.toutiao.com/article/7682292329704587833/ [C]
- 双击 CSV 的验收：迁移卡住，直到有人做了个"双击就能看"的查看器，两天后获批——"全世界最难的评测集，是用户已有的那个动作"。来源: https://www.latent.space/p/forward-deployed-engineer-best-practices [B]
- 空时间戳 → 1970：空值被当成 epoch，全量历史塌到宇宙诞生之前，然后把集群内存吃满。来源: 同上 [B]
- `vinoo.groovy`：一个临时脚本为 10 万用户跑了一年，没人产品化也没人敢删——"每个被夸的临时方案，最后都会变成公司的固定资产"。来源: 同上 [B]
- 需求变更与变更单：客户说"就加一个小字段"，SOW 里没有 change order，于是"小字段"变成第三个里程碑。[通用]
- 客户临时演示：领导要来，要求把还没接完的数据源"看起来接完了"；经典一夜是用 mock 数据搭一个可以诚实演示的界面，并在会上明说"这块是模拟的"。[通用/B]
- 周报的固定三段：本周上线了什么、客户真的用了几次、下周准备再错一次（呼应 "be wrong four times in a month"）。来源: latent.space [B]
- 会议室政治：验收会上签字的人，从来不是每天用系统的人；于是"日活 12"和"高度认可"可以同时为真。来源: MIT 报告的口径错位 https://fortune.com/2025-08-18/... [A]
- 一人全栈交付的围观效果：Echo 在讲业务、Delta 在现场改代码，客户 IT 在旁边问"你们两个人是一个部门吗"。来源: YC Lightcone + latent.space [B]
- "那个懂电脑的"：驻场久了会被叫去修打印机、重装系统；判据即 Scianna 那句"你的 FDE 过去两周打开过 IDE 写代码吗？"来源: https://cloud.tencent.com/developer/article/2696614 [B]
- 第一周不写代码：按 Ganesh 的方法先学"名词和动词"，被甲方程序员围观——"他们是不是不会做？"来源: https://www.latent.space/p/forward-deployed-engineer-best-practices [B]
- BLUF/FYSA：前线文档里缩写比代码多；读者要么先看到结论，要么先被告知"仅供你了解背景"。来源: cloud.tencent 2696614 [C]
- "法式餐厅服务员"轶事：FDE 一词最早的形象化说法（在客户餐厅里既点菜又下厨），出自 Stratechery 相关访谈的二手转述，本轮未能取到 transcript——只能写"据访谈转述"，不能当定义用。来源: https://www.stratechery.com/ (访问日期 2026-11-04) [C]
- 同一篇文章里的两句真话：客户侧"40–60 天到生产"，成本侧"试点期利润率 literally negative infinity"——把它们并排放，本身就是最好的段子。来源: latent.space / barry.ooo [A]/[B]
