//calls on the express library
let express = require('express')

//creates a new express app
let app = express()

//connects us to the route we defined in user.js
let userRoute = require('./routes/user')

//references the path module
let path = require('path')

//using middleware to print every request that comes in (next is a reference to the next function in the pipeline)
app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`)

  next()
  //have to call next() when it's done or it will break the chain of functions
})
//telling express to register the route above
app.use(userRoute)
//serves static content to your app
app.use(express.static('public'))

//handling a 404 Error - Resource Not Found
app.use((req, res, next) => {
  res.status(404).send('We think you are lost!')
})

//handling a 500 Error - Internal error (notice that here I pass in an extra argument, err)
//sendFile and path are accessing the 500.html file page we created in the public folder
app.use((err, req, res, next) => {
  console.error(err.stack)

  res.sendFile(path.join(__dirname, '../public/500.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`App has started on port ${PORT}`))
