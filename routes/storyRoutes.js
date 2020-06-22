// Importing libraries
const express = require('express');

const router = express.Router();

// !    ROUTES

router.get('/story', (req, res) => {
    res.send("Story");
})


//  EXPORTING
module.exports = router;