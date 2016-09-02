module.exports = function (app, passport) {

  app.use('/', require('./routes/root'));
  app.use('/login', require('./routes/login'));
  app.use('/register', require('./routes/register'));
  app.use('/profile', isLoggedIn, require('./routes/profile'));

  function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
      return next();
    }
    res.redirect('/login');
  }

};
