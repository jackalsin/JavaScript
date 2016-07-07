/**
 * Created by jacka on 7/6/2016.
 * Coresponding to the following website
 * <link>https://www.coursera.org/learn/server-side-development/supplement/o5Pd6/exercise-instructions-understanding-node-modules</link>
 */
var rect = {
    /* This is creating an object */
    perimeter: function(x, y) {
        return 2 * (x + y)
    },
    area: function (x, y) {
        return (x * y)
    }
};

function solveRect(l, b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);
    if (l < 0 || b < 0) {
        console.log("l or b should be greater than zero but l = "
            + l + " b = " + b);
    } else {
        console.log("The area of this rectangle is " + rect.area(l, b));
        console.log("The perimeter of this rectangle is " + rect.perimeter(l, b) + "\n");
    }
}

solveRect(1, 2);
solveRect(0, 2);
solveRect(-1, 2);