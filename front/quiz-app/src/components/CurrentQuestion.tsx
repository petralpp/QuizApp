import { useState, type FormEvent } from "react";

interface Props {
  index: number;
  question: string;
  options: string[];
  sendAnswer(answer: string): void;
}

const CurrentQuestion = ({ index, question, options, sendAnswer }: Props) => {
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
    <div className="flex flex-col items-center">
      <p className="mt-3 text-base md:text-lg lg:text-xl">
        {index}. {question}
      </p>
      <form onSubmit={handleSubmit} className="m-2">
        {options.map((option) => (
          <div key={option} className="mb-3">
            <label className="">
              <input
                type="radio"
                name="option"
                onChange={() => handleChange(option)}
              />
              <p className="inline ml-2 text-base md:text-lg lg:text-xl">{option}</p>
            </label>
          </div>
        ))}
        <div className="text-center">
          {answer ? (
            <button type="submit" className="btn-blue">
              Next
            </button>
          ) : (
            <button disabled className="btn-blue-disabled">
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CurrentQuestion;
