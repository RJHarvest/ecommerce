const express = require('express');
const path = require('path');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./models/Product');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(
  cookieSession({
    age: 7*60*60*60*1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/websiteRoutes')(app);
require('./routes/testRoutes')(app);

const port = process.env.PORT || 5000;
app.listen(port, () =>{
  console.log(`Server is running on port ${port}`);
});
