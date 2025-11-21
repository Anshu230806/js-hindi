

const myDate = new Date();  
console.log(myDate);  // 2025-11-21T17:32:05.356Z
console.log(myDate.toDateString())   // Fri Nov 21 2025
console.log(myDate.toLocaleString())  // 11/21/2025, 5:32:05 PM
console.log(myDate.toLocaleDateString())  // 11/21/2025

console.log(typeof myDate)  // object 

// Specifying a month higher than 11, will not result in an error but add the overflow to the next year:
const d = new Date(2018, 15, 24, 10, 33, 30);
console.log(d);   // 2019-04-24T10:33:30.000Z


// year , month , date , hr , min, sec , minisec 
const myCreatedDate = new Date(2030 , 3, 14)
 const myCreatedDate2 = new Date(2030 , 3, 14 , 5 ,6 )
 const myCreatedDate3 = new Date("2023-07-08")

 let myTimeStamp = Date.now();
 console.log(myTimeStamp)  //  1763748268564  (miliseconds) till now 
 console.log(myTimeStamp.getTime)  // undefined
console.log(Math.floor(myTimeStamp/1000))  //1763748268  (in seconds )



let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1) // in js month start from 0 thats why +1     /// 11
console.log(newDate.getDay()) // 5

console.log(newDate.toLocaleString('default',{
     weekday :"long",
}))   //// Friday




