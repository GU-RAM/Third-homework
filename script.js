// --- დავალება N1 ---
const people = [
  {
    name: "Ben",
    age: 30,
    occupation: "Banker",
    salary: 3000,
    pets: [],
  },
  {
    name: "Jane",
    age: 26,
    occupation: "Teacher",
    salary: 1200,
    pets: ["dog"],
  },
  {
    name: "John",
    age: 31,
    occupation: "Developer",
    salary: 4000,
    pets: ["dog", "cat"],
  },
  {
    name: "Mike",
    age: 26,
    occupation: "Developer",
    salary: 5000,
    pets: [],
  },
  {
    name: "Tom",
    age: 34,
    occupation: "Teacher",
    salary: 3400,
    pets: ["dog", "parrot"],
  },
];

// 1.Calculate sum of all teacher salaries
let sumOfTeachersSalaries = people
  .filter((p) => p.occupation === "Teacher")
  .reduce((acc, curr) => {
    acc += curr.salary;
    return acc;
  }, 0);

// 2. Create a new array with the same people but double salaries of developers
const newArr = people.map((p) => {
  return p.occupation === "Developer"
    ? { ...p, salary: p.salary * 2 }
    : { ...p };
});

// 3. Filter people who has a dog
const peopleWhoHaveDog = people.filter((x) => x.pets.includes("dog"));

// 4. Figure out if all the people have pets or not
const ifEveryPeopleHavePets = people.every((x) => x.pets.length);

// 5. Figure out if any of the people are above age 30
const ifAnyPeopleIS30Age = people.some((x) => x.age > 30);

// --- დავალება N2 ---
// flatten arrays into a single array
function flattenArray(arr) {
  return arr.reduce((acc, curr) => acc.concat(curr), []);
}
const arrays = [["first", "second"], [1, 2, 3], [true], 1];

// console.log(flatten(arrays)); // ['first', 'second', 1, 2, 3, true],

// --- დავალება3 ---
// implement polyfill functions for map, filter, every, reduce
// map
let arr = [1, 2, 3, 4];
const fnMap = (x) => x + 2;

function myMap(arr1, fn) {
  let mapArr = [];

  arr1.forEach((el) => {
    mapArr.push(fn(el));
  });

  return mapArr;
}
myMap(arr, fnMap);

// filter
let arr10 = [1, 2, 4, 6];
let fn1 = (x) => x % 2 === 0;

function myFilter(arr, fn) {
  let filtered = [];
  arr.forEach((i) => {
    if (fn(i)) {
      filtered.push(i);
    }
  });
  return filtered;
}
let arr11 = myFilter(arr10, fn1);

// every
let arr2 = [2, 4, 6, 8];
let fn = (x) => x % 2 === 0;

function myEvery(arr3, fn1) {
  for (let i = 0; i < arr3.length; i++) {
    if (!fn1(arr3[i])) {
      return false;
    }
  }

  return true;
}
myEvery(arr2, fn);

// reduce
let arr4 = [1, 2, 3, 4, 5];
const fnReduce = (acc, curr) => (acc += curr);

function myReducer(arr5, fn, accumulator) {
  let i = accumulator === undefined ? 1 : 0;
  accumulator = accumulator === undefined ? arr[0] : accumulator;

  while (i < arr5.length) {
    accumulator = fn(accumulator, arr5[i]);
    i++;
  }
  return accumulator;
}

console.log(myReducer(arr4, fnReduce, 0));

// --- დავალება4 ---
// There’s a ladder object that allows to go up and down:
let ladder = {
  step: 0,

  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    // shows the current step
    alert(this.step);
    return this;
  },
};
// Now, if we need to make several calls in sequence, can do it like this:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
// Modify the code of up, down and showStep to make the calls chainable, like this:
// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

// --- დავალება 5 ---
// you have an array of people
const people1 = [
  {
    name: "George",
    age: 25,
  },
  {
    name: "Michael",
    age: 26,
  },
  {
    name: "Anna",
    age: 25,
  },
  {
    name: "Kate",
    age: 27,
  },
  {
    name: "James",
    age: 27,
  },
  {
    name: "Peter",
    age: 32,
  },
  {
    name: "Jacob",
    age: 27,
  },
];

// write function groupBy(array, key), which will group people by the given key
function groupBy(array, key) {
  // your code goes here...
  return array.reduce((acc, curr) => {
    if (`${curr[key]}` in acc) {
      acc[curr[key]].push(curr);
    } else {
      acc[curr[key]] = [curr];
    }
    return acc;
  }, {});
}

// for 'people' array, if I group by 'age', this function must
// return the following object
const grouped = groupBy(people1, "age");

//  =>
// {
//   '25': [ { name: 'George', age: 25 }, { name: 'Anna', age: 25 } ],
//   '26': [ { name: 'Michael', age: 26 } ],
//   '27': [
//   { name: 'Kate', age: 27 },
//   { name: 'James', age: 27 },
//   { name: 'Jacob', age: 27 }
//   ],
//   '32': [ { name: 'Peter', age: 32 } ]
//   }
