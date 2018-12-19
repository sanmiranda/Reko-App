const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rekoSchema = new Schema({
  // id: Number,
  img: {
    type: String,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  description: {
    type: String,
    required: true
  },
  rating : Number,
  author : {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  // clubs:[{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Club'
  // }],
  // AddedToBucketlist: Number, como agregarlo? referencia de el id que se añada a bucketlist?
},{
    timestamps:{
      createdAt: true,
      updatedAt: true
    },
    versionKey: false
  });





module.exports = mongoose.model('Reko', rekoSchema)
