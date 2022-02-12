// Creates a basic JavaScript object
let object = {
    school: "Purdue",
    location: "Zoom",
    participants: 50,
    isOnline: true,
    array: [1,4,50,-4],
};

// Prints the object to the screen
console.log(object);

// Print a single value from the object
console.log(object["school"]);

// Print the same value from the object
console.log(object.school);

// Change an object key:value pair
object.location = "Online"
console.log(object.location);