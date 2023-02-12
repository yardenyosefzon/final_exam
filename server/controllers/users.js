const { User, validateUser } = require("../models/User");
const bcrypt = require("bcrypt");

//get all users
exports.getUsersData = async (req, res) => {
  try {
    const result = await User.find();
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.addIncome = async (req, res) => {
  try {
    const body = req.body;
   
   let user=await User.findOneAndUpdate({ email: req.body.email },{$inc:{balance:body.income}},{returnDocument:"after"})
   console.log(user)
   if(user)
    res.status(202).send(user)
    
    else{

        res.status(500).send('error')

    }
    
   
    // res
    //   .header("x-auth-token", user.generateUserJWT())
    //   .header("access-control-expose-headers", "x-auth-token")
    //   .send(user);
  } catch (err) {
    console.log(err);
    res.status(403).send(err.message);
  }
};
////////////////////////////////////////////////////////////////////////////////////////////////

//delet user by id
exports.addExpense = async (req, res) => {
    try {
        const expense = parseInt(req.body.expense);
       console.log(req.body.expense)
       let user=await User.findOneAndUpdate({ email: req.body.email },{$inc:{balance:-expense}},{returnDocument:"after"})
       
       if(user)
        res.status(202).send(user)
        
        else{
    
            res.status(500).send('error')
    
        }
        
       
        // res
        //   .header("x-auth-token", user.generateUserJWT())
        //   .header("access-control-expose-headers", "x-auth-token")
        //   .send(user);
      } catch (err) {
        console.log(err);
        res.status(403).send(err.message);
      }
    };
