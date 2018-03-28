const Likephoto = require('../models/like')

module.exports = {
  getLike: (req,res)=>{
    console.log('masuk get Likephoto')
    Likephoto.find()
    .populate('userId')
    .populate('photoId')
    .exec()
    .then(data=>{
      res.status(200).json({
        message:'success get all Likephotos',
        data
      })
    }).catch(err=>{
      res.status(400).json({
        message:'failed to get Likephoto'
      })
    })
  },
  postLike:(req,res)=>{
    console.log('masuk add Like')
    let input = {
      like: 1,
      userId: req.body.userId,
      photoId: req.body.photoId
    }
    let Likephoto = new Likephoto(input)
    Likephoto.save().then(newLikephoto=>{
      if(newLikephoto){
        res.status(201).json({
          message:'success adding Likephoto',
          newLikephoto
        })
      }else{
        res.status(404).json({
          message:'failed adding Likephoto'
        })
      }
    })
  }
}


  
