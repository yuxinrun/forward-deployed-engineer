---
title: '数据这一层：脏数据不会报错，它会看起来像成功'
description: '空时间戳被当成 1970 年、口径由领导定但效果由一线判、字段语义没人写下来——FDE 一半的时间死在这一层，而且死法各不相同。'
---

# 数据这一层

这一章的标题是从一次真实事故里借来的。Vinoo Ganesh（前 Palantir，Spark 项目核心、Project Frontline 创建者）讲过 Phoenix 的一个案例：某张表的时间戳字段为空，系统把它当成 epoch（1970-01-01），数据量瞬间爆炸，直接把内存吃爆 `[B]`。

**没有报错。输入合法，输出合法，只是全错。** 这就是这一层的全部难度。

<div class="mp-stats">
  <div class="mp-stat"><strong>38%</strong><span>Gartner 调查中把「数据质量」列为 AI 落地主要障碍的 IT 运维负责人比例（2026-04，n=782）<code>[C]</code></span></div>
  <div class="mp-stat"><strong>28%</strong><span>同一调查里达到 ROI 的 AI 用例占比；20% 彻底失败 <code>[C]</code></span></div>
  <div class="mp-stat"><strong>60%</strong><span>Gartner 预测到 2026 年因此被放弃的生成式 AI 项目比例，理由为「缺乏 AI-ready 数据」<code>[C]</code></span></div>
  <div class="mp-stat"><strong>0 次</strong><span>Spark / Airflow / dbt / Kafka 在本站 16 份可读正文 JD 里显式出现的次数 <code>[A]/[B]</code></span></div>
</div>

::: warning 最后一项请注意读法
「JD 里没写」不等于「不用会」。它说明的是：<b>招聘方筛的不是工具名，而是你能不能把别人的烂数据变成可信的东西。</b> 工具名是最容易伪装的一项能力，字段语义不是。
:::

## 现场会遇到哪几种数据

<div class="mp-grid">
  <div class="mp-card">
    <p class="mp-eyebrow">形态 01 · 空值伪装</p>
    <h2 class="mp-h2">缺失被当成合法值</h2>
    <p class="mp-lead">空时间戳→epoch；空金额→0；空状态→默认值。三种都会静默通过校验。<b>对策不是「加非空检查」</b>，是给每一个字段决定「缺了该怎么办」：报错、丢弃、还是标记为未知——并且把这条决定写进代码，让它在数据量突增时必然暴露。</p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">形态 02 · 口径漂移</p>
    <h2 class="mp-h2">同一个词，三个部门三种算法</h2>
    <p class="mp-lead">「活跃客户」「合格率」「今天」在不同部门系统里定义不同。经典症状是：报表对得上，模型输出对不上。<b>更麻烦的是人的部分：口径由领导定，但效果由一线判定</b>——签字的人和用的人不是同一批（这在<a href="/field/pitfalls">度量假象那一节</a>有量化证据）。</p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">形态 03 · 多源异构</p>
    <h2 class="mp-h2">真正的数据不在数据库里</h2>
    <p class="mp-lead">从业者复盘里最一致的观察：关键信息在 SAP 的一个冷门表、一份 Excel、一摞 PDF、一个 2011 年的本地系统里 <code>[B]/[C]</code>。Palantir FDSE 的职责描述也是这句："wrangling massive-scale data"（媒体转引其 JD）<code>[B]</code>。<b>这一形态决定了为什么这个岗位要人在现场：文档没有目录，只有老员工知道。</b></p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">形态 04 · 权限与边界</p>
    <h2 class="mp-h2">能拿到 ≠ 能存下来</h2>
    <p class="mp-lead">OpenAI 岗位 JD 原句：职责要求访问 "secure and protected information technology systems and related data security obligations" <code>[B]</code>。国内的硬版本更直接：券商场景「代码不能出机房」<code>[C]</code>；数据驻留（data residency）与 SOC 2 审计是企业侧的真实约束 <code>[A]</code>。<b>这一形态是设计约束，不是收尾合规。</b></p>
  </div>
