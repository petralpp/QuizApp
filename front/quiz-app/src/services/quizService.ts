import axios from "axios";
import type { QuizAnswers, Quiz } from "../types";

const getAllQuizzes = async () => {
  const response = await axios.get<Quiz[]>("/api/quiz");
  return response.data;
};

const getAnswers = async (id: string) => {
  const response = await axios.get<QuizAnswers>(`/api/quiz/${id}`);
  return response.data;
};

export default { getAllQuizzes, getAnswers };
