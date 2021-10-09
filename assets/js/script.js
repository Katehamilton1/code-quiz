
const startButton = document.getElementById('start-btn');
const questions = document.getElementById('questions');
const questionContainerElement= document.getElementById ('question-container');
const questionElement = document.getElementById ('questions');
const finalScoreEl = document.getElementById('final-score');
const initialsEl = document.getElementById('initials');
let currentQuestionIndex= 0;
var score= 0;

 

startButton.addEventListener('click', startGame);


// Function to start the Game 
function startGame () {
currentQuestionIndex= 0;
// askQuestion();

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

// function askQuestion() {
//     var askQuestions = allQuestions[currentQuestionIndex].question;
//     document.getElementById('questions').innerHTML = askQuestions;

// }

for(var i=0; i < allQuestions.length; i++) {
    var response= window.prompt(allQuestions[i].prompt);
    if (response == questions[i].answer) {
        score++;
        alert('correct!');
    } else {
        alert('wrong!');
    }
 }  
 alert ('you got' + score + "/" + questions.length)









// to end the game 
function endGame () {
}

// log currentScore


// to end the game


// game questions

var allQuestions = [
    {
      prompt: "What color is a banana?\n(a) Red/Green\n(b) purple\n(c) yellow ",
      answer: "c"
    
    },
    {
        prompt: "What color is a banana?\n(a) Red/Green\n(b) purple\n(c) yellow ",
        answer: "c"
      
      }
];