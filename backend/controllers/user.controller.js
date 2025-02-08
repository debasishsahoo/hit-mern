const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const Secret = process.env.JWT_SECRET;

const Salt = Number(process.env.SALT);

const userCtrl = {
  signUp: async (req, res) => {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email  already exists" });
    }
    try {
      const hashedPassword = await bcrypt.hash(password, Salt);
      const newUser = new userModel({ name, email, password: hashedPassword });
      await newUser.save();
      res.status(201).json({ message: "User Registered", data: newUser });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },
  signIn: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await userModel.findOne({ email });
      if (!user)
        return res.status(400).json({ message: "Invalid credentials" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({ message: "Invalid credentials" });

      const token = jwt.sign({ id: user._id }, Secret, {
        expiresIn: "1h",
      });
      res.json({ token });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },
  changePassword: async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const id="67a5a538c932c9ff05cbe036";
    try {
      const user = await userModel.findById({_id:id});

      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch) return res.status(400).json({ message: 'Old password is incorrect' });

      user.password = await bcrypt.hash(newPassword,Salt);
      await user.save();
      res.status(200).json({ message: 'Password updated' });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },
  getUser: async (req, res) => {
    const user_id=req.user.id
    try {
      const users = await User.findById({_id:user_id}).select('-password');
      if(users) return res.json(users);;
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
module.exports = userCtrl;
