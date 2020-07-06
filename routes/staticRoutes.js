module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('index', { ...res.locals });
  });

  app.get('/contact', (req, res) => {
    res.render('contact', { ...res.locals });
  });

  app.get('/return-policy', (req, res) => {
    res.render('returnPolicy', { ...res.locals });
  });

  app.get('/terms-and-condition', (req, res) => {
    res.render('termsCondition', { ...res.locals });
  });
  
}
