import axios from "axios";
import type { QuizAnswers, Quiz } from "../types";

const getAllQuizzes = async () => {
  try {
    const response = await axios.get<Quiz[]>("/api/quiz");
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) console.log(error.message);
  }
};

const getAnswers = async (id: string) => {
  try {
    const response = await axios.get<QuizAnswers>(`/api/quiz/answers/${id}`);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) console.log(error.message);
  }
};

export default { getAllQuizzes, getAnswers };
