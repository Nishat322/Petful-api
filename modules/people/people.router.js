const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')

const peopleRouter = express.Router()

peopleRouter
  .route('/people')
  .get((req, res) => {
    // Return all the people currently in the queue.
    const totalPeople = People.get()
    return res.status(200).json(totalPeople)
  })
  .post(json, (req, res) => {
    // Add a new person to the queue.
    const { name } = req.body
    const person = name

    People.enqueue(person)
    res.status(201).json(person)
  })
  .delete((req,res) => {
    People.dequeue()
    const people = People.get()
    return res.status(201).json(people)
  })

module.exports = peopleRouter
