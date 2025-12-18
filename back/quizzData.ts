import { Quiz, QuizAnswers } from "./types";

export const questions: Quiz[] = [
  {
    id: "f4b3fb69-0918-4838-b01e-075bc9fccdd9",
    name: "Stardew Valley",
    description:
      "After spicing the Luau soup with purple underwear for the 10th time, or getting tired of Marnie staring at the microwave, you should try something else. Like answering these questions. Think you're a pro farmer? Or the annual Egg Hunt winner? Prove it by getting to the bottom of this quiz (without ladders). Okay, poke?",
    questions: [
      {
        question: "What is the name of the town the game sets in?",
        choices: ["Pelican Town", "Whale Valley", "Bear City"],
      },
      {
        question: "Who is married to Pierre?",
        choices: ["Robin", "Madeline", "Caroline"],
      },
      {
        question: "What vice does Sebastian have?",
        choices: ["Gambling", "Smoking", "GTA"],
      },
      {
        question: "Who runs the Stardrop Saloon?",
        choices: ["Gil", "Gunther", "Gus", "Morris"],
      },
      {
        question: "Which crop is NOT required for the Quality Crops Bundle?",
        choices: [
          "Parsnip",
          "Melon",
          "Pumpkin",
          "Corn",
          "All above are required",
        ],
      },
      {
        question: "How do you unlock access to the Calico Desert?",
        choices: [
          "Repair the bus",
          "Complete the Vault bundles",
          "Reach level 120 in the mines",
          "Donate 60 items to the museum",
        ],
      },
      {
        question: "What is the deepest level of the Pelican Town Mines?",
        choices: ["100", "110", "120", "150"],
      },
      {
        question: "Which villager gives you the Tea Sapling recipe?",
        choices: ["Caroline", "Evelyn", "Leah", "Robin"],
      },
      {
        question: "In what season does Starfruit grow?",
        choices: ["Spring", "Summer", "Fall", "Winter", "Any"],
      },
      {
        question:
          "What item must be placed inside Grandpa's Shrine to receive the Statue of Perfection?",
        choices: ["Diamond", "Prismatic Shard", "Iridium Bar", "Ancient Fruit"],
      },
      {
        question: "What happens when you give a villager a hated gift?",
        choices: [
          "Friendship stays the same",
          "The gift is returned",
          "Friendship decreases",
          "The villager refuses to talk",
        ],
      },
      {
        question: "Who is the mysterious character living in the sewers?",
        choices: ["The Dwarf", "Linus", "Mr. Qi", "Krobus"],
      },
      {
        question: "Which profession can you choose at Farming level 5?",
        choices: ["Rancher", "Artisan", "Gatherer", "Fisher"],
      },
      {
        question: "Which item permanently increases your maximum energy?",
        choices: ["Life Elixir", "Energy Tonic", "Stardrop", "Iridium Fruit"],
      },
      {
        question: "Which festival takes place on Fall 16?",
        choices: [
          "Spirit's Eve",
          "Stardew Valley Fair",
          "Festival of Ice",
          "Dance of the Moonlight Jellies",
        ],
      },
      {
        question: "Which festival includes a mermaid show?",
        choices: [
          "Luau",
          "Dance of the Moonlight Jellies",
          "Night Market",
          "Flower Dance",
        ],
      },
      {
        question: "How do you unlock Ginger Island?",
        choices: [
          "Finish the Community Center",
          "Complete the Skull Cavern",
          "Reach 10 hearts with Willy",
          "Repair Willy's boat",
        ],
      },
    ],
  },
  {
    id: "472bfd0c-cb54-4c3e-b5bc-88afb58c5471",
    name: "Skyrim",
    description:
      "If you ever reached Riverwood after escaping Helgen, this might be the quiz for you. Even if you've never visited the Cloud District. From the frozen holds of the north to ancient dragon lore and Daedric secrets, this quiz challenges how well you know the world of Skyrim. Put the cheese wheel down and answer these questions to see if you truly deserve the title of Dragonborn. This quiz is not afraid of you, even if you are its elder.",
    questions: [
      {
        question: "What is the name of the region where the game takes place?",
        choices: ["Skyrim", "Cyrodiil", "Morrowind", "Hammerfell"],
      },
      {
        question:
          "What is the title given to the player character in the game?",
        choices: ["Jarl", "High King", "Dragonborn", "Greybeard"],
      },
      {
        question: "Which city is the capital of Skyrim?",
        choices: ["Whiterun", "Markarth", "Windhelm", "Solitude"],
      },
      {
        question: "Which faction focuses on stealth and theft?",
        choices: [
          "Dark Brotherhood",
          "Thieves Guild",
          "Companions",
          "College of Winterhold",
        ],
      },
      {
        question:
          "What substance grants temporary bonuses and can also be addictive?",
        choices: ["Skooma", "Salt", "Sleeping Tree Sap", "White Phial"],
      },
      {
        question: "Which race has a natural resistance to frost?",
        choices: ["Dunmer", "Argonian", "Khajiit", "Nord"],
      },
      {
        question:
          "What is the name of the dragon encountered during the main quest in Helgen?",
        choices: ["Paarthurnax", "Odahviing", "Alduin", "Mirmulnir"],
      },
      {
        question: "Which Daedric Prince is associated with madness and chaos?",
        choices: ["Sheogorath", "Mehrunes Dagon", "Molag Bal", "Hermaeus Mora"],
      },
      {
        question: "What shout allows the Dragonborn to slow time?",
        choices: [
          "Unrelenting Force",
          "Become Ethereal",
          "Slow Time",
          "Whirlwind Sprint",
        ],
      },
      {
        question: "Which city is home to the magical college?",
        choices: ["Dawnstar", "Solitude", "Falkreath", "Winterhold"],
      },
    ],
  },
];

export const correctAnswers: QuizAnswers[] = [
  {
    quizzName: "Stardew Valley",
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
  {
    quizzName: "Skyrim",
    answers: [
      {
        question: "What is the name of the region where the game takes place?",
        answer: "Skyrim",
      },
      {
        question:
          "What is the title given to the player character in the game?",
        answer: "Dragonborn",
      },
      {
        question: "Which city is the capital of Skyrim?",
        answer: "Solitude",
      },
      {
        question: "Which faction focuses on on stealth and theft?",
        answer: "Thieves Guild",
      },
      {
        question:
          "What substance grants temporary bonuses and can also be addictive?",
        answer: "Skooma",
      },
      {
        question: "Which race has a natural resistance to frost?",
        answer: "Nord",
      },
      {
        question:
          "What is the name of the dragon encountered during the main quest in Helgen?",
        answer: "Alduin",
      },
      {
        question: "Which Daedric Prince is associated with madness and chaos?",
        answer: "Sheogorath",
      },
      {
        question: "What shout allows the Dragonborn to slow time?",
        answer: "Slow Time",
      },
      {
        question: "Which city is home to the magical college?",
        answer: "Winterhold",
      },
    ],
  },
];
