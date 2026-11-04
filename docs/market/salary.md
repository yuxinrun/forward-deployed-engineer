---
title: '薪酬：招聘页写着的数，和传说中到手的数'
description: 'FDE 的薪资数字有三层口径：招聘广告 base、自我报告总包、自媒体换算的"平均年薪"。这一页只把前两层摆出来，并解释第三层为什么一条都不采用。'
---

# 薪酬

这一页只想做一件事：把**招聘广告上写出来的数**和**传说里到手的数**分开摆。

<div class="mp-stats">
  <div class="mp-stat"><strong>195,456</strong><span>美元——美国 FDE 岗位「招聘广告薪资中位数」，Lightcast 口径、2026 年前九个月（经 CNBC 报道）<code>[A]</code></span></div>
  <div class="mp-stat"><strong>3 倍+</strong><span>同一口径相对美国<b>全部</b>招聘广告薪资中位数的倍数 <code>[A]</code></span></div>
  <div class="mp-stat"><strong>$125K–$434K</strong><span>Palantir 在本图两条 posting 合起来的跨度（单条最宽的是 Assoc Director 芝加哥 $151K–$434K）<code>[A]</code>/<code>[B]</code></span></div>
  <div class="mp-stat"><strong>0 条</strong><span>本站采用的「FDE 平均年薪 48.5 万 / 72.5 万美元」类自媒体数字（找不到一手来源）</span></div>
</div>

<SalaryLadder />

::: warning 图上的每一行都只是 base
不含股权、不含签字费、不含项目奖金，也不是成交价。CNBC 那句必须一起抄走："The figures represent advertised positions, not completed hires." `[A]` 另外，<b>band 不是谈判空间</b>：同一公司不同 posting 的区间能差出 10 万美元，取决于地点、职级和那条需求开了多久。
:::

## 三层口径，一层比一层糊

<b>第一层：招聘广告上明写的区间。</b>这是唯一有法律约束倾向的一层（美国多数州要求披露），也是本页图表的全部来源。

<b>第二层：自我报告的总包。</b>Levels.fyi 一类的数据里，Palantir「软件工程师头衔族」（含 FDSE）美国总包中位数约 $230,000 `[B]`。注意两个陷阱：一是头衔族不等于 FDE；二是本次抓取 Levels.fyi 返回 405，未能回查原始分布，所以本站只把它当量级，不当结论。

<b>第三层：自媒体与培训机构的换算。</b>这一层最热闹，也最不能引用。举个具体的例子：某培训站给 Anthropic 的分级总包表是 L4 约 $390K–$425K、L5 约 $480K–$565K、L6 约 $600K–$685K、L7 $775K–$880K+，还拆了 base/bonus/equity `[C]`——听起来非常专业，但没有 Levels.fyi 或官方页交叉，且同一机构另一页给的 Palantir FDE 总包是 $135K 到 $750K+，再另一页又给美国 FDE 年总包 $110K–$180K `[C]`。<b>同一个来源内部自相矛盾的两个区间，说明这不是统计，是排版。</b>

## 反直觉的一条：发明这个岗位的公司，base 给得最低

Valletta 的结论句原文照录："Palantir invented the role and now pays the least for it." `[A]`

拆开看：Palantir 公开 FDSE 区间是 $135,000–$200,000/年，同一条 JD 也写明 "Total compensation for this position may also include Restricted Stock units, sign-on bonus and other potential future incentives." `[A]`；Anthropic 的 FDE（Applied AI）是 $200,000–$300,000 `[A]`，相邻的 Applied AI Engineer, Enterprise Tech 是 $200,000–$320,000 `[A]`；另有汇编称 Anthropic 某个 FDE posting 起点 $280,000 `[B]`。

这条差别**不能**读成"Palantir 便宜"。它是结构差异：上市公司把大头放在 RSU 上，band 之外；非上市公司/实验室把 base 抬起来抵股权不确定性。所以正确写法是"不同 posting 区间从 $200K 到 $400K 不等"，而不是"Anthropic FDE 就是 X"。

## 一个专门用来防错的锚点：实习月薪

Palantir 的 "Year at Palantir" FDSE 实习月报酬是 $5,900–$10,500 `[A]`。Valletta 对这类数字的警告值得整句抄下来，因为已经有不少薪资页踩过：

