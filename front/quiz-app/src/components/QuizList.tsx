import type { Dispatch, SetStateAction } from "react";
import type { Quiz, QuizDescription } from "../types";
import CategorySection from "./CategorySection";

interface Props {
  entertainmentList: Quiz[] | null;
  educationList: Quiz[] | null;
  setQuiz: Dispatch<SetStateAction<QuizDescription>>;
  toggleOverlay(): void;
}

const QuizList = ({
  entertainmentList,
  educationList,
  setQuiz,
  toggleOverlay,
}: Props) => {
  const handleClick = (name: string, category: string) => {
    let quiz = null;
    if (category === "Entertainment") {
      quiz = entertainmentList?.find((q) => q.name === name);
    } else {
      quiz = educationList?.find((q) => q.name === name);
    }
    if (quiz) {
      setQuiz({
        category: quiz.category,
        name: quiz.name,
        description: quiz.description,
        questions: quiz.questions.length,
      });
      toggleOverlay();
    }
  };

  return (
    <div className="h-full grid grid-cols-2 gap-4 py-4 px-4">
      <CategorySection
        quizList={entertainmentList}
        category="Entertainment"
        handleClick={handleClick}
      />
      <CategorySection
        quizList={educationList}
        category="Education"
        handleClick={handleClick}
      />
    </div>
  );
};

export default QuizList;
