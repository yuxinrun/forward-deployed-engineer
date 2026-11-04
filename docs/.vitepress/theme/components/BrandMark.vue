<script setup lang="ts">
import { withBase } from 'vitepress'

withDefaults(defineProps<{ variant?: 'pill' | 'card' }>(), { variant: 'pill' })
</script>

<template>
  <div :class="['mp-brand', `mp-brand--${variant}`]">
    <img
      :src="withBase('/bridge-fish.svg')"
      alt="鱼心快跑：戴着安全帽、正把一块木板架到对面悬崖上的青色小鱼"
      width="1024"
      height="1024"
    />
    <div class="mp-brand-copy">
      <strong>鱼心快跑</strong>
      <span>鱼心快跑，先到现场</span>
    </div>
  </div>
</template>
