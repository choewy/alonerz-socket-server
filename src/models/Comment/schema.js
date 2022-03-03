'use strict';

const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    survey_id: { type: Number, required: true },
    comment: { type: String, required: true },
    writer: { type: String, required: true },
    salt_key: { type: String, required: true },
    passwd_hashed: { type: String, required: true },
    bg_color: { type: String, required: true }
}, { timestamps: true });

module.exports = CommentSchema;