const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
        id: '1',
        name: 'Mike',
        room: 'Node Course'
    }, {
        id: '2',
        name: 'Jen',
        room: 'React Course'
    }, {
        id: '3',
        name: 'Julie',
        room: 'Node Course'
    }];
  });


  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Kenneth',
      room: 'The office fans'
    }
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
      var testUser = users.users[0];
      var testUsers = [users.users[1], users.users[2]];
      var rmvUser = users.removeUser('1');
      expect(rmvUser).toEqual(testUser);
      expect(users.users).toEqual(testUsers);
  });

  it('should not remove a user', () => {
    var testUsers = users.users
    var rmvUser = users.removeUser('100');
    expect(rmvUser).toNotExist();
    expect(users.users).toEqual(testUsers);
  });

  it('should find user', () => {
    var resUser = users.getUser('1');
    expect(resUser).toEqual(users.users[0]);
  });

  it('should not find user', () => {
    var resUser = users.getUser('100');
    expect(resUser).toNotExist();
  });

  it('should return names for node course', () => {
    var namesArray = users.getUserList('Node Course');
    expect(namesArray).toEqual(['Mike','Julie']);
  });

  it('should return names for react course', () => {
    var namesArray = users.getUserList('React Course');
    expect(namesArray).toEqual(['Jen']);
  });
});
