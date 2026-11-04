<script setup lang="ts">
// 十个翻车点：每条的「症状」是现场能观察到的现象，「解法」限制在一个人当天能启动的动作。
// 阶段计数由本页这十条自己统计（不是市场数据）——它只说明这些坑集中在哪一段。

type Pit = {
  n: string
  title: string
  phase: string
  symptom: string
  fix: string
  src: string
  tone: 'teal' | 'blue' | 'coral' | 'lime'
}

const PITS: Pit[] = [
  {
    n: '01',
    title: '脏数据不会报错，它看起来像成功',
    phase: 'P1',
    symptom: '字段有值、类型正确、结果"合理"，但语义不是业务要的那个；或者数据量一夜暴增把进程撑爆',
    fix: '上线前先做一份数据对账：抽 20 行让业务方逐行确认"这一行是不是你以为的意思"，并把空值、时间戳、枚举值单列',
    src: '真实事故：某表时间戳为空被当成 epoch（1970-01-01），数据量瞬间爆炸导致 OOM——"脏数据不会报错，它会看起来像成功" [B]',
    tone: 'coral'
  },
  {
    n: '02',
    title: '用干净样本做 POC',
    phase: 'P1',
    symptom: 'POC 漂亮，接生产数据第一周全部重来；准确率从 95% 掉到没人敢报',
    fix: 'POC 直接用客户最脏的那一份数据，并把"失败条件"写进产出物：什么情况下这件事不该继续',
    src: '"我们懂所有设计要求，唯一没做过的是站在客户楼里让系统跑他们的生产数据" [B]',
    tone: 'coral'
  },
  {
    n: '03',
    title: '"顺手加个小功能"',
    phase: 'P0/P2',
    symptom: '范围一点点扩大，交付日期不动；三个月后没人说得清这个项目原本要做什么',
    fix: '任何改动走变更单，让"预算、周期、范围必须动一样"变成显式决定；范围外加需求直接按停项目',
    src: '"顺手加个小功能"被从业者写成项目慢性自杀 [A]；小团队铁律："需求和钱死死咬住" [C]',
    tone: 'lime'
  },
  {
    n: '04',
    title: '把演示当成生产',
    phase: 'P1/P2',
    symptom: '客户会上掌声很好，回去两周没人再打开；截图很漂亮，但没人复测过',
    fix: '汇报只给三行：覆盖多少人、活跃率、每人省多少时间。用例数量和 demo 数量一律不写',
    src: '"上线了多少用例""做了多少 demo"正是被批评的那类自证口径 [A]',
    tone: 'coral'
  },
  {
    n: '05',
    title: '没有评测，所以没人敢签字',
    phase: 'P2/P4',
    symptom: '评审会上所有人都同意"看起来不错"，没有一个人愿意在验收单上写名字',
    fix: '还原用户原有的验证动作——做一个能"双击看内容"的查看器，比写一份指标报告更容易获批',
    src: 'Parquet 迁移案例：查看器上线后两天获批；坑是没有还原那位工程师的 CSV 人工核对习惯 [B]',
    tone: 'teal'
  },
  {
    n: '06',
    title: '安全评审最后两周才上桌',
    phase: 'P2',
    symptom: '架构、权限、审计三条各提一版要求，全部要返工；数据流向没人画过',
    fix: '进场第一周就交一张数据流向图，标清什么数据出不出域、谁审批、日志留多久',
    src: '私有化三条硬约束：数据驻留、SOC 2 审计、代码不出机房 [A]；国内券商案例把开发机也放进客户机房 [C]',
    tone: 'blue'
  },
  {
    n: '07',
    title: '用平均延迟汇报，被 P99 打脸',
    phase: 'P2/P3',
    symptom: '你说"平均 800 毫秒"，客户运维问"最慢的那 1% 是多少、超时了怎么办"，现场静默',
    fix: '三张纸一次交出去：P99/尾部延迟、单次调用成本、每人每月成本，加一句"停掉它会损失什么"',
    src: '评审指标清单里点名尾部延迟、token 成本与上下文预算——"平均延迟会在现场被 P99 打脸" [A]',
    tone: 'blue'
  },
  {
    n: '08',
    title: '老板报喜，员工不用',
    phase: 'P3',
    symptom: '"日活 12"和"高度认可"同时出现在一份汇报里；一线在用自己带来的工具',
    fix: '把采用度当交付物：每周回收坏例、叫出三个真实用户的名字、让他们当着你的面操作一次',
    src: 'MIT NANDA 观察：高管宣称成功、一线说"几乎根本没在使用"，约九成员工在用个人渠道带来的工具 [A]',
    tone: 'coral'
  },
  {
    n: '09',
    title: '临时件被当成理所当然',
    phase: 'P3/P5',
    symptom: '一个为迁移写的小脚本跑了一年、服务十万用户，却始终没进产品；出问题时没人认领',
    fix: '每个临时件建一条"转正"记录：谁依赖它、修它要花几天、不修的话谁负责',
    src: '"Every shortcut you ship becomes something you own."（你发出的每一个捷径，都会变成你背上的一笔债）[B]',
    tone: 'lime'
  },
  {
    n: '10',
    title: '验收条款写成形容词',
    phase: 'P4',
    symptom: '合同写"效果提升 30%"，验收会上没人能证明；中途换了分管领导，"验收先放一放"',
    fix: '交付物标准写成"可运行的系统"而不是"方案文档"，每条都能当场复测；遗留问题清单带责任方',
    src: '合同条款建议原话 [A]；终验真实卡点原话"我们新换了一位分管领导…验收先放一放" [C]',
    tone: 'blue'
  }
]

