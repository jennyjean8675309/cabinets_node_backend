let express = require('express')
let router = express.Router()

//using QueryString (a query property on the request object)
//localhost:3000/user?username=jennyjean
router.get('/user', (req, res) => {
  if (req.query.username) {
    res.send(`You have requested a user: ${req.query.username}`)
  } else {
  res.send('You have requested a user')
  }
})

//using the params property on the request object
//localhost:3000/user/jennyjean
router.get('/user/:username', (req, res) => {
  res.send(`You have requested a user: ${req.params.username}`)
})

//Creating a forced error to test our 500 Error
router.get('/error', (req, res) => {
  throw new Error('This is a forced error.')
})



//exports the router, allowing us to import it in our index.js file
module.exports = router
