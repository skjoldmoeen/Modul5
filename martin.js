// card flip kode

let forkert_svar = 0;
let korrekt_svar = 0;

document.addEventListener('DOMContentLoaded', function(event) {

document.getElementById('nextbtn-forkert2').onclick = function() {
  document.getElementById("question-container").style.visibility = 'hidden';
  document.getElementById("flip-card").style.visibility = 'hidden';
  document.getElementById("flip-card2").style.visibility = 'hidden';
  document.getElementById("flip-card3").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back3").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back2").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back").style.visibility = 'hidden';
  document.getElementById("nextbtn-forkert2").style.visibility = 'hidden';
};

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
