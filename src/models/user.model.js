let mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
  cabinetName: String,
  cabinetImage: String,
  firstName: String,
  lastName: String,
  email: String,
  username: String,
  password: String,
  public: Boolean
})

module.exports = mongoose.model('User', UserSchema)
