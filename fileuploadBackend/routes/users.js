var express = require('express');
var router = express.Router();

/* GET users listing. */
console.log("hello 3");
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
