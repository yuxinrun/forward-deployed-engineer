<script setup lang="ts">
// 项目轨道：从"合同还没签"到"第二个部门来找你"。
// 每段的死法不是编的：它们在各家复盘里出现的频率，基本就是这个顺序。

const PHASES = [
  {
    n: 'P0',
    name: '商机与范围',
    who: '销售 + 你',
    goal: '把"我们想要个 AI"翻译成一句能验收的话',
    out: ['一页纸问题定义', '范围边界与不做清单', '数据可得性初判'],
    die: '为了让单子往前走，把"能不能做"说成"我们会做"',
    weeks: '1–3 周'
  },
  {
    n: 'P1',
    name: 'POC / 试点验证',
    who: '你一个人与一台笔记本',
    goal: '用真数据证明这条路走得通，成本能承受',
    out: ['能跑的端到端链路', '一份评测结果（准确率不是唯一指标）', '明确的失败条件'],
    die: '拿干净样本做 POC；或者 POC 成功后没人定义"接下来谁拍板"',
    weeks: '2–6 周'
  },
  {
    n: 'P2',
    name: '生产化',
    who: '你 + 客户 IT + 平台/安全',
    goal: '把它变成一个可以被运维、被审计、被叫醒的系统',
    out: ['部署方案与回滚方案', '身份与权限接入', '日志/指标/告警', '安全与合规评审通过'],
    die: '安全评审在最后两周才第一次上桌；或者延迟与 token 成本没人算过',
    weeks: '4–12 周'
  },
  {
    n: 'P3',
    name: '上线与值守',
    who: '你 + 客户业务骨干',
    goal: '让真实用户在真实压力下用两周不骂人',
    out: ['培训与操作手册', '值班与升级路径', '每周用量与坏例复盘'],
    die: '把"上线"当终点：没有坏例回收机制，第三周口碑开始漏气',
    weeks: '2–8 周'
  },
  {
    n: 'P4',
    name: '验收与回款',
    who: '项目经理 + 法务财务 + 你',
    goal: '把交付物对齐到合同上那几行字',
    out: ['验收清单逐条勾', '遗留问题清单与责任方', '运维交接'],
    die: '合同里写的是"效果提升 30%"这种没法验收的话；或者交接时没人愿意接',
    weeks: '2–6 周（尾款可能更久）'
  },
  {
    n: 'P5',
    name: '扩展或产品化',
    who: '你 + 产品团队',
    goal: '把为这家客户写的东西，变成下一家客户能直接用的东西',
    out: ['可复用模块与配置化', '第二个部门的接入方案', '反馈进产品路线图'],
    die: '一直停在"这家客户专属"：毛利被定制吃光，你也变成外包',
    weeks: '持续'
  }
] as const
</script>

<template>
  <div class="fd-widget" data-listen="skip">
    <div class="fd-widget-head">
      <span class="fd-widget-title">Lifecycle · 六段轨道</span>
      <p class="fd-widget-sub">每段写清三件事：谁在场、交出什么、通常怎么死</p>
    </div>

    <div class="fd-lc-rail">
      <article v-for="p in PHASES" :key="p.n" class="fd-lc-stop">
        <header>
          <span class="fd-lc-n">{{ p.n }}</span>
          <strong>{{ p.name }}</strong>
          <span class="fd-lc-weeks">{{ p.weeks }}</span>
        </header>
        <p class="fd-lc-who">在场：{{ p.who }}</p>
        <p class="fd-lc-goal">{{ p.goal }}</p>
        <ul class="fd-lc-out">
          <li v-for="o in p.out" :key="o">{{ o }}</li>
        </ul>
        <p class="fd-lc-die">
          <span class="fd-lc-die-tag">常见死法</span>
          {{ p.die }}
        </p>
      </article>
    </div>

    <p class="fd-cap">
      P0 到 P1 你几乎一个人干活，从 P2 开始<b>每段的瓶颈都不是代码</b>：分别是安全评审、上线后的坏例回收、合同里那句没法验收的话。
      把这条轨道背下来，面试时你能问出"你们的 POC 到生产是谁拍的板"——这句话本身就值一级薪资。
    </p>
  </div>
</template>

<style scoped>
.fd-lc-rail {
  display: grid;
  gap: 12px;
}

.fd-lc-stop {
  position: relative;
  padding: 14px 16px 15px;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--panel-2);
}

.fd-lc-stop header {
  display: flex;
  align-items: baseline;
  gap: 10px;
  flex-wrap: wrap;
}

.fd-lc-n {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  color: var(--accent);
}

.fd-lc-stop strong {
  font-size: 14.5px;
  font-weight: 730;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.fd-lc-weeks {
  margin-left: auto;
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.08em;
  color: var(--faint);
}

.fd-lc-who {
  margin: 8px 0 0;
  font-size: 11px;
  color: var(--muted);
}

.fd-lc-goal {
  margin: 4px 0 0;
  font-size: 12.5px;
  line-height: 1.6;
  color: var(--ink-2);
}

.fd-lc-out {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 10px 0 0;
  padding: 0;
  list-style: none;
}

.fd-lc-out li {
  padding: 3px 9px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--panel);
  font-family: var(--font-mono);
  font-size: 9.5px;
  color: var(--ink-2);
}

.fd-lc-die {
  margin: 11px 0 0;
  padding: 9px 11px;
  border: 1px solid color-mix(in srgb, var(--coral) 32%, transparent);
  border-radius: 9px;
  background: var(--coral-soft);
  font-size: 11.5px;
  line-height: 1.6;
  color: var(--ink-2);
}

.fd-lc-die-tag {
  display: inline-block;
  margin-right: 7px;
  font-family: var(--font-mono);
  font-size: 8.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--coral);
  font-weight: 600;
}

@media (max-width: 620px) {
  .fd-lc-weeks {
    margin-left: 0;
    width: 100%;
  }
}
</style>
