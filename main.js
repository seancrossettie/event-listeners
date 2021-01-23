const firstObj = {};

const user = {
  username: 'scrossettie',
  password: 'password',
  lovesJavascript: true,
  favoriteNumber: 17,
}

// ******* DOT NOTATION
// console.log(user.lovesJavascript);
// console.log(user.username);

// ******* BRACKET NOTATION
// const password = 'password';
// console.log(user[password]);
// console.log(user['username']);

// console.log(user['favoriteNumber']);
// console.log(user.favoriteNumber);

// ******* ASSIGNING VALUES

// const newUser = {
//   isNew = true,
// }

// newUser.username = 'fresh prince'; // dot notation
// newUser['password'] = 'abcd1234'; 
// newUser[1] = 'abcd1234';
// console.log(newUser);


// ******* METHODS (FUNCTIONS AS VALUES);

const newObject = {
  username: 'Teresa',
  sayHello: function () {
    console.log(`${this.username} says Hello!`);
  }
}

// newObject.username = 'Aja'
// newObject.sayHello();

// ******* ITERATE OVER AN OBJECT

const userTwo = {
  username: 'trinity.christiana',
  password: 'xyz2345',
  lovesJavascript: true,
  favoriteNumber: 12,
}

// ****** FOR IN LOOP

for (let key in userTwo) {
  console.log(key);
  console.log(userTwo[key]);
}
