module.exports = function (app) {

  app.use('/', require('./routes/root'));
  app.use('/login', require('./routes/login'));

};
