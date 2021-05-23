import { useEffect, useState } from "react";

import * as _ from "lodash";
import * as S from "./Board.style";
// import Candy from "../Candy/Candy";

const BOARD_SIZE = 10;
const COLORS = ["green", "orange", "red", "blue", "purple", "yellow"];

const NUMBERS = [1, 2, 3];

type Tile = {
  primaryColor: string;
  idx: number;
};

const matrixArray = (board: number[][]) =>
  board[0].map((_, colIdx) => board.map(row => row[colIdx]));

const createBoard = (size: number, numbers: number[]): number[][] => {
  return Array(size)
    .fill(null)
    .map(() =>
      Array(size)
        .fill(0)
        .map(() => _.sample(numbers)!)
    );
};

const checkForMatchesHorizontal = (board: number[][]): number[][] => {
  const tiles = _.cloneDeep(board);
  const boardSize = tiles.length;

  const newBoard: number[][] = [];

  for (let i = 0; i < boardSize; i++) {
    const row = tiles[i];
    let queue: number[] = [row[0]];

    // TODO error

    for (let j = 1; j < boardSize; j++) {
      if (row[j] === queue[0]) {
        queue.push(row[j]);
      } else {
        if (queue.length >= 3) {
          for (let index = 1; index <= queue.length; index++) {
            row[j - index] = 0;
          }
        }
        queue = [row[j]];
      }
    }
    newBoard.push(row);
  }
  return newBoard;
};

const hasEmptyTiles = (board: number[][]): boolean =>
  board.some(row => row.some(tile => tile === 0));

const getValuesDown = (board: number[][]): number[][] => {
  const newBoard = _.cloneDeep(board);

  for (let i = 1; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (newBoard[i][j] === 0) {
        newBoard[i][j] = newBoard[i - 1][j];
        newBoard[i - 1][j] = 0;
      }
    }
  }
  return newBoard;
};

const addNewRow = (board: number[][], numbers: number[]): number[][] => {
  const newBoard = _.cloneDeep(board);
  newBoard[0] = newBoard[0].map(num => (num === 0 ? _.sample(numbers)! : num));
  return newBoard;
};

const Board = () => {
  const [board, setBoard] = useState(createBoard(BOARD_SIZE, NUMBERS));
  const [selectedTie, setSelectedTie] = useState<HTMLDivElement | null>(null);
  const [isUpdatingBoard, setIsUpdatingBoard] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBoard(prev =>
        // matrixArray(checkForMatchesHorizontal(matrixArray(prev)))
        checkForMatchesHorizontal(prev)
      );
    }, 1000);
  }, []);

  useEffect(() => {
    if (selectedTie?.id) {
      selectedTie.classList.add("active");

      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedTie]);

  const handleKeyDown = (e: KeyboardEvent) => {
    const id = Number(selectedTie?.id);
    // const sourceColor = selectedTie?.style.backgroundColor;
    // let destinationColor: string;
    // let destinationId: number;
    // console.log(sourceColor);

    // if (e.key === "ArrowLeft") {
    //   destinationId = id - 1;
    //   destinationColor = board[destinationId].primaryColor;
    //   const newBoard = [...board];
    //   const [removedTile] = newBoard.splice(id, 1);
    //   newBoard.splice(destinationId, 0, removedTile);
    //   setBoard(newBoard);
    // } else if (e.key === "ArrowRight") {
    //   console.log(id + 1);
    // }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setSelectedTie(e.target as HTMLDivElement);
    const id = (e.target as HTMLDivElement).id;
  };

  return (
    <div>
      <S.Wrapper>
        {board.map((row, y) =>
          row.map((tile, x) => (
            <S.Cell
              key={`${x}${y}`}
              onClick={handleClick}
              id={`${x}${y}`}
              // style={{ backgroundColor: tile.primaryColor }}
            >
              {/* <Candy primaryColor={tile.primaryColor} secondaryColor='#74dce2' /> */}
              {tile}
            </S.Cell>
          ))
        )}
      </S.Wrapper>
    </div>
  );
};

export default Board;
