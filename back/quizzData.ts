import { Quizz, QuizzAnswers } from "./types";

export const questions: Quizz[] = [
  {
    id: "f4b3fb69-0918-4838-b01e-075bc9fccdd9",
    name: "Stardew Valley",
    description:
      "Think you're a pro farmer? Test your knowledge in these 18 questions! (Note: Spoilers ahead!)",
    questions: [
      {
        "What is the name of the town the game sets in?": [
          "Pelican Town",
          "Whale Valley",
          "Bear City",
        ],
      },
      {
        "Who is married to Pierre?": ["Robin", "Madeline", "Caroline"],
      },
      {
        "What vice does Sebastian have?": ["Gambling", "Smoking", "GTA"],
      },
      {
        "Who runs the Stardrop Saloon?": ["Gil", "Gunther", "Gus", "Morris"],
      },
      {
        "Which crop is NOT required for the Quality Crops Bundle?": [
          "Parsnip",
          "Melon",
          "Pumpkin",
          "Corn",
          "All above are required",
        ],
      },
      {
        "How do you unlock access to the Calico Desert?": [
          "Repair the bus",
          "Complete the Vault bundles",
          "Reach level 120 in the mines",
          "Donate 60 items to the museum",
        ],
      },
      {
        "What is the deepest level of the Pelican Town Mines?": [
          "100",
          "110",
          "120",
          "150",
        ],
      },
      {
        "Which villager gives you the Tea Sapling recipe?": [
          "Caroline",
          "Evelyn",
          "Leah",
          "Robin",
        ],
      },
      {
        "In what season does Starfruit grow?": [
          "Spring",
          "Summer",
          "Fall",
          "Winter",
          "Any",
        ],
      },
      {
        "What item must be placed inside Grandpa's Shrine to receive the Statue of Perfection?":
          ["Diamond", "Prismatic Shard", "Iridium Bar", "Ancient Fruit"],
      },
      {
        "What happens when you give a villager a hated gift?": [
          "Friendship stays the same",
          "The gift is returned",
          "Friendship decreases",
          "The villager refuses to talk",
        ],
      },
      {
        "Who is the mysterious character living in the sewers?": [
          "The Dwarf",
          "Linus",
          "Mr. Qi",
          "Krobus",
        ],
      },
      {
        "Which profession can you choose at Farming level 5?": [
          "Rancher",
          "Artisan",
          "Gatherer",
          "Fisher",
        ],
      },
      {
        "Which item permanently increases your maximum energy?": [
          "Life Elixir",
          "Energy Tonic",
          "Stardrop",
          "Iridium Fruit",
        ],
      },
      {
        "Which festival takes place on Fall 16?": [
          "Spirit's Eve",
          "Stardew Valley Fair",
          "Festival of Ice",
          "Dance of the Moonlight Jellies",
        ],
      },
      {
        "Which festival includes a mermaid show?": [
          "Luau",
          "Dance of the Moonlight Jellies",
          "Night Market",
          "Flower Dance",
        ],
      },
      {
        "How do you unlock Ginger Island?": [
          "Finish the Community Center",
          "Complete the Skull Cavern",
          "Reach 10 hearts with Willy",
          "Repair Willy's boat",
        ],
      },
    ],
  },
];

export const correctAnswers: QuizzAnswers[] = [
  {
    name: "Stardew Valley",
    answers: [
      {
        question: "What is the name of the town the game sets in?",
        answer: "Pelican Town",
      },
      {
        question: "Who is married to Pierre?",
        answer: "Caroline",
      },
      {
        question: "What vice does Sebastian have?",
        answer: "Smoking",
      },
      { question: "Who runs the Stardrop Saloon?", answer: "Gus" },
      {
        question: "Which crop is NOT required for the Quality Crops Bundle?",
        answer: "All above are required",
      },
      {
        question: "How do you unlock access to the Calico Desert?",
        answer: "Repair the bus",
      },
      {
        question: "What is the deepest level of the Pelican Town Mines?",
        answer: "120",
      },
      {
        question: "Which villager gives you the Tea Sapling recipe?",
        answer: "Caroline",
      },
      {
        question: "In what season does Starfruit grow?",
        answer: "Summer",
      },
      {
        question:
          "What item must be placed inside Grandpa's Shrine to receive the Statue of Perfection?",
        answer: "Diamond",
      },
      {
        question: "What happens when you give a villager a hated gift?",
        answer: "Friendship decreases",
      },
      {
        question: "Who is the mysterious character living in the sewers?",
        answer: "Krobus",
      },
      {
        question: "Which profession can you choose at Farming level 5?",
        answer: "Rancher",
      },
      {
        question: "Which item permanently increases your maximum energy?",
        answer: "Stardrop",
      },
      {
        question: "Which festival takes place on Fall 16?",
        answer: "Stardew Valley Fair",
      },
      {
        question: "Which festival includes a mermaid show?",
        answer: "Night Market",
      },
      {
        question: "How do you unlock Ginger Island?",
        answer: "Repair Willy's boat",
      },
    ],
  },
];
