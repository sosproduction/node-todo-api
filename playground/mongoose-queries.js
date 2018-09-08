const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = '5b92c3924f04d3e02907ca81';
var userID = '5b8ff7c1f53d887c38afae94';

if (!ObjectID.isValid(id)) {
  console.log('ID is not valid');
}

/*
Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});


Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('ID not found');
  }
  console.log('Todo by ID: ', todo);
}).catch((e) => console.log(e));
*/

User.findById(userID).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User by ID: ', JSON.stringify(user, undefined, 2 ));
}).catch((e) => console.log(e));