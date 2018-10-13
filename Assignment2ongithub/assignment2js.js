<p id="output"> Please enter a number between 1 to 10! </p>
<input id="input" type="text" placeholder="Enter a number between 0 to 10">
<br><br>
<button>Guess</button>
<button onclick="clearFields();">Reset Game</button>


//Game variables
var mysteryNumber = Math.floor(Math.random() * 10) + 1;
var playersGuess = 0;

//input and Output
var input = document.querySelector("#input");
var output = document.querySelector("#output");

//button
var button = document.querySelector("button");
button.addEventListener("click",clickHandler,false);

function clickHandler()
{
  playGame();
}

function playGame()
{
    playersGuess = parseInt(input.value);

    if(playersGuess > mysteryNumber)
    {
      output.innerHTML = "That's too big!";
    }
    else if(playersGuess < mysteryNumber)
    {
      output.innerHTML = "That's too small!";
    }
    else
    {
      output.innerHTML = "Correct! You are so smart!"
      document.getElementById('answer').value = mysteryNumber;
    }
}

function clearFields() {
  input.value = "";
  mysteryNumber = Math.floor(Math.random() * 10) + 1;
  answer.value = "";
}
