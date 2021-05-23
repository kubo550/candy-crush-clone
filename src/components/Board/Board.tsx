import { useEffect, useState } from "react";
import {
  addNewRow,
  checkForAllMatches,
  checkForMatchesHorizontal,
  createBoard,
  getValuesDown,
  hasEmptyTiles,
  matrixArray,
} from "./Board.utils";
import _ from "lodash";
import * as S from "./Board.style";
// import Candy from "../Candy/Candy";

const BOARD_SIZE = 10;
// const COLORS = ["green", "orange", "red", "blue", "purple", "yellow"];

const NUMBERS = [1, 2, 3];

type Tile = {
  primaryColor: string;
  idx: number;
};

const Board = () => {
  const [board, setBoard] = useState(createBoard(BOARD_SIZE, NUMBERS));
  const [selectedTie, setSelectedTie] = useState<HTMLDivElement | null>(null);
  const [isUpdatingBoard, setIsUpdatingBoard] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBoard(prev => checkForAllMatches(prev));
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
