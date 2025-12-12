import { Quizz, Answers } from "./types";

export const questions: Quizz[] = [
  {
    id: "f4b3fb69-0918-4838-b01e-075bc9fccdd9",
    name: "Stardew Valley",
    questions: [
      {
        "What is the name of the town the game sets in?": [
          "Pelican Town",
          "Whale Valley",
          "Bear City",
        ],
      },
      {
        "What is the name of Pierre's wife?": ["Robin", "Madeline", "Caroline"],
      },
      {
        "What vice does Sebastian have?": ["gambling", "smoking", "GTA"],
      },
    ],
  },
];

export const correctAnswers: Answers[] = [
  {
    name: "Stardew Valley",
    answers: [
      {
        "What is the name of the town the game sets in?": "Pelican Town",
      },
      {
        "What is the name of Pierre's wife?": "Caroline",
      },
      {
        "What vice does Sebastian have?": "smoking",
      },
    ],
  },
];
