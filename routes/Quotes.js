const express = require('express');
const router =  express.Router();

// Get all routes
router.get('/', (req,res) => {
    // console.log("Get all routes");
    res.send("Get all routes");
});

// Create new quote
router.post('/new', (req,res) => {
    res.send("Create new quote");
});

//Export module
module.exports = router;