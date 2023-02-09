const prompt = require('prompt-sync')();

let balance = 10;

function flipCoin(){
    const flip = Math.random() < 0.5 ? 'H' : 'T';

    return flip;
    
}

function addBet(bet) {
    balance = balance + bet
}

function subtractBet(bet) {
    balance = balance - bet;
}

do {
    const betAmount = prompt ('How much would you like to bet?');
    const headsOrTails = prompt ('Heads or Tails? [H/T]');
    

} while (balance > 0)






