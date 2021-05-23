import { useEffect, useState } from "react";
import {
  addNewRow,
  checkForAllMatches,
  createBoard,
  getValuesDown,
  hasEmptyTiles,
} from "./Board.utils";
import _ from "lodash";
import * as S from "./Board.style";
// import Candy from "../Candy/Candy";

const BOARD_SIZE = 10;
// const COLORS = ["green", "orange", "red", "blue", "purple", "yellow"];

const NUMBERS = [1, 2, 3, 4, 5];

const colorTransform = new Map([
  [1, "red"],
  [2, "blue"],
  [3, "green"],
  [4, "yellow"],
  [5, "purple"],
]);

type Tile = {
  primaryColor: string;
  idx: number;
};

const Board = () => {
  const [board, setBoard] = useState(createBoard(BOARD_SIZE, NUMBERS));
  const [selectedTie, setSelectedTie] = useState<HTMLDivElement | null>(null);
  const [isPlayable, setIsPLayable] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (hasEmptyTiles(board)) {
        setBoard(prevBoard => addNewRow(getValuesDown(prevBoard), NUMBERS));
        setIsPLayable(true);

        return;
      }
      if (!isPlayable && !_.isEqual(board, checkForAllMatches(board))) {
        setBoard(prev => checkForAllMatches(prev));
      } else {
        setBoard(getValuesDown);
      }
    }, 500);

    if (
      !_.isEqual(board, getValuesDown(board)) ||
      !_.isEqual(board, checkForAllMatches(board))
    ) {
      setIsPLayable(false);
    }
    console.log(isPlayable);
  }, [board]);

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
      {isPlayable ? "Make a move" : "Combo"}
      <S.Wrapper>
        {board.map((row, y) =>
          row.map((tile, x) => (
            <S.Cell
              key={`${x}${y}`}
              onClick={handleClick}
              id={`${x}${y}`}
              style={{ backgroundColor: colorTransform.get(tile)! }}
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
