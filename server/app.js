// Require all the things
var bodyParser = require('body-parser')
var express = require('express')
var app = express();
var index = require('./routes/index')
var cats = require('./routes/cats')

// Set port
app.set('port', process.env.PORT || 3000)

// Parse the body
app.use(bodyParser.urlencoded({extended: false}))

// Route the cats
app.use('/cats', cats)

// Route static files
app.use('/', index)

// Listen for requests
app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'))
})
