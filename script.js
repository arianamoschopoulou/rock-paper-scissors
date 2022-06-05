// This will randomly select for the computer
let gameChoices = ['rock', 'paper', 'scissors']
const computerChoices = gameChoices[Math.floor(Math.random() * gameChoices.length)];
console.log(computerChoices);

// This will ask the player to select what they would like to play
const playerChoices = prompt('Select your poison: Rock, Paper or Scissors');
let playerSelection = playerChoices.toLowerCase();
console.log(playerSelection);


// This is the game section
let game = function () {
    if (playerSelection === computerChoices) {
        console.log("it's a tie!");
    } else if ((playerSelection === 'paper' && computerChoices === 'rock') ||
    (playerSelection === 'rock' && computerChoices === 'scissors') ||
    (playerSelection === 'scissors' && computerChoices === 'paper')) {
        console.log("Player Wins, well done!!");
    } else if ((computerChoices === 'rock' && playerSelection === 'scissors')||
    (computerChoices === 'paper' && playerSelection === 'rock')|| 
    (computerChoices === 'scissors' && playerSelection === 'paper')) {
        console.log("Computer wins, sorry! Try again next time");
    } else {"Not sure what happened, try again"}
};

game();