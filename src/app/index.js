const path = require('path');

const express = require('express');

const app = express();
const prispevek = require(path.join(__dirname, 'routers', 'prispevekRouter.js'));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/prispevek', prispevekRouter);

module.exports = app;