<div class="mp-quote">
  <p>"Annualising it would put a misleading number next to the salaried roles, and several salary pages covering this role appear to have made exactly that mistake."</p>
  <footer>—— Valletta Software 薪资页 <code>[A]</code>（意思是：有人把实习月薪直接乘 12，写成了正式岗位的年薪）</footer>
</div>

顺带给一个"这岗位算不算高"的外部基准：美国 BLS OEWS（2025-05）相邻软件/数据职业族中位年薪 $135,980 `[B]`，BLS 并没有 FDE 这个单独职业码；Fortune 口径的传统软件工程师招聘广告中位数约 $145,000 `[B]`。<b>相对这两个数，FDE 的溢价在"广告层面"是成立的</b>；至于到手，取决于第二层和股权。

## 国内那一栏：不要和美元混着读

本站把人民币数字单独做成图的最后一块，原因很简单——它们量纲不同，而且互相冲突：

- 国家大学生就业平台（转载 BOSS 直聘）上一条沈阳的岗位：5.0–9.0K/月，要求硕士及以上、专业不限 `[B]`
- 聚合站「AI 交付 / 实施」类：12–25K/月（Boss 直聘口径的转述）`[C]`
- 自媒体从三份腾讯系「AI 前线部署工程师」JD 扒出的区间：50–80K/月 `[C]`
- 另有「个别日薪 1 万元」「小团队报价 5.8 万元起」的驻场/外包报价口径 `[C]`

这四个数不是同一种劳动。第一条大概率是普通算法或实施岗被挂了新名字；第三条是头部大厂 AI 交付序列；第四条是外包人天报价，含不了社保与空置期。<b>它们能告诉你的只有一件事：中文里"前线部署工程师"这六个字目前被套在了差别极大的岗位上</b>，所以国内求职时的第一件事是先看职责正文，别看标题（这一条在[国内那一栏](/market/china)展开）。

## 谈之前先问三件事

<div class="mp-steps">
  <div class="mp-step">
    <b>01</b>
    <div>
      <strong>岗位挂在哪个序列</strong>
      <p>工程，还是专业服务/交付。<b>这一条决定薪资带、晋升阶梯和你能不能影响产品</b>——原文是 "Ask whether the role sits in engineering or in professional services. That single fact predicts the band, the ladder and whether you get to influence the product." <code>[A]</code> 招聘页上找不到就面试直接问，问不到答案本身就是答案。</p>
    </div>
  </div>
  <div class="mp-step">
    <b>02</b>
    <div>
      <strong>差旅上限写在哪一句</strong>
      <p>同一家公司的两份 JD 能差一倍（AWS 一份写 "Requires 30–50% travel."，另一份写 "Requires up to 25% travel." <code>[A]</code>）。为什么值得较真：Valletta 那句编辑判断——"Travel is the most common cause of first-year attrition in this role and the least likely thing to be quantified in the advert." <code>[B]</code><b>出差是这个岗位上最常导致第一年离职、却最少被写清楚的一项。</b></p>
    </div>
  </div>
  <div class="mp-step">
    <b>03</b>
    <div>
      <strong>band 之外还有什么</strong>
      <p>RSU 的归属节奏、签字费是否可追回、驻场补贴与报销口径、on-call 是否另计。本站不给你算总包，因为<b>没有一手数据的总包就是段子</b>；但你要知道：高 base 与高股权是两种不同的风险敞口，前者确定、后者取决于公司估值路径。</p>
    </div>
  </div>
</div>

## 一句话总结薪酬

<div class="mp-band">
  <div class="mp-band-card">
    <p class="mp-eyebrow">薪酬页的边界</p>
    <h2 class="mp-h2">本站不预测你能拿多少</h2>
    <p class="mp-lead">能给的只有一句：<b>广告上的区间是真的，但它只对"那一条广告"负责</b>。把 195,456 美元记成"FDE 平均薪资"，你会在面试报价时错得离谱；把培训机构那张七级表当行情，你会错得更离谱。真正可用的信息只有一个形式——<b>具体公司、具体 posting、具体日期、具体是不是 base</b>。拿着这四个限定去问，比背任何一个数字都值钱。</p>
  </div>
</div>

## 接着读

- [谁在招：四类公司，四种活法](/market/who-hires)
- [国内到底有没有这个岗位](/market/china)
- [硬数字速查表：每个数字的口径与出处](/evidence/numbers)
- [面试流程拆解：哪些轮次有公开通过率](/path/interview)
