const express = require('express');
const router = express.Router();
//importa archivo de models
//Comunica con el models
const Quote = require('../models/Quotes');

// Get all routes
router.get('/', async (req, res) => {

    //Busca los datos guardados en Schema
    const quotes = await Quote.find();
    //muestra los datos en pantalla
    res.json(quotes);
    // console.log("Get all routes");
    // res.send("Get all routes");
});

// Create new quote

//La finalidad de las funciones async/await es simplificar el comportamiento del uso síncrono de promesas 
//y realizar algún comportamiento específico en un grupo de Promises. 
//Del mismo modo que las Promises son semejantes a las devoluciones de llamadas estructuradas, 
//async/await se asemejan a una combinación de generadores y promesas.
router.post('/new', async (req, res) => {
    //recice un post desde el browser segun el Schema
    const newQuote = new Quote(req.body);
    const savedQuote = await newQuote.save();

    res.json(savedQuote);
    // res.send("Create new quote");
});

// Get Specific quote
router.get('/get/:id', async (req, res) => {
    const selection = await Quote.findById({ _id: req.params.id });
    res.json(selection);
});

// Delete quote
router.delete('/delete/:id', async (req, res) => {
    const result = await Quote.findByIdAndDelete({ _id: req.params.id });
    res.json(result);
});

// Update a quote
router.patch('/update/:id', async (req,res) => {
    const change = await Quote.updateOne({ _id: req.params.id }, {$set: req.body});
    res.json(change);
});

// Get random quote
router.get('/random', async (req,res) => {

    const count = await Quote.countDocuments();
    const random = Math.floor(Math.random() * count);
    const q = await Quote.findOne().skip(random);
    // const q = await Quote.find().limit(5).skip(5);

    res.json(q);
});

//Export module
module.exports = router;