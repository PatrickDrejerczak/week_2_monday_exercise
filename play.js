let message = document.getElementById("result");

function play() {
  let randomNumber = Math.floor(Math.random() * 2);
  if (randomNumber == 1) {
    message.innerHTML = "Yes";
  } else if (randomNumber == 0) {
    message.innerHTML = "No";
  }
}
