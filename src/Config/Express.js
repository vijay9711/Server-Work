
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');

// <------------------------------------- Use CORS middleware with options ------------------------------------------->
const corsOptions = {
  origin: '*', // Allow all origins. For specific origins, use an array, e.g., ['http://example.com']
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies to be sent
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = {app};
// module.exports = {app};