<script setup lang="ts">
import { useScoreStore } from '@/stores/score';

const score = useScoreStore()
</script>

<template>
  <div>
    <span>Current Score: {{ score.currentScore }}</span>
  </div>
</template>