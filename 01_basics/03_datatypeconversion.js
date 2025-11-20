let score = "33"

console.log(typeof score);  // string 
console.log(typeof(score));  // string 

let varInNumber =  Number(score);  
console.log(typeof varInNumber);    // number 
console.log(varInNumber);  // 33

// issue 
let score1 = "33abc"
let num = Number(score1);
console.log(typeof num);   // number 
console.log(num);  // NaN (not a number) // ** issue 


let score2 = null
console.log(typeof score2);  // object
let num2 = Number(score2);
console.log(typeof num2);   // number
console.log(num2);   // 0


let score3
console.log(typeof score3);  // undefined
let num3 = Number(score3);
console.log(typeof num3);   // number
console.log(num3);  // NaN 

let b = true 
let num4 = Number(b)
console.log(typeof num4); // number 
console.log(num4);  // 1 


// "33" => 33
// "33abc" => NaN
// true => 1 , false => 0


let loggedIn = "hitesh"
let booleanIsLoggedIn =  Boolean(loggedIn)
console.log(booleanIsLoggedIn);
 
// 1 =>true  , 0 =>false
// "" =>false
// "hitesh" =>true

let somenumber = 70
let stringnumber = String(somenumber)
console.log(stringnumber);  // 70 



