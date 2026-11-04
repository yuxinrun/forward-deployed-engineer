---
title: '从 Demo 到生产：评测、P99 与成本账本'
description: 'POC 死于数据和范围，生产死于延迟、成本和缺评测，验收死于责任和回款。这一页讲 FDE 交付物里最容易被少掉的那三件：评测集、观测看板、成本账本。'
---

# 从 Demo 到生产

中文驻场复盘里最一致的一条分层结论是这样的：**POC 死于数据质量与范围蔓延；生产死于延迟、成本、缺评测；验收死于责任界定与回款条款** `[C]`。三句话就把这个岗位的死亡分布讲完了。

而 Demo 是这条链上最骗人的一环。Bob McGrew（前 OpenAI 研究副总裁）的说法很直白："FDE 不是给你做演示，也不是陪你讲需求。他是直接进现场，和客户一起把问题解决掉。" `[A]`

<div class="mp-stats">
  <div class="mp-stat"><strong>7/16</strong><span>评测（eval frameworks）被显式写进任职要求的情形数——本站 16 份可读正文 JD <code>[A]/[B]</code></span></div>
  <div class="mp-stat"><strong>40–60 天</strong><span>Sierra 从业者给出的「大型组织把系统推到生产」的节奏口径 <code>[B]</code></span></div>
  <div class="mp-stat"><strong>17h → 2h</strong><span>一位前 Palantir 前线工程师把一条批处理管道压到的时长（单案，非统计）<code>[B]</code></span></div>
  <div class="mp-stat"><strong>&gt;70%</strong><span>OpenAI × BBVA 案例里公布的周活率，10 万+ 席位基础上 <code>[A]</code></span></div>
</div>

::: warning 这四个数字怎么读
<b>40–60 天</b>是从业者口述的节奏，不是你项目的排期承诺；<b>17h → 2h</b> 是一个人一个案子的结果；<b>&gt;70%</b> 是厂商自己发布的页面数字，样本只有一家银行。本页不给你保证，只给你「该带哪三张纸进会议室」。
:::

<MetricBoard />

## 评测是交付物，不是加分项

这一项在 2026 年的 JD 里已经从「加分」升到了「资格条」。三家写得最标准的：

- AWS 把它单列一条："Experience with AI tools: eval frameworks, agent tooling, RAG pipelines, and prompt engineering" `[A]`
- Anthropic："Production experience with LLMs, including advanced prompt engineering, agent development and frameworks, **evaluation frameworks, transcript analysis**, MCP, and deployment at scale" `[A]`
- 腾讯的国内口径："Prompt/RAG 鲁棒性评测" `[B]`

方法论侧也站得住：Anthropic 的《Building effective agents》与 Thoughtworks Technology Radar 都把 evals / LLM Guardrails 列为从原型到生产的必备工程件 `[A]`。

注意 Anthropic 那句里的 **transcript analysis**——它比「跑分」更贴近现场真实工作：把几十条真实对话记录摊开逐条读。评测集的最小可用形态不是准确率数字，而是**失败样本 + 谁来看 + 看完怎么办**。

面试也按这个方向问。OpenAI 的 FDE 面试回忆里出现了两句："why this chunking strategy" 和 "how do you know your AI system is actually working well?" `[C]` 第二句没法用「我们用了 GPT-4」回答。

## 没人敢签字：评测的政治学

一个被反复讲述的真实案例（前 Palantir 从业者复盘）：一次 Parquet 数据迁移在审批环节卡了很久。客户原来的核对方式是工程师把数据导成 CSV、用 Excel 双击打开肉眼比对；迁移完这套动作没了，于是**没人敢签字**。前线最后做了一个「双击就能看内容」的只读查看器，把工程师原有的验证习惯还原出来——**两天后获批** `[B]`。

这个案例的教训比它听起来更普遍：<b>评测在现场有两层，技术层是数据集和指标，信任层是让签字的人能用他自己熟悉的方式复核一遍</b>。只做第一层的交付物，会卡在会议室里而不是卡在技术上。

::: tip 一句能当场用出来的话
评审会上别说「准确率 92%」。说：「这里有 50 条它答错的样本，我按你们的口径分了四类，其中两类是数据本身互相矛盾，需要业务方定一下谁说了算。」
第二句把球递回给该负责的人——签字才有可能发生。
:::

## 责任与债务：你 ship 的每个捷径都是你欠下的

