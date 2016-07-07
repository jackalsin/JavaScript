
/* This module allows you to use a command argument */
var argv = require('yargs')
            .usage('Usage: node $0 --l=[num] --b=[num]')
            .demand(['l','b'])
            .argv;


var rect = require('./rectangle-2');

function solveRect(l, b) {
    console.log('Solving for rectagnel with l = '
                + " and b = " + b);
    rect(l, b, function (err, rectangle) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("The rectangle perimeter is " + rectangle.perimeter());
                        console.log("The rectangle area is " + rectangle.area());
                    }
                }
    );
}

solveRect(1, 3);
solveRect(1, -3);
solveRect(-2, 3);