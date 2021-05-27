import { useEffect, useState } from "react";
import _ from "lodash";
import Board from "./components/Board/Board";
import GameInfoBoard from "./components/GameInfoBoard/GameInfoBoard";
import candyColorsData, { CandyData } from "./data/candyColors";

const App = () => {
  const [moves, setMoves] = useState(15);
  const [tilesToGo, setTilesToGo] = useState(50);
  const [tileToSearch, setTileToSearch] = useState<CandyData | null>(null);

  useEffect(() => {
    const tileData = _.sample(candyColorsData)!;
    setTileToSearch(tileData);
  }, []);

  const move = () => setMoves(prev => prev - 1);

  const subsTilesToGo = (id: number, quan: number) => {
    if (id !== tileToSearch?.tileId) {
      return;
    }

    setTilesToGo(prev => Math.max(prev - quan, 0));
  };

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem",
          margin: "0",
          color: "pink",
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
        <Board move={move} subsTilesToGo={subsTilesToGo} />
      ) : (
        "loading"
      )}
    </div>
  );
};

export default App;
