var mongoose = require('mongoose');
//maintains the connection over time
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });
//mongoose is now configured.

module.exports = {
  mongoose
};
