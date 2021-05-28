import { Dispatch, useEffect, useState } from "react";
import {
  checkForAllMatches,
  hasEmptyTiles,
  addNewRow,
  getValuesDown,
  swipeTiles,
  calculateDirection,
  calculateNewPosition,
  isValidMove,
} from "./Board.utils";
import _ from "lodash";
import * as S from "./Board.style";
import { TilePos } from "./Board.types";
import Tile from "../Tile/Tile";

const TILE_SPEED_MS = 300;

interface BoardProps {
  move: () => void;
  subsTilesToGo: (id: number, quan: number) => void;
  isPlayable: boolean;
  setIsPlayable: Dispatch<React.SetStateAction<boolean>>;
  board: number[][];
  setBoard: Dispatch<React.SetStateAction<number[][]>>;
  numbers: number[];
}

const Board: React.FC<BoardProps> = ({
  move,
  subsTilesToGo,
  isPlayable,
  setIsPlayable,
  board,
  setBoard,
  numbers,
}) => {
  const [firstDraggedDiv, setFirstDraggedDiv] = useState<TilePos | null>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (hasEmptyTiles(board)) {
        setBoard(prevBoard => addNewRow(getValuesDown(prevBoard), numbers));
        setIsPlayable(true);

        return () => clearInterval(timeoutId);
      }
      if (!isPlayable && !_.isEqual(board, checkForAllMatches(board))) {
        const newBoard = checkForAllMatches(board, subsTilesToGo);
        setBoard(newBoard);
      } else {
        setBoard(getValuesDown);
      }
    }, TILE_SPEED_MS);

    if (
      !_.isEqual(board, getValuesDown(board)) ||
      !_.isEqual(board, checkForAllMatches(board))
    ) {
      setIsPlayable(false);
    }
    return () => clearInterval(timeoutId);
  }, [board, isPlayable, numbers, setBoard, setIsPlayable, subsTilesToGo]);

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

    if (!direction) {
      return;
    }

    const newPosition = calculateNewPosition(tilePos, direction);

    if (!isValidMove(newPosition, board.length)) {
      return;
    }

    const boardBeforeMove = _.cloneDeep(board);
    const boardAfterMove = swipeTiles(board, tilePos, direction);
    setBoard(boardAfterMove);

    if (_.isEqual(boardAfterMove, checkForAllMatches(boardAfterMove))) {
      setIsPlayable(false);
      setTimeout(() => {
        setBoard(boardBeforeMove);
        setIsPlayable(true);
      }, TILE_SPEED_MS * 2);
    } else {
      move();
    }

    setFirstDraggedDiv(null);
  };

  return (
    <div>
      <S.Wrapper size={board.length}>
        {board.map((row, y) =>
          row.map((tile, x) => (
            <Tile
              key={`${y}${x}`}
              id={`${y}${x}`}
              dragStart={handleDragStart}
              dragOver={handleDragOver}
              dragEnd={e => handleDragEnd(e, { y, x })}
              tile={tile}
              isPlayable={isPlayable}
            />
          ))
        )}
      </S.Wrapper>
    </div>
  );
};

export default Board;
