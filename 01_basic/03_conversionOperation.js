let score = '33qr';

console.log(typeof score);
console.log(typeof(score));

let valueIntoNumber = Number(score);
console.log(typeof valueIntoNumber); // Output: Number X
console.log(valueIntoNumber); // Output: NaN == Not a Number --> JavaScript's Fault


//----------------------{ Converted into Number }-------------------------------

let phoneNumber = undefined; // Output: NaN
phoneNumber = null; // Output: 0 (Zero)
phoneNumber = 'sayeed' // Output: NaN
phoneNumber = NaN; // Output: NaN
phoneNumber = true; // Output: 1

let valueInNumber = Number(phoneNumber);
console.log(typeof valueInNumber);
console.log(valueInNumber);


//----------------------{ Converted into Boolean }--------------------------

let isLoggedIn = "0524"; // Output: True
isLoggedIn = ""; // Output: False -- Because of the "Empty String"
isLoggedIn = 0; // Output: False
isLoggedIn = 1;  // Output: True
let booleanIsLoggedIn = Boolean(isLoggedIn); 

console.log("Type = " + typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);


//----------------------{ Converted into String }-------------------------------

let aNumber = 9;
aNumber = String(aNumber); 
console.log(typeof aNumber);
console.log(aNumber);