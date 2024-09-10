const UserSchema = require("../Module/UserModule.js");
const bcrypt = require("bcryptjs");

userLoginIn = async (req, res) => {
  let {email, password} = req.body;
  let exisitUser = await UserSchema.findOne({email: email});
  if(exisitUser){
    const isMatch = await bcrypt.compare(password, exisitUser.password);
    console.log("match ",isMatch);
    res.status(isMatch ? 200 : 400).json({message:  isMatch? "access granted" : "incorrect password."});
  }else{
    res.status(400).json({ message: 'User not found' });
  }
}

userSignUp = async (req, res) => {
  let {first_name, last_name, gender, email, password} = req.body;
  // console.log("email ", email);
  // res.status(400).json({ message: 'User already exists' });
  let exisitUser = await UserSchema.findOne({email: email});
  console.log("user ", email);
  if(exisitUser){
    res.status(400).json({ message: 'User already exists' });
  }else{
    let user = new UserSchema({first_name, last_name, gender, email, password});
    await user.save();
    res.status(201).json({ message: 'User created successfully', user: user });
  }
}
module.exports = {userSignUp, userLoginIn};