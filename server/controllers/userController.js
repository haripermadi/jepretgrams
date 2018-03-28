const User = require('../models/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const jwt = require('jsonwebtoken');


module.exports = {
  signUp: (req,res) => {
    let hash = bcrypt.hashSync(req.body.password,salt)
    let newUser ={
      name:req.body.name,
      email:req.body.email,
      password:hash
    }
    User.findOne({
      email:req.body.email
    }).then(data=>{
      if(data){
        res.status(400).json({
          message:"email already registered!!"
        })
      }else{
        let user = new User(newUser)
        user.save().then(user=>{
          console.log("===>",user)
          if(user){
            res.status(201).json({
              message:"user is created",
              user
            })
          }else{
            res.status(406).json({
              message:"something wrong"
            })
          }
        }).catch(err=>{
            console.log(err)
            res.status(404).send(err.message)
          })
      }
    })
    
  },
  login: (req,res) => {
    console.log("masuk login ",req.body)
    User.findOne({
      email:req.body.email
    })
    .exec()
    .then(dataUser=>{
      if(dataUser){
        console.log("ini data user===",dataUser)
        let checkPass = bcrypt.compareSync(req.body.password,dataUser.password)
        if(checkPass){
          let token = jwt.sign({id:dataUser._id,email:dataUser.email},process.env.SECRET)
          res.status(200).json({
            message:"login success",
            data:{
              id:dataUser._id,
              name:dataUser.name,
              email:dataUser.email,
              token :token
            }
          })
        }else{
          res.status(400).json({
            message:"email/password is wrong!!"
          })
        }
      }else{
        res.status(400).json({
          message:"login failed!"
        })
      }
    })
  },
}