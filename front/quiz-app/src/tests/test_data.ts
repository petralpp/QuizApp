import { type Quiz, type CorrectAnswer } from "../types";

/* Data and functions for testing components */

const testQuizzes: Quiz[] = [
  {
    _id: "quiz-1",
    category: "Education",
    name: "HTML Basics",
    description: "Test your knowledge of HTML concepts.",
    questions: [
      {
        question: "What does HTML stand for?",
        choices: [
          "HyperText Markup Language",
          "HighText Machine Language",
          "HyperTool Markup Language"
        ]
      },
      {
        question: "Which HTML tag is used to create a hyperlink?",
        choices: ["<a>", "<link>", "<href>"]
      },
      {
        question: "Which tag is used to display an image?",
        choices: ["<img>", "<image>", "<pic>"]
      }
    ],
    answersId: "1"
  },
  {
    _id: "quiz-2",
    category: "Education",
    name: "CSS Fundamentals",
    description: "A short quiz covering basic CSS concepts.",
    questions: [
      {
        question: "Which CSS property is used to change text color?",
        choices: ["color", "font-color", "text-style"]
      },
      {
        question: "Which CSS property adds space inside an element?",
        choices: ["padding", "margin", "spacing"]
      },
      {
        question: "Which display value enables Flexbox?",
        choices: ["flex", "block", "inline"]
      }
    ],
    answersId: "2"
  },
  {
    _id: "quiz-3",
    category: "Entertainment",
    name: "Movie Classics",
    description: "Test your knowledge of popular and classic movies.",
    questions: [
      {
        question: "Which movie features the quote “I'll be back”?",
        choices: ["The Terminator", "Die Hard", "Predator"]
      },
      {
        question: "Who directed the movie Inception?",
        choices: ["Christopher Nolan", "Steven Spielberg", "James Cameron"]
      },
      {
        question: "Which movie won the Oscar for Best Picture in 1994?",
        choices: ["Forrest Gump", "Pulp Fiction", "The Shawshank Redemption"]
      }
    ],
    answersId: "3"
  }
];

const getSeparatedData = () => {
  const entertainment: Quiz[] = [];
  const education: Quiz[] = [];
  testQuizzes.forEach((quiz) =>
    quiz.category === "Entertainment"
      ? entertainment.push(quiz)
      : education.push(quiz)
  );
  return { entertainment, education };
};

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

export default {
  testQuizzes,
  getSeparatedData,
  testQuestions,
  testCorrectAnswers,
  testPlayerAnswers
};
