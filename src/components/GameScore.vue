<script setup lang="ts">

import { useScoreStore } from '@/stores/score';
import { useGameStatusStore } from '@/stores/gameStatus';
import ModalWindow from './utils/ModalWindow.vue';

const score = useScoreStore()
const gameStatus = useGameStatusStore()

</script>

<template>
  <div>
    <span>Current Score: {{ score.currentScore }}</span>
  </div>
  <ModalWindow/>
</template>