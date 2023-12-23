<script setup lang="ts">
import GameCard from './GameCard.vue';
import GameRowStats from './GameRowStats.vue';
import GameColStats from './GameColStats.vue';
import { matrix } from '@/assets/matrix';
import GameRowColStats from './GameRowColStats.vue';

const getRowTotalBombs = (rowIndex: number): number => {
  return matrix[rowIndex].reduce((count, value) => (value === 0 ? count + 1 : count), 0)
}

const getRowTotalPoints = (rowIndex: number): number => {
  return matrix[rowIndex].reduce((acc, value) => acc + value, 0) || 0;  
}

const getColTotalBombs = (colIndex: number): number => {
  let numberOfBombs: number = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][colIndex] === 0) {
      numberOfBombs++;
    }
  }
  return numberOfBombs;
}

const getColTotalPoints = (colIndex: number): number => {
  let points: number = 0;
  for(let i = 0; i < matrix.length; i++) {
    points += matrix[i][colIndex]
  }
  return points;
}


</script>

<template>
  <div class="bg-board-tealGreen h-96 w-96 grid grid-cols-1 p-2">
    <div class="grid grid-cols-6" v-for="(row, rowIndex) in matrix" :key="rowIndex">
      <div v-for="(col, colIndex) in matrix" :key="colIndex">
        <GameCard :multiplier="matrix[rowIndex][colIndex]" />
        <GameRowColStats v-if="rowIndex === 4" :totalPoints="getColTotalPoints(colIndex)" :totalBombs="getColTotalBombs(colIndex)" class="mt-2"/>
      </div>
      <GameRowColStats :totalPoints="getRowTotalPoints(rowIndex)" :totalBombs="getRowTotalBombs(rowIndex)"/>
    </div>



  </div>
</template>

<style scoped>

</style>