var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  /**
   * This is render contains two parameters
   * @index index template defined in './views'
   * @param: parameters used in ejs
   */
  res.render('promotion', { title: 'Promotion' });
});

module.exports = router;
