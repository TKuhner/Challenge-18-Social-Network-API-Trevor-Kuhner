const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up routes
app.use(routes);

// Serve up static assets

// Establish database connection and start the server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
