'use strict';

const crypto = require('crypto');

const saltKey = () => {
    return crypto
        .randomBytes(64)
        .toString('hex');
};

const hashed = (salt, string) => {
    return crypto
        .createHash('sha512')
        .update(string + salt)
        .digest('hex');
};

const verify = (salt, string, hashed_string) => {
    if (hashed_string === "") return true;
    if (hashed(salt, string) === hashed_string) return true;
    return false;
};

module.exports = { verify, hashed, saltKey };