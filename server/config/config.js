var env = process.env.NODE_ENV || 'development';

if(env === 'development' || env === 'test') {
  var config = require('./config.json');
  var envConfig = config[env];
  //takes an object, gets all keys and returns array
  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}
