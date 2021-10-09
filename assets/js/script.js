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
var seconds = document.getElementById("countdown").textContent;
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
  renderQuestion ();

  // timer
  var countdown = setInterval(function () {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
  }, 1000);
}
// Function to start the Game

// Function to make questions appear


function renderQuestion (){
    var curQ = allQuestions[currentQuestionIndex];
    document.getElementById("questions").innerHTML = curQ.question;

    btn1.textContent= curQ.choices[0];
    btn2.textContent= curQ.choices[1];
    btn3.textContent= curQ.choices[2];
    btn4.textContent= curQ.choices[3];
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
// if there are questions left, go to the next question. 
  if (currentQuestionIndex < allQuestions.length-1) {
    currentQuestionIndex++;
      console.log('out of bounds')
  }
  else {
      console.log('endgame')
      console.log ('go to results page')
      renderScore()
  }
  renderQuestion ();
}
function correctAnswer () {
    seconds += 5;
    console.log('updated score',seconds)
}

function wrongAnwer() {
    seconds -= 5;
    if (seconds <= 0) {
        console.log ('Game OVer')
    }
    console.log('updated score',seconds)
} 

function renderScore(){
    console.log(countdown);
    clearInterval(countdown);
    resultsEl.style.display = "block";
    questions.style.display = "none";
    questionContainer.style.display = "none";
    startPage.style.display = "none";
}



