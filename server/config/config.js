var env = process.env.NODE_ENV || 'development';
console.log('env ******* ', env);

// Set up Test database, dev environment and production (Heroku)
if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest'
}
