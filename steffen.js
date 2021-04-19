var btn = document.getElementById('nextbtn-korrekt');
var bar = document.getElementById('bar');

var count = 0;


btn.addEventListener('click', ()=>{
  bar.style.width = count + '%';
  if(count === 100){
    count = 0;
  }
  else {
      count = count + 20;
  }
});


function expand() {
  document.getElementById("expand").style.visibility = "visible";
  document.getElementById("expand").style.display = "block";
  document.getElementById("expand").style.height = "80vh";
  document.getElementById("progressbar-container").style.display = "none";
  document.getElementById("flip-card").style.display = "none";
  document.getElementById("flip-card2").style.display = "none";
  document.getElementById("flip-card3").style.display = "none";
  document.getElementById("question-container").style.display = "none";
}
