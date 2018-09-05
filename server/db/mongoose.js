var mongoose = require('mongoose');

// let's use promises instead of callbacks for chaining, ease of use, etc.
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };