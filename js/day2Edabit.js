function makePair(num,num1) {
    return [num, num1]
}

console.log(makePair(1, 2)); 
console.log(makePair(51, 21)); 
console.log(makePair(512124, 215)); 


// ➞ [1, 2]
// ➞ [51, 21]
// ➞ [512124, 215]


// A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

function nameString(arr) {
    // return arr + "Edabit"
    let a = arr;
    return a.concat("Edabit")
}

console.log(nameString("Mubashir")  ); 
console.log(nameString("Matt")      ); 
console.log(nameString("javaScript")); 


// ➞ "MubashirEdabit"
// ➞ "MattEdabit"
// ➞ "javaScriptEdabit"

