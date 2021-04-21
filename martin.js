// card flip kode

let korrekt_svar = 0;

document.getElementById("flip-card4").style.visibility = 'hidden';
document.getElementById("flip-card5").style.visibility = 'hidden';
document.getElementById("flip-card6").style.visibility = 'hidden';

document.getElementById('flip-card-btn-turn-to-back').style.visibility = 'visible';
document.getElementById('flip-card-btn-turn-to-back2').style.visibility = 'visible';
document.getElementById('flip-card-btn-turn-to-back3').style.visibility = 'visible';
document.getElementById('flip-card-btn-turn-to-front').style.visibility = 'hidden';
document.getElementById('flip-card-btn-turn-to-front2').style.visibility = 'hidden';
document.getElementById('flip-card-btn-turn-to-front3').style.visibility = 'hidden';

document.addEventListener('DOMContentLoaded', function(event) {
document.getElementById('nextbtn-forkert2').onclick = function() {
  document.getElementById("question-container").style.display = 'none';
  document.getElementById("question-container2").style.display = 'block';
  document.getElementById("flip-card").style.visibility = 'hidden';
  document.getElementById("flip-card2").style.visibility = 'hidden';
  document.getElementById("flip-card3").style.visibility = 'hidden';
  document.getElementById("flip-card4").style.visibility = 'visible';
  document.getElementById("flip-card5").style.visibility = 'visible';
  document.getElementById("flip-card6").style.visibility = 'visible';
  document.getElementById("flip-card-btn-turn-to-back3").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back2").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back4").style.visibility = 'visible';
  document.getElementById("flip-card-btn-turn-to-back5").style.visibility = 'visible';
  document.getElementById("flip-card-btn-turn-to-back6").style.visibility = 'visible';
  document.getElementById("nextbtn-forkert2").style.visibility = 'hidden';
};
document.getElementById('nextbtn-forkert1').onclick = function() {
  document.getElementById("question-container").style.display = 'none';
  document.getElementById("question-container2").style.display = 'block';
  document.getElementById("flip-card").style.visibility = 'hidden';
  document.getElementById("flip-card2").style.visibility = 'hidden';
  document.getElementById("flip-card3").style.visibility = 'hidden';
  document.getElementById("flip-card4").style.visibility = 'visible';
  document.getElementById("flip-card5").style.visibility = 'visible';
  document.getElementById("flip-card6").style.visibility = 'visible';
  document.getElementById("flip-card-btn-turn-to-back3").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back2").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back4").style.visibility = 'visible';
  document.getElementById("flip-card-btn-turn-to-back5").style.visibility = 'visible';
  document.getElementById("flip-card-btn-turn-to-back6").style.visibility = 'visible';
  document.getElementById("nextbtn-forkert1").style.visibility = 'hidden';
};
document.getElementById('nextbtn-korrekt').onclick = function() {
  document.getElementById("question-container").style.display = 'none';
  document.getElementById("question-container2").style.display = 'block';
  document.getElementById("flip-card").style.visibility = 'hidden';
  document.getElementById("flip-card2").style.visibility = 'hidden';
  document.getElementById("flip-card3").style.visibility = 'hidden';
  document.getElementById("flip-card4").style.visibility = 'visible';
  document.getElementById("flip-card5").style.visibility = 'visible';
  document.getElementById("flip-card6").style.visibility = 'visible';
  document.getElementById("flip-card-btn-turn-to-back3").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back2").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back4").style.visibility = 'visible';
  document.getElementById("flip-card-btn-turn-to-back5").style.visibility = 'visible';
  document.getElementById("flip-card-btn-turn-to-back6").style.visibility = 'visible';
  document.getElementById("nextbtn-korrekt").style.visibility = 'hidden';
  // +1 til korrekt_svar
};
document.getElementById('nextbtn-korrekt4').onclick = function() {
  document.getElementById("question-container").style.display = 'none';
  document.getElementById("question-container2").style.visibility = 'hidden';
  document.getElementById("flip-card").style.visibility = 'hidden';
  document.getElementById("flip-card2").style.visibility = 'hidden';
  document.getElementById("flip-card3").style.visibility = 'hidden';
  document.getElementById("flip-card4").style.visibility = 'hidden';
  document.getElementById("flip-card5").style.visibility = 'hidden';
  document.getElementById("flip-card6").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back3").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back2").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back4").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back5").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back6").style.visibility = 'hidden';
  document.getElementById("nextbtn-korrekt4").style.visibility = 'hidden';
  // +1 til korrekt_svar
};
document.getElementById('nextbtn-forkert5').onclick = function() {
  document.getElementById("question-container").style.display = 'none';
  document.getElementById("question-container2").style.visibility = 'hidden';
  document.getElementById("flip-card").style.visibility = 'hidden';
  document.getElementById("flip-card2").style.visibility = 'hidden';
  document.getElementById("flip-card3").style.visibility = 'hidden';
  document.getElementById("flip-card4").style.visibility = 'hidden';
  document.getElementById("flip-card5").style.visibility = 'hidden';
  document.getElementById("flip-card6").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back3").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back2").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back4").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back5").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back6").style.visibility = 'hidden';
  document.getElementById("nextbtn-forkert5").style.visibility = 'hidden';
};
document.getElementById('nextbtn-forkert6').onclick = function() {
  document.getElementById("question-container").style.display = 'none';
  document.getElementById("question-container2").style.visibility = 'hidden';
  document.getElementById("flip-card").style.visibility = 'hidden';
  document.getElementById("flip-card2").style.visibility = 'hidden';
  document.getElementById("flip-card3").style.visibility = 'hidden';
  document.getElementById("flip-card4").style.visibility = 'hidden';
  document.getElementById("flip-card5").style.visibility = 'hidden';
  document.getElementById("flip-card6").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back3").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back2").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back4").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back5").style.visibility = 'hidden';
  document.getElementById("flip-card-btn-turn-to-back6").style.visibility = 'hidden';
  document.getElementById("nextbtn-forkert6").style.visibility = 'hidden';
};

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
document.getElementById('flip-card-btn-turn-to-back4').onclick = function() {
  document.getElementById("flip-card-btn-turn-to-back5").disabled = true;
    document.getElementById("flip-card-btn-turn-to-back6").disabled = true;
document.getElementById('flip-card4').classList.toggle('do-flip');
};
document.getElementById('flip-card-btn-turn-to-back5').onclick = function() {
  document.getElementById("flip-card-btn-turn-to-back4").disabled = true;
    document.getElementById("flip-card-btn-turn-to-back6").disabled = true;
document.getElementById('flip-card5').classList.toggle('do-flip');
};
document.getElementById('flip-card-btn-turn-to-back6').onclick = function() {
  document.getElementById("flip-card-btn-turn-to-back4").disabled = true;
    document.getElementById("flip-card-btn-turn-to-back5").disabled = true;
document.getElementById('flip-card6').classList.toggle('do-flip');
};
});
// her stopper card flip koden
