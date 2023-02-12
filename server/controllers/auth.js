const { User } = require("../models/User");
const bcrypt = require("bcrypt");

exports.auth = async (req, res) => {
  try {

    const user = await User.findOne({ email: req.body.email, password:req.body.password });
    
    let tokenUser = null;

    if (!user)
    return res.status(400).send("invalid email or password");
    else{

        tokenUser = user.generateUserJWT();
        console.log(tokenUser)
      

    }
    if(tokenUser)

        res.status(200).send(tokenUser);
    }
      
   catch (err) {
    console.log(err)
    res.status(400).send(err);
  }
};


