// ============================================================
//  ONE QUIZ = ONE FILE in the Exams/ folder. 
// ============================================================
const QUIZ_TITLE = "IELTS Vocabulary";
const QUIZ_SECONDS = 40; // 40 seconds gives them time to read the full sentences
const EXAM_QUESTIONS = [
  // --- DEFINITIONS ---
  { id: 1,  question: "certain to happen; unavoidable", options: [ "perpetual ", "inevitable ", "fluctuation ", "prestige " ], correctIndex: 1 },
  { id: 3,  question: "to help cause or bring about", options: [ "to defy ", "to withdraw ", "to contribute ", "to comprise " ], correctIndex: 2 },
  { id: 5,  question: "continuing forever or for a long time", options: [ "perpetual ", "inevitable ", "worldwide ", "respectively " ], correctIndex: 0 },
  { id: 7,  question: "widespread respect and admiration", options: [ "distribution ", "prestige ", "forecast ", "collateral damage " ], correctIndex: 1 },
  { id: 9,  question: "to leave a place or thing forever", options: [ "to handle ", "to indicate ", "to abandon ", "to contribute " ], correctIndex: 2 },
  { id: 11, question: "to take out or retreat", options: [ "to withdraw ", "to defy ", "to comprise ", "to handle " ], correctIndex: 0 },
  { id: 13, question: "extending or reaching throughout the world", options: [ "perpetual ", "worldwide ", "respectively ", "inevitable " ], correctIndex: 1 },
  { id: 15, question: "to manage, deal with, or control", options: [ "to abandon ", "to handle ", "to withdraw ", "to contribute " ], correctIndex: 1 },
  { id: 17, question: "to openly resist or refuse to obey", options: [ "to handle ", "to indicate ", "to defy ", "to abandon " ], correctIndex: 2 },
  { id: 19, question: "a person learning a trade from an employer", options: [ "correlation ", "fluctuation ", "distribution ", "apprentice " ], correctIndex: 3 },
  { id: 21, question: "unintended damage or casualties in a military operation", options: [ "collateral damage ", "worldwide ", "respectively ", "perpetual " ], correctIndex: 0 },
  { id: 23, question: "a mutual relationship or connection between two or more things", options: [ "correlation ", "fluctuation ", "distribution ", "forecast " ], correctIndex: 0 },
  { id: 25, question: "the way something is shared or spread out", options: [ "distribution ", "forecast ", "correlation ", "fluctuation " ], correctIndex: 0 },
  { id: 27, question: "to point out or show", options: [ "to indicate ", "to defy ", "to comprise ", "to withdraw " ], correctIndex: 0 },
  { id: 29, question: "separately or individually and in the order already mentioned", options: [ "respectively ", "perpetual ", "worldwide ", "inevitable " ], correctIndex: 0 },

  // --- FILL-IN-THE-BLANK ---
  { id: 2,  question: "The economic _______ in oil prices made it hard to predict profits.", options: [ "correlation ", "fluctuation ", "distribution ", "forecast " ], correctIndex: 1 },
  { id: 4,  question: "Many factors _______ to the success of the project.", options: [ "to abandon ", "to handle ", "to contribute ", "to indicate " ], correctIndex: 2 },
  { id: 6,  question: "The two countries have been in a state of _______ conflict for decades.", options: [ "collateral ", "perpetual ", "worldwide ", "inevitable " ], correctIndex: 1 },
  { id: 8,  question: "He is a man of great _______ in the scientific community.", options: [ "fluctuation ", "prestige ", "correlation ", "distribution " ], correctIndex: 1 },
  { id: 10, question: "The captain gave the order to _______ the sinking ship.", options: [ "to withdraw ", "to defy ", "to abandon ", "to comprise " ], correctIndex: 2 },
  { id: 12, question: "The general decided to _______ his troops from the border.", options: [ "to withdraw ", "to abandon ", "to contribute ", "to handle " ], correctIndex: 0 },
  { id: 14, question: "The new smartphone was released to _______ acclaim.", options: [ "perpetual ", "worldwide ", "collateral ", "distribution " ], correctIndex: 1 },
  { id: 16, question: "The customer service team is trained to _______ difficult situations.", options: [ "to defy ", "to handle ", "to withdraw ", "to indicate " ], correctIndex: 1 },
  { id: 18, question: "The rebels decided to _______ the government's orders.", options: [ "to withdraw ", "to defy ", "to comprise ", "to handle " ], correctIndex: 1 },
  { id: 20, question: "The master carpenter took on a young _______ to teach him the craft.", options: [ "forecast ", "apprentice ", "correlation ", "distribution " ], correctIndex: 1 },
  { id: 22, question: "The military targeted the base carefully to avoid _______.", options: [ "collateral damage ", "perpetual ", "worldwide ", "inevitable " ], correctIndex: 0 },
  { id: 24, question: "Studies show a strong _______ between smoking and lung disease.", options: [ "indication ", "correlation ", "fluctuation ", "distribution " ], correctIndex: 1 },
  { id: 26, question: "The weather _______ predicts heavy rain for the weekend.", options: [ "distribution ", "forecast ", "correlation ", "fluctuation " ], correctIndex: 1 },
  { id: 28, question: "The committee will _______ ten members from different departments.", options: [ "to handle ", "to indicate ", "to comprise ", "to withdraw " ], correctIndex: 2 },
  { id: 30, question: "The first and second prizes were won by Anna and John, _______.", options: [ "respectively ", "perpetual ", "worldwide ", "collateral " ], correctIndex: 0 }
];