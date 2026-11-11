// ============================================================
//  EDIT ONLY THIS FILE TO CHANGE THE EXAM.
//  - id: unique whole number (1, 2, 3, ...)
//  - exactly 4 options
//  - correctIndex: 0 = A, 1 = B, 2 = C, 3 = D
//  - image (optional): shown ONLY on the classroom screen, never on phones.
//      image: "images/map1.png"   -> a file inside your GitHub repo's images/ folder
//      or just the file name if you select the image together with this file
//      in the host page's "Load exam" button.
//  The total score (X / number of questions) is calculated automatically.
// ============================================================
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
