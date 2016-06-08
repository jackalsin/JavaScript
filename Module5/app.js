/**
 * Created by jacka on 6/8/2016.
 */
var Bucky = {
    favFood: "bacon",
    favMoive : "Chappie"
};

var Person = Bucky;
Person.favFood = "salad";
console.log(Bucky.favFood);

console.log(19 =="19"); // compare values
console.log(19 === "19");  // compare values and types