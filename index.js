// index.js

require('dotenv').config();
const {app} = require("./src/Config/Express.js");
const geminiService = require('./src/Service/Gemini.js');
// const mongoose = require('mongoose');
// const express = require('express');
// const cors = require('cors'); // Import cors
require("./src/Config/Mongoose.js");

// const app = express();
// const bodyParser = require("body-parser");



// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI;
console.log(mongoURI);
// <------------------------------------- Connect to MongoDB ------------------------------------------>
// mongoose.connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('Could not connect to MongoDB', err));

// // <------------------------------------- Use CORS middleware with options ------------------------------------------->
// const corsOptions = {
//     origin: '*', // Allow all origins. For specific origins, use an array, e.g., ['http://example.com']
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true, // Allow cookies to be sent
//     optionsSuccessStatus: 204,
// };
// geminiService.sampleGeminiCall();
// app.use(cors(corsOptions));

require("./src/Routes/authRoute.js")(app);
// Define routes
app.get('/', (req, res) => {
    res.send(`Hello, Vercel! I'm ${process.env.NAME}.`);
});

// Listen on the provided port by Vercel
app.listen(port, () => {
    console.log(`Server is running on port ${port}. I'm ${process.env.NAME}`);
});
