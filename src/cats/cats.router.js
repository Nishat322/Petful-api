const express = require("express");
const catsService = require("./cats-service");
const catsRouter = express.Router();

catsRouter
    .route('/cats')
    .get((req, res) => {
        const cat = catsService.getCat()
        return res.status(200).json(cat)
    })
    .delete((req, res) => {
        catsService.dequeue()
        res.status(200).end()
    })

module.exports = catsRouter