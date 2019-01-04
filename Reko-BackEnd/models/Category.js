const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
name: {
  type: String,
  required: true
},
numberRekosInCat: Number,
subCategory:String,
numberSubCategories: Number,
},{
  timestamps:{
    createdAt: true,
    updatedAt: true
  },
  versionKey: false
});




  module.exports = mongoose.model('Category', categorySchema)