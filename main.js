// console.log('CONNECTED');

const button = document.querySelector('#main-button');
const container = document.querySelector('#container');
// button.addEventListener('click', (e) => {
//   console.log(`You clicked ${e.target.id}.`);
//   console.log(e.isTrusted);
// })

const whatIsTheId = (e) => {
  console.log(`You clicked ${e.target.id}`);

  if (e.target.id === 'main-button') {
    container.innerHTML = 'You clicked the main button';
  }
}

button.addEventListener('click', whatIsTheId)

const button2 = document.querySelector(`#other-button`);

button2.addEventListener('click', whatIsTheId);
