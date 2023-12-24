import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useGameStatusStore = defineStore('gameStatus', () => {
  const gameOver = ref(false)

  const setGameOver = () => {
    gameOver.value = true;
  }

  const setNewGame = () => {
    gameOver.value = false;
  }

  return { gameOver, setGameOver, setNewGame }
})