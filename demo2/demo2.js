// This function has no return or parameters
function noReturn() {
    console.log("This function has no return or parameters");
}

// The return value can be whatever - strings, numbers, booleans, etc.
function noParams() {
    return "This function had a return value";
}

// The parameters can be whatever - strings, numbers, booleans, etc.
function allTogether(param1, param2) {
    return param1 + param2;
}

// Call a function
noReturn();

// Call a function with a return value
let testReturn = noParams();
console.log(testReturn);

// Call a function with parameters and a return value
testReturn = allTogether(1, 2);
console.log(testReturn);