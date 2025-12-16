import axios from "axios";
import type { CorrectAnswer, Quiz } from "../types";

const getAllQuizzes = async () => {
  const response = await axios.get<Quiz[]>("/api/quiz");
  return response.data;
};

const getAnswers = async (id: string) => {
  const response = await axios.get<CorrectAnswer[]>(`/api/quiz/${id}`);
  return response.data;
};

export default { getAllQuizzes, getAnswers };
