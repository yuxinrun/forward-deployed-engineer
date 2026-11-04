<script setup lang="ts">
// 国内现场的两张图：一条信创适配栈（你要在哪四层里逐条核实），一段回款链条（钱挂在哪些字上）。
// 全部来自 .qoder/research-cn.md 第三节的 2026-11-05 快照。厂商/服务商软文口径的条目一律标 [C]，
// 「常见档位」那几个数字出自无署名文库资料，不是国家标准——图里把这句写在显眼处。

type Layer = {
  lv: string
  name: string
  items: string
  trap: string
  grade: string
}

const STACK: Layer[] = [
  {
    lv: 'L4',
    name: '监控与运维',
    items: '原有探针 → 在国产芯片 + 国产 OS + 国产数据库的异构环境里可能无法运行',
    trap: '「适配清单是硬门槛……每一项都需要逐条核实兼容性列表，而非看宣传口径」',
    grade: '[B]'
  },
  {
    lv: 'L3',
    name: '制品库与工具链',
    items: 'JFrog Artifactory、Sonatype Nexus 等境外商业软件',
    trap: '不支持国产芯片与国产 OS，且镜像存储/传输加密不符合国密标准，过不了等保与金融监管',
    grade: '[B]'
  },
  {
    lv: 'L2',
    name: '数据库',
    items: '达梦、人大金仓、神州通用、OceanBase、openGauss',
    trap: '「支持达梦 V8、OceanBase 等国产数据库」要写成可测条款，而不是兼容声明',
    grade: '[B]'
  },
  {
    lv: 'L1',
    name: '操作系统',
    items: '银河麒麟、统信 UOS、中标麒麟、中科方德、红旗、openEuler',
    trap: '典型验证组合是「麒麟 V10 + 鲲鹏 920」，适配验证阶段本身就要 1–2 个月',
    grade: '[B]'
  },
  {
    lv: 'L0',
    name: '芯片与指令集',
    items: '飞腾、鲲鹏、龙芯、兆芯、海光、申威——涉及 X86、ARM64、LoongArch、MIPS 四套指令集',
    trap: '客户端要同时兼容四种 CPU 架构；同一份二进制不会自动到处能跑',
    grade: '[B]'
  }
]

type Pay = {
  stage: string
  gate: string
  block: string
  fix: string
  grade: string
  tone: 'teal' | 'blue' | 'coral' | 'lime'
}

