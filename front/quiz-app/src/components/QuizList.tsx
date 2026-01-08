import type { Dispatch, SetStateAction } from "react";
import type { Quiz, QuizDescription } from "../types";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { FilmIcon } from "@heroicons/react/24/outline";

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
      {entertainmentList && (
        <div className="bg-white px-4 py-5 rounded-2xl">
          <div className="text-center">
            <h3 className="inline text-2xl font-semibold text-blue-950">
              Entertainment
            </h3>
            <FilmIcon className="text-center inline size-5 ml-2" />
          </div>
          <div className="flex flex-wrap gap-3 justify-center pt-3">
            {entertainmentList.map((el, i) => (
              <div
                key={i}
                onClick={() => handleClick(el.name, el.category)}
                className="bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-xl rounded-2xl flex justify-center items-center w-55 h-30"
              >
                <h3 className="text-white text-base md:text-lg lg:text-2xl">
                  {el.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      )}
      {educationList && (
        <div className="bg-white px-4 py-5 rounded-2xl">
          <div className="text-center">
            <h3 className="text-center inline mt-5 text-2xl font-semibold text-blue-950">
              Education
            </h3>
            <RocketLaunchIcon className="size-5 inline ml-2" />
          </div>
          <div className="flex flex-wrap gap-3 justify-center pt-3">
            {educationList.map((el, i) => (
              <div
                key={i}
                onClick={() => handleClick(el.name, el.category)}
                className="bg-violet-600 hover:bg-violet-700 shadow-md hover:shadow-xl rounded-2xl flex justify-center items-center w-55 h-30"
              >
                <h3 className="text-white text-base md:text-lg lg:text-2xl">
                  {el.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizList;
