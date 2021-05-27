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
  const { primaryColor, secondaryColor } = candyColors[tile];

  //
  return (
    <S.Cell
      draggable
      onDragStart={dragStart}
      onDragOver={dragOver}
      onDragEnd={dragEnd}
      id={id}
      playable={isPlayable}
    >
      {tile ? (
        <Candy primaryColor={primaryColor} secondaryColor='#74dce2' />
      ) : (
        ""
      )}
    </S.Cell>
  );
};

export default Tile;