</div>

<DataFault />

## 三件这一层真正要会的事

<div class="mp-steps">
  <div class="mp-step">
    <b>01</b>
    <div>
      <strong>字段级语义</strong>
      <p>进场两周内产出一份「字段字典」：字段名、来源系统、谁维护、缺失含义、已知坑。<b>它的价值不在文档本身，在于逼你把「谁说了算」问出来。</b> Ganesh 那句是对这一动作最好的辩护："Our system does not improvise. When we misunderstand… that misunderstanding surfaces as a failure." <code>[B]</code></p>
    </div>
  </div>
  <div class="mp-step">
    <b>02</b>
    <div>
      <strong>出处与链路（provenance）</strong>
      <p>结果要能追溯到"哪个源、哪一刻、什么规则"。Ganesh 认为这才是该发回总部的信号，原话："Three firms asking for the same feature is easy to notice… Three firms needing something the provenance layer cannot express is the signal we actually care about." <code>[B]</code> 客户侧的直接收益是<b>可追溯</b>：Anthropic × FIS 的金融犯罪智能体就明确要求每笔决策可追溯 <code>[C]</code>。</p>
    </div>
  </div>
  <div class="mp-step">
    <b>03</b>
    <div>
      <strong>让误解必然报错</strong>
      <p>这是脏数据 OOM 事故真正的教训。Ganesh 的原话可以直接当设计原则："A system that can improvise around a bad encoding will never tell you the encoding was bad." <code>[B]</code> 落到工程上是一组具体动作：<b>对「量级异常」告警</b>（行数突然翻十倍）、<b>对时间戳范围做区间校验而不是非空校验</b>、<b>把默认值写死成显式分支而不是隐式转换。</b></p>
    </div>
  </div>
</div>

## 语义层与 Ontology：为什么这个老词又火了

Palantir 把「业务语义」做成平台核心（Foundry 的 ontology），一线交付的做法是 FDE 先把客户的名词动词建进系统，再由产品团队通用化 `[C]`。国内 JD 也出现了这一要求的变体，中软国际写得最有味道：

> "或具备『Echo 型』业务专家特质：对业务语义『有品味』，能将客户深层痛点高质量转化为 Prompt、Ontology 与 Agent 设计。" `[B]`

而把语义层和模型接起来的那座桥，是自然语言查数据：Databricks 官方口径里 FDE 团队要求含 "RAG、多智能体系统、Text2SQL、fine-tuning" `[B]`，国内校招岗写 NL2SQL `[B]`。

::: tip 这一层的技术判断
Text2SQL 在大多数企业里<b>不能直接放开</b>：一次错误 join 的代价可能是整份报表被推翻。可交付的形状是「生成 SQL + 人审 + 留痕」，等采纳率跑够一个月再谈自动。这与[软技能页](/job/soft-skills)那道 Anthropic 面试题是同一个答案。
:::

## 一句话总结这一层

<div class="mp-band">
  <div class="mp-band-card">
    <p class="mp-eyebrow">数据层的职业价值</p>
    <h2 class="mp-h2">它是最不体面、也最难被替代的部分</h2>
    <p class="mp-lead">模型 API 会越来越好，框架会换，但<b>「这家公司的『合格率』到底怎么算的」这件事，只有现场待够三个月的人知道。</b> 这类知识不性感、没法写在简历第一行，却是客户最后离不开你的真正原因。反过来说：如果一个人只肯做模型层，他就很容易被下一个模型版本替掉。</p>
  </div>
</div>

## 接着读

- [质量这一层：评测、可观测与成本账本](/stack/quality)
- [基础设施这一层：内网、镜像与容器](/stack/infra)
- [现场生命周期：数据风险在哪个阶段爆](/field/lifecycle)
- [失败模式全清单：坑与证据强度](/field/pitfalls)
