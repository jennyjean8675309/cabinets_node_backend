//calls on the express library
let express = require('express')

//creates a new express app
let app = express()

//connects us to the route we defined in user.js
let userRoute = require('./routes/user')

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

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`App has started on port ${PORT}`))
