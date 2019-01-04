[{
  id: '/#1212123123',
  name: 'Andrew',
  room: 'The Office Fans'
}]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
  constructor () {
    this.users = [];
  }

  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser (id){
    var user = this.getUser(id);
    if(user){
      var users = this.users.filter((user) => user.id !== id);
      this.users = users;
    }
    return user;
  }

  getUser(id){
    var resUser = this.users.filter((user) => user.id === id);
    return resUser[0];
  }

  getUserList(room){
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);
    return namesArray;
  }
}

module.exports = {Users};

//ES6 class
// class Person {
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription () {
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// }
//
// var me = new Person('Kenneth', '33');
// console.log(me.name);
//
// var description = me.getUserDescription();
// console.log(description);
