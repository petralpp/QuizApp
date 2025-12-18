import { useState } from "react";
import type { CorrectAnswer } from "../types";
import ResultTable from "./ResultTable";

interface Props {
  playerAnswers: string[];
  rightAnswers: CorrectAnswer[];
}

const Result = ({ playerAnswers, rightAnswers }: Props) => {
  const [showAnswers, setShowAnswers] = useState<boolean>(false);

  const countResult = () => {
    let correct = 0;
    for (let i = 0; i < rightAnswers.length; i++) {
      if (Object.values(rightAnswers[i]).includes(playerAnswers[i])) {
        correct++;
      }
    }
    return correct;
  };

  return (
    <div>
      <h2 className="mt-2 text-center">
        Your result: {countResult()} / {playerAnswers.length}
      </h2>
      {showAnswers ? (
        <>
          <button
            onClick={() => setShowAnswers(false)}
            className="btn-blue mt-2 text-center"
          >
            Hide
          </button>
          <ResultTable
            correctAnswers={rightAnswers}
            playerAnswers={playerAnswers}
          />
        </>
      ) : (
        <button
          onClick={() => setShowAnswers(true)}
          className="btn-blue mt-2 text-center"
        >
          Show answers
        </button>
      )}
    </div>
  );
};

export default Result;
