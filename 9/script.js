const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('.paragraph');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('I am %s', 'Stacy');
const occupation = 'developer';
console.log(`I am a ${occupation}`);

// Styled
console.log('%c I am an engineer', 'font-size:50px; background: #ededed');

// warning!
console.warn('Huston, we have a problem...');

// Error :|
console.error('WTF');

// Info
console.info('Mercury is the closest planet to the Sun');

// Testing
console.assert(1 === 1, 'That is wrong~!');

// Clearing
console.clear();

// Viewing DOM Elements
const p = document.querySelector('.paragraph');
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});

// Counting
console.count('Stacy');
console.count('Stacy');
console.count('Stacy');
console.count('Stacy');
console.count('Stacy');

// Timing
console.time('fetching data');
fetch('https://api.github.com/users/Sacret')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });
