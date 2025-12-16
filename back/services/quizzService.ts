import { questions, correctAnswers } from "../quizzData";
import { Quizz, CorrectAnswer } from "../types";

const getQuizzes = (): Quizz[] => {
  return questions;
};

const getAnswers = (id: string): CorrectAnswer[] | null => {
  const quizz = questions.find((element) => element.id === id);
  if (!quizz) {
    return null;
  }
  const answerObject = correctAnswers.find(
    (element) => element.quizzName === quizz.name
  );
  if (answerObject) {
    return answerObject.answers;
  }
  return null;
};

export default { getQuizzes, getAnswers };
