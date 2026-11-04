<script setup lang="ts">
// 脏数据的旅程：每一站都不报错，错误一路漂到最后一站才被人看见。
// 五站的名字来自本站读到的现场复盘；「悄悄错成什么样」那一行全部有出处或来自 JD 措辞。

const STOPS = [
  {
    n: '01',
    name: '源系统',
    en: 'SOURCE',
    fault: '空时间戳被当成 1970-01-01，行数瞬间爆炸',
    fix: '给每个字段决定「缺了怎么办」：报错 / 丢弃 / 标为未知'
  },
  {
    n: '02',
    name: '抽取与同步',
    en: 'SYNC',
    fault: '增量漏一天、全量重跑两遍，同一笔数据出现两次',
    fix: '按「源 + 时刻 + 规则」记出处，重跑幂等'
  },
  {
    n: '03',
    name: '清洗与建模',
    en: 'SHAPE',
    fault: '空金额补 0、空状态走默认值，三种都合法',
    fix: '默认值写成显式分支，不做隐式转换'
  },
  {
    n: '04',
    name: '语义层',
    en: 'ONTOLOGY',
    fault: '「活跃客户」三个部门三种算法，报表对得上、模型对不上',
    fix: '两周出一份字段字典，把「谁说了算」问出来'
  },
  {
    n: '05',
    name: '模型回答',
    en: 'ANSWER',
    fault: '输入合法、输出合法、只是全错，而且语气很自信',
    fix: '对量级异常告警；区间校验，而不是非空校验'
  }
]
</script>

<template>
  <div class="fd-widget" data-listen="skip">
    <div class="fd-widget-head">
      <span class="fd-widget-title">Data · 一条脏数据的完整旅程</span>
      <p class="fd-widget-sub">五站全绿 = 五站都在骗你</p>
    </div>

    <div class="fd-df-alert">
      <span class="fd-df-bell" v-for="s in STOPS" :key="s.n" aria-hidden="true">不报错</span>
      <p class="fd-df-alert-txt">
        这一路没有任何一站会抛异常：<b>校验通过、任务变绿、指标正常</b>。错误只在会议室里被发现——由那个每天真的在用结果的人。
      </p>
    </div>

    <ol class="fd-df-rail">
      <li v-for="s in STOPS" :key="s.n" class="fd-df-stop">
        <span class="fd-df-n">{{ s.n }}</span>
        <strong class="fd-df-name">{{ s.name }}</strong>
        <span class="fd-df-en">{{ s.en }}</span>
        <p class="fd-df-fault">{{ s.fault }}</p>
        <p class="fd-df-fix">
          <span>让它必然暴露</span>
          {{ s.fix }}
        </p>
      </li>
    </ol>

    <p class="fd-cap">
      最后一列不是「加校验」这么简单：本层的原则来自 Ganesh 那句
      <b>"A system that can improvise around a bad encoding will never tell you the encoding was bad."</b>
      ——能让坏编码糊弄过去的系统，永远不会告诉你编码坏了。所以每一站的对策都是同一件事：<b>把静默失败改成响亮失败。</b>
    </p>
  </div>
</template>

<style scoped>
.fd-df-alert {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  padding: 10px 12px;
  margin-bottom: 4px;
  border: 1px dashed var(--line-strong);
  border-radius: 12px;
  background: var(--panel-2);
}

.fd-df-bell {
  padding: 3px 9px;
  border: 1px solid color-mix(in srgb, var(--lime) 55%, transparent);
  border-radius: 999px;
  background: color-mix(in srgb, var(--lime) 16%, transparent);
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.08em;
  color: var(--ink-2);
  white-space: nowrap;
}

.fd-df-alert-txt {
  flex: 1 1 240px;
  margin: 0;
  font-size: 11.5px;
  line-height: 1.6;
  color: var(--muted);
}

.fd-df-alert-txt b {
  color: var(--ink-2);
  font-weight: 680;
}

.fd-df-rail {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
  margin: 16px 0 0;
  padding: 16px 0 0;
  list-style: none;
  border-top: 1px dashed var(--line-strong);
}

.fd-df-stop {
  position: relative;
  min-width: 0;
  padding: 12px 12px 14px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--panel-2);
}

.fd-df-n {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.14em;
  color: var(--coral);
}

.fd-df-name {
  display: block;
  margin-top: 3px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--ink);
}

.fd-df-en {
  display: block;
  font-family: var(--font-mono);
  font-size: 8px;
  letter-spacing: 0.12em;
  color: var(--faint);
}

.fd-df-fault {
  margin: 8px 0 0;
  font-size: 11.5px;
  line-height: 1.6;
  color: var(--ink-2);
  overflow-wrap: anywhere;
}

.fd-df-fix {
  margin: 8px 0 0;
  padding-top: 8px;
  border-top: 1px dotted var(--line-strong);
  font-size: 11px;
  line-height: 1.6;
  color: var(--muted);
  overflow-wrap: anywhere;
}

.fd-df-fix span {
  display: block;
  font-family: var(--font-mono);
  font-size: 8.5px;
  letter-spacing: 0.1em;
  color: var(--accent);
}

@media (max-width: 1000px) {
  .fd-df-rail {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .fd-df-rail {
    grid-template-columns: 1fr;
  }

  .fd-df-bell {
    font-size: 8.5px;
  }
}
</style>
