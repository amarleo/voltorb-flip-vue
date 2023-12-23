<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
  colIndex: Number,
  col: {
    type: Array as PropType<number[]>,
    required: true,
  }
});

/*const totalSum = (): Number => {
  return props.col.reduce((acc: number, row: Array<number>) => {
    return acc + row.reduce((sum: number, cell: number) => sum + cell, 0)
  }, 0);
}
*/
const totalBombs = (): Number => {
  return props.col?.reduce((count, value) => (value === 0 ? count + 1 : count), 0)
}
</script>

<template>
  <div class="w-14 h-14 bg-red-500 border-solid border-4 border-gray-400">
    <div class="flex flex-col items-center">
      <div>
        <span>{{  }}</span>
      </div>
      <div>
        <span>V: {{ totalBombs() }}</span>
      </div>
    </div>
  </div>
</template>