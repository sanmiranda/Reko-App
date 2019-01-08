const express = require('express');
const Reko = require ('../../models/Reko');
const User = require('../../models/User')


const router = express.Router();


//create new Reko

router.post('/rekos', (req, res, next)=>{
  console.log(req.body)
  Reko.create(req.body)
  .then(response=>{
    console.log(response)
    User.findByIdAndUpdate(req.params.id,
      {$push: {rekos: response._id}})
      .then(res.json(response))
      .catch(e=>res.json(e))
  })
  // .then(response=>{
  //   Category.findByIdAndUpdate(req.params.id,
  //     {$push: {rekos: response._id}})
  //     .then(res.json(response))
  //     .catch(e=>res.json(e))
  // })
  .catch(e=> console.log(e))
})

// read all rekos

router.get('/rekos', (req, res, next)=>{
  Reko.find().populate("author")
  .then(response=> {
    res.json(response);
  })
  .catch(e=> res.json(e))
})

// get one reko

router.get('/rekos/:id', (req, res, next)=>{
  Reko.findById(req.params.id)
  .then(response=> {
    res.json(response);
  })
  .catch(e=> res.json(e))
})

//get rekos de author
router.get('/authorrekos/:author', (req, res, next)=>{
  const {author} = req.params
  Reko.find({author: author}).populate("author")
  .then(response=> {
    res.json(response);
  })
  .catch(e=> res.json(e))
})

// update a Reko -- put o patch??

router.put('/rekos/:id', (req, res, next)=>{
  Reko.findByIdAndUpdate(req.params.id)
  .then(response=>{
    res.json(response ,{message: 'Reko updated successfully'})
  })
  .catch(e=> res.json(e))
})

// delete a Reko

router.delete('/rekos/:id', (req, res , next)=>{
  Reko.findByIdAndRemove(req.params.id)
  .then(response=>{
    res.json({message:'Reko removed successfully'})
  })
  .catch(e=> res.json(e))
})

//bucketlist
router.put('/bucket', (req,res,next)=>{
  const userid = req.body.user._id
  const rekoid = req.body.rekoid
  console.log(req.body)
  User.findByIdAndUpdate(userid, {$push:{bucketlist:rekoid}}, {new:true}).populate('bucketlist')
  .then(user=>{
    res.status(200).json(user)
  })
  .catch(e=> res.json(e))
})
// get rekos de bucketlist
router.get('/bucketrekos/:id', (req, res, next)=>{
  const {id} = req.params
  User.findById(id).populate("bucketlist")
  .then(user=> {
    res.status(200).json(user);
  })
  .catch(e=> res.json(e))
})

module.exports = router;