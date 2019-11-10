// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2); //output is: 100 100
age = 200;
console.log(age, age2); //output is: 200 100

let name = 'Hally';
let name2 = name;
console.log(name, name2); //output is: Hally Hally
age = "Hale";
console.log(name, name2); //output is: Hale, Hally

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
// and we want to make a copy of it.
const team = players;
console.log(players, team); //output ['Wes', 'Sarah', 'Ryan', 'Poppy'] ['Wes', 'Sarah', 'Ryan', 'Poppy']

// You might think we can just do something like this:
team[3] = 'Lux';
console.log(players) //output ['Wes', 'Sarah', 'Ryan', 'Lux']
// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!
// one way
const team2 = players.slice();
team2[3] = 'Lux';
console.log(players, team2); //output ['Wes', 'Sarah', 'Ryan', 'Poppy'] ['Wes', 'Sarah', 'Ryan', 'Lux']
// or create a new array and concat the old one in
const team3 = [].concat(players);
// or use the new ES6 Spread
const team4 = [...players];
// now when we update it, the original one isn't changed
team4[3] = 'Hello World';
console.log(team4); //output ['Wes', 'Sarah', 'Ryan', 'Hello World']

const team5 = Array.from(players);
// The same thing goes for objects, let's say we have a person object
// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};
// and think we make a copy:
const captain = person;
captain.number = 99; 
// how do we take a copy instead?
const cap2 = Object.assign({}, person, {number: 99});
// We will hopefully soon see the object ...spread
const cap3 = {...person};
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer'
  }
}

console.clear();
console.log(wes);

const dev = Object.assign({}, wes);

const dev2 = JSON.parse(JSON.stringigy(wes)); //deep cloning