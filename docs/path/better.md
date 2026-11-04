---
title: '怎么成为更好的 FDE：可以练的十二件事'
description: '四档能力曲线（会写代码 → 能在陌生系统里跑起来 → 能问出正确的问题 → 会选题并把交付泛化成产品），加上十二件每周都能自测的具体习惯。没有一件要求你换一个框架。'
---

# 怎么成为更好的 FDE

先删掉一个误解：**"更好的 FDE"不是"更懂的 FDE"。** 本站读了 16 份海外 JD、50 多份国内 JD 摘要和十几篇从业者复盘之后，最一致的结论是——拉开差距的东西全部不在模型层，而在四个动作里：**见人的方式、装东西的方式、记录的方式、砍需求的方式。** 这四件事都能练，也都能自测。

<div class="mp-stats">
  <div class="mp-stat"><strong>4 档</strong><span>本站把能力切成 L0–L3，判据全部挂在可回溯的原话上，不是自创职级</span></div>
  <div class="mp-stat"><strong>1 周</strong><span>进场第一周该做的事：不写代码，只学客户的"名词和动词" <code>[B]</code></span></div>
  <div class="mp-stat"><strong>4 次</strong><span>"be wrong four times in a month."——一个月里被现实推翻四次，是节奏要求，不是失败 <code>[B]</code></span></div>
  <div class="mp-stat"><strong>10 家</strong><span>被点名的"泛化难度"：这个特性怎么给后面 10 个客户用 <code>[A]</code></span></div>
</div>

<SkillCurve />

## 十二件事，每一件都能自测

| # | 练什么 | 到位的标志（可自查） | 出处与等级 |
| --- | --- | --- | --- |
| 01 | 进场第一周只学名词和动词 | 你能说出客户内部的 5 个黑话、每个数归谁管、哪张表没人敢碰 | "learn their nouns and verbs"（Ganesh）`[B]` |
| 02 | 把客户原话改写成可验证的问题 | 手上有 10 条原话，其中至少 3 条推翻了你进场前的假设 | 早期演示常被当场判定"和我们干的活没关系" `[A]` |
| 03 | 在断网的陌生机器上装一次自己的东西 | 有一份"别人照着做也能成功"的安装手册，含离线包和权限 | 内网/离线、依赖与镜像、审计通道是环境三条硬约束 `[A]`/`[C]` |
| 04 | 写一个带权限边界的连接器 | 你能画出数据流向，并说清什么数据不出域 | JD 把 Salesforce/SharePoint/工单连接器当交付物 `[A]`/`[C]` |
| 05 | 给每个生成式输出配一个评测集 | 你敢把失败样本发给客户，而不是只发准确率的截图 | "85% 的死题做成标准测试集，测不通坚决不交付" `[C]`；evals 被列为原型到生产必备工程件 `[A]` |
| 06 | 用 P99 汇报延迟，用"周活"汇报采用 | 你的周报里没有"上线了 N 个用例"这一行 | 高管宣称成功、一线说"几乎根本没在使用"是可以同时为真的 `[A]` |
| 07 | 算一次钱 | 单次调用成本、每人每月成本、以及"停掉它会损失什么"三行数字 | 交付要挂价值口径 `[B]`/`[C]` |
| 08 | 把交付写成下一个人能接手的产物 | 查看器、评测集、口径词典至少有一个，且不是你自己在用 | "Shape the Deployment Playbook… make future deployments faster" `[A]` |
| 09 | 教一次，然后闭嘴看着他们独立操作 | 客户团队在没有你的日子里解决了一个问题 | "Run workshops and pair programming sessions so customer teams can maintain what you ship." `[A]` |
| 10 | 一个月内错四次，并把每次错写下来 | 有一条"本周准备再错一次"的固定段落 | "be wrong four times in a month."（Ganesh）`[B]` |
| 11 | 把"三家客户都要"写成产品缺陷并寄回家 | 你能指出上次现场发现最终变成了哪个产品功能 | "Three firms needing something the provenance layer cannot express is the signal we actually care about." `[B]` |
| 12 | 砍掉一个功能并写下砍它的理由 | 有一张走流程的变更单，而不是一次"顺手加个小功能" | 范围蔓延是 POC 阶段两大死因之一 `[C]` |

<b>这张表里没有一行是"再学一个框架"。</b>这既是好消息，也是坏消息：好消息是门槛不靠学费；坏消息是它也不靠学费——它靠交付次数，而交付次数只能一次一次攒。

## 见人的功夫（01–02）：先当记者，再当工程师

现场的信息密度不在文档里，在人的顺口话里。政府报道里那段是最好的教材：老师傅说 pH"4到6都行"，26 岁的工程师"非要追问：4、5、6分别对应什么状态"，为此"主动帮买饭、打下手" `[A]`。**这条动作比任何"需求工程方法论"都更接近这一行的核心。**

同理，Palantir 早期的军方项目里，是工具先把问题暴露出来，客户才知道自己要什么 `[C]`。这解释了为什么 discovery 不是"收集需求"——**需求是现场长出来的，不是问卷收来的。**

## 动手的功夫（03–04）：在别人的地里种东西

L1 那一档之所以卡人，是因为它考的不是编程，是**在一个你不控制的环境里把事情跑通**：权限不是你申请的，网络是你进不去的，依赖是内网镜像没有的。判断自己有没有到 L1，用那句哨兵最直接——"你的 FDE 过去两周打开过 IDE 写代码吗？" `[B]` 如果答案是"两周都在开会和等审批"，那已经偏到实施或者售前那一侧了；如果答案是"根本没写过"，那就是这一档没过关。

