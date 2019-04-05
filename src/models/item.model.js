//The first thing you need to do in creating a model is reference mongoose
let mongoose = require('mongoose')

//should create a separate database.js file to connect to the database, but for practice, we'll do it here

// const server = ''
// const database = ''
// const user = ''
// const password = ''

//the above variables are optional in connecting your database with mongoose
// mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)

//should only do this once in your code
mongoose.connect('mongodb://localhost/cabinets_node_backend');
console.log('mongoose is connected', mongoose.connection.readyState);

//Creating a schema for item attributes
let ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  interpretation: String,
  location: String,
  imageUrl: String
})

//Creating a model and exporting it
module.exports = mongoose.model('Item', ItemSchema)
