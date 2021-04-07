//import
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//executed express app
const app = express();

//Middlewares
// app.use('/posts', () =>{
//     console.log("Esto se ejecuta antes de las routes");
// });

// app.use(auth);

// Database
mongoose.connect('mongodb://localhost/motivation', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// DB instance
const db = mongoose.connection;
// DB inicialice
db.once('open', () => {
    console.log("Connected to MongoseDB database..OK");
});


//ROUTES
app.get('/', (req, res) => {
    //Envia el mensaje en pantalla
    res.send('Home page ::');
});

app.get('/posts', (req, res) => {
    //Envia el mensaje en pantalla
    res.send('Post page ::');
});

app.get('/aboute', (req, res) => {
    res.send("About page ::");
});


//Quotes
const QuotesRoute = require('./routes/Quotes');
app.use('/quotes', QuotesRoute);

//Listening server port
//Starting server
app.listen(3000, console.log("Listening on port 3000"));