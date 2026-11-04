---
title: '软技能：不是外向，是把同一件事翻译成五种语言'
description: '客户面向经验被单列成硬指标的那五年、抗模糊、写作、教别人接手——四件被 JD 明写、却被工程师当成"不是我的活"的事。'
---

# 软技能

先把一个误解钉死：**这个岗位的「沟通能力」不是外向、不是酒量、不是 PPT 好看。**

它在 JD 里的原文形状是这样的：Anthropic 要 "Ability to navigate ambiguity and execute across domains with intellectual openness, **finding simple solutions to complex problems**" `[A]`；Vercel 要 "operate with high agency and autonomy" `[A]`；中软国际写成「像创始人一样对最终结果负责」+「低自我（Low Ego）的协作心态」`[B]`。

这四句说的是同一件事：**在没有授权、信息不全、还有人反对的情况下，把结论收敛。**

## 五种语言，五张卡

<StakeholderMap />

::: warning 「客户面向年限」是单独一条硬指标，不是加分项
16 份可读正文里有 **5 份**把它单独列出并写了年数 `[A]/[B]`：
- Vercel："6+ years of software engineering experience, **including 2+ years in a customer-facing technical role**" `[A]`
- Anthropic："3+ years of experience in a technical, customer facing role"（另一 posting 写 4+ 年）`[A]/[B]`
- 中软国际："3 年以上技术型客户-facing 岗位经验" `[B]`
- OpenAI（中译）："五年以上工程或技术部署经验，**其中要有面向客户的工作经历**" `[B]`

这是转行者最大的结构性障碍：**你可以补技术，但「同时在客户面前写代码」的经历没法速成。** 所以下面第五节讲的就是怎么伪造不出、但能积累的那部分。
:::

## 四件被明写、却最容易被工程师忽略的事

<div class="mp-grid">
  <div class="mp-card">
    <p class="mp-eyebrow">Soft 01 · 抗模糊</p>
    <h2 class="mp-h2">客户给不出需求，是正常的</h2>
    <p class="mp-lead">Palantir 官方给客户的痛点描述就是三个没有表结构的问题：「为什么我们的航班总在延误？」「怎样更有效发现洗钱？」「我们为什么在流失客户？」<code>[B]</code> Ganesh 给的做法是进场一周先学名词和动词："Spend a week inside a company… learn their nouns and verbs." <code>[B]</code></p>
    <p class="mp-lead">有求职资料称面向 AI 实验室的 FDE 要把 <b>30–40% 的时间</b>用于结构化客户访谈 <code>[C]</code>。这个比例没有一手来源，但方向是对的：<b>访谈是工程动作，不是社交动作。</b></p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">Soft 02 · 写作</p>
    <h2 class="mp-h2">文档是工程件，不是收尾工作</h2>
    <p class="mp-lead">JD 里写得很具体：Roboflow 要 "Shape the Deployment Playbook… make future deployments faster and more reliable." <code>[A]</code> Anthropic 要 "Create scalable public and internal assets documenting the latest LLM prompting, eval, agentic, and architecture techniques"，甚至包括写博客与白皮书 <code>[A]</code>。</p>
    <p class="mp-lead">Ganesh 那句是这一格最好的注释："Our system does not improvise. When we misunderstand… that misunderstanding surfaces as a failure." <code>[B]</code> <b>把误解写下来，它才会报错；不写，它就变成线上事故。</b></p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">Soft 03 · 教别人</p>
    <h2 class="mp-h2">交接质量决定你会不会半夜被叫</h2>
    <p class="mp-lead">"Run workshops and pair programming sessions so customer teams can maintain what you ship."（Vercel）<code>[A]</code>；"Knowledge Transfer &amp; Handoff… train the customer's team so they can operate."（Roboflow）<code>[A]</code>。Anthropic × FIS 的金融犯罪项目里，交付物除了智能体，还包括一套评测框架和向客户方做的知识转移 <code>[C]</code>。</p>
    <p class="mp-lead">这是 FDE 与外包之间最硬的一条差别：<b>外包卖工时，FDE 卖「你以后不需要我」。</b></p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">Soft 04 · 报结论</p>
    <h2 class="mp-h2">BLUF：先说底线</h2>
    <p class="mp-lead">这套称呼来自美军/北约通信习惯：BLUF = Bottom Line Up Front（先说结论），FYSA = For Your Situational Awareness（供你了解背景即可）<code>[C]</code>。它不是黑话，是一种省时间的纪律：<b>高管的第 30 秒决定他还听不听。</b></p>
    <p class="mp-lead">周报写三段就够：做了什么 / 卡在哪 / <b>下周需要你做什么决定</b>。第三段是把现场信号送回总部的通道。</p>
  </div>
