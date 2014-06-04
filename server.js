'use strict';

var connect = require('connect');
var __dirname = 'src';
connect().use(connect.static(__dirname)).listen(4000);