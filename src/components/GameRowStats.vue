<script setup lang="ts">
import type { PropType } from 'vue';
import { routerViewLocationKey } from 'vue-router';

const props = defineProps({
  rowIndex: Number,
  row: {
    type: Array as PropType<number[]>,
    required: true,
  }
});

const totalSum = (): Number => {
  return props.row?.reduce((acc, value) => acc + value, 0) || 0;
}

const totalBombs = (): Number => {
  return props.row?.reduce((count, value) => (value === 0 ? count + 1 : count), 0)
}
</script>

<template>
  <div class="w-14 h-14 bg-red-500 border-solid border-4 border-gray-400">
    <div class="flex flex-col items-center">
      <div>
        <span>{{ totalSum() }}</span>
      </div>
      <div>
        <span>V: {{ totalBombs() }}</span>
      </div>
    </div>
  </div>
</template>