import { useState, useEffect } from "react";
import type { Quiz } from "./types";
import quizService from "./services/quizService";

import QuizList from "./components/QuizList";
import QuizDisplay from "./components/QuizDisplay";

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState<string>("");
  const [quizData, setQuizData] = useState<Quiz[] | null>(null);
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);

  useEffect(() => {
    quizService.getAllQuizzes().then((data) => {
      setQuizData(data);
    });
  }, []);

  const startQuiz = () => {
    if (quizData) {
      const quizElement = quizData.find((quizz) => quizz.name === selectedQuiz);
      if (quizElement) {
        setCurrentQuiz(quizElement);
      }
    }
  };

  const endQuiz = () => {
    setCurrentQuiz(null);
  };

  return (
    <>
      {currentQuiz ? (
        <div>
          <QuizDisplay currentQuiz={currentQuiz} quit={endQuiz} />
        </div>
      ) : (
        <div>
          <h1>Quiz App!</h1>
          <QuizList list={quizData} setQuiz={setSelectedQuiz} />
          <div>Selected: {selectedQuiz}</div>
          <div>
            {selectedQuiz !== "" ? (
              <button onClick={startQuiz}>Play</button>
            ) : (
              <button disabled>Play</button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
