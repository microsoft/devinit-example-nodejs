// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'devinit' });
});

module.exports = router;
