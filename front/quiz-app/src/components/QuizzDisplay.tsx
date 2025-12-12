import { useEffect, useState } from "react";
import type { Quizz } from "../types";
import QuizzQuestion from "./QuizzQuestion";

interface Props {
  currentQuizz: Quizz;
}

const QuizzDisplay = ({ currentQuizz }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playerAnswers, setPlayerAnswers] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<string>("");
  const [currentOptions, setCurrentOptions] = useState<string[]>([]);
  const [quizzOn, setQuizzOn] = useState(true);

  useEffect(() => {
    const question = Object.keys(currentQuizz.questions[currentIndex])[0];
    const options = Object.values(currentQuizz.questions[currentIndex])[0];
    setCurrentQuestion(question);
    setCurrentOptions(options);
  }, [currentIndex, currentQuizz.questions]);

  const handleAnswer = (answer: string) => {
    setPlayerAnswers(playerAnswers.concat(answer));

    const index = currentIndex + 1;
    if (index === currentQuizz.questions.length) {
      setQuizzOn(false);
    } else {
      setCurrentIndex(index);
    }
  };

  return (
    <div>
      <h2>{currentQuizz.name}</h2>
      {quizzOn ? (
        <QuizzQuestion
          question={currentQuestion}
          options={currentOptions}
          sendAnswer={handleAnswer}
        />
      ) : (
        <p>End! Your results:</p>
      )}
    </div>
  );
};

export default QuizzDisplay;
