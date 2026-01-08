import { useState, useEffect } from "react";
import type { Quiz, QuizDescription } from "./types";
import quizService from "./services/quizService";

import QuizList from "./components/QuizList";
import QuizDisplay from "./components/QuizDisplay";
import QuizOVerlay from "./components/QuizOverlay";

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState<QuizDescription>({
    category: "",
    name: "",
    description: "",
    questions: 0,
  });
  const [entertainmentData, setEntertainmentData] = useState<Quiz[] | null>(null);
  const [educationData, setEducationData] = useState<Quiz[] | null>(null);
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [overlayIsOpen, setOverlayIsOpen] = useState(false);

  const toggleOverlay = () => {
    setOverlayIsOpen(!overlayIsOpen);
  };

  useEffect(() => {
    quizService.getAllQuizzes().then((data) => {
      handleData(data);
    });
  }, []);

  const handleData = (data: Quiz[]) => {
    const entertainment: Quiz[] = [];
    const education: Quiz[] = [];
    data.forEach((quiz) =>
      quiz.category === "Entertainment"
        ? entertainment.push(quiz)
        : education.push(quiz)
    );
    setEntertainmentData(entertainment);
    setEducationData(education);
  };

  const startQuiz = () => {
    if (!entertainmentData || !educationData) {
      return;
    }
    let quizElement = null;
    if (selectedQuiz.category === "Entertainment") {
      quizElement = entertainmentData.find(
        (quiz) => quiz.name === selectedQuiz.name
      );
    } else {
      quizElement = educationData.find((quiz) => quiz.name === selectedQuiz.name);
    }
    if (quizElement) {
      setCurrentQuiz(quizElement);
    }
  };

  const endQuiz = () => {
    setCurrentQuiz(null);
  };

  return (
    <div className="bg-linear-to-r from-indigo-500 to-purple-500 h-screen font-sans text-lg">
      <div>
        <h1 className="text-center text-4xl p-5 mb-2 font-bold text-white leading-tight">
          Quiz!
        </h1>
      </div>
      {currentQuiz ? (
        <div className="bg-white h-80">
          <QuizDisplay currentQuiz={currentQuiz} quit={endQuiz} />
        </div>
      ) : (
        <div className="h-[70vh]">
          <QuizList
            entertainmentList={entertainmentData}
            educationList={educationData}
            setQuiz={setSelectedQuiz}
            toggleOverlay={toggleOverlay}
          />
          <div>
            {selectedQuiz.name !== "" && (
              <QuizOVerlay
                isOpen={overlayIsOpen}
                onClose={toggleOverlay}
                quiz={selectedQuiz}
                start={startQuiz}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
