var LocalStrategy = require('passport-local').Strategy,
    User = require('../app/models/user');

module.exports = (passport) => {
  // passport session setup

  // required for persistent login sessions
  // passport requires the ability to serialize and deserialize users out of the session

  //serializing the user for the session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  //deserializing the user
  passport.deserializeUser((user, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  passport.use(new LocalStrategy({
    passReqToCallback: true // allows us to pass the entire request to the callback
  }, (req, username, password, done) => {

    // asynchronous
    // User.findOne() wont fire unless data is sent back

    process.nextTick(() => {
      // find a user whose username is the same as the forms username
      // we are checking to see if a username already exists
      User.findOne({'username': username}, (err, user) => {
        // if there are any errors, return the error
        if(err) {
          return done(err);
        }

        if(user) {
          return done(null, false, req.flash('signupMessage', 'That email is already taken.'))
        } else {
            // if there is no user with that username
            // create the user
            var newUser = new User();

            newUser.username = username;
            newUser.password = newUser.generateHash(password);

            // save the user
            newUser.save((err) => {
              if(err) {
                throw err;
              }
              return done(null, user);
            })
        }
      });
    });
  }));
};