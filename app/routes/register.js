var express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
  res.render('register', {message: req.flash('registerMessage')});
});


module.exports = router;
