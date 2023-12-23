<script setup lang="ts">

/*<div class="w-16 h-16 border-solid border-2 border-gray-400 grid grid-cols-3">
  <div class="aspect-w-1 aspect-h-1 bg-board-darkTeal"></div>
  <div class="aspect-w-1 aspect-h-1 bg-board-tealGreen"></div>
  <div class="aspect-w-1 aspect-h-1 bg-board-darkTeal"></div>

  <div class="aspect-w-1 aspect-h-1 bg-board-tealGreen"></div>
  <div class="aspect-w-1 aspect-h-1 bg-board-darkTeal"></div>
  <div class="aspect-w-1 aspect-h-1 bg-board-tealGreen"></div>

  <div class="aspect-w-1 aspect-h-1 bg-board-darkTeal"></div>
  <div class="aspect-w-1 aspect-h-1 bg-board-tealGreen"></div>
  <div class="aspect-w-1 aspect-h-1 bg-board-darkTeal"></div>
</div>
*/
import { ref } from 'vue';

const isFlipped = ref(false);
const number = ref(Math.floor(Math.random() * 10) + 1);
function flipCard() {
  if (!isFlipped.value) {
    isFlipped.value = true;
  }
}


</script>

<template>
<div class="card w-16 h-16">
  <Transition name="flip-card">
    <div v-if="!isFlipped" class="front h-full w-full">
      <div 
        class="border-solid border-2 border-gray-400 grid grid-cols-3 h-full"
        @click="flipCard"
      >
        <div class="aspect-w-1 aspect-h-1 bg-board-darkTeal"></div>
        <div class="aspect-w-1 aspect-h-1 bg-board-tealGreen"></div>
        <div class="aspect-w-1 aspect-h-1 bg-board-darkTeal"></div>
        <div class="aspect-w-1 aspect-h-1 bg-board-tealGreen"></div>
        <div class="aspect-w-1 aspect-h-1 bg-board-darkTeal"></div>
        <div class="aspect-w-1 aspect-h-1 bg-board-tealGreen"></div>
        <div class="aspect-w-1 aspect-h-1 bg-board-darkTeal"></div>
        <div class="aspect-w-1 aspect-h-1 bg-board-tealGreen"></div>
        <div class="aspect-w-1 aspect-h-1 bg-board-darkTeal"></div>
      </div>
    </div>
    <div v-else class="back h-full w-full bg-red-400"></div>
  </Transition>
</div>


</template>

<style scoped>
.card {
  position: relative;
}
.front, .back {
  position: absolute;
}

.flip-card-enter-active,
.flip-card-leave-active {
  transition: all 0.25s;
}

.flip-card-enter-from {
  opacity: 0;
  transform: rotateY(180deg);
}

.flip-card-leave-to {
  opacity: 0;
  transform: rotateY(180deg);
}
</style>

