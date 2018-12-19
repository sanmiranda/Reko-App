const express = require('express')
const Category = require('../../models/Category')
const router = express.Router();

// create new category

router.post('/categories', (req, res, next)=>{
  Category.create({
    name: req.body.name,
  })
.then(response=>{
  res.json(response)
})
.catch(e=> res.json(e))
})

// get all categories

router.get('/categories', (req, res, next) =>{
  Category.find()
.then(response =>{
  res.json(response);
})
.catch(e=> res.json(e))
})

// get one category

router.get('/categories/:id',(req, res, next)=>{
  Category.findById(req.params.id)
  .then(response=> {
    res.json(response);
  })
  .catch(e=> res.json(e))
})

// update category

router.put('categories/:id', (req, res, next)=> {
  Category.findByIdAndUpdate(req.params.id)
  .then(response => {
    res.json({message: 'Category updated successfully'})
  })
  .catch(e => res.json(e))
})

// delete category

router.delete('categories/:id', (req, res, next)=> {
  Category.findByIdAndRemove(req.params.id)
  .then( response =>{
    res.json({message: 'Categoty deleted successfully'})
  })
  .catch(e => res.json(e))
})


module.exports = router