var app = require('express')()

app.use(require('express').static(__dirname))

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(8080)
