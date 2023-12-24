export interface Board {
  id: number,
  board: number[][],
  solved: boolean,
}

export interface LevelObject {
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  boards: Board[],
}

export const levelData: LevelObject[] = [
  {
    level: 1,
    boards: [
      { id: 0,
        board: [[3, 2, 1, 0, 1], [1, 0, 1, 1, 0], [1, 3, 0, 1, 1], [3, 1, 0, 1, 2], [1, 1, 2, 0, 0]], 
        solved: false 
      },
      { id: 1,
        board: [[1, 1, 0, 1, 1], [1, 0, 1, 1, 0], [1, 3, 0, 1, 1], [3, 1, 0, 1, 2], [1, 1, 2, 0, 0]], 
        solved: false 
      },
      { 
        id: 2,
        board: [[1, 1, 0, 1, 1], [1, 0, 1, 1, 0], [1, 3, 0, 1, 1], [3, 1, 0, 1, 2], [2, 2, 2, 0, 0]], 
        solved: false 
      },
    ],
  },
]


