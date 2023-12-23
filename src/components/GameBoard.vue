<script setup lang="ts">
import GameCard from './GameCard.vue';
</script>

<template>
  <div class="bg-board-tealGreen h-96 w-96 grid grid-cols-5 p-2">
    <GameCard :multiplier=2 />
    <GameCard :multiplier=2 />
    <GameCard :multiplier=0 />

  </div>
</template>

<style scoped>

</style>