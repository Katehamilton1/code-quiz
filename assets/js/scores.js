var highScore = document.querySelector('#highScore');
var clear = document.querySelector('#clear');
var goBack = document.querySelector('#goBack');

clear.addEventListener('click', function () {
    localStorage.clear();
    location.reload();
});

var allScores = JSON.parse(window.localStorage.getItem('scores')) || [];
allScores.forEach(function (score){
  var liTag = document.createElement('li')
  liTag.textContent= score.initials + ' ' + score.score
  highScore.appendChild(liTag)
})


goBack.addEventListener('click', function () {
    window.location.replace('index.html');
});