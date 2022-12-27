const jwt = require('jsonwebtoken')
const CryptoJS = require("crypto-js")
const User = require('../models/User')

// @desc    Register new user
// @route   POST /api/users
// @access  Public
// const registerUser = asyncHandler(async (req, res) => {
//   const { name, email, password } = req.body

//   if (!name || !email || !password) {
//     res.status(400)
//     throw new Error('Please add all fields')
//   }

//   // Check if user exists
//   const userExists = await User.findOne({ email })

//   if (userExists) {
//     res.status(400)
//     throw new Error('User already exists')
//   }

//   // Hash password
//   const salt = await bcrypt.genSalt(10)
//   const hashedPassword = await bcrypt.hash(password, salt)

//   // Create user
//   const user = await User.create({
//     name,
//     email,
//     password: hashedPassword,
//   })

//   if (user) {
//     res.status(201).json({
//       _id: user.id,
//       name: user.name,
//       email: user.email,
//       token: generateToken(user._id),
//     })
//   } else {
//     res.status(400)
//     throw new Error('Invalid user data')
//   }
// })

// // @desc    Authenticate a user
// // @route   POST /api/users/login
// // @access  Public
// const loginUser = asyncHandler(async (req, res) => {
//   const { email, password } = req.body

//   // Check for user email
//   const user = await User.findOne({ email })

//   if (user && (await bcrypt.compare(password, user.password))) {
//     res.json({
//       _id: user.id,
//       name: user.name,
//       email: user.email,
//       token: generateToken(user._id),
//     })
//   } else {
//     res.status(400)
//     throw new Error('Invalid credentials')
//   }
// })

// // @desc    Get user data
// // @route   GET /api/users/me
// // @access  Private
// const getMe = asyncHandler(async (req, res) => {
//   res.status(200).json(req.user)
// })

// // Generate JWT
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: '30d',
//   })
// }

//CREATE
const create = async (req,res) => {
  const {username,email,img,password,isAdmin} = req.body
  
  const newUser = new User({
    username: username,
    email: email,
    img: img || '',
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
    isAdmin: isAdmin
  });

  try {
    if(!username || !email || !password){
      return res.status(401).json("All Input Fields Must Be Filled")
    }

    const exists = await User.findOne({email})
    if(exists){
      return res.status(401).json("Email Already Exist")
    }
    const savedUser = await newUser.save();
    return res.status(201).json({
      _id: savedUser.id,
      username: savedUser.username,
      email: savedUser.email,
      img: savedUser.img,
      isAdmin: savedUser.isAdmin,
    });
  } catch (err) {
    return res.status(500).json(err);
  }
}

//UPDATE

const updateUser = async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
}

//DELETE

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
}

//GET USER

const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    // res.status(200).json({

    // })
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
}

//GET ALL USERS

const getAllUsers = async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
}

//GET USER STATS

const getUserStats = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  create,
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUsers,
  getUserStats
}