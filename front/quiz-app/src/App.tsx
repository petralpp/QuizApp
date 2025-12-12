import { useState, useEffect } from "react";
import type { Quizz } from "./types";
import quizzService from "./services/quizzService";

import QuizzList from "./components/QuizzList";
//import QuizzDisplay from "./components/QuizzDisplay";

function App() {
  const [selectedQuizz, setSelectedQuizz] = useState<string>("");
  const [quizzData, setQuizzData] = useState<Quizz[] | null>(null);

  useEffect(() => {
    quizzService.getAllQuizzes().then((data) => {
      setQuizzData(data);
    });
  }, []);

  const startQuizz = () => {};

  return (
    <>
      <h1>Quiz App!</h1>
      <QuizzList list={quizzData} setQuizz={setSelectedQuizz} />
      <div>Selected: {selectedQuizz}</div>
      <div>
        {selectedQuizz !== "" ? (
          <button onClick={startQuizz}>Play</button>
        ) : (
          <button disabled>Play</button>
        )}
      </div>
    </>
  );
}

export default App;
