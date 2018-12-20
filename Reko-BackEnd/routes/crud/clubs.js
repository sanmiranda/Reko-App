const express = require('express');
const Club = require ('../../models/Club');
const User = require('../../models/User')


const router = express.Router();


//create new Club

router.post('/clubs', (req, res, next)=>{
  Club.create({
    name: req.body.name,
    description: req.body.description, 
    members: req.body.members,
    category: req.body.category,
    rekos: req.body.rekos,
  })
  .then(response=>{
    User.findByIdAndUpdate(req.body.members,
      {$push: {clubs: response._id}})
      .then(res.json(response))
      .catch(e=>res.json(e))
  })
  .catch(e=> res.json(e))
})

// read all clubs

router.get('/clubs', (req, res, next)=>{
  Club.find()
  .then(response=> {
    res.json(response);
  })
  .catch(e=> res.json(e))
})

// get one club

router.get('/clubs', (req, res, next)=>{
  Club.findById(req.params.id)
  .then(response=> {
    res.json(response);
  })
  .catch(e=> res.json(e))
})

// update a Club -- put o patch??

router.put('/clubs/:id', (req, res, next)=>{
  Club.findByIdAndUpdate(req.params.id)
  .then(response=>{
    res.json(response ,{message: 'Club updated successfully'})
  })
  .catch(e=> res.json(e))
})

// delete a Club

router.delete('/clubs/:id', (req, res , next)=>{
  Club.findByIdAndRemove(req.params.id)
  .then(response=>{
    res.json({message:'Club removed successfully'})
  })
  .catch(e=> res.json(e))
})

module.exports = router;