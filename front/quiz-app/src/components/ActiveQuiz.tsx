import { useEffect, useState } from "react";
import type { CorrectAnswer, Quiz } from "../types";
import CurrentQuestion from "./CurrentQuestion";
import quizService from "../services/quizService";
import Result from "./Result";

interface Props {
  currentQuiz: Quiz;
  quit(): void;
}

const ActiveQuiz = ({ currentQuiz, quit }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [playerAnswers, setPlayerAnswers] = useState<string[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<CorrectAnswer[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<string>("");
  const [currentOptions, setCurrentOptions] = useState<string[]>([]);
  const [quizOn, setQuizOn] = useState<boolean>(true);

  useEffect(() => {
    const question = currentQuiz.questions[currentIndex].question;
    const options = currentQuiz.questions[currentIndex].choices;
    setCurrentQuestion(question);
    setCurrentOptions(options);
  }, [currentIndex, currentQuiz.questions]);

  const handleAnswer = (answer: string) => {
    setPlayerAnswers(playerAnswers.concat(answer));

    const index = currentIndex + 1;
    if (index === currentQuiz.questions.length) {
      getResults();
      setQuizOn(false);
    } else {
      setCurrentIndex(index);
    }
  };

  const getResults = async () => {
    const rightAnswers = await quizService.getAnswers(currentQuiz.answersId);
    setCorrectAnswers(rightAnswers.answers);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setPlayerAnswers([]);
    setQuizOn(true);
  };

  return (
    <div className="bg-white p-3">
      <button
        className="px-4 py-2 ml-2 absolute rounded bg-red-500 text-white"
        onClick={quit}
      >
        Quit
      </button>
      <h2 className="text-center mt-2 text-xl font-semibold text-gray-800">
        {currentQuiz.name}
      </h2>
      {quizOn ? (
        <CurrentQuestion
          index={currentIndex + 1}
          question={currentQuestion}
          options={currentOptions}
          sendAnswer={handleAnswer}
        />
      ) : (
        <div>
          <Result playerAnswers={playerAnswers} rightAnswers={correctAnswers} />
          <div className="text-center m-4">
            <button onClick={handleRestart} className="btn-blue">
              Try again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActiveQuiz;
