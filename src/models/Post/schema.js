'use strict';

const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    post_id: { type: Number, default: 0 },
    title: { type: String, required: true },
    content: { type: String, required: true },
    writer: { type: String, required: true },
    salt_key: { type: String, required: true },
    passwd_hashed: { type: String, required: true },
    view_count: { type: Number, default: 0 },
    tags: { type: Array, default: [] }
}, { timestamps: true });

module.exports = PostSchema;