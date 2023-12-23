<script setup lang="ts">

import { useScoreStore } from '@/stores/score';
import ModalWindow from './utils/ModalWindow.vue';


const score = useScoreStore()
</script>

<template>
  <div>
    <span>Current Score: {{ score.currentScore }}</span>
    <ModalWindow />
  </div>
</template>