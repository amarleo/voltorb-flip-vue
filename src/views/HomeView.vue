<script setup lang="ts">
import GameBoard from '@/components/GameBoard.vue';
import GameScore from '@/components/GameScore.vue';
import { useGameStatusStore } from '@/stores/gameStatus';

const gameStatus = useGameStatusStore();


</script>

<template>
  <main class="bg-board-tealGreen h-screen flex justify-center items-center">
    <GameBoard />
    <GameScore />
  </main>
</template>
