var express = require('express');
var router = express.Router();
var path = require('path');
var uuid = require('node-uuid');

/* GET home page. */
router.get('/', express.static(path.join(__dirname, 'public', 'index.html')));

router.get('/uuid', function(req, res) {
  res.send(uuid.v4());
});

module.exports = router;
