var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../../models/user');

passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  function(username, password, done) {
    User.findOne({
      email: username
    }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {
          message: 'نام کاربری اشتباه است'
        });
      }
      if (!user.validPassword(password)) {
        return done(null, false, {
          message: 'رمز ورود اشتباه است'
        });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    if (user) user.password = undefined;
    done(err, user);
  });
});

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passReqToCallback: true // allows us to pass back the entire request to the callback
  },
  function(req, email, password, done) {
    // asynchronous
    // User.findOne wont fire unless data is sent back
    process.nextTick(function() {

      // find a user whose email is the same as the forms email
      // we are checking to see if the user trying to login already exists
      User.findOne({
        'email': email
      }, function(err, user) {
        // if there are any errors, return the error
        if (err) return done(err);

        // check to see if theres already a user with that email
        if (req.body.fullname.length <= 3) {
          return done(null, false, { message: 'short name' });
        }
        if (req.body.password != req.body.confirm_password) {
          return done(null, false, { message: 'Passwords Don\'t Match' });
        }
        if (req.body.password.length <= 3) {
          return done(null, false, { message: 'short password' });
        }
        if (user) {
          return done(null, false, { message: 'Email Already Exists' });
        }

        // if there is no user with that email
        // create the user
        var newUser = new User();

        // set the user's local credentials
        newUser.email = email;
        newUser.password = newUser.generateHash(password);
        newUser.fullname = req.body.fullname;
        // save the user
        newUser.save(function(err) {
          if (err) done(err);
          return done(null, newUser);
        });

      });
    });
  }));

module.exports = passport;
