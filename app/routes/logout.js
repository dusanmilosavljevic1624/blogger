var express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
  req.logout();
  res.redirect('/posts');
});

module.exports = router;
