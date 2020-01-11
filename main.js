var express = require('express')
var app = express()

app.get('/', function(req, res) {
    console.log('what you mean ~/ ?')
    res.send('Hello World')
})
app.get('/send', function(req, res) {
    console.log('what you mean ~/send ?')
    res.send('Hello World')
})

app.listen(3000, function() {
    console.log('Express App listening on PORT 3000')
})
