import type { Quiz } from "../types";
import { useAppSelector, useAppDispatch } from "../hooks";
import { setSelectedQuiz } from "../reducers/selectedQuizReducer";
import CategorySection from "./CategorySection";

interface Props {
  toggleOverlay(): void;
}

const QuizList = ({ toggleOverlay }: Props) => {
  const dispatch = useAppDispatch();
  const entertainmentList: Quiz[] = useAppSelector(
    (state) => state.entertainmentQuizzes
  );
  const educationList: Quiz[] = useAppSelector((state) => state.educationQuizzes);

  const handleClick = (name: string, category: string) => {
    let quiz = null;
    if (category === "Entertainment") {
      quiz = entertainmentList?.find((q) => q.name === name);
    } else {
      quiz = educationList?.find((q) => q.name === name);
    }
    if (quiz) {
      dispatch(
        setSelectedQuiz({
          category: quiz.category,
          name: quiz.name,
          description: quiz.description,
          questions: quiz.questions.length
        })
      );
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
