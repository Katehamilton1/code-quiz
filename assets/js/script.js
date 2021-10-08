
const startButton = document.getElementById('start-btn');
const questionContainerElement= document.getElementById ('question-container');
const answerButtonsElement = document.getElementById ('answer-buttons');
const questionElement = document.getElementById ('question');
const finalScoreEl = document.getElementById('final-score');
const initialsEl = document.getElementById('initials');

timerId = setInterval(timer, 1000);
timerEl.textContent = secondsLeft;
let shuffledQuestions, currentQuestionIndex


 
startButton.addEventListener('click', startGame);
// Function to start the Game 
function startGame (){
currentQuestionIndex= 0



 

 }
// Function to start the Game 




// Function to make questions appear

function ShowQuestion(question) {
    questionElement.innerText = question.
    question.answers.forEach(answers => {
        const button= document.createElement('button')
        button.innertext = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct= answers.correct
        }
        button.addEventListener ('click', selectAnswer);
        answerButtonElement.appendChild(button)
    })
}


// Function to make questions appear
timerId = setInterval(timer, 1000);
timerEl.textContent = secondsLeft;

secondsLeft--;
timerEl.textContent= secondsLeft;
if (secondsLeft <= 0) {
    quizEnd()
}
// timer


// to end the game 
function endGame () {
    timerEl.textContent = 0;


// log currentScore
    finalScore = currentScore;
    finalScoreEl.textContent = finalScore;
}


// to end the game 


// Game questions 

 const questions = [
    {
      question: 'Commonly used data types DO NOT include?',
      answers:[ 
         { text: 'strings', correct: false},
         { text: 'booleans', correct: false },
         { text:'alerts', correct: true },
         { text:'numbers', correct: false}
          ]
    }
 ]