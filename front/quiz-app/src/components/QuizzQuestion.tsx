import { useState, type FormEvent } from "react";

interface Props {
  question: string;
  options: string[];
  sendAnswer(answer: string): void;
}

const QuizzQuestion = ({ question, options, sendAnswer }: Props) => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendAnswer(answer);
    setAnswer("");
  };

  const handleChange = (name: string) => {
    setAnswer(name);
  };

  return (
    <div>
      <h3>{question}</h3>
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

export default QuizzQuestion;
