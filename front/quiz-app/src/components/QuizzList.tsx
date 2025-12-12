import type { Dispatch, SetStateAction } from "react";
import type { Quizz } from "../types";

interface Props {
  list: Quizz[] | null;
  setQuizz: Dispatch<SetStateAction<string>>;
}

const QuizzList = ({ list, setQuizz }: Props) => {
  const handleClick = (name: string) => {
    setQuizz(name);
  };

  return (
    <div>
      <h1>Choose your quizz</h1>
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

export default QuizzList;