</div>

## 冲突与拒绝：三句必须会说的话

现场最贵的不是技术错，是「不好意思说」。三个高频场景和可照着说的版本：

| 场景 | 不能说的 | 可以这样说 |
|---|---|---|
| 客户临时加功能 | 「行，我们尽量」 | 「这个可以做，它会把 X 推到下周。要不要走一张变更单？」 |
| 演示环境好看但生产不行 | 「差不多能上」 | 「现在的成绩是在干净样本上跑的。给我三天，用你们真实数据重跑一遍再判断。」 |
| 管理层要 Agent 直接改生产系统，安全团队反对 | 选边站 | 「分成两档：Agent 提议、人审批；跑一个月看采纳率，再决定要不要放开写权限。」 |

第三行的场景不是我假设的，它被报道为 Anthropic FDE 面试真题：「管理层想要让 Agent 直接修改已有的生产系统，但安全团队表示坚决反对，工程师应该听谁的？」`[C]` 另一道真题更直白：「一家公司已经购买了 AI 服务……反馈说根本不好用，问题是出在 AI 模型、数据、权限，还是选错了工作流？」`[C]`

::: tip 这两道题的共同点
它们**没有技术答案**。考的是你能不能把一团互相冲突的诉求拆成「先做什么、怎么验证、谁签字」。这在面试里叫模糊案例轮，在现场叫星期二下午。
:::

## 一条来自产品侧的提醒：别把 demo 当 discovery

Bob McGrew（前 OpenAI 研究副总裁）讲的早期教训是：FDE 带着演示去现场，经常被当场判定为「和我们干的活没关系」`[A]`。同一逻辑在从业者复盘里被写成一句口号式的判断：

<div class="mp-quote">
  <p>"远程看日志只会发现『召回率低』，不在现场看不出『切块太粗』"——因为要看原始文档才知道那份手册是分点混排的。</p>
  <footer>—— 一线调优复盘 <code>[C]</code>（从业者经验，非公司口径）</footer>
</div>

**这就是"人在现场"这件事的全部理由**：有些错误只在客户的数据分布里出现，而数据分布只在客户那里。

## 怎么练：三个不需要老板批准的动作

<div class="mp-steps">
  <div class="mp-step">
    <b>01</b>
    <div>
      <p><b>找一个真实的人，做三次访谈。</b> 不是朋友，是使用某个你要复制的工作流的人（客服、仓管、审计员）。每次只问「你上一件卡住的事是什么，具体哪一步」。写下来，标上时间。这件事的成本是零，产出是简历里唯一别人没有的东西。</p>
    </div>
  </div>
  <div class="mp-step">
    <b>02</b>
    <div>
      <p><b>把每次踩坑写成「能被别人接手」的文档。</b> 标准不是漂亮，是 Ganesh 说的那种可检验：别人照着你写的做，要么成功、要么暴露你写错了 <code>[B]</code>。发到公开渠道（博客/仓库 README）——三家 JD 都把技术博客列为加分项 <code>[A]/[B]</code>。</p>
    </div>
  </div>
  <div class="mp-step">
    <b>03</b>
    <div>
      <p><b>教一个人独立跑完你的东西。</b> 你在旁边不许动手。这一步会逼出所有你「以为写清楚了」的地方，也是交接能力的直接证据。</p>
    </div>
  </div>
</div>

<div class="mp-band">
  <div class="mp-band-card">
    <p class="mp-eyebrow">一句话收尾</p>
    <h2 class="mp-h2">软技能是这个岗位的承重墙</h2>
    <p class="mp-lead">从业者岗位拆解里有句话被反复引用："技术能力让你进门，沟通能力决定项目成败。"<code>[C]</code> 更狠的版本来自面试指南："只会技术的人基本走不到后面几轮"、"代码写得再漂亮，讲不清楚业务价值" <code>[C]</code>。这两句听起来像鸡汤，但对照上面五张卡看：它要求的是<b>可练习的具体动作</b>，不是性格。</p>
  </div>
</div>

## 接着读

- [职级与薪资带：从独立交付到 Staff](/job/leveling)
- [怎么把模糊问题问清楚：现场话术清单](/field/phrases)
- [面试到底怎么考](/path/interview)
- [如何成为更好的 FDE：九条从业者原话](/path/better)
