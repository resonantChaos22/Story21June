// Importing libraries

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const storyRoutes = require('./routes/storyRoutes');

const app = express();
app.set('view engine', 'ejs');
//  !   ROUTES

//  INDEX
app.get("/", (req, res) => {
    res.render('index')
})

//  STORY_ROUTES
app.use(storyRoutes);

//  LISTENING AT PORT 3000
app.listen(3000, () => {
    console.log("Server is running!");
});