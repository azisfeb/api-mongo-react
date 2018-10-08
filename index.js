const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
//set up express app
const app = express()

const api = require('./routes/api')

//connect mongodb
mongoose.connect('mongodb://localhost:27017/Employee', {
    useNewUrlParser: true,
    useCreateIndex: true
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'))

app.use('/api', api)

//listen request
app.listen(process.env.PORT || 3000, () => {
    console.log('Server now running....')
})