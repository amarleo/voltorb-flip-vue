<script setup lang="ts">
import GameBoard from '@/components/GameBoard.vue';
import GameScore from '@/components/GameScore.vue'
</script>

<template>
  <main class="bg-board-tealGreen h-screen flex justify-center items-center">
    <GameBoard />
    <GameScore />
  </main>
</template>
