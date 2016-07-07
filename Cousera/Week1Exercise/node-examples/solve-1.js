/**
 * Created by jacka on 7/6/2016.
 */
var rect = require('./rectangle-1');


function resolveRect(l, b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    if (l < 0 || b < 0) {
        console.log("Rectangle dimensions should be greater than zero:  l = "
            + l + ",  and b = " + b);
    }
    else {
        console.log("The area of a rectangle of dimensions length = "
            + l + " and breadth = " + b + " is " + rect.area(l,b));
        console.log("The perimeter of a rectangle of dimensions length = "
            + l + " and breadth = " + b + " is " + rect.perimeter(l,b) + '\n');
    }
}

resolveRect(1, 2);
resolveRect(-3, 5);
resolveRect(7, -32);