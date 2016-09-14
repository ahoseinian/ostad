'use strict';
var router = require('express').Router();
var auth = require('../auth/authorize');

router.use('/user', auth.isLoggedIn, require('./user'));

module.exports = router;
