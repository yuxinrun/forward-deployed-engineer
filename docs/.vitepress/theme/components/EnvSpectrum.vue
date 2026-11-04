<script setup lang="ts">
// 四种运行环境：越往右，公网越远，你要自己带的东西越多。
// 条长度是本站给的相对刻度（0–100），只用来表达「这一档比上一档更难拿东西」；
// 每一档的具体约束都取自本页正文里那些有署名的句子。

const ENVS = [
  {
    n: 'Env 01',
    name: '客户云账户',
    net: 82,
    prep: 20,
    dep: '依赖能直接拉，pip / docker 都活着',
    sign: '账号 owner + 一次安全评审',
    stuck: '权限谁给、账单谁付、你走后谁维护',
    tone: 'lime'
  },
  {
    n: 'Env 02',
    name: '混合云 / 私有化',
    net: 55,
    prep: 48,
    dep: '能拉，但要走跳板机与代理白名单',
    sign: '信息中心 + 安全，两边口径不一定一致',
    stuck: '身份与数据的双向边界：外面算、里面存',
    tone: 'accent'
  },
  {
    n: 'Env 03',
    name: '内网 / 气隙',
    net: 18,
    prep: 82,
    dep: '离线包（从业者给过 15GB 这个量级）',
    sign: '介质带进去要有人签字、有人陪同',
    stuck: '代码不能出机房，评审只能远程开麦',
    tone: 'blue'
  },
  {
    n: 'Env 04',
    name: '边缘与物理设备',
    net: 8,
    prep: 95,
    dep: '驱动、固件、模型权重要一起对上硬件版本',
    sign: '车间安全 + 生产排期，倒班配合',
    stuck: '停机窗口只有夜班那四十分钟',
    tone: 'coral'
  }
]
</script>

<template>
  <div class="fd-widget" data-listen="skip">
    <div class="fd-widget-head">
      <span class="fd-widget-title">Infra · 离公网越远，活越难干</span>
      <p class="fd-widget-sub">左条 = 还能不能拿到东西；右条 = 你得自己带多少东西</p>
    </div>

    <div class="fd-es-grid">
      <article v-for="e in ENVS" :key="e.n" class="fd-es-col">
        <p class="fd-es-n">{{ e.n }}</p>
        <h3 class="fd-es-name">{{ e.name }}</h3>

        <div class="fd-es-meter">
          <span class="fd-es-k">能拿到</span>
          <span class="fd-es-track"><i :style="{ width: e.net + '%' }" :class="'fd-es-bar--' + e.tone"></i></span>
        </div>
        <div class="fd-es-meter">
          <span class="fd-es-k">要自带</span>
          <span class="fd-es-track"><i :style="{ width: e.prep + '%' }" class="fd-es-bar--coral"></i></span>
        </div>

        <dl class="fd-es-dl">
          <div>
            <dt>依赖怎么来</dt>
            <dd>{{ e.dep }}</dd>
          </div>
          <div>
            <dt>谁签字</dt>
            <dd>{{ e.sign }}</dd>
          </div>
          <div>
            <dt>最常卡在这</dt>
            <dd class="fd-es-stuck">{{ e.stuck }}</dd>
          </div>
        </dl>
      </article>
    </div>

    <p class="fd-cap">
      四条并排看，结论很反直觉：<b>技术难度不在云，在「没有云」</b>。同一份代码，在第一档是一条命令，在第四档是一整套流程——
      离线包怎么打、介质谁带、审批几天、停机窗口几点。所以本页那句准备方式是真的：找一个不能上网的虚拟机，把你以为「一条命令就能装好」的东西装一遍。
    </p>
  </div>
</template>

<style scoped>
.fd-es-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
}

.fd-es-col {
  min-width: 0;
  padding: 12px 12px 14px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--panel-2);
}

.fd-es-n {
  margin: 0;
  font-family: var(--font-mono);
  font-size: 8.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--faint);
}

.fd-es-name {
  margin: 3px 0 10px;
  font-size: 13.5px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--ink);
}

.fd-es-meter {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
}

.fd-es-k {
  flex: 0 0 42px;
  font-family: var(--font-mono);
  font-size: 8.5px;
  letter-spacing: 0.04em;
  color: var(--faint);
}

.fd-es-track {
  flex: 1 1 auto;
  height: 7px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--line-strong) 55%, transparent);
  overflow: hidden;
}

.fd-es-track i {
  display: block;
  height: 100%;
  border-radius: 999px;
}

.fd-es-bar--lime {
  background: var(--lime);
}

.fd-es-bar--accent {
  background: var(--accent);
}

.fd-es-bar--blue {
  background: var(--blue);
}

.fd-es-bar--coral {
  background: var(--coral);
}

.fd-es-dl {
  margin: 12px 0 0;
  padding-top: 10px;
  border-top: 1px dashed var(--line-strong);
}

.fd-es-dl dt {
  font-family: var(--font-mono);
  font-size: 8.5px;
  letter-spacing: 0.08em;
  color: var(--accent);
}

.fd-es-dl dd {
  margin: 1px 0 8px;
  font-size: 11.5px;
  line-height: 1.55;
  color: var(--muted);
  overflow-wrap: anywhere;
}

.fd-es-dl dd:last-child {
  margin-bottom: 0;
}

.fd-es-stuck {
  color: var(--ink-2) !important;
}

@media (max-width: 1000px) {
  .fd-es-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .fd-es-grid {
    grid-template-columns: 1fr;
  }
}
</style>
