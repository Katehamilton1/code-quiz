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
  {
    question: "The condition in an if/else statement is enclosed within ______.",
    choices: [
      "quotes", 
      "curly brackets",
       "parentheses",
        "square brackets",
    ],
    answer: "parentheses",
  },
  {
    question: "What is a DOM in JavaScript?",
    choices: [
      "Data of Mine", 
      "Document of Master",
       "Data Object Modal", 
       "Document Object Model",
    ],
    answer: "Document Object Model",
  },
  {
    question: "Is JS case-sensitive?",
    choices: [
      "Yes",
       "No",
      "I have no clue",
       "sometimes.",
    ],
    answer: "Yes",
  }
];

var countdown;
let startButton = document.getElementById("start-btn");
let submit = document.getElementById("submit-highscore");
let questions = document.getElementById("questions");
let questionContainer = document.getElementById("question-container");
let questionElement = document.getElementById("questions");
let finalScoreEl = document.getElementById("final-score");
const initialsEl = document.getElementById("initials");
const resultsEl = document.getElementById("results-page");
const startPage = document.getElementById("start-page");
const choicesEl = document.getElementById("btnQ");
let seconds = document.getElementById("countdown").textContent;
let scoresList = document.getElementById("scoresList");
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
submit.addEventListener("click", function () {
  window.location.replace("highscores.html");
});

let currentQuestionIndex = 0;
resultsEl.style.display = "none";
questions.style.display = "none";
questionContainer.style.display = "none";

// Function to start the Game
function startGame() {
  startPage.style.display = "none";
  questions.style.display = "block";
  questionContainer.style.display = "block";
  currentQuestionIndex = 0;
  renderQuestion ();
  // timer
  countdown = setInterval(function () {
    seconds--;
    if (seconds <= 0) clearInterval(countdown);
     if (seconds <= 0) renderScore();
    document.getElementById("countdown").textContent = seconds;
  }, 1000);
}
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
      renderScore()
    }
} 
function renderScore(){
    clearInterval(countdown);
    resultsEl.style.display = "block";
    questions.style.display = "none";
    questionContainer.style.display = "none";
    startPage.style.display = "none";
    finalScoreEl.textContent = seconds;
}
function finalScores(){
var userName= initialsEl.value
var finalScore ={ 
  initials: userName, 
  score: seconds
}
var scores = JSON.parse(window.localStorage.getItem('scores')) || [];
     
scores.push(finalScore)

window.localStorage.setItem('scores', JSON.stringify(scores));

}
submit.onclick = finalScores;


