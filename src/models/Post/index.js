'use strict';

const mongoose = require('mongoose');
const Sequence = require('../Sequence');
const authorize = require('../authorize');

const modelName = "Post";
const Model = mongoose.model(modelName, require('./schema'));

class Post {
    static findAll = async () => {
        const rows = await Model.find({});
        return rows.map(row => {
            delete row.password_hashed;
            return row;
        });
    };

    static findOne = async (post_id) => {
        return await Model.findOneAndUpdate({ post_id }, { $inc: { view_count: 1 } }, { new: true });
    };

    static createOne = async (payload) => {
        const { passwd } = payload;
        const doc = { ...payload };
        delete doc.passwd;

        const { seq } = await Sequence.get(modelName);
        doc.post_id = seq;

        const salt_key = authorize.saltKey();
        doc.salt_key = salt_key;
        doc.passwd_hashed = authorize.hashed(salt_key, passwd);

        return await Model.create(doc);
    };

    static updateOne = async (post_id, payload) => {
        const { passwd } = payload;
        const row = await Model.findOne({ post_id });
        if (!row) return false;
        const { salt_key, passwd_hashed } = row;
        const verify = authorize.verify(salt_key, passwd, passwd_hashed);
        if (!verify) return false;
        const doc = { ...payload };
        delete doc.passwd;
        return await Model.findOneAndUpdate({ post_id }, { $set: doc }, { new: true });
    };

    static removeOne = async (post_id, payload) => {
        const { passwd } = payload;
        const row = await Model.findOne({ post_id });
        if (!row) return false;
        const { salt_key, passwd_hashed } = row;
        const verify = authorize.verify(salt_key, passwd, passwd_hashed);
        if (!verify) return false;
        return await Model.findOneAndRemove({ post_id });
    }
};

module.exports = Post;