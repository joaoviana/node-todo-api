//User
//email property - reuqire it - trim -set type -set min lentgh of 1
//creating a model
var User = mongoose.model('User', {
  //adding validators
  email : {
    type: String,
    required:true,
    minLength: 1,
    trim: true
  }
});

var user = new User( {
  email: 'joaoviana@gmail.com   '
});

user.save().then((doc) => {
  console.log('User saved', doc);
}, (err) => {
  console.log('Unable to save user', err);
});
