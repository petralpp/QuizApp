import { FilmIcon } from "@heroicons/react/24/outline";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import type { Quiz } from "../types";

interface Props {
  quizList: Quiz[] | null;
  category: "Entertainment" | "Education";
  handleClick(name: string, category: string): void;
}

const CategorySection = ({ quizList, category, handleClick }: Props) => {
  return (
    <>
      {quizList && (
        <div className="bg-white px-4 py-5 rounded-2xl">
          <div className="text-center">
            <h3 className="inline text-2xl font-semibold text-blue-950">
              {category}
            </h3>
            {category === "Entertainment" ? (
              <FilmIcon className="text-center inline size-5 ml-2" />
            ) : (
              <RocketLaunchIcon className="size-5 inline ml-2" />
            )}
          </div>
          <div className="flex flex-wrap gap-3 justify-center pt-3">
            {quizList.map((el, i) => (
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
    </>
  );
};

export default CategorySection;
