const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('user');

module.exports = app => {
  app.post('/api/login',
    passport.authenticate('local', { failureRedirect:'/login' }),
    (req, res) =>{
      res.redirect('/member');
  });

  app.post('/api/register', async (req, res) => {
    const { username, password, name, email, address } = req.body;

    await new User({
      username,
      password,
      name,
      email,
      address
    }).save();

    res.redirect('/login');
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

}
