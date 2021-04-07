const express = require('express');
const router = express.Router();
//importa archivo de models
//Comunica con el models
const Quote = require('../models/Quotes');

// Get all routes
router.get('/', (req, res) => {
    // console.log("Get all routes");
    res.send("Get all routes");
});

// Create new quote
router.post('/new', (req, res) => {
    //recice un post desde el browser segun el Schema
    const newQuote = new Quote(req.body);
    res.json(newQuote);
    // res.send("Create new quote");
});

//Export module
module.exports = router;