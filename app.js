var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const express = require('express')
const app = express()

app.get('/',(req, res) => {
    res.render('home' { msg: 'Handlebars Are Okay'});
})

//Server Start
app.listen(3000, () => {
    console.log('App listneing on port 3000 yay')
})
