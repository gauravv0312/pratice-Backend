require('dotenv').config()
const express  = require('express');
const app = express();
app.use(express.json());

const home = require('./routes/home');
const audio = require('./routes/audio');
const movie = require('./routes/movie');
const singer = require('./routes/singer');
app.use('/api/v1',home);
app.use('/api/v1',audio);
app.use('/api/v1',movie);
app.use('/api/v1',singer);

module.exports = app;
