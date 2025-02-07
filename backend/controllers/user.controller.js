const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const Secret = process.env.JWT_SECRET;
console.log("Secret:", Secret);

const Salt = Number(process.env.SALT);
console.log("Salt:", Salt);
console.log("typeof Salt:", typeof Salt);

const userCtrl = {
    signUp:async(req,res)=>{},
    signIn:async(req,res)=>{},
    changePassword:async(req,res)=>{},
    getUser:async(req,res)=>{}

};
module.exports = userCtrl;
