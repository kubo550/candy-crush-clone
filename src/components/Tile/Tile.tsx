import { FC } from "react";
import Candy from "../Candy/Candy";
import candyColors from "../../data/candyColors";
import * as S from "./Tile.style";

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
      {tile ? <Candy colors={candyColors[tile]} /> : ""}
    </S.Cell>
  );
};

export default Tile;
