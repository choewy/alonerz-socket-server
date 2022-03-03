'use strict';

require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors({
    origin: [
        'http://localhost:3000',
        'https://choewy.github.io/every-survey'
    ],
    credentials: true
}));

app.use('/api/posts', require('./src/routes/post'));
app.use('/api/comments', require('./src/routes/comment'));

module.exports = app;