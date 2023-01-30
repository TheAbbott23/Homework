
const prompt = require('prompt-sync')();

const temp = prompt("What is the temperature?");
const unit = temp[temp.length-1];

var curr = temp.substring(0, temp.length -1);
var conv = 0;

if (unit == "C")
{
    conv = (curr*1.8)+32;

}
else
{
    conv = (curr-32)/1.8;
}

if (unit == "C") {
    console.log(conv+"F");
}
else {
    console.log(conv+"C");
}









