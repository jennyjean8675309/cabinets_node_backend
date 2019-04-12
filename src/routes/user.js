let User = require('../models/user.model')
let express = require('express')
let router = express.Router()

router.get('/users', (req, res) => {
  User.find((err, users) => {
    if (err) {
      res.send(err)
    } else {
      res.json({ users })
    }
  })
})

router.post('/users', (req, res) => {
  if (!req.body) {
    return res.status(400).send('Request body is missing')
  }
  let newUser = new User(req.body)
  newUser.save()
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(500).send('The model did not save')
      }
      res.status(201).send(doc)
    })
    .catch(err => {
      res.status(500).json(err).send('There was an error')
    })
})
//using QueryString (a query property on the request object)
//localhost:3000/user?username=jennyjean
// router.get('/users', (req, res) => {
//   if (req.query.username) {
//     res.send(`You have requested a user: ${req.query.username}`)
//   } else {
//   res.send('You have requested a user')
//   }
// })

//using the params property on the request object
//localhost:3000/user/jennyjean
router.get('/users/:username', (req, res) => {
  res.send(`You have requested a user: ${req.params.username}`)
})

//exports the router, allowing us to import it in our index.js file
module.exports = router
