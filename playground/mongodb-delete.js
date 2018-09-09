const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true}, (err,client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  const db = client.db('TodoApp');

  //delete deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result)=> {
  //   console.log(result);
  // });

  //delete one
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result)=> {
  //   console.log(result);
  // });

  //find one and delete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=> {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Joao'});

  // db.collection('Users').findOneAndDelete({
  //   _id: new ObjectID('5b943addbbe0a30434c1c66c')
  // }).then((results)=> {
  //   console.log(JSON.stringify(results,undefined,2));
  // });

  // db.collection('Users').deleteOne()


  // client.close();
});
