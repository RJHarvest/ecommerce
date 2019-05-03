const passport = require('passport');

module.exports = app =>{
  app.post('/api/login',
    passport.authenticate('local', { failureRedirect:'/login' }),
    (req, res) =>{
      res.redirect('/');
  });

  app.post('/api/register', (req, res) =>{
    const { username, password, name, email, address } = req.body;

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
