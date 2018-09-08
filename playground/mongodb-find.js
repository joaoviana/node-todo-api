// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true}, (err,client) => {
  if(err){
    //return to prevent the function from executing
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');
  const db = client.db('TodoApp');

  //instead of getting a cursor, we get an array of documents
  //cant just put id like it is, bc it is of type ObjectID
  // db.collection('Todos').find({
  //   _id:new ObjectID('5b9439aacac99d04304aaadd')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err) => {
  //   console.log('Unable to fetch todos',err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos',err);
  // });

  db.collection('Users').find({name: 'Joao'}).toArray().then((name) => {
    console.log('Users');
    console.log(JSON.stringify(name,undefined,2));
  }, (err) => {
    console.log('Unable to fetch todos',err);
  });



  // client.close();
});
