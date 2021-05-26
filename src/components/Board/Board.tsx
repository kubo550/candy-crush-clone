import { useEffect, useState } from "react";
import {
  createBoard,
  checkForAllMatches,
  hasEmptyTiles,
  addNewRow,
  getValuesDown,
  swipeTiles,
  calculateDirection,
  calculateNewPosition,
  isValidMove,
} from "./Board.utils";
import candyColors from "../../data/candyColors";
import _ from "lodash";
import * as S from "./Board.style";
import { TilePos } from "./Board.types";
import Candy from "../Candy/Candy";

const BOARD_SIZE = 10;

const NUMBERS = [1, 2, 3, 4, 5];

const Board = () => {
  const [board, setBoard] = useState(createBoard(BOARD_SIZE, NUMBERS));
  const [isPlayable, setIsPLayable] = useState(true);
  const [firstDraggedDiv, setFirstDraggedDiv] = useState<TilePos | null>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (hasEmptyTiles(board)) {
        setBoard(prevBoard => addNewRow(getValuesDown(prevBoard), NUMBERS));
        setIsPLayable(true);

        return () => clearInterval(timeoutId);
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
    return () => clearInterval(timeoutId);
  }, [board]);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    if (!isPlayable) {
      return;
    }

    setFirstDraggedDiv({
      x: e.screenX,
      y: e.screenY,
    });
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.effectAllowed = "copyMove";
  };

  const handleDragEnd = (
    e: React.DragEvent<HTMLDivElement>,
    tilePos: TilePos
  ) => {
    if (!isPlayable || !firstDraggedDiv) {
      return;
    }

    const offsetX = e.screenX - firstDraggedDiv.x;
    const offsetY = e.screenY - firstDraggedDiv.y;

    const direction = calculateDirection(offsetX, offsetY);
    const newPosition = calculateNewPosition(tilePos, direction);

    if (!isValidMove(newPosition, BOARD_SIZE)) {
      return;
    }

    setBoard(board => swipeTiles(board, tilePos, direction));

    setFirstDraggedDiv(null);
  };

  return (
    <div>
      {isPlayable ? "Make a move" : "Combo"}
      <S.Wrapper>
        {board.map((row, y) =>
          row.map((tile, x) => {
            const { primaryColor, secondaryColor } = candyColors[tile];

            return (
              <S.Cell
                key={`${x}${y}`}
                id={`${x}${y}`}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDragEnd={e => handleDragEnd(e, { y, x })}
                draggable
              >
                {tile ? (
                  <Candy primaryColor={primaryColor} secondaryColor='#74dce2' />
                ) : (
                  ""
                )}
              </S.Cell>
            );
          })
        )}
      </S.Wrapper>
    </div>
  );
};

export default Board;
