'use strict'

//Import dependencies

let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let path = require('path');

//Import routes
let userRoute = require('./src/routes/user');
let itemRoute = require('./src/routes/item');

//Using mLab to make a remote database connection
mongoose.connect("mongodb+srv://jennyjean8675309:9hMv7N1kEmLOFYWH@cabinetsdatabase-rk7kx.mongodb.net/test?retryWrites=true", {
  useNewUrlParser: true
});

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected');
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

//Import Models
const Item = require('./src/models/item.model')

//Create an instance of express and its router
let app = express();
let router = express.Router();

//Set our port
const port = process.env.API_PORT || 3000;

//Configure express to use body-parser to parse request bodies in JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//CORS Configuration
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//Adding a Route
router.route('/')
.get((req, res) => {
  res.json({ message: 'Initialized!' });
});

// Configure express to add 'api' in front of routes
app.use('/api', router);

//Telling express to register the routes defined above
app.use(userRoute, itemRoute);

//Serves static content to your app
app.use(express.static('public'));

//Handling Errors
// app.use((req, res, next) => {
//   res.status(404).send('We think you are lost!');
//   next();
// });

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.sendFile(path.join(__dirname, '../public/500.html'));
  next();
});

//Using middleware to print every request that comes in (next is a reference to the next function in the pipeline)
app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
  next();
  //have to call next() when it's done or it will break the chain of functions
});

//Start listening on specified port
app.listen(port, () => {
  console.log(`API running on port ${port}`);
})
