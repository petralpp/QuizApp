export interface Quizz {
  id: string;
  name: string;
  description: string;
  questions: QuizzQuestions[];
}

export interface QuizzQuestions {
  question: string;
  choices: string[];
}

export interface CorrectAnswer {
  question: string;
  answer: string;
}

export interface QuizzAnswers {
  quizzName: string;
  answers: CorrectAnswer[];
}