JD 里那句 "own outcomes end-to-end"（AWS 原文，"from prototype through enterprise-scale deployment" `[A]`）不是形容词。它意味着线上出事时，你是第一响应人。面试材料的粗话版本更形象："the single throat to choke"——客户只找一个人 `[C]`。

<div class="mp-quote">
  <p>"Every shortcut you ship becomes something you own."</p>
  <footer>—— Vinoo Ganesh，前 Palantir FDSE、Project Frontline 创建者 <code>[B]</code></footer>
</div>

另一句是它的反例：某个内部脚本（复盘里被写作 `vinoo.groovy`）为 10 万用户跑了一整年，却始终没被产品化——**临时件一旦被当作理所当然，就没人付钱修它** `[B]`。所以现场写的脏代码必须有一个明确的「谁来接手」，写进交接文档，而不是写进口头承诺。

顺带一条时间观：这一行优秀团队的节奏口号是 "be wrong four times in a month" `[B]`。它的前提是每次错都留下评测集，否则你只是重复犯错四次。

## 可观测性：平均值会在现场被你打脸

工程侧真正该盯的三个指标是 **P99 / 尾部延迟、单次 token 成本、上下文预算**，而不是平均延迟 `[A]`。平均数在 demo 里最好看，现场打脸你的一直是尾部：峰值那天、批量任务挤在一起的那一小时。

三件事必须有看板：延迟分布、失败与拒答、花了多少钱。内网/气隙环境里第三件尤其重要，因为你没法用厂商控制台——**把日志和成本做成能合规带出的形态，是设计约束，不是收尾工作**（这一条在[基础设施这一层](/stack/infra)已经埋过）。

有两个可以拿来当参照的真实数字：批处理管道 17 小时压到 2 小时 `[B]`；OpenAI × BBVA 的秘鲁客服场景，单次查询处理从 7.5 分钟降到约 1 分钟 `[A]`。第二个是厂商口径，但它至少给出了「该用什么单位汇报」——**用户等的那段时间**，而不是 QPS。

## 成本账本：这一行的利润率可以是负无穷

先把 Gartner 的价格锚点摆出来（2024-07 新闻稿）：一个编码助手类项目前期 10–20 万美元，另加每人每年 280–550 美元；定制的法律/医疗领域模型前期 800–2,000 万美元 `[A]`。

再看从业者一侧最诚实的三句原文（Barry Zhang，写过前线交付文化的工程师）`[B]`：

<div class="mp-quote">
  <p>这一行要交 "exorbitant taxes that almost no one is actually willing to pay"；</p>
  <p>试点期的利润率可以 "literally negative infinity"；</p>
  <p>盲目模仿的结果是 "thin imitation – just sparkling Sales Engineering"。</p>
  <footer>—— 三句均为原文照录；他说的前提是绝大多数公司<b>不该</b>做 FDE</footer>
</div>

Gartner 对模式本身的批评与此呼应（中文转述原文照录）："FDE 交付模式天然伴随高成本、回报不确定以及 ROI 周期长等问题；在企业机构对 IT 预算支出要求强 ROI 的情况下，这种模式难以持续。" `[C]`

把「40–60 天到生产」和「试点期利润率负无穷」并排放，就是这一行最好的段子：**钱和时间都是真的，只是不在同一张表上**。而 FDE 的活法是把两张表都交出去——单次调用成本、每人每月成本，以及一句「停掉它会损失什么」。

## 采用度：唯一不能跳过的那一栏

如果这一页只让你抄一个格式，抄这个。OpenAI 公布 BBVA 案例时给的是**三个数字**：覆盖人数（10 万+ 员工在用 ChatGPT Enterprise）、活跃率（周活 &gt;70%）、单人省时（人均每周约 3 小时）`[A]`。同期还有 2024 年从 3,000 席位起步、5 个月扩到 25 个国家 12 万员工、5 个月内员工自建 2,900 个 custom GPT 等细节 `[A]`。

配套的口径定义是 TTFV（Time to First Value）＝首次获得价值的时间 − 注册时间，行业里反复强调的一句是 **"Activation ≠ sign-up"**（激活不等于注册）`[A]`。

厂商侧另有更快的一组数字：Palantir 在 2026 年 3 月的产品更新里把 AI FDE 的客户 enablement 平均时间说成 14 天（称缩短超过 5 倍）、连接 ERP 到应用开发 45 天→4 天、异构数据接入 2 周→2 天。**这些是厂商披露，不是独立测量，引用时必须写「Palantir 称」** `[C]`。

反面证据才是这一栏存在的原因：

