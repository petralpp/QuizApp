import axios from "axios";
import type { CorrectAnswer, Quizz } from "../types";

const getAllQuizzes = async () => {
  const response = await axios.get<Quizz[]>("/api/quizz");
  return response.data;
};

const getAnswers = async (id: string) => {
  const response = await axios.get<CorrectAnswer[]>(`/api/quizz/${id}`);
  return response.data;
};

export default { getAllQuizzes, getAnswers };
