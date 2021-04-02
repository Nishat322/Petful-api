const express = require('express')
const cors = require('cors')
const peopleRouter = require('../people/people.router')
const petsRouter = require('../pets/pets.router')
const errorHandler = require('../errorHandler')

const app = express()

app.use(cors())

app.use('/api', peopleRouter)
app.use('/api', petsRouter);
app.use(errorHandler)

module.exports = app