const MONEY: Pay[] = [
  {
    stage: '合同生效 / 预付',
    gate: '售前阶段就要把验收条件写进去',
    block: '"验收这件事，经常被\'领导问数\'、专家评审、内部 OA 流程反复卡住"',
    fix: '「验收不是末尾，是售前就要规划的事」；传统软件报价留 20%–30% 缓冲',
    grade: '[A]'
  },
  {
    stage: '模块初验',
    gate: '一个模块一套可复测的数字',
    block: '客户以模块缺陷为由拖延整体尾款（模块与整体系统的关联性风险）',
    fix: '把交付物标准写成"可运行的系统"而不是"方案文档"，每条都能当场复测',
    grade: '[C]'
  },
  {
    stage: '整体终验',
    gate: '有人签字 + 有人接手',
    block: '"我们新换了一位分管领导，对目前的效果还有些新想法，验收先放一放"',
    fix: '乙方说做完了、甲方说不能用，项目就收不了尾——交付物里要有运维交接与值班人姓名',
    grade: '[C]'
  },
  {
    stage: '质保期与尾款',
    gate: '"最后一笔款的释放直接挂在验收上"',
    block: '功能性 Bug 免费修、新需求走变更单；质保别写"终身维护"',
    fix: '文库类谈判资料给出过"初验+终验双节点""15% 质保金""18 个月质保"这类档位——注意：它们不是国家标准',
    grade: '[A]/[C]'
  }
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
      <span class="fd-widget-title">Field CN · 五层适配栈，和一段回款链条</span>
      <p class="fd-widget-sub">左图决定"能不能跑起来"，右图决定"能不能收钱"。国内 FDE 的项目死法，绝大多数落在右边那张图的第一行和第三行。</p>
    </div>

    <div class="fd-cf-cols">
      <section class="fd-cf-col">
        <p class="fd-cf-sub">信创适配栈：从下往上逐层核实</p>
        <ol class="fd-cf-stack">
          <li v-for="l in STACK" :key="l.lv" class="fd-cf-layer">
            <span class="fd-cf-lv">{{ l.lv }}</span>
            <span class="fd-cf-body">
              <b>{{ l.name }}</b>
              <em>{{ l.items }}</em>
              <span class="fd-cf-trap">{{ l.trap }} {{ l.grade }}</span>
            </span>
          </li>
        </ol>
        <p class="fd-cf-note">
          交付方式的硬约束：初始部署与后续升级"都通过离线包完成"；而"信创适配并非\'能跑起来\'即可，
          而是需要在国产环境下达到生产级可用的性能标准" [C]。周期口径（服务商软文）：
          "简单场景1-2个月，中等复杂度3-6个月，大型项目可能一年以上" [C]。
        </p>
      </section>

      <section class="fd-cf-col">
        <p class="fd-cf-sub">回款链条：钱挂在哪些字上</p>
        <ol class="fd-cf-money">
          <li v-for="(m, i) in MONEY" :key="m.stage" class="fd-cf-node" :style="{ borderLeftColor: toneVar[m.tone] }">
            <span class="fd-cf-i">{{ String(i + 1).padStart(2, '0') }}</span>
            <b>{{ m.stage }}</b>
            <p class="fd-cf-gate">过关条件：{{ m.gate }}</p>
            <p class="fd-cf-block">真实卡点：{{ m.block }}</p>
            <p class="fd-cf-fix">本站建议动作：{{ m.fix }} <span class="fd-cf-g">{{ m.grade }}</span></p>
          </li>
        </ol>
        <p class="fd-cf-note">
          节奏侧的原话（ToB 服务商 JD 正文摘要）："同步每日现场交付日报、每周进度复盘台账，同步上线数据、对接记录、权限清单全量交付归档"；
          "快速响应系统卡顿、接口报错、模型调用异常等突发现场技术问题，当日闭环常规故障" [B]。
          这一栏把"驻场"两个字拆开了看：<b>它是日报、台账、当日闭环和归档，不是"在那儿写代码"</b>。
        </p>
      </section>
    </div>

    <p class="fd-cap">
      两张图放在一起才是国内现场的完整画面：<b>技术上的难点在左边，商务上的难点在右边，而右边那条更常决定项目生死。</b>
      同一来源还把交付拆成两层——"产品交付（系统能不能跑、能不能用）"和"服务交付（帮客户做标杆、做汇报材料、做成果总结）"，
      并强调"服务交付不能替代产品。关系再好，产品差，项目一样会崩" [A]。
      反过来说也成立：产品再好，没人替你把汇报材料做完，尾款照样不释放。
    </p>
  </div>
</template>

<style scoped>
.fd-cf-cols {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
  gap: 12px;
  align-items: start;
}

.fd-cf-col {
  min-width: 0;
}

.fd-cf-sub {
  margin: 0 0 8px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-2);
}

.fd-cf-stack {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 6px;
}

.fd-cf-layer {
  display: grid;
  grid-template-columns: 28px minmax(0, 1fr);
  gap: 9px;
  padding: 8px 10px;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--panel-2);
}

.fd-cf-lv {
  font-family: var(--font-mono);
  font-size: 10.5px;
  color: var(--muted);
  padding-top: 2px;
}

.fd-cf-body {
  display: grid;
  gap: 2px;
  min-width: 0;
}

.fd-cf-body b {
  font-size: 12.5px;
  color: var(--ink);
}

.fd-cf-body em {
  font-style: normal;
  font-size: 11px;
  line-height: 1.55;
  color: var(--ink-2);
}

.fd-cf-trap {
  font-size: 10.5px;
  line-height: 1.55;
  color: var(--muted);
  padding-top: 4px;
  border-top: 1px dashed var(--line);
  margin-top: 3px;
}

.fd-cf-money {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 8px;
}

.fd-cf-node {
  position: relative;
  padding: 9px 11px 8px;
  border: 1px solid var(--line);
  border-left: 3px solid var(--accent);
  border-radius: var(--radius-sm);
  background: var(--panel-2);
}

.fd-cf-i {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--muted);
  margin-right: 7px;
}

.fd-cf-node b {
  font-size: 12.5px;
  color: var(--ink);
}

.fd-cf-node p {
  margin: 4px 0 0;
  font-size: 11px;
  line-height: 1.6;
  color: var(--ink-2);
}

.fd-cf-node p b {
  font-size: 11px;
}

.fd-cf-node p.fd-cf-block {
  color: var(--coral);
}

.fd-cf-g {
  font-family: var(--font-mono);
  font-size: 9.5px;
  color: var(--muted);
}

.fd-cf-note {
  margin: 8px 0 0;
  padding-top: 7px;
  border-top: 1px dashed var(--line);
  font-size: 10.5px;
  line-height: 1.65;
  color: var(--muted);
}

.fd-cap {
  margin-top: 12px;
}

@media (max-width: 900px) {
  .fd-cf-cols {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
