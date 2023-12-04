const User = require("../models/userModel");

const bcrypt = require("bcryptjs");

// auth.js Registration function
const register = async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;

  bcrypt.hash(password, 10).then(async (hash) => {
    await User.create({
      firstname,
      lastname,
      email,
      password: hash,
    })
      .then((user) =>
        res.status(200).json({
          message: "User successfully created",
          user,
        })
      )
      .catch((error) =>
        res.status(400).json({
          message: "User not successful created",
          error: error.message,
        })
      );
  });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  // Check if username and password is provided
  if (!email || !password) {
    return res.status(400).json({
      message: "email or Password not present",
    });
  }

  // try {
  const user = await User.findOne({ email });
  if (!user) {
    res.status(401).json({
      message: "Login not successful",
      error: "User not found",
    });
  } else {
    res.status(200).json({
      message: "Login successful",
      user,
    });
  }
  // } catch (error) {
  //   res.status(400).json({
  //     message: "An error occurred",
  //     error: error.message,
  //   })
  // }
};

module.exports = { register, login };
