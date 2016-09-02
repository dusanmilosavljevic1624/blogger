var express = require('express'),
    router = express.Router(),
    Post = require('../models/post'),
    User = require('../models/user');

router.get('/', (req, res) => {
  Post.find({})
      .populate('_author')
      .exec((err, posts) => {
        console.log(posts);
        res.render('posts', {posts: posts});
      });
});

router.post('/new', (req, res) => {

  var post = new Post({
    title: req.body.title,
    _author: req.user.id,
    content: req.body.content
  });

  post.save(post, (err) => {
    if(err) {
      return err;
    }
  });
  res.redirect('/posts');
});

module.exports = router;
