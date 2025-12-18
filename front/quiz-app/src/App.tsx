import { useState, useEffect } from "react";
import type { Quiz, QuizDescription } from "./types";
import quizService from "./services/quizService";

import QuizList from "./components/QuizList";
import QuizDisplay from "./components/QuizDisplay";
import QuizOVerlay from "./components/QuizOverlay";

function App() {
  //const [selectedQuiz, setSelectedQuiz] = useState<string>("");
  const [selectedQuiz, setSelectedQuiz] = useState<QuizDescription>({
    name: "",
    description: "",
    questions: 0,
  });
  const [quizData, setQuizData] = useState<Quiz[] | null>(null);
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [overlayIsOpen, setOverlayIsOpen] = useState(false);

  const toggleOverlay = () => {
    setOverlayIsOpen(!overlayIsOpen);
  };

  useEffect(() => {
    quizService.getAllQuizzes().then((data) => {
      setQuizData(data);
    });
  }, []);

  const startQuiz = () => {
    if (quizData) {
      const quizElement = quizData.find(
        (quizz) => quizz.name === selectedQuiz.name
      );
      if (quizElement) {
        setCurrentQuiz(quizElement);
      }
    }
  };

  const endQuiz = () => {
    setCurrentQuiz(null);
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 font-sans text-lg">
      {currentQuiz ? (
        <div>
          <QuizDisplay currentQuiz={currentQuiz} quit={endQuiz} />
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold text-gray-900 leading-tight pt-6">
            Quiz App!
          </h1>
          <QuizList
            list={quizData}
            setQuiz={setSelectedQuiz}
            toggleOverlay={toggleOverlay}
          />
          <div>
            {selectedQuiz.name !== "" && (
              <>
                <QuizOVerlay
                  isOpen={overlayIsOpen}
                  onClose={toggleOverlay}
                  quiz={selectedQuiz}
                  start={startQuiz}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
