import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useScoreStore = defineStore('score', () => {
  const currentScore: number = ref(0);
  // const globalScore = ref(0);
  
  const incrementCurrentScore = (multiplier: number) => {
    if (currentScore.value === 0) {
      currentScore.value = multiplier;
    } else {
      currentScore.value *= multiplier;
    }
  }

  const resetCurrentScore = () => {
    currentScore.value = 0;
  }

  const incrementGlobalScore = () => {
    globalScore.value += currentScore.value;
  }

  const resetGlobalScore = () => {
    globalScore.value = 0;
  }

  return { currentScore, incrementCurrentScore, resetCurrentScore, incrementGlobalScore, resetGlobalScore }
})