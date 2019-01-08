const express = require('express');
const User = require('../../models/User')

const router = express.Router();



//get all users

router.get('/users', (req, res, next)=>{
  User.find()
  .then(response=> {
    res.json(response);
  })
  .catch(e=> res.json(e))
})

router.get('/users/:id', (req, res, next)=>{
  console.log(req.params)
  const {id} = req.params
  User.findById(id)
  .then(response=> {
    res.json(response);
  })
  .catch(e=> res.json(e))
})


module.exports = router
