var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Batuta', question:"quem é você?" , answer1 : 'delando', answer2 : 'Thiago', answer3 : 'Gleybson', answer4 : 'delando' });
});

module.exports = router;
