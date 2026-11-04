<script setup lang="ts">
// 国内这一层的两件事：链条（谁出钱→谁干活→模型从哪来→最后站在哪儿）和牌子（谁在挂 FDE 这个名字）。
// 数字全部来自 .qoder/research-cn.md 的 2026-11-05 快照；[A] = 正文可照录，[B] = 摘要或媒体实录，[C] = 流传口径。
// 人民币月薪与美元 base 不混排：美元那张梯子在同名岗位的[薪酬]一页，本页只走人民币。

type Link = {
  idx: string
  role: string
  who: string
  called: string
  binds: string
  quote: string
  tone: 'teal' | 'blue' | 'coral' | 'lime'
}

const CHAIN: Link[] = [
  {
    idx: '01',
    role: '出钱的人',
    who: '甲方：整车、物流、出行、新能源、国企、医院、工厂',
    called: '「FDE 工程师（系统架构/解决方案方向）」<br>「AI FDE 工程师」',
    binds: '数据不出域，且<b>不信任 AI</b>。同一句话既是需求也是预算：全面 AI 化、提效 50%。',
    quote: '《中国企业家》原文：「国内的大部分企业不信任AI」「甲方一言不合就让你做定制」[A]',
    tone: 'lime'
  },
  {
    idx: '02',
    role: '签合同干活的人',
    who: '集成商、ISV、软件公司、咨询公司',
    called: '「前沿部署开发工程师（FDE）」<br>「研发部前沿部署工程师（FDE）」',
    binds: '人天报价与验收回款挂在同一条链上，日报周报台账、当日闭环是节奏。',
    quote: '天津荣联汇智 JD 原文：「长期驻场在客户现场（时间占比可能高达50%或以上）」，8000–10000 元/月，本科，招 5 人 [A]',
    tone: 'teal'
  },
  {
    idx: '03',
    role: '提供模型的人',
    who: '模型厂商、云厂商',
    called: '「大模型 FDE」<br>「AI 前线部署工程师」「前向部署（FDE）专家」',
    binds: '标价最高，招人最难，而且驻场强度反而最低——条线各厂自己定，没有统一编制口径。',
    quote: '《中国企业家》原文：「要成为一个合格FDE的条件，是非常苛刻的，所以他才贵」；同文另一条：字节一侧「不要求FDE长期驻场…仅偶尔出差」[A]',
    tone: 'blue'
  },
  {
    idx: '04',
    role: '最后站着的人',
    who: '客户机房、车间、门店——链条的最后一环没有编制',
    called: '没有岗位名。甲方会给一个「方便理解的身份」',
    binds: '国产芯片 + 国产 OS + 国产数据库的异构环境，升级靠离线包，节假日可能封网。',
    quote: '政府报道里的现场：老师傅说「4到6都行」，26 岁的金珵科技前线部署工程师「非要追问：4、5、6分别对应什么状态」[A]',
    tone: 'coral'
  }
]

type Roster = {
  kind: string
  name: string
  pay: string
  grade: 'A' | 'B'
  read: string
}

