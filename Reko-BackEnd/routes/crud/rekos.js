const express = require('express');
const Reko = require ('../../models/Reko');
const User = require('../../models/User')


const router = express.Router();


//create new Reko

router.post('/rekos', (req, res, next)=>{
  Reko.create({
    img: req.body.img, 
    description: req.body.description, 
    category: req.body.category,
    rating: req.body.rating,
    author: req.body.author,
  })
  .then(response=>{
    User.findByIdAndUpdate(req.params.id,
      {$push: {rekos: response._id}})
      .then(res.json(response))
      .catch(e=>res.json(e))
  })
  .then(response=>{
    Category.findByIdAndUpdate(req.params.id,
      {$push: {rekos: response._id}})
      .then(res.json(response))
      .catch(e=>res.json(e))
  })
  .catch(e=> res.json(e))
})

// read all rekos

router.get('/rekos', (req, res, next)=>{
  Reko.find().populate("author").populate('category')
  .then(response=> {
    res.json(response);
  })
  .catch(e=> res.json(e))
})

// get one reko

router.get('/reko', (req, res, next)=>{
  Reko.findById(req.params.id)
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

module.exports = router;