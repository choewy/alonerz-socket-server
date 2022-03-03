'use strict';

const mongoose = require('mongoose');

const modelName = "Sequence";
const Model = mongoose.model(modelName, require('./schema'));

class Sequence {
    static #createOne = async (name, value = 1) => {
        const doc = { name, value };
        return await Model.create(doc);
    };

    static get = async (name, value = 0) => {
        const sequence = await Model.findOneAndUpdate({ name }, { $inc: { seq: 1 } }, { new: true });
        if (!sequence) return this.#createOne(name);
        return sequence;
    };
};

module.exports = Sequence;