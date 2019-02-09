// EXPRESS MODULES & OBJECTS
const express = require('express');
// const methodOverride = require('method-override');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

// use BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// EXPRESS VALIDATOR, add after body-parser initalizer
app.use(expressValidator());

// HANDLEBARS MATERIAL
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// IMPORT ROUTES
const posts = require('./controllers/posts.js')(app);

// DATABASE
require('./data/reddit-db');

//Server Start
app.listen(3000, () => {
    console.log('App listneing on port 3000 yay')
})

module.exports = app;
