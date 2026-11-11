// Public settings (safe to publish on GitHub). Used by BOTH the host page and the student page.
const SUPABASE_URL = "https://lxkalpglmelzggkiazfw.supabase.co";
const SUPABASE_KEY = "sb_publishable_qoNcLR6Axs8kV6ocnD5hww_eTUTxcne";

// The exact address students open when they scan the QR code.
const STUDENT_URL = "https://olya-rdzn.github.io/exam-mcq/student.html";

// Where your quizzes live. Every .js file in this folder shows up on the host page's picker.
// NB: GitHub is CASE-SENSITIVE: "Exams" is not the same as "exams".
const GITHUB_REPO  = "olya-rdzn/exam-mcq";
const EXAMS_FOLDER = "Exams";

// Optional safety net: if GitHub's folder listing is ever unavailable, the picker uses this list instead.
// Example: ["capitals.js", "english-b1-unit3.js"]
const EXAM_FILES = [];

// Defaults, used when a quiz file does not set its own QUIZ_TITLE / QUIZ_SECONDS.
const EXAM_TITLE = "Exam time!";
const SECONDS_PER_QUESTION = 45;
const START_COUNTDOWN = 5;   // seconds of "Starting in…" (with a Cancel button) after you press Start
