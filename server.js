// set up connections
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// set up port and express instance
const PORT = process.env.PORT || 3001;
const app = express();

// set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Serve up static assets
db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});