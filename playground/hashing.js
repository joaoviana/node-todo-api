const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

//jwt enconded and decoded: header and payload(which is really useful)

var data = {
  id: 10
};
//the secrete as 2nd arg
var token = jwt.sign(data, '123abc');

console.log(token);

var decoded = jwt.verify(token,'123abc');
console.log('decoded',decoded);
//
// var message = 'I am user number 3';
// //hashing is a one way algorithm
// //goinfg to get same result no matter how many times i passe it to function
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//   id:4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
//   //its gonna salt our hash
// }
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if(resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust!');
// }
