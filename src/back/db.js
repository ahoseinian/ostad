'use strict';
var db = require('mongoose');
db.connect('mongodb://localhost/ostad');

module.exports = db;
