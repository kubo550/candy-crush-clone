import { FC } from "react";
import * as S from "./Tile.style";
import { candies } from "../../assets";

interface TileProps {
  dragStart: (e: React.DragEvent<HTMLDivElement>) => void;
  dragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  dragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
  tile: number;
  id: string;
  isPlayable: boolean;
}

const Tile: FC<TileProps> = ({
  dragStart,
  dragOver,
  dragEnd,
  tile,
  id,
  isPlayable,
}) => {
  return (
    <S.Cell
      draggable={isPlayable}
      onDragStart={dragStart}
      onDragOver={dragOver}
      onDragEnd={dragEnd}
      id={id}
      playable={isPlayable}
    >
      {tile ? <img width='50' src={candies[tile]} alt='' /> : null}
    </S.Cell>
  );
};

export default Tile;
