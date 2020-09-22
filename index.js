let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let dice1 = "./images/dice" + randomNumber1 + ".png";
let dices = document.querySelectorAll(".dice");
dices[0].querySelector("img").setAttribute("src", dice1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let dice2 = "./images/dice" + randomNumber2 + ".png";
dices[1].querySelector("img").setAttribute("src", dice2);

let refreshButton = document.createElement("h2");
refreshButton.innerHTML = "Want to Play Again, <button>Click Me</button>";

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🏁 Player 1 Wins";
  document.querySelector("h1").appendChild(refreshButton);
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🏁";
  document.querySelector("h1").appendChild(refreshButton);
} else {
  document.querySelector("h1").innerHTML = "It's a Draw!";
  document.querySelector("h1").appendChild(refreshButton);
}

document.querySelector("button").addEventListener("click", function () {
  location.reload();
});
