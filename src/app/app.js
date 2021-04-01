const express = require('express')
const cors = require('cors')
const { CLIENT_ORIGIN } = require('../../config')
const peopleRouter = require('../people/people.router')
const petsRouter = require('../pets/pets.router')
const catsRouter = require('../cats/cats.router')
const dogsRouter = require('../dogs/dogs.router')
const errorHandler = require('../errorHandler')

const app = express()

app.use(cors({origin: CLIENT_ORIGIN}))

app.use('/api', peopleRouter)
app.use('/api', petsRouter);
app.use('/api', catsRouter);
app.use('/api', dogsRouter);
app.use(errorHandler)

module.exports = app
