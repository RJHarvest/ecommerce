require('dotenv').config()

module.exports = {
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  sessionSecret: process.env.SESSION_SECRET,
  redisURL: process.env.REDIS_URL,
}
