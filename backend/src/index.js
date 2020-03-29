const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')

const app = express()

app.set('port', (process.env.PORT || 3333))

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})
