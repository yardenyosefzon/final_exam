const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");


const UserSchema = new mongoose.Schema({

  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  balance:{
    type: Number,
    required: true,
  }
});

UserSchema.methods.generateUserJWT = function () {
  const token = jwt.sign(
    { balance:this.balance, email:this.email, phoneNumber:this.phoneNumber },
    "Hello Hothaifa"
  );
  return token;
};
const User = new mongoose.model("User", UserSchema);
function validateUser(user) {
  const schema = {
    email: Joi.string().email().min(4).max(255).required(),
    password: Joi.string().min(5).max(255).required(),
  };
  return Joi.validate(user, schema);
}

module.exports = { User, validateUser };
