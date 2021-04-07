const mongoose = require('mongoose');

//Crea un esquema
const QuoteSchema = new mongoose.Schema({
    content: String,
    author: String
});

//Exporta el modulo asignandole un modelo
module.exports = mongoose.model('Quote', QuoteSchema);