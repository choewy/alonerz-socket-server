'use strict';

const mongoose = require('mongoose');

const SequenceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    seq: { type: Number, default: 0 }
});

module.exports = SequenceSchema;