import { useState } from "react";
import { createBoard } from "./Board.utils";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

import * as S from "./Board.style";
import Candy from "../Candy/Candy";

const BOARD_SIZE = 10;
const COLORS = ["green", "orange", "red", "blue", "purple", "yellow"];

type Tile = {
  primaryColor: string;
  idx: number;
};
const Board = () => {
  const [board, setBoard] = useState<Tile[]>(createBoard(BOARD_SIZE, COLORS));

  const handleDragEnd = (e: DropResult) => {
    const items = [...board];
    const [reorderedItem] = items.splice(e.source?.index!, 1);
    items.splice(e.destination?.index!, 0, reorderedItem);
    setBoard(items);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='candys'>
          {provided => (
            <S.Wrapper {...provided.droppableProps} ref={provided.innerRef}>
              {board.map((tile, idx) => (
                <Draggable key={idx} draggableId={idx.toString()} index={idx}>
                  {provided => (
                    <S.Cell
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <Candy
                        primaryColor={tile.primaryColor}
                        secondaryColor='#74dce2'
                      />
                    </S.Cell>
                  )}
                </Draggable>
              ))}

              {provided.placeholder}
            </S.Wrapper>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Board;
