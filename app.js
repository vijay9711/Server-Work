// index.js

require('dotenv').config(); 
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send(`Hello, Vercel cloud!, I'm ${process.env.NAME}.`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}  I'm ${process.env.NAME}`);
});
