//Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
require('dotenv/config');
//import
const express = require('express');
const mongoose = require('mongoose');

//executed express app
const app = express();

//middleware
//Permite el envio de post y respuestas
app.use(express.json());

//Middlewares
// app.use('/posts', () =>{
//     console.log("Esto se ejecuta antes de las routes");
// });

// app.use(auth);

// Database
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// DB instance
const db = mongoose.connection;
// DB inicialice
db.once('open', () => {
    console.log("Connected to MongoseDB database..OK");
});

// Import Quotes Rotes
const QuotesRoute = require('./routes/Quotes');
app.use('/quotes', QuotesRoute);

app.get('/', (req, res) => {
    //Envia el mensaje en pantalla
    res.send('Home page ::');
});

//Listening server port
//Starting server
app.listen(3000, console.log("Listening on port 3000"));