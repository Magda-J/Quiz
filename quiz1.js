const quizQuestions = [
  {
    question: "Question 1/5: What is the capital of Japan?",
    a: "Nagoya",
    b: "Kyoto",
    c: "Osaka",
    d: "Tokyo",
    e: "Manila",
    correct: "d",
  },
  {
    question: "Question 2/5: Who wrote the play Romeo and Juliet?",
    a: "Charles Dickens",
    b: "William Shakespeare",
    c: "Jane Austen",
    d: "Mark Twain",
    e: "Scott Fitzgerald",
    correct: "b",
  },
  {
    question: "Question 3/5: What is the largest mammal in the world?",
    a: "Elephant",
    b: "Lion",
    c: "Blue Whale",
    d: "Bear",
    e: "Pig",
    correct: "c",
  },
  {
    question:
      "Question 4/5: In which year did the Apollo 11 mission successfully land humans on the Moon?",
    a: "1965",
    b: "1981",
    c: "1967",
    d: "1973",
    e: "1969",
    correct: "e",
  },
  {
    question: "Question 5/5: Who painted the Mona Lisa?",
    a: "Pablo Picasso",
    b: "Leonardo da Vinci",
    c: "Vincent van Gogh",
    d: "Claude Monet",
    e: "Michelangelo",
    correct: "b",
  },
];

// // Start page button code
const startButton = document.getElementById("start-btn");
// // End of the start page button code

// This code uses the document.getElementById and document.querySelectorAll methods to obtain references to various HTML elements based on their IDs or class names.
const quiz = document.getElementById("quiz");
const mainHeader = document.getElementById("main-header");
const quizHeader = document.getElementById("quiz-header");
const quizParagraph = document.getElementById("paragraph");
const answerElement = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const list = document.getElementById("list");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitButton = document.getElementById("submit");
// End of the code referencing HTML elements

let currentQuizQ = 0;
let score = 0;

// Start page code to make it invisible after the quiz starts
startButton.addEventListener("click", startQuiz);
function startQuiz() {
  startButton.classList.add("invisible");
  quizParagraph.classList.add("invisible");
  mainHeader.classList.add("invisible");
  quiz.classList.remove("invisible");
  submitButton.classList.remove("invisible");
  list.classList.remove("invisible");
  quizHeader.classList.remove("invisible");
}
// End of the start page code

// Start of the function which loads and displays the current set of quiz questions and the answer choices onto the webpage
loadQuizQuestions();

function loadQuizQuestions() {
  deselectAns();
  // Line 92 extracts the current set of quiz questions from an array quizQuestions
  const currentquizQuestions = quizQuestions[currentQuizQ];

  //Line 95 updates the text content of an HTML element with 'question' ID assigned to 'questionElement' (line 60) to display the current quiz question.
  questionElement.innerText = currentquizQuestions.question;

  // Lines below update the text content of an HTML element with the ID  'a_text' etc. to display the text for answer choice "a" etc.
  a_text.innerText = currentquizQuestions.a;
  b_text.innerText = currentquizQuestions.b;
  c_text.innerText = currentquizQuestions.c;
  d_text.innerText = currentquizQuestions.d;
  e_text.innerText = currentquizQuestions.e;
}
// End of the function loading the set of questions

// Start of the function which deselects all the answer choices and displays the next set
function deselectAns() {
  answerElement.forEach((answerElem) => {
    // For each answer element, line 110 sets the checked property to false. This is commonly used with radio buttons to unselect them.
    answerElem.checked = false;
  });
}

// ansSelect() function is designed to determine which answer is currently selected
function ansSelect() {
  let answer;
  answerElement.forEach((answerElem) => {
    if (answerElem.checked) {
      // the id attribute of the answer elements uniquely identifies each answer and the function returns the id of the selected answer
      answer = answerElem.id;
    }
  });
  return answer;
}
// End of the function which deselects all the answer choices and displays the next set

// Function enabling scoring of the quiz
// This code is an event listener that listens for a "click" event on an HTML element 'submitButton' and when clicked it executes the provided arrow function
submitButton.addEventListener("click", () => {
  // This line calls the ansSelect() function to get the currently selected answer. 
  const selectedAnswer = ansSelect();
  // check if the selected answer is correct and if sorrect the score variable is incremented by 1.
  if (selectedAnswer === quizQuestions[currentQuizQ].correct) {
    score++;
  }
  // currentQuizQ++ line increments the currentQuizQ variable by 1 and displays the next set of quiz questions.
  currentQuizQ++;

  // End of the function which enables scoring of the quiz

  // Start of the function which checks if there are more questions to display and if not it displays users score and Reload button
  if (currentQuizQ < quizQuestions.length) {
    loadQuizQuestions();
  } else {
    quiz.innerHTML = `<h2 class="text-white">You got ${score} out of 5 correct!</h2>
        <button class="flex flex-col border m-auto my-8 btn bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded" onclick="location.reload()">Reload</button>`;
  }
});
