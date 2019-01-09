const router = require('express').Router()
const User = require('../../models/User')
const passport = require('passport')

router.post('/signup', (req,res,next) => {
  User.register(req.body, req.body.password)
  .then(user => {
    res.status(201).json(user)
  })
  .catch(err => res.status(500).json(err))
})

router.post('/login', (req,res,next) => {
  passport.authenticate('local', (err,user,info) => {
    if(err) return res.status(500).json(info)
    if(!user) return res.status(404).json(info)
    req.login(user, () => {
      return res.status(200).json(user)
    }).populate('bucketlist')
    
  })(req,res,next)
})

//logout
router.get('/logout', (req,res,next) => {
  req.logOut()
  res.status(200).json({message: 'Succesfully logged out'})
})

const isAuth = (req,res,next) => {
  if(req.isAuthenticated()) return next()
  return res.status(403).json({message: "User not logged in"})
}

router.get('/profile', isAuth, (req,res,next) => {
  return res.status(200).json(req.user)
})




//update user
router.put('/user/:id', isAuth, (req,res,next)=>{
  User.findByIdAndUpdate(req.params.id)
  .then(response=>{
    res.json(response ,{message: 'User updated successfully'})
  })
  .catch(e=> res.json(e))
})





module.exports = router