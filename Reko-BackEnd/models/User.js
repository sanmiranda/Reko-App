const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const plm = require('passport-local-mongoose')

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  username:{
    type: String,
    required: true,
    unique: true,
  },
  img: String,
  trackers:[{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  bucketlist:[
    {
      type:Schema.Types.ObjectId,
      ref:'Reko'
    }
  ],
  rekos: [{
    type: Schema.Types.ObjectId,
    ref: 'Reko'
  }],
  clubs: [{
    type: Schema.Types.ObjectId,
    ref: 'Club'
  }],
},{
    timestamps:{
      createdAt: true,
      updatedAt: true
    },
    versionKey: false
});

 //poner categorias de interes?? y solo mostrar de esas categorias??
userSchema.plugin(plm,{usernameField: 'email'})
module.exports = mongoose.model('User', userSchema)

