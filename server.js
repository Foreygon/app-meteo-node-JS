"use strict";

const ejs = require('ejs');
const path = require('path');

const express = require('express');
const app = express();

// export util
const guessPort = require('./utils/port');
const port = guessPort();
const ip_geo = require('./utils/IP_geo')
const args = require('./utils/args');

console.log('hello');

// App Setup 
// --

app.engine('.html', ejs.__express);

app.set('views', path.join(__dirname, "views"));

app.set('view engine', 'html');

app.use( express.static( path.join(__dirname, "public") ) );


// Routing
// --

app.use(require('./controllers/homepage'));
app.use(require('./controllers/about'));
app.use(require('./controllers/contact'));

// Création de la page 404
app.use(function(req, res){
    res.status(404);
    res.render('404', { 
        pageTitle: "404 Not Found",
        pageId: "err404",
        host: req.hostname,
        url: req.url 
    })
});


// Start server App
// --

app.listen(port , () => {
    console.log("App listening on port", port);
});

module.exports= port;