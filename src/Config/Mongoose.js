const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI;

// <------------------------------------- Connect to MongoDB ------------------------------------------>
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));