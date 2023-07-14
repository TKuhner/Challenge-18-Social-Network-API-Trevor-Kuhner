const mongoose = require('mongoose');

const connection = process.env.MONGODB_URI || 'mongodb://localhost:27017/socialNet';

connect(connection, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
 
module.exports = mongoose;