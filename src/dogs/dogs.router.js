const express = require("express");
const dogsService = require("./dogs-services");
const dogsRouter = express.Router();

dogsRouter
    .route('/dogs')
    .get((req, res) => {
        const cat = dogsService.getDog();
        return res.status(200).json(cat);
    })
    .delete((req, res) => {
        dogsService.dequeue()
        res.status(200).end()
    })

module.exports = dogsRouter