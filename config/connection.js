const mongoose = require('mongoose');

const connection = process.env.MONGODB_URI || 'mongodb://localhost:27017/socialNet';

mongoose.connect(connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

module.exports = db;