const quizData = [
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

// Code for intro



// End of code for intro


const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const sumbmitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  e_text.innerText = currentQuizData.e;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

sumbmitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer === quizData[currentQuiz].correct) {
    score++;
  }
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `<h2 class="text-white">You got ${score} out of 5 correct!</h2>
        <button class="flex flex-col m-auto my-8 btn bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded" onclick="location.reload()">Reload</button>`;
  }
});
