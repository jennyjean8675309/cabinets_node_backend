//calls on the express library
let express = require('express')

//creates a new express app
let app = express()

//serves static content to your app
app.use(express.static('public'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`App has started on port ${PORT}`))
