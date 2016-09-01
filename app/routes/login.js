var express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
  // render the page and pass in any flash data if it exists
  res.render('login');
});


module.exports = router;
