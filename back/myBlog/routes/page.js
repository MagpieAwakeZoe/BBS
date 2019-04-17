let express = require('express');
let router = express.Router();
let Page = require('../models/page.model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
