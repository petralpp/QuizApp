import { Quiz, QuizAnswers } from "./types";

export const questions: Quiz[] = [
  {
    id: "f4b3fb69-0918-4838-b01e-075bc9fccdd9",
    category: "Entertainment",
    name: "Stardew Valley",
    description:
      "After spicing the Luau soup with purple underwear for the 10th time, or getting tired of Marnie staring at the microwave, you should try something else. Like answering these questions. Think you're a pro farmer? Or the annual Egg Hunt winner? Prove it by getting to the bottom of this quiz (without staircases). Okay, poke?",
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
        choices: ["Parsnip", "Melon", "Pumpkin", "Corn", "All above are required"],
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
    category: "Entertainment",
    name: "Skyrim",
    description:
      "If you ever reached Riverwood after escaping Helgen, this might be the quiz for you. Even if you've never visited the Cloud District. From the frozen holds of the north to ancient dragon lore and Daedric secrets, this quiz challenges how well you know the world of Skyrim. Put the cheese wheel down and answer these questions to see if you truly deserve the title of Dragonborn. This quiz is not afraid of you, even if you are its elder.",
    questions: [
      {
        question:
          "What town does the main questline lead the player to after Riverwood?",
        choices: ["Riften", "Markarth", "Whiterun", "Winterhold"],
      },
      {
        question: "What is the title given to the player character in the game?",
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
        question: "Who lives with the Greybeards?",
        choices: ["Delphine", "Paarthurnax", "Partisnax", "Braith"],
      },
      {
        question: "Which city is home to the magical college?",
        choices: ["Dawnstar", "Solitude", "Falkreath", "Winterhold"],
      },
      {
        question: "What creature guards mammoths?",
        choices: ["Skeever", "Falmer", "Giant", "Sabre Cat", "Bear"],
      },
      {
        question: "What powerful clan resides in Riften?",
        choices: ["Battle-Borns", "Gray-Manes", "The Silver-Bloods", "Black-Briars"],
      },
      {
        question: "Who is the Jarl of Whiterun?",
        choices: ["Jarl Elisif", "Jarl Siddgeir", "Jarl Balgruuf", "Jarl Igmund"],
      },
    ],
  },
  {
    id: "0984b2d5-3a51-47eb-be04-0ff72c11ab35",
    category: "Entertainment",
    name: "Friends",
    description:
      "If your job's a joke, you're broke, or your love life's DOA, you should cheer yourself up with this quiz. Start now! Unless you have a turkey over your head. Or you can't get those leather pants off. Maybe you'd rather practice an embarrassing dance routine with your sibling. Whatever your weird excuse is, this quiz will be there for you, cause you're here for it too.",
    questions: [
      {
        question: "Who was Ross Geller's first wife?",
        choices: ["Carol Willick", "Emily Waltham", "Rachel Green", "Julie"],
      },
      {
        question: "What instrument does Phoebe play and sing with?",
        choices: ["Piano", "Guitar", "Ukulele", "Bongos"],
      },
      {
        question:
          "What is the name of the coffee shop where the friends often hang out?",
        choices: ["Coffee Buzz", "The Daily Grind", "Perk Central", "Central Perk"],
      },
      {
        question: "Which character famously says, “How you doin'?”",
        choices: ["Chandler Bing", "Ross Geller", "Joey Tribbiani", "Mike Hannigan"],
      },
      {
        question: "What is Chandler Bing's middle name?",
        choices: ["Muriel", "Michael", "Matthew", "Mitchell"],
      },
      {
        question: "Who did Rachel almost marry in season 1?",
        choices: ["Paolo", "Ross Geller", "Barry Farber", "Mark Robinson"],
      },
      {
        question: "What does Joey refuse to share?",
        choices: ["Clothes", "Money", "Food", "Furniture"],
      },
      {
        question: "Who is Phoebe's twin sister? ",
        choices: ["Piper", "Prue", "Amy", "Ursula"],
      },
      {
        question: "What job does Ross have for most of the series?",
        choices: ["Paleontologist", "Archaeologist", "Anthropologist", "Geologist"],
      },
      {
        question: "Who officiates Monica and Chandler's wedding?",
        choices: ["Joey Tribbiani", "Ross Geller", "Phoebe Buffay", "Jack Geller"],
      },
      {
        question: "What was the name of Monica's older doctor boyfriend?",
        choices: ["Chandler", "Richard", "Julio", "Paul"],
      },
      {
        question:
          "What was the nickname of the man who lived across the street from Monica and Rachel?",
        choices: [
          "Hairy Monkey Man",
          "Big Smelly Dude",
          "Pretty Ripped Dude",
          "Ugly Naked Guy",
        ],
      },
      {
        question: "What is the name of the pet Ross adopts in season 1?",
        choices: ["Croissant", "Marcel", "Paolo", "Mike"],
      },
      {
        question: "Whose children does Phoebe give birth to?",
        choices: ["Mike", "David", "Her repair guy", "Her own brother"],
      },
      {
        question: "Who does Gunther have a crush on?",
        choices: ["Monica", "Rachel", "Phoebe", "Susan"],
      },
    ],
  },
  {
    id: "d86d180f-f60d-4160-8595-f63721024118",
    category: "Education",
    name: "HTML",
    description:
      "Test your HTML knowledge! This quiz covers the basics of HTML, including tags, attributes, and document structure. Perfect for beginners or anyone looking to refresh their core web development skills.",
    questions: [
      {
        question: "What does HTML stand for?",
        choices: [
          "HyperText Markup Language",
          "HighText Machine Language",
          "HyperTool Markup Language",
          "Home Tool Markup Language",
        ],
      },
      {
        question: "Which HTML element is used to define the largest heading?",
        choices: ["<heading>", "<head>", "<h1>", "<h6>"],
      },
      {
        question: "What is the correct HTML element for inserting a line break?",
        choices: ["<lb>", "<break>", "<br>", "<hr>"],
      },
      {
        question:
          "Which attribute is used to provide alternative text for an image?",
        choices: ["alt", "title", "src", "href"],
      },
      {
        question: "Which HTML tag is used to create a hyperlink?",
        choices: ["<link>", "<a>", "<href>", "<nav>"],
      },
      {
        question: "Which HTML element is used to define a list item?",
        choices: ["<ul>", "<ol>", "<list>", "<li>"],
      },
      {
        question: "What is the correct way to make text bold in HTML?",
        choices: ["<strong>", "<bold>", "<bld>", "<text-bold>"],
      },
      {
        question: "Which HTML tag is used to display an image?",
        choices: ["<img>", "<image>", "<pic>", "<src>"],
      },
      {
        question:
          "Which HTML element is used to define the document title shown in the browser tab?",
        choices: ["<meta>", "<head>", "<header>", "<title>"],
      },
      {
        question: "Which doctype declaration is correct for HTML5?",
        choices: [
          "<!DOCTYPE HTML5>",
          "<!HTML>",
          "<!DOCTYPE html>",
          "<DOCTYPE html>",
        ],
      },
    ],
  },
  {
    id: "550b1e6e-c11c-433b-8895-d4a9fabf2481",
    category: "Education",
    name: "CSS",
    description:
      "Put your CSS skills to the test! This quiz covers core CSS concepts like selectors, colors, spacing, layout, and units. Perfect for beginners or anyone wanting to brush up on styling fundamentals.",
    questions: [
      {
        question: "What does CSS stand for?",
        choices: [
          "Creative Style System",
          "Cascading Style Sheets",
          "Computer Style Sheets",
          "Colorful Style Syntax",
        ],
      },
      {
        question:
          "Which CSS property is used to change the text color of an element?",
        choices: ["color", "font-color", "text-color", "foreground"],
      },
      {
        question: "Which CSS property controls the size of text?",
        choices: ["size", "font-size", "text-size", "font-style"],
      },
      {
        question: 'How do you select an element with the id "header" in CSS?',
        choices: ["#header", ".header", "header", "*header"],
      },
      {
        question: "Which CSS property is used to add space inside an element?",
        choices: ["spacing", "padding", "margin", "border"],
      },
      {
        question:
          "Which CSS display value makes elements appear in a row by default?",
        choices: ["block", "inline", "flex", "grid"],
      },
      {
        question: "Which CSS property is used to change the background color?",
        choices: ["bgcolor", "background-color", "color", "background-style"],
      },
      {
        question:
          "Which CSS property is used to control the spacing between lines of text?",
        choices: ["letter-spacing", "word-spacing", "line-height", "text-spacing"],
      },
      {
        question: "Which unit is relative to the font size of the element?",
        choices: ["px", "%", "vh", "em"],
      },
      {
        question: "Which CSS property is used to create rounded corners?",
        choices: ["rounded", "border-radius", "corner-radius", "border-style"],
      },
    ],
  },
  {
    id: "3349e54e-8734-4617-b14c-6303bda3370f",
    category: "Education",
    name: "JavaScript",
    description:
      "Test your JavaScript fundamentals! This quiz covers core JavaScript concepts like variables, data types, functions, arrays, and DOM interaction. Perfect for beginners or anyone looking to refresh their JavaScript skills.",
    questions: [
      {
        question: "What is JavaScript primarily used for?",
        choices: [
          "Adding interactivity to web pages",
          "Styling web pages",
          "Structuring web content",
          "Managing databases",
        ],
      },
      {
        question:
          "Which keyword is used to declare a variable that cannot be reassigned?",
        choices: ["const", "let", "var", "static"],
      },
      {
        question: "Which of the following is a JavaScript data type?",
        choices: ["character", "boolean", "float", "double"],
      },
      {
        question: "How do you write a single-line comment in JavaScript?",
        choices: ["<!-- comment -->", "// comment", "# comment", "/* comment */"],
      },
      {
        question: "Which method is used to add an item to the end of an array?",
        choices: ["pop()", "shift()", "push()", "unshift()"],
      },
      {
        question: "What will `typeof null` return in JavaScript?",
        choices: ['"number"', '"object"', '"null"', '"undefined"'],
      },
      {
        question: "Which operator is used to compare both value and type?",
        choices: ["===", "==", "=", "!="],
      },
      {
        question: "Which function converts a JSON string into a JavaScript object?",
        choices: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "toObject()"],
      },
      {
        question: "How do you write an arrow function?",
        choices: [
          "function => {}",
          "=> function() {}",
          "() => {}",
          "function() -> {}",
        ],
      },
      {
        question:
          "Which method is commonly used to select an element by ID in the DOM?",
        choices: [
          "document.querySelectorAll()",
          "document.getElementsByClassName()",
          "document.selectById()",
          "document.getElementById()",
        ],
      },
    ],
  },
];

