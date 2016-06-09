var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    /* pass in a View */
    res.render('about', {
        title: 'About',
        /* This is passing a parameters. */
        name: 'Bucky'
    });
});

module.exports = router;
