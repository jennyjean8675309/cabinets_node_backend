//calls on the express library
let express = require('express')

//creates a new express app
let app = express()

//connects us to the route we defined in user.js
let userRoute = require('./routes/user')

//telling express to register the route above
app.use(userRoute)
//serves static content to your app
app.use(express.static('public'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`App has started on port ${PORT}`))
