<script setup lang="ts">
  import { ref } from 'vue';

  // Multiplier is a number between 0 and 3. Zero means bomb
  defineProps({
    multiplier: {
      type: Number,
      validator: (value: number) => {
        return value <= 3 && value >= 0;
      }
    }
  })
  const isFlipped = ref(false);
  function flipCard() {
    if (!isFlipped.value) {
      isFlipped.value = true;
    }
  }
</script>

<template>
  <div class="relative w-14 h-14">
    <Transition name="flip-card">
      <div v-if="!isFlipped" class="absolute h-full w-full border-solid border-4 border-gray-400">
        <div 
          class="border-solid border-2 border-black grid grid-cols-3 h-full"
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
      <div v-else class="absolute h-full w-full border-solid border-4 border-gray-400 bg-red-400">
        <div class="flex justify-center items-center border-solid border-2 border-black h-full w-full">
          <span class="text-black">{{ multiplier }}</span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
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

