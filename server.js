const express = require('express')
const app = express()
const methodOverride = require('method-override')
const morgan = require('morgan')
const routes = require('./routes/index.js')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(morgan('dev'))

app.use(express.static(__dirname + '/public'))

//Tells express what view engine we will be using
app.set('view engine', 'hbs')

app.use('/', routes)

const PORT = process.env.PORT || 7000

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})