<script setup lang="ts">
// 首页 Hero：两道崖之间，一块木板。
// 左边是"实验室里已经很强的模型"，右边是"客户那套还没答应的生产环境"，
// 中间那段缝就是 FDE 站着的地方。纯几何 + 固定坐标，不碰 window / Math.random，
// 服务端与客户端渲染完全一致。

const STEPS = [
  { n: '01', zh: '听懂需求', en: 'DISCOVER' },
  { n: '02', zh: '接进系统', en: 'INTEGRATE' },
  { n: '03', zh: '评测过关', en: 'EVALUATE' },
  { n: '04', zh: '真的上线', en: 'SHIP' }
]
</script>

<template>
  <div class="fd-hero">
    <div class="fd-hero-frame">
      <div class="fd-hero-sky">
        <div class="fd-node fd-node--teal">
          <span class="fd-node-tag">MODEL / 实验室</span>
          <strong>模型已经很强</strong>
          <p>发布会上的那个演示，确实跑得漂亮。</p>
        </div>

        <svg
          class="fd-bridge"
          viewBox="0 0 200 96"
          role="img"
          aria-label="两道崖之间架着的一块木板，板上有四个工位：听懂需求、接进系统、评测过关、真的上线"
        >
          <!-- 左崖 -->
          <path d="M0 40 H54 L48 96 H0 Z" fill="currentColor" opacity="0.16" />
          <!-- 右崖 -->
          <path d="M146 30 H200 V96 H152 Z" fill="currentColor" opacity="0.16" />
          <!-- 缝里的水：虚线 -->
          <g stroke="var(--accent)" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.55">
            <path d="M66 74 q 10 -4 20 0" />
            <path d="M60 84 q 12 -5 24 0" />
            <path d="M112 78 q 10 -4 20 0" />
          </g>
          <!-- 木板（桥） -->
          <rect x="40" y="24" width="126" height="9" rx="4" fill="var(--lime)" />
          <g stroke="var(--ink)" stroke-width="1" stroke-dasharray="2 7" opacity="0.35">
            <path d="M50 28.5 H156" />
          </g>
          <!-- 板上的四个工位 -->
          <g fill="var(--accent)">
            <circle cx="60" cy="18" r="3.4" />
            <circle cx="92" cy="18" r="3.4" />
            <circle cx="124" cy="18" r="3.4" />
            <circle cx="152" cy="18" r="3.4" />
          </g>
          <!-- 右岸那面还没插稳的旗 -->
          <g transform="translate(176 6)">
            <path d="M0 2 V 24" stroke="var(--ink)" stroke-width="1.6" stroke-linecap="round" />
            <path d="M1 3 L 16 8 L 1 13 Z" fill="var(--coral)" />
          </g>
        </svg>

        <div class="fd-node fd-node--blue">
          <span class="fd-node-tag">FIELD / 现场</span>
          <strong>甲方还没点头</strong>
          <p>内网、老数据、验收单、周三早会上的那句"再改一版"。</p>
        </div>
      </div>

      <div class="fd-hero-steps">
        <div v-for="s in STEPS" :key="s.n" class="fd-hero-step">
          <span class="fd-hero-step-n">{{ s.n }}</span>
          <strong>{{ s.zh }}</strong>
          <span class="fd-hero-step-en">{{ s.en }}</span>
        </div>
      </div>

      <div class="fd-hero-status">
        <span class="fd-dot" aria-hidden="true"></span>
        <span>状态：已上线 · 客户在用 · 周报还没写</span>
      </div>
    </div>

    <p class="fd-hero-cap">
      这张图不是装饰：模型和现场之间那段没人负责的缝，就是这个岗位存在的全部理由。
    </p>
  </div>
</template>

<style scoped>
.fd-hero {
  position: relative;
  width: 100%;
  max-width: 520px;
  margin-inline: auto;
}

.fd-hero-frame {
  position: relative;
  padding: 24px 22px 20px;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background:
    radial-gradient(circle at 1px 1px, var(--grid-line) 1px, transparent 0),
    var(--panel);
  background-size: 26px 26px, auto;
  box-shadow: var(--shadow);
  color: var(--ink);
  transform: rotate(-1.4deg);
  overflow: hidden;
}

.fd-hero-frame::before {
  content: '';
  position: absolute;
  right: -28px;
  top: -28px;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle at 50% 50%, var(--coral-glow), transparent 70%);
  pointer-events: none;
}

.fd-hero-frame::after {
  content: '';
  position: absolute;
  inset: 10px;
  border: 1px dashed var(--line);
  border-radius: 20px;
  pointer-events: none;
}

.fd-hero-sky {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  position: relative;
  z-index: 1;
}

.fd-node {
  padding: 12px 14px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--panel-2);
}

.fd-node--teal {
  border-color: color-mix(in srgb, var(--accent) 45%, transparent);
}

.fd-node--blue {
  margin-left: 12%;
  border-color: color-mix(in srgb, var(--blue) 45%, transparent);
}

.fd-node-tag {
  display: block;
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--faint);
}

.fd-node strong {
  display: block;
  margin-top: 4px;
  font-size: 15px;
  font-weight: 720;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.fd-node p {
  margin: 4px 0 0;
  font-size: 12px;
  line-height: 1.6;
  color: var(--muted);
}

.fd-bridge {
  display: block;
  width: 100%;
  height: auto;
}

.fd-hero-steps {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px dashed var(--line-strong);
}

.fd-hero-step {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.fd-hero-step-n {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.14em;
  color: var(--accent);
}

.fd-hero-step strong {
  font-size: 12.5px;
  font-weight: 700;
  color: var(--ink);
}

.fd-hero-step-en {
  font-family: var(--font-mono);
  font-size: 8.5px;
  letter-spacing: 0.12em;
  color: var(--faint);
}

.fd-hero-status {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 14px;
  padding: 8px 12px;
  border: 1px dashed var(--line-strong);
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.06em;
  color: var(--ink-2);
}

.fd-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-soft);
  animation: fd-breathe 2.4s var(--ease) infinite;
}

@keyframes fd-breathe {
  0%,
  100% {
    opacity: 1;
    box-shadow: 0 0 0 3px var(--accent-soft);
  }
  50% {
    opacity: 0.45;
    box-shadow: 0 0 0 7px transparent;
  }
}

.fd-hero-cap {
  margin: 16px 6px 0;
  font-family: var(--font-mono);
  font-size: 10px;
  line-height: 1.7;
  letter-spacing: 0.04em;
  color: var(--faint);
  text-align: center;
}

@media (max-width: 960px) {
  .fd-hero-frame {
    transform: none;
  }

  .fd-node--blue {
    margin-left: 0;
  }
}

@media (max-width: 520px) {
  .fd-hero-steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .fd-hero-frame {
    padding: 18px 14px 16px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .fd-dot {
    animation: none;
  }
}
</style>
