let express = require('express')
let router = express.Router()

router.get('/user', (req, res) => {
  res.send('You have requested a user')
})



//exports the router, allowing us to import it in our index.js file
module.exports = router
