var {User} = require('./../models/user');

//creating the middleware
var authenticate = (req,res,next) => {
  var token = req.header('x-auth');

  User.findByToken(token).then((user) => {
    if(!user) {
      return Promise.reject();//gonna run the error case and it will stop
    }
    req.user = user;
    req.token = token;
    //otherwise code below won't execute
    next();
  }).catch((e) => {
    //401 unauthourised
    res.status(401).send();
  });
};


module.exports = {authenticate};
