const questions = [
    {
      question: "In the famous Nintendo games, what is the name of Mario`s brother?",
      answer: "Luigi",
      possibleAnswers: ["Luigi", "Mario", "Hermes", "James"],
    },
    {
      question: "In rock music, Marvin Lee Aday is better known by a high school nickname. What is it?",
      answer: "Meatloaf",
      possibleAnswers: ["Meatloaf", "Angry Dog", "Bolt", "John"], 
    },
    {
      question: "Albany is the capital of which American state?",
      answer: "New York",
      possibleAnswers: ["New York", "Denver", "California", "Los Angeles"], 
    },
];

let score = 0;

function updateQuestion(question) {
  document.getElementById("question").innerText = question.question
}

function renderOptions(question) {
  document.getElementById("options").innerText = question.possibleAnswers
}

function moveToNextQuestion() {
  const currentQuestionIndex = questions.indexOf(currentQuestion);

  // Check if there is a next question
  if (currentQuestionIndex < questions.length - 1) {
    const nextQuestion = questions[currentQuestionIndex + 1];
    updateQuestion(nextQuestion);
    renderOptions(nextQuestion);
  } else {
    // If there are no more questions, you might want to handle the end of the quiz
    console.log("End of the quiz");
    // You could reset or finish the quiz here
  }
}

function checkAnswer() {
  const usersGuess = document.getElementById("answer").value
  if (usersGuess === currentQuestion.answer) {
    score++
    moveToNextQuestion()
  }
}

let currentQuestion = questions[0]  
updateQuestion(currentQuestion)
renderOptions(currentQuestion)