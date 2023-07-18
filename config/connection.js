const mongoose = require('mongoose');

const connection = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNet';

mongoose.connect(connection);

const db = mongoose.connection;

module.exports = db;