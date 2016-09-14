var router = require('express').Router();
router.get('/', function(req, res){
  res.render('index');
});
router.use('/auth', require('./routes/auth'));
router.use('/api', require('./routes/api'));
module.exports = router;
