const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const flavours = ['Chocolate Chip', 'Kulfi', 'Caramel Praline', 'Chocolate', 'Burnt Caramel', 'Pistachio', 'Rose', 'Sweet Coconut', 'Lemon Cookie', 'Toffeeness', 'Toasted Almond', 'Black Raspberry Crunch', 'Chocolate Brownies', 'Pistachio Almond', 'Strawberry', 'Lavender Honey', 'Lychee', 'Peach', 'Black Walnut', 'Birthday Cake', 'Mexican Chocolate', 'Mocha Almond Fudge', 'Raspberry'];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventorsBornIn1500 = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.log('1. Filter the list of inventors for those who were born in the 1500\'s');
console.table(inventorsBornIn1500);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const inventorsNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log('2. Give us an array of the inventors\' first and last names', inventorsNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const inventorsSorted = inventors.sort((inventorA, inventorB) => inventorA.year - inventorB.year);
console.log('3. Sort the inventors by birthdate, oldest to youngest');
console.table(inventorsSorted);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const lifetimeSum = inventors.reduce((prev, curr) => prev + (curr.passed - curr.year), 0);
console.log('4. How many years did all the inventors live?', lifetimeSum);

// 5. Sort the inventors by years lived
const inventorsSortedByLifetime = inventors.sort((inventorA, inventorB) => {
  const inventorALifetime = inventorA.passed - inventorA.year;
  const inventorBLifetime = inventorB.passed - inventorB.year;

  return inventorALifetime - inventorBLifetime;
});
console.log('5. Sort the inventors by years lived');
console.table(inventorsSortedByLifetime);

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const category = document.querySelector('.mw-category');
if (category) {
  const links = [...category.querySelectorAll('li a')];
  const de = links
    .map(link => link.textContent)
    .filter(streetName => streetName.includes('de'));
}

// 7. Sort Exercise (Sort the people alphabetically by last name)
const peopleSorted = people.sort((personA, personB) => {
  const personALastName = personA.split(', ')[0];
  const personBLastName = personB.split(', ')[0];

  return personALastName > personBLastName ? 1 : -1;
});
console.log('7. Sort Exercise (Sort the people alphabetically by last name)', peopleSorted);

// 8. Reduce Exercise (Sum up the instances of each of these)
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const transportation = data.reduce((obj, item) => {
  if (obj[item]) {
    obj[item]++;
  } else {
    obj[item] = 1;
  }
  return obj;
}, {});
console.log('8. Reduce Exercise (Sum up the instances of each of these)', transportation);
