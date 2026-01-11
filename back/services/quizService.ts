import { questions, correctAnswers } from "../quizzData";
import { CorrectAnswer } from "../types";
import { QuizModel } from "../models/quizModel";

const getQuizzes = async () => {
  const quizzes = await QuizModel.find({});
  return quizzes;
};

const getAnswers = (id: string): CorrectAnswer[] | null => {
  const quiz = questions.find((element) => element.id === id);
  if (!quiz) {
    return null;
  }
  const answerObject = correctAnswers.find(
    (element) => element.quizName === quiz.name
  );
  if (answerObject) {
    return answerObject.answers;
  }
  return null;
};

export default { getQuizzes, getAnswers };
