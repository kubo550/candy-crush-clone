import { FC, useEffect, useState } from "react";
import * as S from "./GameInfoBoard.styles";
import { displayTime } from "./GameInfoBoard.utils";
import { CandyData } from "../../data/candyColors";
import { candies } from "../../assets";

interface GameInfoBoardProps {
  moves: number;
  tilesToGo: number;
  tileToSearch: CandyData | null;
}

let timeInterval: NodeJS.Timeout;

const GameInfoBoard: FC<GameInfoBoardProps> = ({
  moves,
  tilesToGo,
  tileToSearch,
}) => {
  const [time, setTime] = useState(0);

  const startCount = (): void => {
    timeInterval = setInterval(() => {
      setTime(prev => Number(prev) + 1);
    }, 1000);
  };

  const stopCount = (): void => clearInterval(timeInterval);

  useEffect(() => {
    startCount();
    return () => stopCount();
  }, []);

  return (
    <S.Wrapper>
      <p>moves: {moves}</p>
      <p>time: {displayTime(time)}</p>

      {tileToSearch?.tileId && (
        <p>
          to go:{" "}
          <img
            src={candies[tileToSearch.tileId]}
            width='30'
            alt='Tile to search'
          />
          <span className='lover'>x</span> {tilesToGo}
        </p>
      )}
    </S.Wrapper>
  );
};

export default GameInfoBoard;
