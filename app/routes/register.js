var express = require('express'),
    router = express.Router(),
    passport = require('passport');

router.get('/', (req, res) => {
  res.render('register', {message: req.flash('registerMessage')});
});

router.post('/', passport.authenticate('local-register',  {
  successRedirect: '/profile',
  failureRedirect: '/register',
  failureFlash: true
}));


module.exports = router;
