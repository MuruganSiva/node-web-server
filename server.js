const express = require('express');
const hbs = require('hbs');


var app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname +  '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.use((req, res, next) =>{
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use((req, res, next) =>{
    res.render('maint.hbs');
});

app.use(express.static(__dirname+ '/public'));

app.get('/', (requ, res) =>{
    res.send({
        name: 'Siva',
        likes:[ 'Biking' ]
    });
});

app.get('/about', (req,res) => {
    res.render('about.hbs');
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});