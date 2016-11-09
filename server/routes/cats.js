var express = require('express')
var router = express.Router()

var cats = [
  {
    name: 'Luna',
    temperament: 'Devilish'
  }
]

// Get cats
router.get('/', function (req, res) {
  res.send(cats)
})

// Post cats
router.post('/', function (req, res) {
  cats.push(req.body)
  res.sendStatus(201)
})

module.exports = router;
