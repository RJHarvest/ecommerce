const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('user');

module.exports = app =>{
  app.post('/api/login',
    passport.authenticate('local', { failureRedirect:'/login' }),
    (req, res) =>{
      res.redirect('/');
  });

  app.post('/api/register', async (req, res) =>{
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

  app.get('/api/logout', (req, res) =>{
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) =>{
    res.send(req.user);
  });
}
