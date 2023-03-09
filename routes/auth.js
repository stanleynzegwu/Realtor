const express = require("express");
const router = express.Router();
const User = require("../models/User")
const CryptoJS = require("crypto-js");
//const validator = require("validator")
const jwt = require('jsonwebtoken')

const accessToken = (id,isAdmin) => {
  return jwt.sign({id,isAdmin}, process.env.JWT_SECRET, {
    expiresIn: '10d'
  })
}

//REGISTER
router.post("/register", async (req, res) => {
  const {username,email,img,password} = req.body

  const newUser = new User({
    username: username,
    email: email,
    img: img || '',
    password: CryptoJS.AES.encrypt(
      password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    if(!username || !email || !password){
      return res.status(401).json("All Input Fields Should Be Filled")
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
      //token: accessToken(savedUser._id,savedUser.isAdmin),
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});

//LOGIN

router.post('/login', async (req, res) => {
    try{

      if(!req.body.email || !req.body.password){
        return res.status(401).json("All Input Fields Should Be Filled")
      }
        const user = await User.findOne({email:req.body.email});

        if(!user){
          return res.status(401).json("Wrong Email");
        }

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );


        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        const inputPassword = req.body.password;
        
        if(originalPassword != inputPassword){
          return res.status(401).json("Wrong Password");
        }

        let token = accessToken(user._id,user.isAdmin)
  
        const { password, ...others } = user._doc;  
        return res.status(200).json({...others, token});

    }catch(err){
        return res.status(500).json(err);
    }

});

module.exports = router;