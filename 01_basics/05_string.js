const name="hitesh "
const repoCount = 50

// console.log(name + repoCount + " value ");
// better way  using bacticks  string interpolation ( ${...} )
// Template Strings use back-ticks (``) rather than the quotes ("") to define a string:
console.log(`my name is ${name} and my repoCount ${repoCount}  `);


// string as objects
const gameName = new String("hitesh-hc")
console.log(typeof gameName ); // object 
console.log(gameName);  // [String: 'hiteshhc']

console.log(gameName[0]); // h
//console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase());  //HITESHHC

// console.log(gameName.__proto__)  // {}  in console it shows char at every index in string object 
// console.log(gameName.toUpperCase());  // HITESHHC

console.log(gameName.charAt(2));  // t
console.log(gameName.indexOf("t"));  // 2
console.log(gameName.at(-2)); // h   last second char 
// charAt() not take but at() can take negative val




const newString = gameName.substring(0,4); 
console.log(newString); // hite
// if -ve value given to substring then it automatically start with 0 index 
const newstring = gameName.substring(-8,4); 
console.log(newstring); // hite
const anotherString =  gameName.slice(-7, 4 );
/// slice also take negative values and if -ve value given to it then it print in reverse order 
// first index is start index and second index is end index 
console.log(anotherString);  ///  ite 


const newStringOne = "   hitesh  "
const str = newStringOne.trim();

console.log(newStringOne);  //     hitesh
console.log(str); // hitesh


const url ="http://hitesh.com/hitesh%20chaudary"

console.log(url.replace("%20" , "-"));
console.log(url.includes('sundar'));  //  false

console.log(gameName.split('-'));  // [ 'hitesh', 'hc' ]


// (\)  backslash turns special character(', ", \ ) into char string  e.g
console.log("we are so called \"engineers\" for a reason");


// JavaScript objects cannot be compared.
let x = new String("John");
let y = new String("John"); 
// if you compare above two they return a false
// Comparing two JavaScript objects always returns false. //  here x and y
let x1 ="John";
console.log(x1 == x);  // true 
console.log(x1 === x);  // false 
console.log(x == y);    // false 
console.log(x === y);    // false

//Both methods accept a second parameter as the starting position for the search:
let text = "Please locate where 'locate' occurs!";
let ind = text.indexOf("locate", 15);  // 21
let indx = text.lastIndexOf("John");  // -1







