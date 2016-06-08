/**
 * Created by jacka on 6/8/2016.
 */
var Bucky = {
    printFirstName: function () {
        console.log("My name is Bucky");
        console.log(this === Bucky);
    }
};

Bucky.printFirstName();

function doSomethingWorthless() {
    console.log("do something worthless");
    console.log(this === global);
};
doSomethingWorthless();


function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer) {
        targetPlayer.life += 1;
        console.log(this.name + " game 1 life to " + targetPlayer.name);
    }


}


console.log();
var Bucky = new User();
var Wendy = new User();
Bucky.name = "Bucky";
Wendy.name = "Wendy";

Bucky.giveLife(Wendy);

console.log("Bucky: "+ Bucky.life);
console.log("Wendy: "+ Wendy.life);

User.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name + " just uppercutted " + targetPlayer.name);
};

Wendy.uppercut(Bucky);
console.log("Bucky: "+ Bucky.life);
console.log("Wendy: "+ Wendy.life);
