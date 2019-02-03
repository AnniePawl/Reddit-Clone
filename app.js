// EXPRESS MODULES & OBJECTS
const express = require('express');
// const methodOverride = require('method-override');

const app = express();
// const bodyParser = require('body-parser');


// HANDLEBARS MATERIAL
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// INDEX
app.get('/',(req, res) => {
    res.render('home', { msg: 'Handlebars Are Okay'});
})

//Server Start
app.listen(3000, () => {
    console.log('App listneing on port 3000 yay')
})
