<script setup lang="ts">
import GameCard from './GameCard.vue';
import GameRowStats from './GameRowStats.vue';

import { matrix } from '@/assets/matrix'
</script>

<template>
  <div class="bg-board-tealGreen h-96 w-96 grid grid-cols-6 p-2">
    <GameCard :multiplier="matrix[0][0]" />
    <GameCard :multiplier="matrix[0][1]" />
    <GameCard :multiplier="matrix[0][2]" />
    <GameCard :multiplier="matrix[0][3]" />
    <GameCard :multiplier="matrix[0][4]" />
    <GameRowStats :rowIndex="0" :row="matrix[0]" />


  </div>
</template>

<style scoped>

</style>