//creating a model
var Todo = mongoose.model('Todo', {
  //adding validators
  text : {
    type: String,
    required:true,
    minLength: 1,
    trim: true
  },
  completed : {
    type: Boolean,
    default: false
  },
  completedAt : {
    type: Number,
    default: null
  }
});

// //creating new instance
// var newTodo = new Todo( {
//   text: 'Cook dinner',
//
// });
//
// //returns promise
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc)
// }, (e) => {
//   console.log('Unable to save todo');
// });

// var otherTodo = new Todo ( {
//   text: 'dont forget to have fun'
// });
//
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc,undefined,2));
// }, (e) => {
//   console.log('Unable to save', e);
// });
