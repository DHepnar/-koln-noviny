const path = require('path');

const express = require('express');

const router = express.Router();

const controller = require(path.join(__dirname, '..', 'controllers', 'adminController'));

router.get('/admin_page', controller.zobrazAdmin_page);
router.get('/upload_form', controller.zobrazUploadform);



module.exports = router;