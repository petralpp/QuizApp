import type { CorrectAnswer } from "../types";

interface Props {
  playerAnswers: string[];
  rightAnswers: CorrectAnswer[];
}

const Result = ({ playerAnswers, rightAnswers }: Props) => {
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
      <h2>Your result:</h2>
      <p>
        {countResult()} / {playerAnswers.length}
      </p>
      <ol>
        {rightAnswers.map((elem, i) => (
          <li key={i}>
            {elem.question}: {elem.answer}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Result;
