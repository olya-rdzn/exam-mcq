// ============================================================
//  ONE QUIZ = ONE FILE in the Exams/ folder. Edit it in TextMate, upload it, and it appears on the picker.
//
//  QUIZ_TITLE   (optional) shown on the TV, the lobby and the phones. Default: EXAM_TITLE from config.js
//  QUIZ_SECONDS (optional) seconds per question.                       Default: SECONDS_PER_QUESTION from config.js
//
//  For each question:
//    id           unique whole number (1, 2, 3, ...)
//    question     the text shown on the TV
//    options      exactly 4 answers
//    correctIndex 0 = A, 1 = B, 2 = C, 3 = D
//    image        (optional) shown ONLY on the TV, never on phones. Path inside the repo, e.g. "images/map1.png"
//
//  The score (X / number of questions) is calculated automatically.
//  Files whose name starts with "_" or "." are ignored by the picker (handy for templates and drafts).
// ============================================================
const QUIZ_TITLE = "Capitals of the world";
const QUIZ_SECONDS = 45;

const EXAM_QUESTIONS = [
  { id: 1,  question: "What is the capital of Australia?",   options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], correctIndex: 2 },
  { id: 2,  question: "What is the capital of Canada?",      options: ["Ottawa", "Toronto", "Vancouver", "Montreal"], correctIndex: 0 },
  { id: 3,  question: "What is the capital of Japan?",       options: ["Osaka", "Kyoto", "Hiroshima", "Tokyo"], correctIndex: 3 },
  { id: 4,  question: "What is the capital of Brazil?",      options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"], correctIndex: 1 },
  { id: 5,  question: "What is the capital of Kenya?",       options: ["Mombasa", "Kisumu", "Nairobi", "Nakuru"], correctIndex: 2 },
  { id: 6,  question: "What is the capital of Turkey?",      options: ["Istanbul", "Ankara", "Izmir", "Antalya"], correctIndex: 1 },
  { id: 7,  question: "What is the capital of the Netherlands?", options: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht"], correctIndex: 0 },
  { id: 8,  question: "What is the capital of South Korea?", options: ["Busan", "Incheon", "Seoul", "Daegu"], correctIndex: 2 },
  { id: 9,  question: "What is the capital of Egypt?",       options: ["Alexandria", "Giza", "Luxor", "Cairo"], correctIndex: 3 },
  { id: 10, question: "What is the capital of Switzerland?", options: ["Zurich", "Geneva", "Bern", "Basel"], correctIndex: 2 }
];
