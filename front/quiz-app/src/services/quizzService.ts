import axios from "axios";
import type { Quizz } from "../types";

const getAllQuizzes = async () => {
  const response = await axios.get<object[]>("/api/quizz");
  const quizzData = response.data as Quizz[];
  return quizzData;
};

export default { getAllQuizzes };
