'use strict';

const mongoose = require('mongoose');
const authorize = require('../authorize');

const modelName = "Comment";
const Model = mongoose.model(modelName, require('./schema'));

class Comment {
    static #randomColor = () => {
        const min = 0, max = 255;
        const nums = [
            Math.floor(Math.random() * (max - min)),
            Math.floor(Math.random() * (max - min)),
            Math.floor(Math.random() * (max - min))
        ];
        return `rgb(${nums.join(', ')})`;
    };

    static findAll = async (survey_id) => {
        return await Model.find({ survey_id });
    };

    static createOne = async (payload) => {
        const { passwd } = payload;
        const doc = { ...payload };
        delete doc.passwd;

        const salt_key = authorize.saltKey();
        doc.salt_key = salt_key;
        doc.passwd_hashed = authorize.hashed(salt_key, passwd);
        doc.bg_color = this.#randomColor();

        return await Model.create(doc);
    };

    static updateOne = async (survey_id, comment_id, payload) => {
        const { passwd } = payload;
        const row = await Model.findOne({ survey_id, _id: comment_id });
        if (!row) return false;
        const { salt_key, passwd_hashed } = row;
        const verify = authorize.verify(salt_key, passwd, passwd_hashed);
        if (!verify) return false;
        const doc = { ...payload };
        delete doc.passwd;
        return await Model.findOneAndUpdate({ survey_id, _id: comment_id }, { $set: doc }, { new: true });
    };

    static removeOne = async (survey_id, comment_id) => {
        const { passwd } = payload;
        const row = await Model.findOne({ survey_id, _id: comment_id });
        if (!row) return false;
        const { salt_key, passwd_hashed } = row;
        const verify = authorize.verify(salt_key, passwd, passwd_hashed);
        if (!verify) return false;
        return await Model.findOneAndRemove({ survey_id, _id: comment_id });
    };
};

module.exports = Comment;