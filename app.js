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

// Add after body parser initialization
app.use(expressValidator());

// HANDLEBARS MATERIAL
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// INDEX
app.get('/',(req, res) => {
    res.render('home', { msg: 'Handlebars Are Okay'});
})

// NEW (post)
app.get('/posts/new', (req, res) => {
    res.render('posts-new', {});
})

// CREATE posts route
const posts = require('./controllers/posts.js')(app);

// DATABASE
require('./data/reddit-db');

//Server Start
app.listen(3000, () => {
    console.log('App listneing on port 3000 yay')
})
