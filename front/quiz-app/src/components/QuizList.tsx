import type { Dispatch, SetStateAction } from "react";
import type { Quiz } from "../types";

interface Props {
  list: Quiz[] | null;
  setQuiz: Dispatch<SetStateAction<string>>;
}

const QuizList = ({ list, setQuiz }: Props) => {
  const handleClick = (name: string) => {
    setQuiz(name);
  };

  return (
    <div>
      <h1>Choose your quiz</h1>
      {list ? (
        <ol>
          {list.map((el, i) => (
            <li key={i} onClick={() => handleClick(el.name)}>
              {el.name}
            </li>
          ))}
        </ol>
      ) : null}
    </div>
  );
};

export default QuizList;
