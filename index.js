const express = require('express');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const session = require('express-session');
const redis = require('redis');
const RedisStore = require('connect-redis')(session);
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const { initCartSession, createGlobalCartVariables } = require('./middlewares');
require('./models/User');
require('./models/Product');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(
  cookieSession({
    age: 7*60*60*60*1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

const redisClient = redis.createClient(keys.redisURL);
app.use(session({
  secret: keys.sessionSecret,
  resave: false,
  saveUninitialized: false,
  store: new RedisStore({ client: redisClient }),
  genId: function(req) {
    return genuuid();
  },
}));

app.use(initCartSession);
app.use(createGlobalCartVariables);

require('./routes/authRoutes')(app);
require('./routes/staticRoutes')(app);
require('./routes/watchRoutes')(app);
require('./routes/cartRoutes')(app);

if (process.env.NODE_ENV !== 'production') {
  require('./routes/testRoutes')(app);
}

const port = process.env.PORT || 5000;
app.listen(port, () =>{
  console.log(`Server is running on port ${port}`);
});
