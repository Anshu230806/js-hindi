const score = 400;
console.log(score );   // 400

const num = new Number(500);  
console.log(num);    // [Number: 500]

console.log(num.toString());  // 500
console.log(num.toString().length);  // 3
console.log(num.toFixed(2)); ///  give  2 digit after decimal  // 500.00

const anotherNum = 123.8943;
console.log(anotherNum.toPrecision(3));  //124
console.log(anotherNum.toPrecision(4)); // 123.9
console.log(anotherNum.toPrecision(2));//  1.2e+2
let x = 123e5;    // 12300000
let y = 123e-5;   // 0.00123

let x1 = "100";
let y1= "10";
console.log(x - y);  // 90  string converted to number 
console.log(x+y); // 10010   + operator works here as concatinating two string 
const hundreds = 1000000;

console.log(hundreds.toLocaleString()); // commas acc to us standard   // 1,000,000
console.log(hundreds.toLocaleString('en-IN'));  // commas acc to indian standard  // 10,00,000

//// *************  MATHS *************

console.log(Math.PI);  // 3.14...
console.log(Math.abs(-4));  // 4
console.log(Math.min(4, 7,3,6,2)); // 2
console.log(Math.max(4, 7,3,6,2));  // 7
console.log(Math.round(4.2));  // 4
console.log(Math.ceil(4.2));  // 5 
console.log(Math.floor(4.2));  // 4

console.log(Math.random()) // give number btw 0-1
console.log((Math.random()*10) +1)  // btw 1 to 10 
console.log(Math.floor((Math.random()* 10)+1 ));   // numbers without decimal 

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()* (max-min+1 )) +min)  //   number btw 10 to 20 without decimal 