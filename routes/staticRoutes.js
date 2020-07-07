module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('index', { ...res.locals });
  });

  app.get('/contact', (req, res) => {
    res.render('contact', { ...res.locals });
  });

  app.get('/login',
    (req, res, next) => {
      if (req.user) {
        return res.redirect('/member');
      }
      return next();
    },
    (req, res, next) => {
    res.render('login', { ...res.locals });
  });

  app.get('/register',
    (req, res, next) => {
      if (req.user) {
        return res.redirect('back');
      }
      return next();
    },
    (req, res) => {
    res.render('register', { ...res.locals });
  });

  app.get('/member',
    (req, res, next) => {
      if (!req.user) {
        return res.redirect('back');
      }
      return next();
    },
    (req, res) => {
      res.render('member', { ...res.locals });
  });

  app.get('/cart', (req, res) => {
    res.render('cart', { ...res.locals });
  });

  app.get('/checkout', (req, res) => {
    res.render('checkout', { ...res.locals });
  });

  app.get('/return-policy', (req, res) => {
    res.render('returnPolicy', { ...res.locals });
  });

  app.get('/terms-and-condition', (req, res) => {
    res.render('termsCondition', { ...res.locals });
  });
  
}
