import { useState, useEffect } from "react";
import type { Quizz } from "./types";
import quizzService from "./services/quizzService";

import QuizzList from "./components/QuizzList";
//import Quizz from "./components/Quizz";

function App() {
  //const [selectedQuizz, setSelectedQuizz] = useState(null);
  const [quizzData, setQuizzData] = useState<Quizz[] | null>(null);

  useEffect(() => {
    quizzService.getAllQuizzes().then((data) => {
      setQuizzData(data);
    });
  }, []);

  return (
    <>
      <h1>Quiz App!</h1>
      <QuizzList list={quizzData} />
    </>
  );
}

export default App;
