import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import { levelData, type Board, type LevelObject } from '@/assets/levelData';

const getRandomBoard = (level: number): {randomIndex: number, board: Board } | undefined => {
  // const levelData = levelData.find((data) => data.level === level)
  const levelDataBoards: LevelObject | undefined = levelData.find((data: LevelObject) => data.level === level)

  if (levelDataBoards) {
    const randomIndex: number = Math.floor(Math.random() * levelDataBoards.boards.length);
    const board =  levelDataBoards.boards[randomIndex]
    return { randomIndex, board };
  }
    
  console.log("ERROR: There is no data for this level (check levelData.ts)")
  return undefined;
}

export const useGameStatusStore = defineStore('gameStatus', () => {
  const emptyBoard: Board = {
    id: 0,
    board: [[]],
    solved: false,
  }
  const gameOver = ref(false)
  const gameLevel = ref(1)
  const gameBoardId = ref(0)
  const gameBoard: Ref<Board> = ref(emptyBoard)

  const setGameOver = () => {
    gameOver.value = true;
  }

  const setNewBoard = () => {

    const randomBoard = getRandomBoard(gameLevel.value)
    if ((typeof(randomBoard?.randomIndex) !== "undefined") && typeof(randomBoard.board) !== "undefined") {
      gameBoardId.value = randomBoard?.randomIndex;
      gameBoard.value = randomBoard.board;
    }
  }

  const setNewGame = () => {
    gameOver.value = false;

  }

  return { gameOver, setGameOver, setNewGame, setNewBoard, gameBoard }
})