顺带一条现场幽默（从业者口径 `[B]`）：驻场久了会被叫去修打印机、重装系统，外号"那个懂电脑的"。这不是笑话，是**边界问题**，应该在进场第一周用一句话说清："我负责这套系统跑起来，其他设备有 IT 值班电话。"

## 记录的功夫（05–09）：让误解必然报错

Ganesh 关于文档的那两句是本页最值得抄的：

<div class="mp-quote">
  <p>"Our system does not improvise. When we misunderstand… that misunderstanding surfaces as a failure."</p>
  <p>"A system that can improvise around a bad encoding will never tell you the encoding was bad."</p>
  <footer>Vinoo Ganesh（Kepler CEO，前 Palantir Spark 核心）——能被绕过错误的系统，永远不会告诉你错在哪 <code>[B]</code></footer>
</div>

这条原则在评测上有一致的应用方式：**别用"感觉还行"验收**。那位从业者的口径是"85% 确定性问题做成标准测试集，剩下 15% 丢给业务专家评，测不通坚决不交付" `[C]`。另一条同样来自现场的证据更妙：一次 Parquet 迁移卡了很久，直到前线做了一个能"双击看内容"的查看器、把那位工程师原有的 CSV 人工核对习惯还原出来，两天后就获批了 `[B]`。**没人签字往往不是不同意，是你的系统没让他用他熟悉的方式确认。**

汇报纪律也归在这一档：先结论后背景（BLUF），前线文档要能被下一个人接手而不是写得漂亮 `[C]`。一句实操建议：**每次写周报，第三段固定写"下周准备再错一次什么"** `[B]`。

## 判断的功夫（10–12）：你被买到的是选题权

<div class="mp-quote">
  <p>"Hiring forward deployed engineers buys you exactly one thing, which is the right to identify which problems are worth solving."</p>
  <footer>Ganesh——你的稀缺性在"选题"，不在"实现" <code>[B]</code></footer>
</div>

L3 的全部难度在一个反问里：McGrew 说很多优秀产品经理在 Palantir 会卡住，因为他们必须不断问"这个特性怎么泛化给后面 10 个客户" `[A]`。这就是为什么"产品回流"是能力而不是态度：它要求你在项目最赶的时候，做一件对当下项目没好处、对第三家客户有好处的事。

而同一来源把不这样做的后果写得很不客气：

<div class="mp-quote">
  <p>"An FDE function that solves last miles without ever sending that signal home is a services/consulting team with a better title."</p>
  <footer>只解决最后一公里、从不把信号寄回家的 FDE 团队，就是一个头衔更好听的咨询团队 <code>[B]</code></footer>
</div>

::: warning 这一页不能被当成"报个班就行"
一句从业者原话本站放在这里当刹车："Screening beats training."（筛选胜过培训）`[B]` 另一句是它的具体版："The best way to prepare for a Forward Deployed Engineer role is not to search for an 'FDE certification.'" `[B]`
国内在售的 FDE 证书项目由多家机构发放，且它们自己的说明就写了"不属于国家职业资格""不构成就业、薪资或落户承诺" `[B]`。上表十二件事里，<b>没有一件能用钱买到</b>，全部需要有一个真实的人、一台真实的机器和一次真实的失败。
:::

## 面向中文读者的三条落地版

由上面已经引过的证据直接推出，不新增事实 `[B]`：

<div class="mp-steps">
  <div class="mp-step">
    <b>01</b>
    <div>
      <strong>先证明"有人在用"，再谈"模型多强"</strong>
      <p>依据是 4.7 与 4.10 那两条：高管报喜、员工不用是能量化的现象 <code>[A]</code>。所以国内项目里第一个月应该交出一个"周活"数字，哪怕它难看——难看的真实数字比漂亮的截图更能保住项目。</p>
    </div>
  </div>
  <div class="mp-step">
    <b>02</b>
    <div>
      <strong>把驻场成果写成下一个人能接手的产物</strong>
      <p>查看器、评测集、口径词典三选一。国内 JD 里已经出现这个条款："将客户现场的定制化实践经验抽象提炼，转化为通用产品能力或解决方案组件" <code>[B]</code>——<b>这句和 Palantir 的"产品反哺"是同构的</b>，遇到这种岗位可以高看一眼。</p>
    </div>
  </div>
  <div class="mp-step">
    <b>03</b>
    <div>
      <strong>接单前先确认你收得起那个价</strong>
      <p>三条前置条件（数据能不能拿到、范围谁说了算、钱挂在验收还是采用上）任何一条不清楚，就不要用"先做起来再说"补位——因为这一行的试点期利润率可以低到无法计算 <code>[B]</code>，而"顺手加个小功能"是慢性自杀 <code>[A]</code>。</p>
    </div>
  </div>
</div>

## 一句话总结怎么变强

<div class="mp-band">
  <div class="mp-band-card">
    <p class="mp-eyebrow">唯一真的复利</p>
    <h2 class="mp-h2">把每一次现场，变成下一次的起点</h2>
    <p class="mp-lead">"Point the function at product and every deployment is asked to produce something the next deployment can start from." <code>[B]</code> 这句话在本页出现的次数最多，因为它同时是三件事：<b>公司的组织原则、你晋升的理由、以及你简历上唯一能写很久的东西</b>。做不到的人做十年交付，手里只有十个已经结束的项目；做得到的人做三年，手里是一套别人愿意复用的方法。</p>
  </div>
</div>

## 接着读

- [项目全生命周期：从 POC 到验收](/field/lifecycle)
- [十个最常见的翻车点](/field/pitfalls)
- [话术与模板：把话说明白，把责任写清楚](/field/phrases)
- [十二周练手计划：从零攒出一个能讲的项目](/path/plan)
