var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sucesso', function(req, res, next) {
  res.render('sucesso', { title: 'Parabéns! Deu bom!' });
});

module.exports = router;
