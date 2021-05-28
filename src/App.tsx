import { useCallback, useEffect, useState } from "react";
import _ from "lodash";
import Board from "./components/Board/Board";
import GameInfoBoard from "./components/GameInfoBoard/GameInfoBoard";
import candyData, { CandyData } from "./data/candyColors";
import { createBoard } from "./components/Board/Board.utils";
import GameOver from "./components/GameOver/GameOver";

const BOARD_SIZE = 10;
const NUMBERS = [1, 2, 3, 4, 5, 6];
const MAX_MOVES = 15;
const NUM_TILES_TO_GO = 31;

const App = () => {
  const initalBoard = createBoard(BOARD_SIZE, NUMBERS);
  const [board, setBoard] = useState<number[][]>(initalBoard);
  const [isPlayable, setIsPLayable] = useState(true);
  const [moves, setMoves] = useState(MAX_MOVES);
  const [tilesToGo, setTilesToGo] = useState(NUM_TILES_TO_GO);
  const [tileToSearch, setTileToSearch] = useState<CandyData | null>(null);

  useEffect(() => {
    const randomIdx = _.random(1, 5);
    const tileData = candyData[randomIdx];
    setTileToSearch(tileData);
  }, []);

  const move = useCallback(() => setMoves(prev => prev - 1), []);

  const subsTilesToGo = (id: number, quan: number) => {
    if (id !== tileToSearch?.tileId) {
      return;
    }

    setTilesToGo(prev => Math.max(prev - quan, 0));
  };

  const newGame = () => {
    setMoves(15);
    setTilesToGo(35);

    const randomIdx = _.random(1, 5);
    const tileData = candyData[randomIdx];
    setTileToSearch(tileData);

    setBoard(createBoard(BOARD_SIZE, NUMBERS));
  };

  const gameOver = isPlayable && (moves === 0 || tilesToGo === 0);

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem",
          margin: "0",
          color: "#f70707",
        }}
      >
        Candy Crush Clone
      </h1>
      <GameInfoBoard
        moves={moves}
        tilesToGo={tilesToGo}
        tileToSearch={tileToSearch}
      />
      {tileToSearch?.tileId ? (
        <Board
          move={move}
          subsTilesToGo={subsTilesToGo}
          isPlayable={isPlayable}
          setIsPlayable={setIsPLayable}
          board={board}
          setBoard={setBoard}
          numbers={NUMBERS}
        />
      ) : (
        "loading"
      )}
      {gameOver && <GameOver isWin={tilesToGo === 0} newGame={newGame} />}
    </div>
  );
};

export default App;
