// Require all the things
var path = require('path')
var bodyParser = require('body-parser')
var express = require('express')
var app = express();

app.set('port', process.env.PORT || 3000)

app.get('/*', function (req, res) {
  var file = req.params[0] || 'views/index.html'
  res.sendFile(path.join(__dirname, './public/', file))
})

app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'))
})
