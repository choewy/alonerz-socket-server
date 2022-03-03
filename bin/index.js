'use strict';

const mongoose = require('mongoose');
const app = require('../app');

const mongoPort = process.env.MONGO_PORT || 8000;
const mongoName = process.env.MONGO_NAME;
const mongoUri = process.env.MONGO_URI;
const expressPort = process.env.EXPRESS_PORT || 5000;

const mongoLog = `mongo running on port ${mongoPort}`;
const expressLog = `express running on port ${expressPort}`;

const mongoOptions = {
    dbName: mongoName,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const mongoConnect = () => {
    mongoose.connect(mongoUri, mongoOptions)
        .then(() => console.log(mongoLog))
        .catch(console.log);
};

mongoose.connection.on('error', (error) => {
    console.log("mongo failed connect!");
    mongoConnect();
});

mongoose.connection.on('disconnect', (error) => {
    console.log("mongo is disconnected!");
    mongoConnect();
});

app.listen(expressPort, () => {
    console.log(expressLog);
    mongoConnect();
});