const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clubSchema = new Schema({
name: {
  type: String,
  required: true,
  unique: true
},
description: String,
members: [
  {type: Schema.Types.ObjectId,
  ref: 'User'}
],
category: {
  type: Schema.Types.ObjectId,
  ref: 'Category'
}, 
},{
  timestamps:{
    createdAt: true,
    updatedAt: true
  },
  versionKey: false
});
 //ponerle un foro



  module.exports = mongoose.model('Club', clubSchema)