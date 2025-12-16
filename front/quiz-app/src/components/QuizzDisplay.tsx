import { useEffect, useState } from "react";
import type { CorrectAnswer, Quizz } from "../types";
import QuizzQuestion from "./QuizzQuestion";
import quizzService from "../services/quizzService";
import Result from "./Result";

interface Props {
  currentQuizz: Quizz;
}

const QuizzDisplay = ({ currentQuizz }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playerAnswers, setPlayerAnswers] = useState<string[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<CorrectAnswer[]>([]);
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
      getResults();
      setQuizzOn(false);
    } else {
      setCurrentIndex(index);
    }
  };

  const getResults = async () => {
    const rightAnswers = await quizzService.getAnswers(currentQuizz.id);
    setCorrectAnswers(rightAnswers);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setPlayerAnswers([]);
    setQuizzOn(true);
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
        <div>
          <Result playerAnswers={playerAnswers} rightAnswers={correctAnswers} />
          <button>Quit</button>
          <button onClick={handleRestart}>Try again</button>
        </div>
      )}
    </div>
  );
};

export default QuizzDisplay;
