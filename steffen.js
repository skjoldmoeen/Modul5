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
