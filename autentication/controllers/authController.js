import { comparePassword, passwordHashing } from "../lib/password.js";
import userModel from "../models/userModel.js";

export const register = async (req, res) => {
  try {
    const hashPassword = await passwordHashing(req.body.password);
    req.body.password = hashPassword;
    const user = await userModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = userModel.findOne({ email });
    if (user) {
      const correct = await comparePassword(password, user.password);
      if (correct) {
        next();
      } else {
        res.status(400).json({ msg: "Password is not reconized." });
      }
    } else {
      res
        .status(400)
        .json({ msg: "user account has not reconized.please register" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
