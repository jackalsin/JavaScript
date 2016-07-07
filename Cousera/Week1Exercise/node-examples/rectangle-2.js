/**
 * Created by jacka on 7/6/2016.
 */
module.exports = function (x, y, callback) {
    try {
        if (x <= 0 || y <= 0) {
            throw new Error("rectangle dimensions should be greater" +
                " than zero: l = " + x + ", and b = " + y);
        } else {
            // set error to null, the first one is error parameter
            callback(null, {
                perimeter: function () {
                    return 2 * (x + y);
                },
                area: function () {
                    return x * y;
                }
            });
        }
    } catch (error) {
        callback(error, null);
    }
};