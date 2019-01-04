const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rekoSchema = new Schema({
  // id: Number,
  img: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum:['Libros', 'Series', 'Restaurantes', 'Peliculas']
  },
  description: {
    type: String,
    required: true
  },
  rating : [],
  author : {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
 // monito de reko 3 puntos, 1 punto o 0 puntos
  // AddedToBucketlist: Number, como agregarlo? referencia de el id que se añada a bucketlist?
},{
    timestamps:{
      createdAt: true,
      updatedAt: true
    },
    versionKey: false
  });





module.exports = mongoose.model('Reko', rekoSchema)
