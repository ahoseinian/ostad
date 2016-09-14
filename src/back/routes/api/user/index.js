'use strict';
var router = require('express').Router();
var User = require('../../../models/user');

router.get('/username', function(req, res, next) {
  User.count({ username: req.query.username }).exec(function(err, count) {
    if (err) return next(err);
    res.json(count);
  });

});

module.exports = router;
