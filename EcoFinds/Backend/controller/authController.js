const User = require('../models/user.js');
const bcrypt = require('bcryptjs');

// @desc   Register user
// @route  POST /api/auth/register
// @access Public
const registerUser = async (req, res) => {
  try {
    console.log("Incoming Body:", req.body); // 👈 Debug her
    const { email, password, confirmPassword } = req.body;

    // Check all fields
    if (!email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check password match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        _id: user._id,
        email: user.email,
      },
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc   Login user
// @route  POST /api/auth/login
// @access Public
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check fields
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Match password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({
      message: "Login successful",
      user: {
        _id: user._id,
        email: user.email,
      },
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser, loginUser };
