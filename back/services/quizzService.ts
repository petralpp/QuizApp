import { questions, correctAnswers } from "../quizzData";

const getQuizzes = (): object => {
  return questions;
};

const getAnswers = (id: string): object[] | null => {
  const quizz = questions.find((element) => element.id === id);
  if (!quizz) {
    return null;
  }
  const answerObject = correctAnswers.find(
    (element) => element.name === quizz.name
  );
  if (answerObject) {
    return answerObject.answers;
  }
  return null;
};

export default { getQuizzes, getAnswers };