export const correctAnswers: QuizAnswers[] = [
  {
    quizName: "Stardew Valley",
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
    quizName: "Skyrim",
    answers: [
      {
        question:
          "What town does the main questline lead the player to after Riverwood?",
        answer: "Whiterun",
      },
      {
        question: "What is the title given to the player character in the game?",
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
        question: "Who lives with the Greybeards?",
        answer: "Paarthurnax",
      },
      {
        question: "Which city is home to the magical college?",
        answer: "Winterhold",
      },
      {
        question: "What creature guards mammoths?",
        answer: "Giant",
      },
      {
        question: "What powerful clan resides in Riften?",
        answer: "Black-Briars",
      },
      {
        question: "Who is the Jarl of Whiterun?",
        answer: "Jarl Balgruuf",
      },
    ],
  },
  {
    quizName: "Friends",
    answers: [
      {
        question: "Who was Ross Geller's first wife?",
        answer: "Carol Willick",
      },
      {
        question: "What instrument does Phoebe play and sing with?",
        answer: "Guitar",
      },
      {
        question:
          "What is the name of the coffee shop where the friends often hang out?",
        answer: "Central Perk",
      },
      {
        question: "Which character famously says, “How you doin'?”",
        answer: "Joey Tribbiani",
      },
      {
        question: "What is Chandler Bing's middle name?",
        answer: "Muriel",
      },
      {
        question: "Who did Rachel almost marry in season 1?",
        answer: "Barry Farber",
      },
      {
        question: "What does Joey refuse to share?",
        answer: "Food",
      },
      {
        question: "Who is Phoebe's twin sister?",
        answer: "Ursula",
      },
      {
        question: "What job does Ross have for most of the series?",
        answer: "Paleontologist",
      },
      {
        question: "Who officiates Monica and Chandler's wedding?",
        answer: "Joey Tribbiani",
      },
      {
        question: "What was the name of Monica's older doctor boyfriend?",
        answer: "Richard",
      },
      {
        question:
          "What was the nickname of the man who lived across the street from Monica and Rachel?",
        answer: "Ugly Naked Guy",
      },
      {
        question: "What is the name of the pet Ross adopts in season 1?",
        answer: "Marcel",
      },
      {
        question: "Whose children does Phoebe give birth to?",
        answer: "Her own brother",
      },
      {
        question: "Who does Gunther have a crush on?",
        answer: "Rachel",
      },
    ],
  },
  {
    quizName: "HTML",
    answers: [
      {
        question: "What does HTML stand for?",
        answer: "HyperText Markup Language",
      },
      {
        question: "Which HTML element is used to define the largest heading?",
        answer: "<h1>",
      },
      {
        question: "What is the correct HTML element for inserting a line break?",
        answer: "<br>",
      },
      {
        question:
          "Which attribute is used to provide alternative text for an image?",
        answer: "alt",
      },
      {
        question: "Which HTML tag is used to create a hyperlink?",
        answer: "<a>",
      },
      {
        question: "Which HTML element is used to define a list item?",
        answer: "<li>",
      },
      {
        question: "What is the correct way to make text bold in HTML?",
        answer: "<strong>",
      },
      {
        question: "Which HTML tag is used to display an image?",
        answer: "<img>",
      },
      {
        question:
          "Which HTML element is used to define the document title shown in the browser tab?",
        answer: "<title>",
      },
      {
        question: "Which doctype declaration is correct for HTML5?",
        answer: "<!DOCTYPE html>",
      },
    ],
  },
  {
    quizName: "CSS",
    answers: [
      {
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets",
      },
      {
        question:
          "Which CSS property is used to change the text color of an element?",
        answer: "color",
      },
      {
        question: "Which CSS property controls the size of text?",
        answer: "font-size",
      },
      {
        question: 'How do you select an element with the id "header" in CSS?',
        answer: "#header",
      },
      {
        question: "Which CSS property is used to add space inside an element?",
        answer: "padding",
      },
      {
        question:
          "Which CSS display value makes elements appear in a row by default?",
        answer: "flex",
      },
      {
        question: "Which CSS property is used to change the background color?",
        answer: "background-color",
      },
      {
        question:
          "Which CSS property is used to control the spacing between lines of text?",
        answer: "line-height",
      },
      {
        question: "Which unit is relative to the font size of the element?",
        answer: "em",
      },
      {
        question: "Which CSS property is used to create rounded corners?",
        answer: "border-radius",
      },
    ],
  },
  {
    quizName: "JavaScript",
    answers: [
      {
        question: "What is JavaScript primarily used for?",
        answer: "Adding interactivity to web pages",
      },
      {
        question:
          "Which keyword is used to declare a variable that cannot be reassigned?",
        answer: "const",
      },
      {
        question: "Which of the following is a JavaScript data type?",
        answer: "boolean",
      },
      {
        question: "How do you write a single-line comment in JavaScript?",
        answer: "// comment",
      },
      {
        question: "Which method is used to add an item to the end of an array?",
        answer: "push()",
      },
      {
        question: "What will `typeof null` return in JavaScript?",
        answer: '"object"',
      },
      {
        question: "Which operator is used to compare both value and type?",
        answer: "===",
      },
      {
        question: "Which function converts a JSON string into a JavaScript object?",
        answer: "JSON.parse()",
      },
      {
        question: "How do you write an arrow function?",
        answer: "() => {}",
      },
      {
        question:
          "Which method is commonly used to select an element by ID in the DOM?",
        answer: "document.getElementById()",
      },
    ],
  },
];
