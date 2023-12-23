<script setup lang="ts">

defineProps({
  totalPoints: Number,
  totalBombs: Number,
});
</script>

<template>
  <div class="w-14 h-14 bg-red-500 border-solid border-4 border-gray-400">
    <div class="flex flex-col items-center">
      <div>
        <span>{{ totalPoints }}</span>
      </div>
      <div>
        <span>V: {{ totalBombs }}</span>
      </div>
    </div>
  </div>
</template>