// 「谁在挂这块牌子」：主体类型 × 实际岗位名 × 抓取当日标价 × 这一栏应该怎么读
const ROSTER: Roster[] = [
  { kind: '模型厂商 / 大厂', name: '「AI FDE」「前向部署（FDE）专家」「FDE 专家」', pay: '3–12 万 / 月', grade: 'B', read: '数字来自媒体对招聘页的实录，页面本身需登录，本站没有任何一条直读正文' },
  { kind: '云厂商', name: '「人工智能 FDE」「大模型前线部署工程师」', pay: '2–6 万 / 月', grade: 'B', read: '偏政企与大客户交付条线，媒体汇编口径' },
  { kind: '上市甲方', name: '「FDE 工程师（系统架构/解决方案方向）」「（项目管理方向）」', pay: '40–80k / 月', grade: 'B', read: '同一家整车厂把 FDE 拆成两个方向，其中项目管理方向写「学历不限」' },
  { kind: '国企背景', name: '「FDE 专家【国企】」', pay: '30–50k · 16 薪', grade: 'B', read: '以软件/信息服务公司名义挂出，标注【国企】' },
  { kind: '软件 / ISV', name: '「研发部前沿部署工程师（FDE）(J21623)」', pay: '未公开', grade: 'B', read: '岗位归在研发部；职责写了「转化为通用产品能力或解决方案组件」，最后一条是「完成领导交办的其他工作」' },
  { kind: 'IT 服务商 / 集成商', name: '「前沿部署开发工程师（FDE）」', pay: '8–10k / 月', grade: 'A', read: '本站唯一能直读正文的非大厂岗位，也是全篇的定价锚' },
  { kind: '咨询公司', name: '「前沿部署工程师(FDE)」「高级前沿部署工程师(Senior FDE)」', pay: '20–30k / 月', grade: 'B', read: '同一家咨询公司同时开初中级与 Senior 两档，是建制化的直接证据' },
  { kind: '人力 / 猎头', name: '「FDE（前沿部署工程师/医药）」', pay: '28–35k / 月', grade: 'B', read: '岗位名直接带甲方行业标签，代招' },
  { kind: '渠道 / 代理', name: '「FDE（无责底薪+高提成）」「FDE-AI前沿部署工程师-（豆包企业版）」', pay: '6–15k / 月', grade: 'B', read: '实质是渠道销售岗。不计入行情，只用来证明这个名字正在被滥用' }
]

const toneVar = {
  teal: 'var(--accent)',
  blue: 'var(--blue)',
  coral: 'var(--coral)',
  lime: 'var(--lime)'
} as const
</script>

<template>
  <div class="fd-widget" data-listen="skip">
    <div class="fd-widget-head">
      <span class="fd-widget-title">China Stack · 同一个名字，站在链条的四段上</span>
      <p class="fd-widget-sub">国内不是「有没有 FDE」的问题，是「FDE 这三个字挂在链条哪一段」的问题。段位决定了月薪、驻场强度和你的真实交付物。</p>
    </div>

    <ol class="fd-cc-chain">
      <li v-for="l in CHAIN" :key="l.idx" class="fd-cc-link" :style="{ borderLeftColor: toneVar[l.tone] }">
        <p class="fd-cc-idx">{{ l.idx }}<span>{{ l.role }}</span></p>
        <p class="fd-cc-who">{{ l.who }}</p>
        <p class="fd-cc-lab">管它叫什么</p>
        <p class="fd-cc-called" v-html="l.called"></p>
        <p class="fd-cc-lab">卡在哪</p>
        <p class="fd-cc-binds" v-html="l.binds"></p>
        <p class="fd-cc-quote">{{ l.quote }}</p>
      </li>
    </ol>

    <div class="fd-cc-roster">
      <p class="fd-cc-roster-title">谁在挂这块牌子 · 2026-11-05 当日快照</p>
      <ul>
        <li v-for="r in ROSTER" :key="r.kind" class="fd-cc-row">
          <span class="fd-cc-kind">{{ r.kind }}</span>
          <span class="fd-cc-name">{{ r.name }}</span>
          <span class="fd-cc-pay">{{ r.pay }}<small :class="`fd-cc-g-${r.grade}`">{{ r.grade }}</small></span>
          <span class="fd-cc-read">{{ r.read }}</span>
        </li>
      </ul>
      <p class="fd-cc-note">
        「标价」一栏是<b>月薪人民币</b>，且分属三种互不相容的口径：大厂条线是媒体对招聘页的实录，
        甲方与服务商是招聘平台列表摘要，渠道岗根本不该进这张表。
        <b>本页不给「国内 FDE 平均月薪」</b>——同一时点最高与最低样本差约 10 倍，平均值在这里没有任何意义。
      </p>
    </div>

    <p class="fd-cap">
      把链条和牌子放在一起看，结论是一句不好听但有用的话：
      <b>国内招聘站上的「FDE」是一种交付编制，不是一个职级序列。</b>
      它被拆进研发部、HR 条线、项目管理方向和渠道销售，每一段的名字、单价和出差强度都不一样。
      所以投简历之前先做归类（谁发广告、挂在哪个部门、职责正文有没有「驻场」两个字），
      归类比头衔值钱。美元那一侧的 base 梯子在<b>薪酬</b>那一页，两套数字不要相加。
    </p>
  </div>
