/**
 * Created by jacka on 6/8/2016.
 */
console.log("Bacon");

var person = {
    firstName:"Bucky",
    lastName:"Roberts",
    age:28
};

console.log(person);

function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(1, 3));

function worthless() {
/* undefined */
}
console.log(worthless());

/* anonymous function */
var printBacon = function () {
    console.log("bacon is healthy, don't believe the doctors!");
};

printBacon();
/* pass a function, call this code in 5 seconds */
setTimeout(printBacon, 5000);