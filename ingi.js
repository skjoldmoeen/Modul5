const introduction = document.getElementById("introduction");

introduction.addEventListener('click', () => introduction.style.opacity = '0');

introduction.addEventListener('transitionend', () => introduction.remove());


function startquiz() {
    document.getElementsByClassName("wrapper").style.display = "block";
  }