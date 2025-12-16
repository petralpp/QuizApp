import type { CorrectAnswer } from "../types";

interface Props {
  correctAnswers: CorrectAnswer[];
  playerAnswers: string[];
}

const ResultTable = ({ correctAnswers, playerAnswers }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Question</td>
          <td>Correct answer</td>
          <td>Your answer</td>
        </tr>
      </thead>
      <tbody>
        {correctAnswers.map((elem, i) => (
          <tr key={i}>
            <td>{elem.question}</td>
            <td>{elem.answer}</td>
            <td>{playerAnswers[i]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
