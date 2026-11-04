---
title: '这岗位不是新发明的：FDE 从军用办公室走到你的机房'
description: 'FDE 的血统：Palantir 在战场办公室里怎么想出这套做法、空客驻场的一年、2026 年四大厂砸的钱，以及每一步的证据强度。'
---

# 这岗位不是新发明的

先给结论：**FDE 不是 2026 年 AI 浪潮编出来的新词，它是一套已经跑了二十年的交付方法，被 AI 重新点了一次火。**

理解这一点对你有用，因为它回答了一个转行的人最常纠结的问题：「这岗位会不会明年就没了？」——如果它是名词通胀，会没；如果它是方法，就不会，只会换衣服。所以这一页我们把它的身世翻出来看一眼。

<div class="mp-stats">
  <div class="mp-stat"><strong>2004</strong><span>Palantir 创立，这套方法随之成形</span></div>
  <div class="mp-stat"><strong>4 倍</strong><span>据驻场者自述，空客 A350 产线带来的产能变化</span></div>
  <div class="mp-stat"><strong>7,300+</strong><span>美国 2026 年前九个月的 FDE 岗位发布数</span></div>
  <div class="mp-stat"><strong>70+ 亿</strong><span>微软、AWS、OpenAI 三家在 2026 年公开承诺的专项投入（美元）</span></div>
</div>

## 一条时间轴，先把大事看完

<OriginTimeline />

下面把几个关键节点讲开。每个节点后面标了证据强度：`[A]` 官方一手、`[B]` 具名从业者自述或严肃媒体、`[C]` 流传口径。你可以只信 `[A]`，但别把 `[C]` 当事实拿去面试。

## 2000 年代：这个方法是在战场上长出来的

Palantir 最早的客户是军情和执法机构。这类客户有一个要命的特点：**他们说不清自己要什么，但他们一眼能看出你做错了什么。**

《前线部署工程师》中译本里记录了 2007 年前后的一幕：Palantir 第 13 号员工、后来担任 CTO 的 Shyam Sankar 的团队待在联合作战中心里现场做工具，有人把一部电话用松紧带绑在身上，日均工作约十九小时 `[C]`。那个为了应急做出来的简易地图工具，后来变成了平台的标配功能 `[C]`。

::: tip 这一幕为什么重要
它确立了这套方法的核心信念：**需求不是收集来的，是在现场被工具暴露出来的。** 客户不会给你一份写清楚的规格说明书，他只会给你一桩麻烦——Palantir 官方描述里那些问题的原话就是「为什么我们的航班总在延误？」「怎样更有效发现洗钱？」「我们为什么在流失客户？」`[B]` 这类问题没有表结构，只有代价。
:::

同一时期还留下了这个岗位的名字。Palantir 内部把工程师分成两类，官方招聘文案是这么写的：

> "You can think of a Dev's focus as 'one capability, many customers,' while a Delta's focus is 'one customer, many capabilities.'"
> 来源：Pragmatic Engineer 引述 Palantir 招聘文案 `[A]`，访问日期 2026-11-04

一句话记住这个岗位的全部：**普通研发是「一个能力服务很多客户」，FDE 是「一个客户服务很多能力」。**

## 2009：名字已经挂进招聘系统了

有招聘数据核查者找到一个创建于 2009 年 12 月的 Palantir Forward Deployed Engineer 需求，并且它长期挂着没关 `[B]`。这个数字的意义不在于「资历老」，而在于：这套做法在移动互联网时代就已经是一套成熟编制了，不是 AI 时代临时拼出来的。

顺便说一个反方向的证据，免得这页写成厂商宣传。有人核查过 Palantir 自己的老招聘页，发现有一条 FDE 岗位挂了 452 天没关掉 `[B]`。长期挂着可以解读成「需求稳定」，也可以解读成「难招」。两种解读都成立，你自己判断。

## 2015–2017：从战场走进工厂

这是目前公开材料里最扎实的一个案例，因为它有一手的驻场者自述。

Nabeel Qureshi（Palantir 员工，后来自己创业）被派到图卢斯的空客工厂，**每周四天进厂，持续大约一年** `[B]`。他自述的结果是：A350 产能提升约四倍；一个和燃油泵缺陷相关的问题在约两周内被定位并解决；Skywise 平台在 2015–2017 年建在 Foundry 上，后来接入了约 12,000 架飞机的数据 `[B]`。

