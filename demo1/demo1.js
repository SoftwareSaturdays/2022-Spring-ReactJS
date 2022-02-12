// This will define a basic JavaScript variable
var varTest = 10;

// This will also define a basic JavaScript variable
let letTest = "Hmm...";

// This will print the two variables to the web browser console (not the screen!)
console.log(varTest);
console.log(letTest);

console.log("--------------");

// Demonstrates JavaScript comparisons (and strictness!)
console.log(5 < 6);
console.log(5 <= 5);
console.log(-2 > -10);
console.log(4 >= 7);
console.log(10 == 3);
console.log("Hello World" != "hello world"); // Not only numbers
console.log("  strictness:")
console.log( 1 == '1');
console.log( 1 === '1');
console.log( 1 != '2');
console.log( 1 !== '2');

console.log("--------------");

// Demonstrates basic JavaScript math
let mathTest = 0;
mathTest = 5 + 45;
mathTest = mathTest - 10;
mathTest = mathTest * 2;
mathTest = mathTest / 8;
mathTest = mathTest % 7;
mathTest = mathTest ** 3;
console.log(mathTest);

console.log("--------------");

// Demonstrates a basic if/else statement
if(mathTest == varTest) {
    console.log(true);
} else {
    console.log(false);
}

// Demonstrates a basic while loop
let i = 0;
while(i < 4) {
    console.log(i);
    i += 1;
}

for(i=0;i<4;i++) {
    console.log(i);
}