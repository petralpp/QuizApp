import { useState, useEffect } from "react";
import type { Quiz, QuizDescription } from "./types";
import quizService from "./services/quizService";

import QuizList from "./components/QuizList";
import ActiveQuiz from "./components/ActiveQuiz";
import QuizOVerlay from "./components/QuizOverlay";

import { useAppSelector, useAppDispatch } from "./hooks";
import { setEducationList } from "./reducers/educationReducer";
import { setEntertainmentList } from "./reducers/entertainmentReducer";

function App() {
  const entertainmentList: Quiz[] = useAppSelector(
    (state) => state.entertainmentQuizzes
  );
  const educationList: Quiz[] = useAppSelector((state) => state.educationQuizzes);
  const [selectedQuiz, setSelectedQuiz] = useState<QuizDescription>({
    category: "",
    name: "",
    description: "",
    questions: 0
  });
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [overlayIsOpen, setOverlayIsOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const toggleOverlay = () => {
    setOverlayIsOpen(!overlayIsOpen);
  };

  useEffect(() => {
    quizService.getAllQuizzes().then((data) => {
      if (data) {
        const entertainment: Quiz[] = [];
        const education: Quiz[] = [];
        data.forEach((quiz) =>
          quiz.category === "Entertainment"
            ? entertainment.push(quiz)
            : education.push(quiz)
        );
        dispatch(setEntertainmentList(entertainment));
        dispatch(setEducationList(education));
      }
    });
  }, [dispatch]);

  const startQuiz = () => {
    let quizElement = null;
    if (selectedQuiz.category === "Entertainment") {
      quizElement = entertainmentList.find(
        (quiz) => quiz.name === selectedQuiz.name
      );
    } else {
      quizElement = educationList.find((quiz) => quiz.name === selectedQuiz.name);
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
      <div className="flex justify-between items-center px-4">
        <h1 className="text-center text-4xl p-5 mb-2 font-bold text-white leading-tight">
          Quiz!
        </h1>
        <button className="px-4 py-2 bg-amber-600 hover:bg-indigo-600 text-white rounded">
          Create
        </button>
      </div>
      {currentQuiz ? (
        <ActiveQuiz currentQuiz={currentQuiz} quit={endQuiz} />
      ) : (
        <div className="h-[70vh]">
          <QuizList setQuiz={setSelectedQuiz} toggleOverlay={toggleOverlay} />
          {selectedQuiz.name !== "" && (
            <QuizOVerlay
              isOpen={overlayIsOpen}
              onClose={toggleOverlay}
              quiz={selectedQuiz}
              start={startQuiz}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