- 来源：Nabeel Qureshi, "Reflections on Palantir" — https://nabeelqu.substack.com/p/reflections-on-palantir （访问 2026-11-04）`[B]`
- 来源：Palantir Impact — Airbus — https://www.palantir.com/impact/airbus/ （访问 2026-11-04）`[A]`

::: warning 「每周四天进厂、持续一年」是这一页最该记住的数字
不是「开了三次需求会」，不是「交付了一份方案 PPT」。**一年、每周四天、在物理车间里。** 这才是"forward deployed"字面意思的成本。后面讲出差比例、讲驻场周期的所有数字，都是从这句话长出来的。
:::

同期还有一个客户证言值得原样抄下来。Walgreens 用 Foundry + AIP 做门店试点，客户方在 Palantir 官网上的说法是：

> "We started with the goal of piloting 10 stores within about six months… 4000 stores within eight months."
> 另一条："In three months, [the teams] built what took us three years before."
> 来源：Palantir 官网首页客户证言 `[A]`，访问 2026-11-04

请注意这是**厂商挑选出来放在首页的客户话**。它可以证明「这种事发生过」，不能证明「这种事普遍发生」。

## 2022–2025：AI 项目大规模卡在「上不了线」

转折点是这个：大模型的能力起来了，企业买了、试了，然后**大量项目停在演示阶段**。

- Gartner 在 2024 年 7 月的新闻稿里预测：到 2025 年底，至少 30% 的生成式 AI 项目会在 POC 之后被放弃，理由是数据质量差、风险控制不足、成本攀升、业务价值不清晰 `[A]`。
- 同一机构 2025 年 6 月又预测：到 2027 年底，超过 40% 的 agentic AI 项目会被取消 `[A]`。
- RAND 2024 年的报告说超过 80% 的 AI 项目失败，约为普通 IT 项目失败率的两倍，基于 65 次访谈给出五条根因 `[A]`。

然后是所有数字里被误读得最狠的一个，你必须知道原版：MIT NANDA 的 2025 年工作论文被媒体写成「95% 的企业生成式 AI 试点都失败了」。原文口径其实是——**约 95% 的组织没有从 300–400 亿美元的投入中获得可衡量的损益影响**；报告的真实漏斗是约 60% 进入评估、其中约 20% 进入试点、约 5% 进入生产 `[A]`。这篇报告是未评审的工作论文，主笔 Aditya Challapally 本人也指出核心现象是「高管声称成功、员工说几乎根本没在用」`[A]`。

::: tip 面试时怎么说这句话
别说「MIT 说 95% 的 AI 项目失败」，这句话一说出口，懂行的面试官就知道你没读原文。要说：**「大多数企业投入没转化成可衡量的损益，试点到生产的漏斗很窄」**，这是能被原文支撑的版本。
:::

**这里就是 FDE 被重新点火的地点。** 如果漏斗的瓶颈是「模型不够强」，那该投的是实验室；如果瓶颈是「没人把系统接进生产、没人做评测、没人管权限」，那该投的就是人——投到客户现场去的人。

## 2026：钱和编制一起上桌

这一年出现的不是「又一个热门岗位」，是四家机构各自建了一支军队：

| 谁 | 承诺 | 规模 | 证据 |
|---|---|---|---|
| Microsoft | Frontier Company | 25 亿美元、6,000 名工程师与行业专家 | `[A]` 官方公告 |
| AWS | Forward Deployed Engineering | 10 亿美元专项 | `[A]` 官方公告 |
| OpenAI | The Deployment Company（DeployCo，2026-05-11） | 由 TPG 牵头、Advent / Bain Capital / Brookfield 等参与，初始资金承诺超 40 亿美元；收购爱丁堡的 Tomoro，开局约 150 名 FDE | `[A]` 公告 / `[B]` The New Stack |
| Anthropic | Claude Frontier Academy（2026-10-02） | 投入 1 亿美元，目标 2027 年底前培养 10,000 名 Frontier Deployed Engineer | `[A]` 官方 |

