import { useEffect, useState } from "react";
import {
  createBoard,
  checkForAllMatches,
  hasEmptyTiles,
  addNewRow,
  getValuesDown,
  swipeTiles,
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

type TilePos = {
  x: number;
  y: number;
};

const Board = () => {
  const [board, setBoard] = useState(createBoard(BOARD_SIZE, NUMBERS));
  const [isPlayable, setIsPLayable] = useState(true);
  const [firstDraggedDiv, setFirstDraggedDiv] = useState<TilePos | null>(null);

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

  const handleDragEnd = (
    e: React.DragEvent<HTMLDivElement>,
    tilePos: TilePos
  ) => {
    if (!isPlayable || !firstDraggedDiv) {
      return;
    }

    const calculateDirection = (
      offsetX: number,
      offsetY: number
    ): {
      x: -1 | 0 | 1;
      y: -1 | 0 | 1;
    } => {
      const isHorizontal = Math.abs(offsetX) > Math.abs(offsetY);

      const x = offsetX > 0 ? 1 : -1;
      const y = offsetY > 0 ? 1 : -1;

      return {
        x: 0 + (isHorizontal ? x : 0),
        y: 0 + (!isHorizontal ? y : 0),
      } as {
        x: -1 | 0 | 1;
        y: -1 | 0 | 1;
      };
    };

    const calculateNewPosition = (
      tilePos: TilePos,
      direction: TilePos
    ): TilePos => {
      const x = tilePos.x + direction.x;
      const y = tilePos.y + direction.y;

      return { x, y };
    };

    const isValidMove = (pos: TilePos): boolean => {
      // todo
      return true;
    };

    const offsetX = e.screenX - firstDraggedDiv.x;
    const offsetY = e.screenY - firstDraggedDiv.y;

    const direction = calculateDirection(offsetX, offsetY);
    const newPosition = calculateNewPosition(tilePos, direction);

    if (!isValidMove(newPosition)) {
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
          row.map((tile, x) => (
            <S.Cell
              key={`${x}${y}`}
              id={`${x}${y}`}
              style={{ backgroundColor: colorTransform.get(tile)! }}
              draggable
              onDragStart={handleDragStart}
              onDragEnd={e => handleDragEnd(e, { y, x })}
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
