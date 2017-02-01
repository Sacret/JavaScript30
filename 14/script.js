// Start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'Stacy';
let name2 = name;
console.log(name, name2);
name = 'Sacret';
console.log(name, name2);

// Let's say we hane an arrau
const players = ['Stacy', 'Ann', 'Svyat'];

// and we want to make a copy of it
const team = players;
console.log(players, team);

team[2] = 'Lux';
console.log(players, team);

// Make a real copy
const team2 = players.slice();
const team3 = [].concat(players);
const team4 = [...players];
const team5 = Array.from(players);

// With objects
const person = {
  name: 'Stacy A.',
  age: 26
};

const captain = person;
captain.number = 1;

// How to make a copy
const captain2 = Object.assign({}, person, {number: 1, age: 25});

// Object spread (one level deep)
const captain3 = {...person};

const sacret = {
  name: 'Stacy',
  age: 26,
  social: {
    github: 'sacret',
    twitter: '@sacret19',
    instagram: 'sacret19'
  }
};

console.log(sacret);

const sacret2 = Object.assign({}, sacret);
sacret2.social.instagram = '@sacret19';

console.log(sacret.social, sacret2.social);

const sacret2 = JSON.parse(JSON.stringify(sacret));
