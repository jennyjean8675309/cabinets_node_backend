let express = require('express')
let router = express.Router()

//using QueryString (a query property on the request object)
//localhost:3000/user?username=jennyjean
router.get('/users', (req, res) => {
  if (req.query.username) {
    res.send(`You have requested a user: ${req.query.username}`)
  } else {
  res.send('You have requested a user')
  }
})

//using the params property on the request object
//localhost:3000/user/jennyjean
router.get('/users/:username', (req, res) => {
  res.send(`You have requested a user: ${req.params.username}`)
})

//exports the router, allowing us to import it in our index.js file
module.exports = router
