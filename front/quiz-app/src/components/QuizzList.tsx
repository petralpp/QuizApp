import type { Quizz } from "../types";

interface Props {
  list: Quizz[] | null;
}

const QuizzList = ({ list }: Props) => {
  return (
    <div>
      <h1>Choose your quizz</h1>
      {list ? (
        <ol>
          {list.map((el, i) => (
            <li key={i}>{el.name}</li>
          ))}
        </ol>
      ) : null}
    </div>
  );
};

export default QuizzList;
