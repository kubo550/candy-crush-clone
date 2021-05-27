import { FC } from "react";
import * as S from "./GameOver.style";

interface GAmeOverProps {
  isWin: boolean;
  newGame: () => void;
}

const GameOver: FC<GAmeOverProps> = ({ isWin, newGame }) => {
  return (
    <S.Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <div>
        <h2> {isWin ? "Congratulations!" : "Game Over"} </h2>
        <button onClick={newGame}>{isWin ? "Play Again" : "Try Again"}</button>
      </div>
    </S.Wrapper>
  );
};

export default GameOver;
