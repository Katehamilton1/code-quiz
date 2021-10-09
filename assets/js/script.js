
const startButton = document.getElementById('start-btn');
const questions = document.getElementById('questions');
const questionContainerElement= document.getElementById ('question-container');
const questionElement = document.getElementById ('questions');
const finalScoreEl = document.getElementById('final-score');
const initialsEl = document.getElementById('initials');
let currentQuestionIndex= 0;

 

startButton.addEventListener('click', startGame);


// Function to start the Game 
function startGame () {
currentQuestionIndex= 0;
askQuestion();

// timer
var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
}, 1000);
// timer
 }






//end of  Function to start the Game 



// Function to make questions appear

function askQuestion() {
    var askQuestions = allQuestions[currentQuestionIndex].question;
    document.getElementById('questions').innerHTML = askQuestions;

}


// to end the game 
function endGame () {
}

// log currentScore


// to end the game


// game questions

var allQuestions = [
    {
      question: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts",
    },
    {
      question: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses",
    },
    {
      question: "Arrays in Javascript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above",
      ],
      answer: "all of the above",
    },
];