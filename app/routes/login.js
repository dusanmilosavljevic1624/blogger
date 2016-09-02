var express = require('express'),
    router = express.Router(),
    passport = require('passport');

router.get('/', (req, res) => {
  // render the page and pass in any flash data if it exists
  res.render('login', req.flash('loginMessage'));
});

router.post('/', passport.authenticate('local-login', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true
}));

module.exports = router;
