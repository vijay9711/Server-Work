const userController = require("../Controller/UserController.js");

module.exports = function(app){
  app.post("/signup", userController.userSignUp);
  app.get("/login", userController.userLoginIn);
}