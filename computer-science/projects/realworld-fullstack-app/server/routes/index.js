var router = require('express').Router();

router.use('/api', require('./api'));

/* GET home page. */
// router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
// });

module.exports = router;
