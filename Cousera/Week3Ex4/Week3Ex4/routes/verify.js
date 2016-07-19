var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../config.js');

exports.getToken = function (user) {
    return jwt.sign(user, config.secretKey, {
        expiresIn: 3600 // one hour
    });
};


exports.verifyOrdinaryUser = function (req, res, next) {
    // check header or url paramters or post parameters for token
    var token = req.body.token || req.query.token || req.header['x-access-token'];

    console.log("we are printing the token");
    
    // decode token
    if (token) {
        // verify secret and checks expires
        jwt.verify(token, config.secretKey, function(err, decoded) {
            if (err) {
                var err = new Error("You are not authenticated!");
            } else {
                // if everything is good, save to request fro use in other 
                req.decoded = decoded;
                next();
            };
        });
    }
}