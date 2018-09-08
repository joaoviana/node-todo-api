// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

//object de-structuring - example above on line 1 and 2; both lines of code do the same thing actually(ignore ObjectID)
//way to make new variables from an object's properties
// var user = {name: 'joao', age: 23};
// var {name} = user;
// console.log(name);

//takes 2 args, url where db lives; could be as well heroku url
//callback function
MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true}, (err,client) => {
  if(err){
    //return to prevent the function from executing
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');
  const db = client.db('TodoApp');

  // //insertOne lets u insert a new doc into your collection
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert Todo.', err);
  //   }
  //   //ops attribute is gonna store all of the docs that were inserted
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Joao',
  //   age:23,
  //   location: 'Portugal'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert User.', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  client.close();
});
