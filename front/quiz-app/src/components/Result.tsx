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
      <h2>
        Your result: {countResult()} / {playerAnswers.length}
      </h2>
      <table>
        <thead>
          <tr>
            <td>Question</td>
            <td>Correct answer</td>
            <td>Your answer</td>
          </tr>
        </thead>
        <tbody>
          {rightAnswers.map((elem, i) => (
            <tr key={i}>
              <td>{elem.question}</td>
              <td>{elem.answer}</td>
              <td>{playerAnswers[i]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
