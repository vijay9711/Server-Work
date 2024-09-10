const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
// const UserSchema = new mongoose.Schema({
//   first_name: String,
//   last_name: String, 
//   email: String,
//   gender: String,
//   password: String
// });

const UserSchema = new mongoose.Schema({
  first_name: {
      type: String,
      required: true
  },
  last_name:{
    type: String,
    required: true,
  },
  gender:{
    type: String,
    required: true,
  },
  email: {
      type: String,
      required: true,
      unique: true
  },
  password: {
      type: String,
      required: true
  }
});
// Hash password before saving user
UserSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password') || user.isNew) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
  }
  next();
});
// <---------------------------------Model----------------------------------->
module.exports = mongoose.model("User_details", UserSchema);