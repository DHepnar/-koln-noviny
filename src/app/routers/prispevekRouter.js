const path = require('path');

const express = require('express');

const router = express.Router();

const controller = require(path.join(__dirname, '..', 'controllers', 'prispevekController'));


router.get('/detail', controller.zobrazDetail);
router.get('/prehled', controller.zobrazPrehled);

module.exports = router;