Anthropic 那个学院的设计思路值得单独看一眼，因为它把「这个岗位有多难上手」写得很直白：**"We modeled the residency on how medicine trains doctors."** 住院医师制——先跟着上临床，再独立管病人。首批合作机构是 Accenture、Bain、Capgemini、CBA、Deloitte、McKinsey、Morgan Stanley、Novo Nordisk `[A]`。

顺带一句：**这是企业提名制，个人不能直接报名。** 想靠「报个班转行 FDE」的路线，从这里就走不通了。

咨询业也在改名。BCG 在 2026 年 4 月把 BCG X 工程与设计组织的员工统一更名为 FDE `[C]`；德勤计划在 2027 财年前招聘、培训并认证 FDE `[B]`。这一条是好消息也是坏消息：岗位量起来了，同时「FDE」这个词也被抢走了。

## 2026-09：第一次可以拿数据说话

美国劳动力数据机构 Lightcast 的口径（经 CNBC 报道）：FDE 岗位发布从 2023 年不足 200 条，涨到 2026 年前九个月超过 7,300 条；中位招聘标价约 195,456 美元 `[A]`。

另一组常被转载的数字：Indeed 口径下 FDE 岗位从 2025 年 4 月的 643 个增至 2026 年 4 月的 5,330 个，同比约 +729% `[B]`。

::: warning 「中位招聘标价」不等于「中位工资」
招聘页上写的区间是 **base（基本薪资）**，不含股票和奖金，也不是实际成交薪资；不同公司口径还互相打架——同一家云厂的两份 JD，一份写 30–50% 出差、另一份写 up to 25%。看数字可以，别拿数字当承诺。薪酬那一页有完整的区间表。
:::

## 那么，它是潮流还是方法？

正反两方都说得出名姓，我把两边都摆在这儿：

**说它是方法的**
- Palantir 官方对整套方法论的定义，原文照录："the human equivalent of backpropagation, in which teams of engineers get as close as possible to the problem while working in concert with core engineering teams to relentlessly synthesize feedback and ship new features." `[A]`
- Bob McGrew（前 OpenAI 研究副总裁，YC Lightcone 2025-09-08）：FDE 培训「就是创业公司创始人的实战训练营」`[C]` 中文整理。
- Vinoo Ganesh（前 Palantir，主导过轮岗 250+ 人的 Project Frontline）：判据是每次交付要产出下一次交付能接着用的东西 `[B]`。

**说它是泡沫的**
- Barry Zhang（前 Palantir）：这行要交 "exorbitant taxes that almost no one is actually willing to pay"；盲目模仿只会得到 "thin imitation – just sparkling Sales Engineering" `[B]`。
- Gartner 中文表述："FDE 交付模式天然伴随高成本、回报不确定以及 ROI 周期长等问题；在企业机构对 IT 预算支出要求强 ROI 的情况下，这种模式难以持续。" `[C]`
- 从业者自述（腾讯新闻转述）：有人称它是自己从业以来「接触过最糟糕的岗位」——「驻场是常态、漂泊是代价，前期，销售、交付、售后全是你一个人」`[C]`。

本站的取向：**把「让系统在生产环境里真的跑起来并产生可衡量结果」这件事当方法看，把「FDE 这个 title」当衣服看。** 衣服会换，方法不会。所以后面所有页面讲的都是可迁移的做法，而不是一套考证清单。

<div class="mp-band">
  <div class="mp-band-card">
    <p class="mp-eyebrow">读史的正确姿势</p>
    <h2 class="mp-h2">不要背年表，要背那句分工口诀</h2>
    <p class="mp-lead">如果这页你只带走一件事，带走这个：<b>one customer, many capabilities.</b> 面试时你能用它把 FDE、售前、解决方案架构师、实施工程师一次性区分清楚，比记十个年份值钱得多。想直接把这四个岗位摆平了看，去下一页。</p>
  </div>
</div>

## 接着读

- [FDE 到底是什么：四种 title、四句官方措辞](/what/is-it)
- [不像 FDE 的岗位：售前、SA、实施、CSM 的区别](/what/not-fde)
- [真实的一天：JD 写的和实际过的](/what/a-day)
- [全部来源与证据分级](/evidence/sources)
