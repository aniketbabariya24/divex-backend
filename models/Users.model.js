const mongoose= require('mongoose');

const userSchema= mongoose.Schema({
    "fname" : String,
    "lname" : String,
   "email" : String,
  "mobile" : Number,
  "password" : String
},{versionKey: false})

const UserModel= mongoose.model("user", userSchema);

module.exports={UserModel}