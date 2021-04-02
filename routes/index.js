var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/users', function(req, res, next) {
  res.render('users', { title: 'Express' });
  // res.send('respond with a resource');
});
router.post('/form', function(req, res, next) {
  const content = req.body.content;
  res.send('respond with a resource ' + content);
});

module.exports = router;
