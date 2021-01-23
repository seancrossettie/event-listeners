console.log('CONNECTED');

const sayHi = (user) => {
  return `Hello, ${user}!`
}

const sayBye = (user) => {
  return `Bye, ${user}`
}

const createGreeting = (user, cb) => {
  return cb(user);
}

console.log(createGreeting('Sean', sayHi));
