const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = mongoose.model('user');

passport.serializeUser((user, done) =>{
  done(null, user.id);
});

passport.deserializeUser((id, done) =>{
  User.findById(id, (err, user) =>{
    done(err, user);
  });
});

passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await User.findOne({ username: username }, '_id username password')
      if (!user) return done(null, false);
      if (user.password != password) return done(null, false);
      return done(null, user);
    } catch(err) {
      console.error('[ Error in local passport ]', err);
      return done(err);
    }
  }
));
