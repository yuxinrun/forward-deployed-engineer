---
title: '真实的一天：招聘页写的，和实际上过的'
description: '把一个 FDE 的 24 小时拆开看：写代码的时间从哪被吃掉、嵌入周期为什么按 4–12 周算、差旅比例为什么各家 JD 自相矛盾。'
---

# 真实的一天

先看一张图。左边那段是招聘页描述出来的生活，右边那段是从业者自述拼出来的生活。

<DayRing />

::: warning 这张图是合成的
两段都是本站按 JD 职责描述 + 从业者自述**合成的示意**，不是任何一家公司的实测考勤。它只有一个用途：提醒你不要用「写代码的时间」来判断这个岗位。
:::

差额集中在三处：**临时被拉住、救火、写材料。** 这三件事在 JD 里通常被折叠成一句「与客户紧密协作」，但它们在真实日历上是三个独立的洞。

## JD 原话 vs 日历上实际发生的事

| JD 里怎么写 | 原句出处 | 实际上是什么 |
|---|---|---|
| "embeds directly inside a strategic enterprise customer" | AWS JD `[A]` | 你的工位是客户楼里的一张空桌；门禁卡要他们给你办；网络要先申请白名单 |
| "design, build, deploy, and run AI-powered production systems" | AWS JD `[A]` | "run" 这一词意味着上线之后出事你是第一响应人 |
| "Deliver technical artifacts like MCP servers, sub-agents, and agent skills" | Anthropic FDE JD `[A]` | 你今天写的东西明天可能被别的客户复用，也可能永远只服务这一家 |
| "Lead hands-on technical workshops and code reviews with customer engineering teams" | Anthropic Applied AI JD `[A]` | 一半时间在教别人，包括教那些原本觉得你来抢活的人 |
| "Run workshops and pair programming sessions so customer teams can maintain what you ship" | Vercel JD `[A]` | 你写的代码最终不由你维护；交接质量决定半年后你是否被召回救火 |
| "typically 4–12 weeks per engagement" | Roboflow JD `[A]` | 项目节奏不是按 sprint，是按「客户季度」；一个嵌入周期够你认识对方的孩子叫什么 |
| "talk to executives, engineers, and machine operators" | Roboflow JD `[A]` | 同一天里用三套语言解释同一件事，且不能让任何一方觉得被降级 |
| "Travel occasionally to customer sites" | Anthropic JD `[A]` | 另一家写 "Requires 30–50% travel"，同部门另一份写 "up to 25%"，Deloitte 直接写「能 50% 的时间出差」 `[A]/[B]` |

## 一个嵌入周期长什么样

以 Roboflow JD 里的 4–12 周为一个单位 `[A]`，把常见节奏摊开：

<div class="mp-steps">
  <div class="mp-step">
    <b>W1</b>
    <div>
      <p><b>不写代码，学名词。</b> Vinoo Ganesh（前 Palantir）的说法是："Spend a week inside a company… learn their nouns and verbs."（在一家公司里泡一周，学会他们的名词和动词。）<code>[B]</code> 现实版本是：你在一间会议室里问一堆听起来很蠢的问题——「这个单据谁开的」「你说『跑不通』具体是指卡在哪一步」。这一周会被旁观者评价为「他们那位工程师好像什么都没干」。</p>
    </div>
  </div>
  <div class="mp-step">
    <b>W2–3</b>
    <div>
      <p><b>接数据，被数据打。</b> 拿到接口文档，发现文档三年前就不准了；拿到样本，发现时间戳一半是空值。这一段的产出通常是一个只有你自己信的脚本，和一份「客户环境实况清单」。</p>
    </div>
  </div>
  <div class="mp-step">
    <b>W4–6</b>
    <div>
      <p><b>第一次真的跑在生产数据上。</b> Ganesh 那句自我批评就是形容这一刻："We knew and understood the design requirements… What we had never done was stand inside the building while the system ran against their production data." <code>[B]</code> 演示环境和客户真实数据之间隔着一整个太平洋。</p>
    </div>
  </div>
  <div class="mp-step">
    <b>W7–9</b>
    <div>
      <p><b>做评测、被质疑、给证据。</b> 客户要的不是「准确率 89%」，是「我怎么知道它今天也没出错」。这一段决定你会不会被签字。</p>
    </div>
  </div>
  <div class="mp-step">
    <b>W10–12</b>
    <div>
      <p><b>交接 + 把信号发回总部。</b> 教会客户团队（"train the customer's team so they can operate" <code>[A]</code>），然后写清楚哪些东西是可复用的、该交给产品。这一步偷懒，你就永远在救自己上次挖的坑。</p>
    </div>
  </div>
</div>

## 三种典型工作日

从业者的自述里反复出现这三种，我把它们写成可以被认出的样子：

