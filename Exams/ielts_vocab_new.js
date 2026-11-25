// ============================================================
//  ONE QUIZ = ONE FILE in the Exams/ folder.
// ============================================================
const QUIZ_TITLE = "IELTS Vocabulary_3";
const QUIZ_SECONDS = 40;
const QUIZ_MUSIC = "https://www.youtube.com/watch?v=eNtNLVupYns";
const EXAM_QUESTIONS = [
  // --- DEFINITIONS (12) ---
  { id: 1,  question: "to produce a change in or have an influence on something", options: ["affect", "frame", "collapse", "commit"], correctIndex: 0 },
  { id: 2,  question: "at the same time", options: ["respectively", "simultaneously", "perpetually", "eventually"], correctIndex: 1 },
  { id: 3,  question: "a sign or warning that something, often bad, will happen", options: ["flaw", "fragment", "omen", "offence"], correctIndex: 2 },
  { id: 4,  question: "a crime or the feeling of being insulted or wronged", options: ["burglary", "pilgrimage", "dissertation", "offence"], correctIndex: 3 },
  { id: 5,  question: "closed or fastened so that nothing can get in or out", options: ["sealed", "committed", "fragmented", "collapsed"], correctIndex: 0 },
  { id: 6,  question: "dedicated or pledged to a cause, person, or course of action", options: ["sealed", "committed", "flawed", "simultaneous"], correctIndex: 1 },
  { id: 7,  question: "the crime of entering a building illegally to steal", options: ["offence", "pilgrimage", "burglary", "fragment"], correctIndex: 2 },
  { id: 8,  question: "a fault, imperfection, or weakness in something", options: ["omen", "frame", "fragment", "flaw"], correctIndex: 3 },
  { id: 9,  question: "to set someone up or make them appear guilty of something", options: ["frame", "affect", "commit", "collapse"], correctIndex: 0 },
  { id: 10, question: "to fall down suddenly or fail completely", options: ["frame", "collapse", "affect", "commit"], correctIndex: 1 },
  { id: 11, question: "a journey to a sacred place for religious reasons", options: ["dissertation", "burglary", "pilgrimage", "offence"], correctIndex: 2 },
  { id: 12, question: "a long piece of academic writing based on research", options: ["fragment", "pilgrimage", "elaboration", "dissertation"], correctIndex: 3 },

  // --- FILL-IN-THE-BLANK (12) ---
  { id: 13, question: "The weather can greatly _______ your mood and energy levels.", options: ["affect", "frame", "collapse", "commit"], correctIndex: 0 },
  { id: 14, question: "The two alarms went off _______, startling everyone in the building.", options: ["respectively", "simultaneously", "perpetually", "eventually"], correctIndex: 1 },
  { id: 15, question: "The dark clouds were seen as an _______ of the coming storm.", options: ["offence", "flaw", "omen", "fragment"], correctIndex: 2 },
  { id: 16, question: "He took great _______ at the suggestion that he had lied.", options: ["burglary", "pilgrimage", "dissertation", "offence"], correctIndex: 3 },
  { id: 17, question: "The envelope was _______ with wax and could not be opened.", options: ["sealed", "committed", "fragmented", "collapsed"], correctIndex: 0 },
  { id: 18, question: "She is deeply _______ to improving education in rural areas.", options: ["sealed", "committed", "flawed", "simultaneous"], correctIndex: 1 },
  { id: 19, question: "The police arrested two men for _______ after the break-in.", options: ["offence", "pilgrimage", "burglary", "fragment"], correctIndex: 2 },
  { id: 20, question: "The main _______ in his argument is that it ignores all the evidence.", options: ["omen", "frame", "fragment", "flaw"], correctIndex: 3 },
  { id: 21, question: "The defence lawyer claimed his client had been _______ by the police.", options: ["framed", "affected", "committed", "collapsed"], correctIndex: 0 },
  { id: 22, question: "The old bridge could _______ at any moment under the weight.", options: ["frame", "collapse", "affect", "commit"], correctIndex: 1 },
  { id: 23, question: "Every year thousands of believers make a _______ to the holy site.", options: ["dissertation", "burglary", "pilgrimage", "offence"], correctIndex: 2 },
  { id: 24, question: "She spent three years writing her doctoral _______ on ancient history.", options: ["fragment", "pilgrimage", "elaboration", "dissertation"], correctIndex: 3 }
];
