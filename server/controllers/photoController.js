const Photo = require('../models/photo')

module.exports = {
  getPhoto: (req,res)=>{
    console.log('masuk getphoto')
    Photo.find()
    .exec()
    .then(listPhoto=>{
      res.status(200).json({
        message:'success get all Photos',
        listPhoto
      })
    }).catch(err=>{
      res.status(400).json({
        message:'failed to get Photo'
      })
    })
  },
  postPhoto:(req,res)=>{
    console.log('masuk add Photo')
    let input = {
      caption: req.body.caption,
      image: req.body.image
    }
    let photo = new Photo(input)
    photo.save().then(newPhoto=>{
      if(newPhoto){
        res.status(201).json({
          message:'success adding Photo',
          newPhoto
        })
      }else{
        res.status(404).json({
          message:'failed adding Photo'
        })
      }
    })
  },
  removePhoto: (req,res)=>{
    let id = {
      _id:req.params.id
    }
    Photo.findByIdAndRemove(id,(err,data)=>{
      if(err){
        res.status(400).json({
          message:'failed remove Photo'
        })
      }else{
        res.status(200).json({
          message:'success remove a Photo'
        })
      }
    })
  },
  updateCaption:(req,res)=>{
    console.log("edit caption", req.body)
    let id = {_id:req.params.id}
    let input = {
      caption: req.body.caption
    }
    Photo.findByIdAndUpdate(id,input,(err)=>{
      if(err){
        res.status(400).json({
          message:"error",
          err
        })
        
      }else{
        res.status(200).json({
          message:"update success",
        })
      }
    })
  },
}


  
