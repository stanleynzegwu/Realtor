const express = require("express");
const router = express.Router();
const User = require("../models/User")
const CryptoJS = require("crypto-js");
//const validator = require("validator")
const jwt = require('jsonwebtoken')


//GENERATE JWT
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: '10d',
//   })
// }

const accessToken = (id,isAdmin) => {
  return jwt.sign({id,isAdmin}, process.env.JWT_SECRET, {
    expiresIn: '10d'
  })
}

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    img:req.body.img || '',
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json({
      _id: savedUser.id,
      username: savedUser.username,
      email: savedUser.email,
      img: savedUser.img,
      isAdmin: savedUser.isAdmin,
      //token: accessToken(savedUser._id,savedUser.isAdmin),
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne(
            {
                email: req.body.email
            }
        );

        !user && res.status(401).json("Wrong Email");

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );


        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        const inputPassword = req.body.password;
        
        originalPassword != inputPassword && 
            res.status(401).json("Wrong Password");

        let token = accessToken(user._id,user.isAdmin)
  
        const { password, ...others } = user._doc;  
        res.status(200).json({...others, token});

    }catch(err){
        res.status(500).json('err');
    }

});

module.exports = router;