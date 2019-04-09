//The first thing you need to do in creating a model is reference mongoose
let mongoose = require('mongoose')

//Creating a schema for item attributes
let ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  interpretation: String,
  location: String,
  imageUrl: String
})

//in the body, everything needs to be written in double quotes
// {
//   "name": "La Sagrada Familia"
// }

//Creating a model and exporting it
module.exports = mongoose.model('Item', ItemSchema)
