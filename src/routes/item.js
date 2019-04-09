let Item = require('../models/item.model')
let express = require('express')
let router = express.Router()

router.route('/items')
.get((req, res) => {
  Item.find((err, items) => {
    if (err) {
      res.send(err)
    } else {
      res.json({ items })
    }
  })
})
.post((req, res) => {
  let newItem = new Item()

  newItem.name = req.body.name
  newItem.description = req.body.description
  newItem.interpretation = req.body.interpretation
  newItem.location = req.body.location
  newItem.imageUrl = req.body.imageUrl

  newItem.save((err) => {
    if (err) {
      res.send(err)
    } else {
      res.send(newItem)
    }
  })
})

// router.get('/item', (req, res) => {
//   if (req.query.itemName) {
//     res.send(`You have requested an item: ${req.query.itemName}`)
//   } else {
//   res.send('You have requested an item')
//   }
// })
//Create a new item
//POST localhost:3000/item
// router.post('/item', (req, res) => {
//   //with bodyParser now we have access to req.body
//   if (!req.body) {
//     return res.status(400).send('Request body is missing')
//   }
//   //creating a new instance of item model
//   let model = new Item(req.body)
//   //tells mongoose to validate our info. (if we have any validations) and then save that info. to the database
//   model.save()
//     .then(doc => {
//       if (!doc || doc.length === 0) {
//         return res.status(500).send('The model did not save')
//       }
//       //201 means a resource was created
//       res.status(201).send(doc)
//     })
//     .catch(err => {
//       res.status(500).json(err).send('There was an error')
//     })
// })

module.exports = router
