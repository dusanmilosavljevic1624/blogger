module.exports = function (app, passport) {

  app.use(userToTemplate);

  app.use('/', require('./routes/root'));
  app.use('/login', require('./routes/login'));
  app.use('/logout', require('./routes/logout'));
  app.use('/register', require('./routes/register'));
  app.use('/profile', isLoggedIn, require('./routes/profile'));
  app.use('/posts', require('./routes/posts'));
  app.use('/users', require('./routes/users'));

  function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
      return next();
    }
    res.redirect('/login');
  }

  function userToTemplate(req, res, next) {
    if(req.isAuthenticated()) {
      res.locals.currentUser = req.user;
    }
    return next();
  }

};
