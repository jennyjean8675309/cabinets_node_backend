let mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
  cabinetName: {
    type: String,
    required: true
  },
  cabinetImage: String,
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  public: Boolean
})

module.exports = mongoose.model('User', UserSchema)
