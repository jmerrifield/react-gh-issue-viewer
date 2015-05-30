var app = require('express')()

function delay(req, res, next) {
  setTimeout(next, 2000)
}

// Uncomment to simulate slow asset delivery for testing async module load
// app.use([delay, require('express').static(__dirname)])

app.use(require('express').static(__dirname))

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(8080)
