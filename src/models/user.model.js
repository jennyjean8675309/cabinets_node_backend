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
  public: Boolean,
  items: [
    {
      name: {
        type: String,
        required: true
      },
      description: String,
      interpretation: String,
      location: String,
      itemImage: String,
      itemType: {
        type: String,
        required: true,
        enum: ["Artificialia", "Naturalia", "Exotica", "Scientifica"]
      }
    }
  ]
})

module.exports = mongoose.model('User', UserSchema)
