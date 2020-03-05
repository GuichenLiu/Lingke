var express = require('express');
var indexController = require('./controllers/indexController');
var providersController = require('./controllers/providersController');
var productsController = require('./controllers/productsController');
var customersController = require('./controllers/customersController');
var channelsController = require('./controllers/channelsController');
var mongoose = require('mongoose')
var bodyParser = require('body-parser');
// var flash = require('connect-flash');
// var session = require('express-session');
// const passport = require('passport');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
indexController(app);
providersController(app);
productsController(app);
customersController(app);
channelsController(app);

mongoose.connect(
    "mongodb+srv://admin:admin@lingkedb-bkpm4.mongodb.net/lingke_db?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })



// require('./config/passport')(passport);

// app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.static('./public'));

//Bodyparser
app.use(express.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.status(404);

    // respond with html page
    if (req.accepts('html')) {
        res.render('404', { url: req.url });
        return;
    }

    // respond with json
    if (req.accepts('json')) {
        res.send({ error: 'Not found' });
        return;
    }

    // default to plain-text. send()
    res.type('txt').send('Not found');
});


app.listen(8888);

console.log('Server running at http://localhost:8888');
app.get('/', function(req, res) {

});