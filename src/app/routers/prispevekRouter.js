const path = require('path');

const express = require('express');

const router = express.Router();

const controller = require(path.join(__dirname, '..', 'controllers', 'prispevekController'));


router.get('/detail', controller.zobrazDetail);
router.get('/prehled', controller.zobrazPrehled);
router.get('/', controller.zobrazPrehled);
router.get('/pridani', controller.zobrazPridani);
router.get('/odebrat', controller.zobrazOdebrat);

router.post('/pridat', controller.pridat)

module.exports = router;