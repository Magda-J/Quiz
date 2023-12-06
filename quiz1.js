const quizQuestions = [
  {
    question: "What is the capital of Japan?",
    a: "Nagoya",
    b: "Kyoto",
    c: "Osaka",
    d: "Tokyo",
    e: "Manila",
    correct: "d",
  },
  {
    question: "Who wrote the play Romeo and Juliet?",
    a: "Charles Dickens",
    b: "William Shakespeare",
    c: "Jane Austen",
    d: "Mark Twain",
    e: "Scott Fitzgerald",
    correct: "b",
  },
  {
    question: "What is the largest mammal in the world?",
    a: "Elephant",
    b: "Lion",
    c: "Blue Whale",
    d: "Bear",
    e: "Pig",
    correct: "c",
  },
  {
    question:
      "In which year did the Apollo 11 mission successfully land humans on the Moon?",
    a: "1965",
    b: "1981",
    c: "1967",
    d: "1973",
    e: "1969",
    correct: "e",
  },
  {
    question: "Who painted the Mona Lisa?",
    a: "Pablo Picasso",
    b: "Leonardo da Vinci",
    c: "Vincent van Gogh",
    d: "Claude Monet",
    e: "Michelangelo",
    correct: "b",
  },
];

// // Start page code
const startButton = document.getElementById("start-btn");
// // End of the start page button code

const quiz = document.getElementById("quiz");
const mainHeader = document.getElementById("main-header");
const quizHeader = document.getElementById("quiz-header");
const answerElement = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const list = document.getElementById("list");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const sumbmitBtn = document.getElementById("submit");

let currentQuizQuestion = 0;
let score = 0;

// // // Start page code attempts
startButton.addEventListener("click", startQuiz);
function startQuiz() {
  startButton.classList.add("invisible");
  mainHeader.classList.add("invisible");
  quiz.classList.remove("invisible");
  sumbmitBtn.classList.remove("invisible");
  list.classList.remove("invisible");
  quizHeader.classList.remove("invisible");
  loadQuizQuestions();
}

// // // End of the start page code

loadQuizQuestions();

function loadQuizQuestions() {
  deselectAns();

  const currentquizQuestions = quizQuestions[currentQuizQuestion];

  questionElement.innerText = currentquizQuestions.question;

  a_text.innerText = currentquizQuestions.a;
  b_text.innerText = currentquizQuestions.b;
  c_text.innerText = currentquizQuestions.c;
  d_text.innerText = currentquizQuestions.d;
  e_text.innerText = currentquizQuestions.e;
}

function deselectAns() {
  answerElement.forEach((answerElem) => {
    answerElem.checked = false;
  });
}

function ansSelect() {
  let answer;

  answerElement.forEach((answerElem) => {
    if (answerElem.checked) {
      answer = answerElem.id;
    }
  });
  return answer;
}

sumbmitBtn.addEventListener("click", () => {
  const answer = ansSelect();
  if (answer === quizQuestions[currentQuizQuestion].correct) {
    score++;
  }
  currentQuizQuestion++;

  if (currentQuizQuestion < quizQuestions.length) {
    loadQuizQuestions();
  } else {
    quiz.innerHTML = `<h2 class="text-white">You got ${score} out of 5 correct!</h2>
        <button class="flex flex-col m-auto my-8 btn bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded" onclick="location.reload()">Reload</button>`;
  }
});