<div class="mp-grid">
  <div class="mp-card">
    <p class="mp-eyebrow">Type A · 考古日</p>
    <h2 class="mp-h2">一整天在读别人的数据</h2>
    <p class="mp-lead">目标是搞清楚一张报表里的「客户编号」到底有几种写法。产出是零行代码和一份谁都想看的字段字典。这种日子看起来毫无进展，但它挡掉了后面三周的返工。</p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">Type B · 救火日</p>
    <h2 class="mp-h2">早上开会，晚上改配置</h2>
    <p class="mp-lead">上线后的系统在某条真实数据上表现坏了，而「坏了」的定义来自一位不会写代码的业务主管。你要同时做三件事：复现、解释、给出今晚的处置。Metal 的 JD 把这一段叫 "Debug and operate" <code>[A]</code>。</p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">Type C · 教学日</p>
    <h2 class="mp-h2">写给你的代码不多，写给别人的话很多</h2>
    <p class="mp-lead">带客户团队做 pair programming、开工作坊、把上周的踩坑写成 playbook。Vercel 与 Roboflow 都把它写成职责而不属于加分项 <code>[A]</code>。这一天结束时你连一个 commit 都没提，但半年后少一次半夜电话。</p>
  </div>
</div>

<div class="mp-quote">
  <p>"精力配比参考：40% 写代码，60% 业务沟通、需求挖掘、项目推进，初级 FDE 编码占比更高。"</p>
  <footer>—— 国内从业者岗位拆解文章的口径 <code>[C]</code>（个人经验，非任何公司的实测数据，不能当标准）</footer>
</div>

::: tip 为什么这个比例不能当标准
本站刻意不把「1/4 写码、1/2 集成、1/4 沟通」这类数字写成事实：有中文研究核查明确指出这类比例**没有找到一手来源**。能确认的只有两件事：差旅百分比确实写进过 7 份 JD（区间 up to 25% 到 50%）`[A]/[B]`，年限主流区间是 3–6 年 `[A]/[B]`。其余都是个人经验，请当参考不当承诺。
:::

## 关于出差，一句实话

<TravelGauge />

各家 JD 对差旅的写法互相矛盾，包括**同一家公司的两个岗位**：AWS 一份写 "Requires 30–50% travel"，另一份写 "Requires up to 25% travel" `[A]`。Roboflow 写 `~40–50%` 且嵌入周期 4–12 周 `[A]`；Deloitte 中译本写「能够 50% 的时间出差」`[B]`；中软国际写「承担约 25% 的差旅」`[B]`；Palantir 官方 JD 写得最客气——"travel up to 25%, as needed to client sites, but flexible based on personal preferences" `[A]`，而 OpenAI 写 "Travel up to 50% is required." `[B]`。

这告诉你两件事：**别拿别的公司的数字做心理准备**，以及**面试时必须问清自己那一档**。要问的具体句式在[面试那一页](/path/interview)。

还有一句值得单独抄下来，它是这个岗位最不被写进 JD 的事实：

> "Travel is the most common cause of first-year attrition in this role and the least likely thing to be quantified in the advert."
> —— Valletta Software 的从业者侧分析 `[B]`，访问 2026-11-04（编辑判断，无引用数据集，但与上面各家区间的不一致完全对得上）

## 现场才会发生的那些事

幽默素材不用编，从业者写的比段子好笑：

- 一位拿到高薪 offer 的工程师，第一天上岗的工作是**钻进车间，在轰鸣的机器声里记录每台设备的「外号」**，然后亲手把二维码贴到设备上做定位 `[C]`。设备有外号这件事，只有站在现场的人才知道；而 AI 要用这些设备，得先知道外号对应哪个资产编号。
- 有人被拉去修打印机（顺便修投影仪、修网络、修会议室电视），理由是「你是那个懂技术的」`[C]`。
- 一对 FDE 进驻客户部门，被问：「你们两个人是一个部门吗？」`[C]`
- 周报要写三段：做了什么 / 卡在哪 / 下周需要什么决定。**第三段最值钱**，因为它是把现场信号发回总部的方式（BLUF：先说结论）`[C]`。
- 验收签字人和每天用这个系统的人，往往不是同一批人。这是「老板说成功、员工说没在用」这个现象在合同层的解释。

<div class="mp-band">
  <div class="mp-band-card">
    <p class="mp-eyebrow">如果只记一件事</p>
    <h2 class="mp-h2">这个岗位的时间不是被代码吃掉的，是被「等一个决定」吃掉的</h2>
    <p class="mp-lead">写代码的四五个小时之外，剩下的是权限没批、数据没到、口径没定、签字人出差了。想清楚这一点，你就理解了为什么这个岗位要 3–6 年经验：<b>它难的不是解决问题，是在没有授权的情况下推进解决问题。</b></p>
  </div>
</div>

## 接着读

- [为什么现在才成立：AI 时代的技术前提](/what/why-now)
- [任职要求逐条拆开](/job/jd)
- [现场生命周期：P0 到 P5](/field/lifecycle)
- [算法画像自测：你适合哪一段](/quiz)
