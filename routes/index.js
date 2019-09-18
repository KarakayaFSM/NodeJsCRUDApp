var express = require('express');

var router = express.Router();
let index = require('../controllers')

/* GET home page. */
module.exports = router.get('/',index.index);
module.exports = router.post('/',index.PostIndex);

