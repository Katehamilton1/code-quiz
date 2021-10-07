// var questions = [
//    {
//        prompt: "What does HTML stand for?\n(a) Hypertext Machine Language\n(b) hypertext tools markup links\n(c) hypertext markup lanague\n(d) hight-tech markup language",
//     answer:"c"
// }, 
//     {prompt:"Which of the following characters indicates the closing of a tag? \n(a)< \n(b)> \n(c)/ \n(d)\\",
//     answer: "c"
// },
//     {prompt:"Which of the following attributes is used to add a link to any element? \n(a)ref \n(b)# \n(c)href \n(d)link",
//     answer: "a"
//     }
// ]



var count= 10;
var timerId;
var timerEl = document.getElementById("timer");

function startQuiz() {
timerId = setInterval(timer, 1000);
timerEl.textContent = count;
console.log('working') 
}
function getQuestion() {
    
}
function questionChecker() {
    
}
function timer() {
    count--;
    timerEl.textContent= count;
    if (count <= 0) {
        quizEnd()
    }

}
function saveHighScore() {
    
}

function quizEnd() {
    clearInterval(timerId);
}

startQuiz();







// for(var i=0; i< questions.length; i++) {
//     var response = window.prompt(questions[i].prompt);
//     if (response === questions[i].answer){
//         score++;
//         alert("correct!");
//     } else {
//         alert("wrong answer!");
//     }
// }

// alert("You got" + score + "/" + questions.length)