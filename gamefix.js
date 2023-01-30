var prompt = require('prompt-sync') ();

let characterName = prompt("What is your name? ");
console.log(characterName);

let wantsToPlay = prompt("Welcome, "+ characterName +", would you like to play a game?", wantsToPlay === "y" || "no");
console.log(wantsToPlay)

if (wantsToPlay === "n") {
    alert ("Ok, maybe next time, thank you.")
	console.log('Ok,maybe next time, thank you.');
	process.exit();
}

else if (wantsToPlay === "y") {

const guess = prompt("Heads or Tails?" , "h" || "t");
console.log(guess)

// this line is ok
const flip = Math.random() < 0.5;

if (guess === flip) {
    alert ("You Win!");
	console.log('You win!');
} else {
    alert ("You Lose, try again");
	console.log('You lose!');
}
}

