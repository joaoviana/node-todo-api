const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = '5b950a3d0e753e057b546f92';
// //if no matching id, returns null
// //converts it to objectid auto
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }
//
// Todo.find({
//   _id:id
// }).then((todos)=> {
//   console.log('Todos',todos);
// });
//
// //get doc as opposed to the array like example above
// Todo.findOne({
//   _id:id
// }).then((todo)=> {
//   console.log('Todo',todo);
// });
//
// Todo.findById(id).then((todo)=> {
//   if(!todo){
//     return console.log('Id not found')
//   }
//   console.log('Todo by id',todo);
// }).catch((e) => console.log(e));

User.findById('5b94f640ad50a903e334a872').then((user) => {
  if(!user) {
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user,undefined,2));
}, (e) => {
  console.log(e);
});
