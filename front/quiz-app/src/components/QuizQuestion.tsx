import { useState, type FormEvent } from "react";

interface Props {
  index: number;
  question: string;
  options: string[];
  sendAnswer(answer: string): void;
}

const QuizQuestion = ({ index, question, options, sendAnswer }: Props) => {
  const [answer, setAnswer] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendAnswer(answer);
    setAnswer("");
  };

  const handleChange = (text: string) => {
    setAnswer(text);
  };

  return (
    <div>
      <h3>
        {index}. {question}
      </h3>
      <form onSubmit={handleSubmit}>
        {options.map((option) => (
          <div key={option}>
            <label>
              <input
                type="radio"
                name="option"
                onChange={() => handleChange(option)}
              />
              {option}
            </label>
          </div>
        ))}
        {answer ? (
          <button type="submit">Next</button>
        ) : (
          <button disabled>Next</button>
        )}
      </form>
    </div>
  );
};

export default QuizQuestion;
