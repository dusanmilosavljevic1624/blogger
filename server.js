var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    passport = require('passport'),
    flash = require('connect-flash'),

    morgan = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),

    configDB = require('./config/database.js');

mongoose.connect(configDB.url);

require('./config/passport')(passport);

app.use(morgan('dev')); // Log every request to the console
app.use(cookieParser()); // Read cookies
app.use(bodyParser()); // Get information from HTML forms

app.set('view engine', 'pug'); // Setting up pug for templating

app.use(session({secret: 'thisisastringwhichishardtoguess'})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use(express.static('public'));
require('./app/route')(app, passport);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
