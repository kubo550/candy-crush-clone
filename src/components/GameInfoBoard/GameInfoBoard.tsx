import { FC, useEffect, useState } from "react";
import * as S from "./GameInfoBoard.styles";
import Candy from "../Candy/Candy";
import { displayTime } from "./GameInfoBoard.utils";
import { CandyData } from "../../data/candyColors";

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

      {tileToSearch?.primaryColor && (
        <p>
          to go:{" "}
          <Candy
            primaryColor={tileToSearch.primaryColor}
            secondaryColor='black'
            size='20'
          />
          x {tilesToGo}
        </p>
      )}
    </S.Wrapper>
  );
};

export default GameInfoBoard;
