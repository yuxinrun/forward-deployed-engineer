---
title: '这本手册怎么用（先花 3 分钟认一认 FDE）'
description: '三分钟认清 Forward Deployed Engineer：三个比喻、四条判据、本站的阅读路线，以及一套把话说清楚的引用规矩。'
---

# 这本手册怎么用（先花 3 分钟认一认 FDE）

先说清楚这本手册是给谁的：<strong>给正在考虑转行、或者已经在做但没人这么叫你的人。</strong>不是给 HR 写岗位说明书用的，也不是给厂商写宣传页用的。所以它有一个不太好笑的优点——凡是本站没能核对到原文的数字，都会写明"这是转述"。

如果你只有三分钟，读完这一页就可以走。剩下的 31 页是给你在机房里等审批的时候看的。

<div class="mp-stats">
  <div class="mp-stat"><strong>3 个比喻</strong><span>水管工、翻译、剧团——三个都能记住，比定义好使</span></div>
  <div class="mp-stat"><strong>4 条判据</strong><span>用来判断你看到的"FDE 岗位"到底是不是这一行</span></div>
  <div class="mp-stat"><strong>32 页</strong><span>八个板块，侧边栏的顺序就是建议阅读顺序</span></div>
  <div class="mp-stat"><strong>3 级标注</strong><span>每个数字都带 <code>[A]</code>/<code>[B]</code>/<code>[C]</code>，告诉你它能用到什么场合</span></div>
</div>

## 三个比喻，比一句定义有用

**第一个：厂家派来的水管工。** 你家花大价钱买了一整套智能厨房设备，说明书三百页，装好那天发现水压不对、接口不匹配、厨师根本不会用。厂家派了一个师傅常驻你家后厨——他不负责卖你设备，他负责让这堆设备真的做出菜。做出来的菜谱还会带回厂家，写进下一版说明书。

**第二个：两种语言之间的翻译。** 一边说"我们的向量检索召回率偏低"，另一边说"你们这个东西不好用"。这两句话之间没有矛盾，只是没有翻译。FDE 干的事就是把后者翻译成前者，再把解决方案翻译回一句能被验收的话。

**第三个：剧团。** 这是 Palantir 自己用过的说法——面对客户时那种状态：台前的每个人都在即兴，但即兴的内容是被排练过的。这个比喻的诚实之处在于它同时承认了一件事：观众看得出来你是在背词还是在真懂。

<div class="mp-quote">
  <p>如果一定要一句定义，本站推荐这句：FDE 是一个把"结果"当交付物的工程师，他的工作地点大部分时间在别人的公司里。</p>
  <footer>完整论证和四家公司的官方原文在<a href="./what/is-it.html">定义：AI 落地的最后一公里</a></footer>
</div>

## 四条判据：怎么确认你看到的岗位是这一行

这四个问题不是哲学问题，是省时间用的。投简历前拿它们问一遍招聘方，答案会决定你未来一年的生活质量。

| 判据 | 是 FDE 的样子 | 不是 FDE 的样子 |
| --- | --- | --- |
| 他背的是什么 | 一个能被验收的结果：某个系统上线、某群人真的在用 | 一份交付物：文档、汇报、演示、平台开通 |
| 他写不写代码 | 写，而且线上出事那天晚上是他被叫醒 | 不写，只协调别人写；或者只在 PPT 里写 |
| 现场待多久 | 按周或按月，客户的环境里有他的工位 | 每次去三天，回来交报告 |
| 发现的东西去哪 | 回到自己公司的产品里，变成下一家客户能用的能力 | 停在十几页需求文档里，三个月没人回复 |

第四条最关键，也最容易伪装。一条来自从业者的判断标准值得整句抄走：

<div class="mp-quote">
  <p>"An FDE function that solves last miles without ever sending that signal home is a services/consulting team with a better title."（只解决最后一公里、却从不把信号传回总部的 FDE 团队，就是一家换了个好头衔的服务/咨询团队。）</p>
  <footer>Vinoo Ganesh，前 Palantir <code>[B]</code>。判断一家公司的 FDE 成色，问这一条比问薪资更有效</footer>
</div>

## 阅读路线：三种人三条路

<div class="mp-steps">
  <div class="mp-step"><b>01</b><div><strong>纯好奇，先搞明白这是干什么的</strong><p>读<a href="./what/is-it.html">是什么</a> → <a href="./what/a-day.html">一天和一周</a> → <a href="./what/not-fde.html">跟五个相近岗位对照</a>。三页，四十分钟，读完你能在饭桌上把这个岗位讲清楚。</p></div></div>
  <div class="mp-step"><b>02</b><div><strong>认真考虑转行</strong><p>先做<a href="./quiz.html">十题自评</a>，再读<a href="./market/china.html">国内到底有没有</a>和<a href="./market/salary.html">薪酬</a>——这两页负责把你从"年薪百万"的想象里捞出来。然后读<a href="./job/jd.html">JD 拆解</a>、<a href="./path/switch.html">六种背景切入</a>、<a href="./path/plan.html">十二周计划</a>。</p></div></div>
  <div class="mp-step"><b>03</b><div><strong>已经在现场了，想干得更好</strong><p><a href="./path/better.html">可以练的十二件事</a>、<a href="./field/lifecycle.html">六段轨道</a>、<a href="./field/pitfalls.html">十个翻车点</a>、<a href="./field/phrases.html">话术与模板</a>。这一组基本不讲技术，因为技术你不是不会，是没人给你时间。</p></div></div>
</div>

## 本站的三条规矩

**规矩一：数字必须带口径。** 美国的薪资数字是"招聘广告中位数"，不是成交价；Gartner 的"30% 项目被放弃"是预测，不是统计；国内培训班的"平均薪资提升"是广告，不是数据。口径写全了，数字才有用。

**规矩二：中外分开算。** 美元 base 不和人民币月薪折算成同一个"平均工资"。国内那一层有自己的物理约束——信创、等保、数据不出域、终验和质保金——所以单独开了<a href="./market/china.html">一个板块</a>和<a href="./field/cn-reality.html">一章现场手册</a>。把美国 JD 的差旅比例当成国内要求，是这一行最常见的搬运错误。

**规矩三：图表下面必须有一句人话。** 每一张图的结论都会再用文字写一遍，因为图表是给眼睛的，结论是给判断的。听书模式下图表会被跳过，也不会漏掉任何数字。

<div class="mp-quote">
  <p>还有一条不太礼貌但很有用的提醒：这本手册不保证你能拿到 offer。它保证的是——你不会因为一个错数字去谈薪，也不会因为不知道"验收要签字"而在项目最后两周失眠。</p>
  <footer>本站能给的只有判断材料，不能给运气</footer>
</div>

## 接着读

- 想先把定义钉死：<a href="./what/is-it.html">定义：AI 落地的最后一公里，得有人亲自走</a>
- 想知道这岗位怎么来的：<a href="./what/origin.html">从 Palantir 说起</a>
- 想先看看钱：<a href="./market/salary.html">薪酬：中外区间与总包口径</a>
- 想直接测自己：<a href="./quiz.html">FDE 适配度自评</a>
- 想在通勤路上听完：<a href="./listen.html">把这本手册当成有声书</a>
