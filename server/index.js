var app = require('express')()

app.use(require('express').static(__dirname))

app.listen(8080)
