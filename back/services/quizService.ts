import { QuizModel } from "../models/quizModel";
import { AnswersModel } from "../models/answersModel";

const getQuizzes = async () => {
  const quizzes = await QuizModel.find({});
  return quizzes;
};

const getAnswers = async (id: string) => {
  const answers = await AnswersModel.findById(id);
  return answers;
};

export default { getQuizzes, getAnswers };
