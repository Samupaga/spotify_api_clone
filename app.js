const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const homeRouter = require('./routes/homeRoute');
const tracksRouter = require('./routes/tracksRoute');

app.use('/', homeRouter);
app.use('/tracks', tracksRouter);

module.exports = app;
