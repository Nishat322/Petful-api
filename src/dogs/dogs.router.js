const express = require('express')
const dogsService = require('./dogs-service')
const dogsRouter = express.Router()

dogsRouter
    .route('/dogs')
    .get((req,res) => {
        const dog = dogsService.get()
        return res.status(200).json(dog)
    })
    .delete((req,res) => {
        dogsService.dequeue()
        res.status(200).end()
    })

module.exports = dogsRouter