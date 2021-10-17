
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});


var allScores = 
JSON.parse(window.localStorage.getItem("score"));

var retrievedObject = localStorage.getItem('initials');



  
  goBack.addEventListener("click", function () {
    window.location.replace("index.html");
  });