</template>

<style scoped>
.fd-cc-chain {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.fd-cc-link {
  position: relative;
  padding: 10px 12px 9px;
  border: 1px solid var(--line);
  border-left: 3px solid var(--accent);
  border-radius: var(--radius-sm);
  background: var(--panel-2);
  display: grid;
  gap: 2px;
  align-content: start;
}

.fd-cc-idx {
  margin: 0 0 4px;
  display: flex;
  align-items: baseline;
  gap: 7px;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--muted);
}

.fd-cc-idx span {
  font-family: var(--font-sans);
  font-size: 13.5px;
  font-weight: 700;
  letter-spacing: 0;
  color: var(--ink);
}

.fd-cc-who {
  margin: 0 0 6px;
  font-size: 11px;
  line-height: 1.5;
  color: var(--ink-2);
}

.fd-cc-lab {
  margin: 6px 0 1px;
  font-family: var(--font-mono);
  font-size: 9.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
}

.fd-cc-called {
  margin: 0;
  font-size: 11.5px;
  line-height: 1.6;
  color: var(--ink);
}

.fd-cc-binds {
  margin: 0;
  font-size: 11.5px;
  line-height: 1.6;
  color: var(--ink-2);
}

.fd-cc-quote {
  margin: 8px 0 0;
  padding-top: 6px;
  border-top: 1px dashed var(--line);
  font-size: 10.5px;
  line-height: 1.6;
  color: var(--muted);
}

.fd-cc-roster {
  margin-top: 14px;
  padding: 11px 12px;
  border: 1px dashed var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--panel);
}

.fd-cc-roster-title {
  margin: 0 0 8px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-2);
}

.fd-cc-roster ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.fd-cc-row {
  display: grid;
  grid-template-columns: 138px minmax(0, 1.1fr) 106px minmax(0, 1fr);
  gap: 9px;
  align-items: baseline;
  padding: 6px 0;
  border-top: 1px dashed var(--line);
}

.fd-cc-row:first-child {
  border-top: none;
}

.fd-cc-kind {
  font-size: 11.5px;
  font-weight: 700;
  color: var(--ink);
}

.fd-cc-name {
  font-size: 11px;
  line-height: 1.55;
  color: var(--ink-2);
  overflow-wrap: anywhere;
}

.fd-cc-pay {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--ink);
  white-space: nowrap;
}

.fd-cc-pay small {
  margin-left: 5px;
  padding: 1px 5px;
  border: 1px dashed var(--line-strong);
  border-radius: 999px;
  font-size: 9px;
  color: var(--muted);
}

.fd-cc-g-A small,
.fd-cc-g-A {
  color: var(--accent);
}

.fd-cc-read {
  font-size: 10.5px;
  line-height: 1.55;
  color: var(--muted);
  overflow-wrap: anywhere;
}

.fd-cc-note {
  margin: 9px 0 0;
  padding-top: 8px;
  border-top: 1px dashed var(--line);
  font-size: 10.5px;
  line-height: 1.65;
  color: var(--ink-2);
}

@media (max-width: 960px) {
  .fd-cc-chain {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .fd-cc-row {
    grid-template-columns: minmax(0, 1fr) 106px;
    row-gap: 2px;
  }

  .fd-cc-read {
    grid-column: 1 / -1;
  }
}

@media (max-width: 640px) {
  .fd-cc-chain {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
