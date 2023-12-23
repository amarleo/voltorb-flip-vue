<script setup lang="ts">
import { ref } from 'vue';

let showModal = ref(false);
const closeModal = () => {
  showModal.value = false
}
</script>

<template>
  <Teleport to="body">
    <div v-if="showModal" class="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-8 rounded-lg shadow-md w-96 flex flex-col justify-center items-center">
        <span>GAME OVER</span>
        <button @click="closeModal" class="bg-board-tealGreen hover:bg-board-darkTeal text-white font-bold py-2 px-4 rounded text-xs">Try Again</button>
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>