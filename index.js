// index.js

require('dotenv').config();

const express = require('express');
const cors = require('cors'); // Import cors
const app = express();
const port = process.env.PORT || 3000;

// Use CORS middleware with options
const corsOptions = {
    origin: '*', // Allow all origins. For specific origins, use an array, e.g., ['http://example.com']
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies to be sent
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions)); // Apply CORS middleware with options

// Define routes
app.get('/', (req, res) => {
    res.send(`Hello, Vercel! I'm ${process.env.NAME}.`);
});

// Listen on the provided port by Vercel
app.listen(port, () => {
    console.log(`Server is running on port ${port}. I'm ${process.env.NAME}`);
});