- MIT NANDA 的工作论文被媒体写成「95% 的生成式 AI 试点失败」，原口径是**约 95% 的组织没有从约 300–400 亿美元的投入里拿到可衡量的损益影响**，漏斗是 60% 评估过 → 20% 做过试点 → 5% 进入生产 `[A]`。同一研究里另一个观察：约 90% 的员工在用个人渠道带来的 AI 工具（shadow AI），而自建工具的实际使用率低；主笔 Aditya Challapally 的说法是高管宣称成功、一线说「几乎根本没在使用」`[A]`。
- 2025 年 7 月，澳大利亚联邦银行以「AI 语音机器人让每周来电减少 2,000 通」为由裁掉 45 个客服岗，随后承认「错误」、道歉并补偿——实际来电量不降反升 `[A]`。

第二件事给了这一栏最硬的判据：<b>在把 AI 效果当成裁员或续约依据之前，先证明真有人在用</b>。汇报时最该避免的两句话，恰好是「上线了多少用例」和「做了多少 demo」——那正是上面那份报告批评的自证方式。

## 公司层面的数字：能看，别当背书

| 口径 | 数字 | 来源与限定 |
| --- | --- | --- |
| Palantir 2026 Q2 | 营收 19.35 亿美元（+93%）、NDR 157%（同比 +700bps）、调整后营业利润率 62%、Rule of 40 = 155 | 财报/电话会 `[A]` |
| Palantir 2026 Q3 | 营收 23.13 亿美元（+96%）、美国商业 9.84 亿美元（+148%，**首次超过美国政府** 9.53 亿）、NRR 165%、客户 1,090 家 | 2026-11-03 财报 `[A]` |
| 空头一侧 | Morgan Stanley 提示续约节奏放缓，500 万美元以上客户对价格与「部署总成本」敏感；财报后股价跌约 7% | 媒体报道（2026-11-03）`[B]` |
| 对照 | 2025 全年 NRR 134% | 10-K / 电话会转述 `[A]`/`[C]` |

这张表在本页只有一个用途：说明「采用度做得好会是什么量级」。它**不能**被写成「FDE 模式很赚钱」——那是用一家公司的数据为一个岗位模式背书，而同一行从业者的原话是试点期利润率可以负无穷。真要用，就同时把上面那条空头一侧的引用放上去。

## 上线前该带的三张纸

<div class="mp-steps">
  <div class="mp-step">
    <b>01</b>
    <div>
      <strong>评测集</strong>
      <p>规模不用大，50–200 条即可，但必须来自<b>客户真实数据</b>，并且带失败样本分类。写清三行：谁建的集、口径由谁定、错了谁兜底。这一张纸同时也是你的护身符——它是「不是我判断失误，是这条口径本身有冲突」的证据。</p>
    </div>
  </div>
  <div class="mp-step">
    <b>02</b>
    <div>
      <strong>观测看板</strong>
      <p>P99 而不是平均、错误与拒答率、token 与上下文用量。加上<b>离线环境下的导出方式</b>：客户不给出口时，日志能不能以合规形式带出来。这一张纸决定出事当晚你能不能自己定位，而不是等客户的运维排给你一张工单。</p>
    </div>
  </div>
  <div class="mp-step">
    <b>03</b>
    <div>
      <strong>采用度与账本</strong>
      <p>三件套（席位 / 周活 / 人均省时）+ 单次成本 + <b>签字人原有的验证动作还原方案</b>。最后这一项最容易被漏，而它恰恰是回款日期的决定变量。写的时候用 TTFV 的表达方式：不是「已上线」，是「第 N 天他第一次从中拿到价值」。</p>
    </div>
  </div>
</div>

## 一句话总结这一层

<div class="mp-band">
  <div class="mp-band-card">
    <p class="mp-eyebrow">质量层的职业价值</p>
    <h2 class="mp-h2">Demo 是销售素材，生产是责任分配</h2>
    <p class="mp-lead">这一层对技术深度的要求其实最低——难的是<b>敢不敢把失败样本摊在桌上，并指名道姓地问「这类冲突你们谁说了算」</b>。能把这句话讲完的人，验收会上不会卡住；只会展示漂亮结果的人，会在回款条款那里补一堂更贵的课。</p>
  </div>
</div>

## 接着读

- [失败模式全清单：坑与证据强度](/field/pitfalls)
- [现场生命周期：数据风险在哪个阶段爆](/field/lifecycle)
- [AI 栈：模型、RAG、Agent 与评测](/stack/ai)
- [硬数字速查表：每个数字的口径与出处](/evidence/numbers)