const PHASES = ['P0', 'P1', 'P2', 'P3', 'P4', 'P5'] as const

const countOf = (p: string) => PITS.filter((x) => x.phase.includes(p)).length
const MAXC = Math.max(...PHASES.map(countOf))

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
      <span class="fd-widget-title">Pitfalls · 十个，按撞上的阶段排</span>
      <p class="fd-widget-sub">每条三行：症状（现场能观察到什么）、解法（一个人当天能启动的动作）、依据（谁说的，什么等级）。P0–P5 是「项目全生命周期」那一页的六段轨道。</p>
    </div>

    <div class="fd-pf-dist">
      <p class="fd-pf-dist-title">本页十条按阶段分布（本站统计自己的十条，不是市场数据）</p>
      <ul>
        <li v-for="p in PHASES" :key="p">
          <span class="fd-pf-p">{{ p }}</span>
          <span class="fd-pf-track" role="img" :aria-label="`PITFALLS 里落在 ${p} 段的条数：${countOf(p)}`">
            <i :style="{ width: `${(countOf(p) / MAXC) * 100}%` }"></i>
          </span>
          <span class="fd-pf-n">{{ countOf(p) }}</span>
        </li>
      </ul>
      <p class="fd-pf-dist-cap">分布很说明问题：<b>P1 和 P2 最密</b>。也就是"数据接进来"和"要给人运维"这两段——恰好是从写代码切换到写文档、开评审会的位置。</p>
    </div>

    <ol class="fd-pf-list">
      <li v-for="p in PITS" :key="p.n" class="fd-pf-item" :style="{ borderLeftColor: toneVar[p.tone] }">
        <div class="fd-pf-head">
          <span class="fd-pf-n">{{ p.n }}</span>
          <strong>{{ p.title }}</strong>
          <span class="fd-pf-phase">{{ p.phase }}</span>
        </div>
        <p class="fd-pf-row"><b>症状</b><span>{{ p.symptom }}</span></p>
        <p class="fd-pf-row"><b>解法</b><span>{{ p.fix }}</span></p>
        <p class="fd-pf-src">{{ p.src }}</p>
      </li>
    </ol>

    <p class="fd-cap">
      十条里只有 3 条的根因是技术（01、02、07），其余 7 条的根因是<b>沟通、文档、责任分配</b>。
      这也是这一行最反直觉的地方：项目不是死在模型上，是死在"没人愿意签字"和"没人记得谁说过要什么"上。
      RAND 那份研究（65 次访谈，超过八成 AI 项目失败，约为普通 IT 项目失败率两倍）给的五条根因里，
      <b>缺乏领导支持、问题定义错误、数据质量</b>排在前三 [A]——没有一条是"模型不够强"。
    </p>
  </div>
</template>

<style scoped>
.fd-pf-dist {
  margin-bottom: 14px;
  padding: 10px 12px;
  border: 1px dashed var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--panel);
}

.fd-pf-dist-title,
.fd-pf-dist-cap {
  margin: 0;
  font-size: 10.5px;
  line-height: 1.6;
  color: var(--muted);
}

.fd-pf-dist-title {
  margin-bottom: 7px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-2);
}

.fd-pf-dist ul {
  margin: 0 0 7px;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 8px;
}

.fd-pf-dist li {
  display: grid;
  gap: 3px;
  justify-items: start;
}

.fd-pf-p {
  font-family: var(--font-mono);
  font-size: 10.5px;
  color: var(--muted);
}

.fd-pf-track {
  display: block;
  width: 100%;
  height: 8px;
  border: 1px solid var(--line-strong);
  border-radius: 3px;
  background: var(--panel-2);
  overflow: hidden;
}

.fd-pf-track i {
  display: block;
  height: 100%;
  background: var(--accent);
  opacity: 0.7;
}

.fd-pf-n {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--ink);
}

.fd-pf-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 9px;
}

.fd-pf-item {
  padding: 10px 12px 9px;
  border: 1px solid var(--line);
  border-left: 3px solid var(--accent);
  border-radius: var(--radius-sm);
  background: var(--panel-2);
}

.fd-pf-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 5px;
}

.fd-pf-head .fd-pf-n {
  font-size: 10.5px;
  color: var(--muted);
}

.fd-pf-head strong {
  font-size: 13.5px;
  color: var(--ink);
}

.fd-pf-phase {
  margin-left: auto;
  padding: 1px 7px;
  border: 1px dashed var(--line-strong);
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: 9.5px;
  letter-spacing: 0.05em;
  color: var(--ink-2);
  white-space: nowrap;
}

.fd-pf-row {
  display: grid;
  grid-template-columns: 46px minmax(0, 1fr);
  gap: 8px;
  margin: 2px 0;
  font-size: 11.5px;
  line-height: 1.6;
  color: var(--ink-2);
}

.fd-pf-row b {
  font-family: var(--font-mono);
  font-size: 9.5px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--muted);
  padding-top: 2px;
}

.fd-pf-src {
  margin: 6px 0 0;
  padding-top: 5px;
  border-top: 1px dashed var(--line);
  font-size: 10.5px;
  line-height: 1.6;
  color: var(--muted);
  overflow-wrap: anywhere;
}

@media (max-width: 820px) {
  .fd-pf-dist ul {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .fd-pf-row {
    grid-template-columns: minmax(0, 1fr);
    gap: 1px;
  }
}
</style>
