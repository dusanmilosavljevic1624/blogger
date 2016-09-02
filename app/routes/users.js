var express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
  res.render('users');
});

module.exports = router;
