import { type CorrectAnswer } from "../types";

/* Data for testing components */

const testQuestions: string[] = [
  "What year was this test data made?",
  "Should this one be wrong?",
  "Is this the final one?"
];

const testCorrectAnswers: CorrectAnswer[] = [
  {
    question: "What year was this test data made?",
    answer: "2026"
  },
  {
    question: "Should this one be wrong?",
    answer: "Yes"
  },
  {
    question: "Is this the final one?",
    answer: "Maybe"
  }
];

const testPlayerAnswers: string[] = ["2026", "No", "Maybe"];

export default { testQuestions, testCorrectAnswers, testPlayerAnswers };
