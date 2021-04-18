function validation(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var error_message = document.getElementById("error_message");

error_message.style.padding = "10px";

if(name.length <1){
  text = "Skriv dit fulde navn";
  error_message.innerHTML = text;
  return false;
}

if(email.indexOf("@") == -1 || email.length <1){
  text = "Skriv gyldig email";
  error_message.innerHTML = text;
  return false;
}

alert("Din besked er sendt afsted!")
return true;
}
