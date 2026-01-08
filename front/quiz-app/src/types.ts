export interface Quiz {
  id: string;
  category: string;
  name: string;
  description: string;
  questions: QuizQuestions[];
}

export interface QuizQuestions {
  question: string;
  choices: string[];
}

export interface QuizAnswers {
  quizName: string;
  answers: CorrectAnswer[];
}

export interface CorrectAnswer {
  question: string;
  answer: string;
}

export interface QuizDescription {
  category: string;
  name: string;
  description: string;
  questions: number;
}
