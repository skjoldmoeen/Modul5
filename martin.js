// card flip kode


document.addEventListener('DOMContentLoaded', function(event) {

document.getElementById('flip-card-btn-turn-to-back').style.visibility = 'visible';
document.getElementById('flip-card-btn-turn-to-back2').style.visibility = 'visible';
document.getElementById('flip-card-btn-turn-to-back3').style.visibility = 'visible';
document.getElementById('flip-card-btn-turn-to-front').style.visibility = 'hidden';
document.getElementById('flip-card-btn-turn-to-front2').style.visibility = 'hidden';
document.getElementById('flip-card-btn-turn-to-front3').style.visibility = 'hidden';

document.getElementById('flip-card-btn-turn-to-back').onclick = function() {
  document.getElementById("flip-card-btn-turn-to-back2").disabled = true;
    document.getElementById("flip-card-btn-turn-to-back3").disabled = true;
document.getElementById('flip-card').classList.toggle('do-flip');
};
document.getElementById('flip-card-btn-turn-to-back2').onclick = function() {
  document.getElementById("flip-card-btn-turn-to-back3").disabled = true;
    document.getElementById("flip-card-btn-turn-to-back").disabled = true;
document.getElementById('flip-card2').classList.toggle('do-flip');
};
document.getElementById('flip-card-btn-turn-to-back3').onclick = function() {
  document.getElementById("flip-card-btn-turn-to-back2").disabled = true;
    document.getElementById("flip-card-btn-turn-to-back").disabled = true;
document.getElementById('flip-card3').classList.toggle('do-flip');
};

});
// her stopper card flip koden
