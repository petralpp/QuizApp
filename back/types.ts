export interface Quizz {
  id: string;
  name: string;
  description: string;
  questions: object[];
}

export interface CorrectAnswer {
  question: string;
  answer: string;
}

export interface QuizzAnswers {
  name: string;
  answers: CorrectAnswer[];
}
