var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    /* This is passing a parameters. */
    name: 'Bucky'
  });
});

module.exports = router;
