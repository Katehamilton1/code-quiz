var allQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    question: "Arrays in Javascript can be used to store",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
];

const startButton = document.getElementById("start-btn");
const questions = document.getElementById("questions");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("questions");
const finalScoreEl = document.getElementById("final-score");
const initialsEl = document.getElementById("initials");
const resultsEl = document.getElementById("results-page");
const startPage = document.getElementById("start-page");
const choicesEl = document.getElementById("btnQ");
let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let btn4 = document.getElementById("btn-4");
console.log(btn1);
console.log(btn2);
console.log(btn3);
console.log(btn4);
btn1.addEventListener("click", checkCorrect);
btn2.addEventListener("click", checkCorrect);
btn3.addEventListener("click", checkCorrect);
btn4.addEventListener("click", checkCorrect);

let currentQuestionIndex = 0;
var score = 0;

resultsEl.style.display = "none";
questions.style.display = "none";
questionContainer.style.display = "none";
startButton.addEventListener("click", startGame);

// Function to start the Game
function startGame() {
  startPage.style.display = "none";
  questions.style.display = "block";
  questionContainer.style.display = "block";
  currentQuestionIndex = 0;
  askQuestion();

  // timer
  var seconds = document.getElementById("countdown").textContent;
  var countdown = setInterval(function () {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
  }, 1000);
}
// Function to start the Game

// Function to make questions appear

function askQuestion() {
  var currentQuestion = questions[currentQuestionIndex];

  var askQuestions = allQuestions[currentQuestionIndex].question;
  document.getElementById("questions").innerHTML = askQuestions;
}

function checkCorrect() {
  var curQ = allQuestions[currentQuestionIndex];
  var curCorrect = curQ.answer;
  var userAnswer = curQ.choices[this.dataset.number - 1];
  console.log(userAnswer);
  if (userAnswer == curCorrect) {
      console.log('correct answer');
      correctAnswer()
  } else {
    console.log('wrong answer');
    wrongAnwer()
  }
}
function correctAnswer () {
    score += 5;
    console.log('updated score',score)
}

function wrongAnwer() {
    score -= 5;
    if (score <= 0) {
        console.log ('Game OVer')
    }
    console.log('updated score',score)
} 



// to end the game
function endGame() {
  clearInterval(timer);
  resultsEl.style.display = "block";
  questions.style.display = "none";
  questionContainer.style.display = "none";
  startPage.style.display = "none";
}

// to end the game
