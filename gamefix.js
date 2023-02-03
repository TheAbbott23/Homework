var prompt = require('prompt-sync') ();

let characterName = prompt("What is your name? ");
console.log(characterName);

let wantsToPlay = prompt("Welcome, "+ characterName +", would you like to play a game?");
console.log(wantsToPlay === "y" || "n");

if (wantsToPlay === "n") {

	wantsToPlay = prompt("Ok, maybe next time, thank you");
	process.exit();
}

else if (wantsToPlay === "y") {

	const guess = prompt("Heads or Tails?" , "h" || "t");
console.log(guess);

const flip = Math.random() < 0.5;

if (guess === flip) {
    alert ("You Win!");
	console.log('You win!');
} else {

	console.log('You lose!Try again.');
}
}

