import type { Dispatch, SetStateAction } from "react";
import type { Quiz, QuizDescription } from "../types";

interface Props {
  list: Quiz[] | null;
  setQuiz: Dispatch<SetStateAction<QuizDescription>>;
  toggleOverlay(): void;
}

const QuizList = ({ list, setQuiz, toggleOverlay }: Props) => {
  const handleClick = (name: string) => {
    const quiz = list?.find((q) => q.name === name);
    if (quiz) {
      setQuiz({
        name: quiz.name,
        description: quiz.description,
        questions: quiz.questions.length,
      });
      toggleOverlay();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 pt-6">
        Choose your quiz
      </h2>
      {list ? (
        <>
          <div className="flex gap-4 pt-3">
            {list.map((el, i) => (
              <div
                key={i}
                onClick={() => handleClick(el.name)}
                className="bg-blue-600 hover:bg-blue-800 text-white px-3 py-4 rounded-3xl"
              >
                <h3 className="text-xl">{el.name}</h3>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default QuizList;
