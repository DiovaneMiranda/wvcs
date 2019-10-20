var express = require('express');
var router = express.Router();
const { loadCountries } = require('../controllers/csv-parser')
const controllers = require('../controllers/register.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/registerUser', function(req, res, next) {
  res.render('confirmation', controllers.register(req));
});

module.exports = router;