import type { Quizz } from "../types";

/*
Quizz {
  id: string;
  name: string;
  questions: object[];
}
*/

interface Props {
  currentQuizz: Quizz;
}

const QuizzDisplay = ({ currentQuizz }: Props) => {
  return (
    <div>
      <h2>{currentQuizz.name}</h2>
    </div>
  );
};

export default QuizzDisplay;
