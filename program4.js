//Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.

let coin = Math.floor(Math.random()*2);
if(coin == 1) {
    console.log("Head");
}else { 
    console.log("Tail");
}
