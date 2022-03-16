const path = require('path');

const express = require('express');

const app = express();

const prispevekRouter = require(path.join(__dirname, 'routers', 'prispevekRouter.js'));
const adminRouter = require(path.join(__dirname, 'routers', 'adminRouter.js'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/admin', adminRouter);
app.use('/prispevky', prispevekRouter);

module.exports = app;