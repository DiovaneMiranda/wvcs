const express = require('express');
const controllers = require('../controllers/register.js')
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/registerUser', function(req, res, next) {
  res.render('confirmation', { 'result': controllers.register(req) });
});

module.exports = router;
