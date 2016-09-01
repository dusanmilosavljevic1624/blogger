var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    passport = require('passport'),
    flash = require('connect-flash'),

    morgan = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session');


app.use(morgan('dev')); // Log every request to the console
app.use(cookieParser()); // Read cookies
app.use(bodyParser()); // Get information from HTML forms


app.set('view engine', 'pug'); // Setting up pug for templateing

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});