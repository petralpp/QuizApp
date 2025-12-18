import type { CorrectAnswer } from "../types";
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { XCircleIcon } from "@heroicons/react/16/solid";

interface Props {
  correctAnswers: CorrectAnswer[];
  playerAnswers: string[];
}

const ResultTable = ({ correctAnswers, playerAnswers }: Props) => {
  return (
    <table className="w-full my-3 border border-Collapse rounded-sm">
      <thead className="border">
        <tr>
          <td className="border p-3 font-bold">Question</td>
          <td className="border p-3 font-bold">Correct answer</td>
          <td className="border p-3 font-bold">Your answer</td>
        </tr>
      </thead>
      <tbody>
        {correctAnswers.map((elem, i) => (
          <tr key={i}>
            <td className="border p-2">
              {i + 1}. {elem.question}
            </td>
            <td className="border p-2">{elem.answer}</td>
            <td className="border p-2">
              {playerAnswers[i]}
              {elem.answer.includes(playerAnswers[i]) ? (
                <CheckCircleIcon className="size-5 text-green-500 inline float-right" />
              ) : (
                <XCircleIcon className="size-5 text-red-600 inline float-right" />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
