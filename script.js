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
let sumOfTeachersSalaries = people.reduce((acc, curr) => {
  acc += curr.salary;
  return acc;
}, 0);

// 2. Create a new array with the same people but double salaries of developers
const newArr = people.map((x) => {
  x.salary *= 2;
  return x;
});

// 3. Filter people who has a dog
const peopleWhoHaveDog = people.filter((x) => x.pets.includes("dog"));

// 4. Figure out if all the people have pets or not
const ifEveryPeopleHavePets = people.every((x) => x.pets.length);

// 5. Figure out if any of the people are above age 30
const ifAnyPeopleIS30Age = people.some((x) => x.age > 30);

// --- დავალება N2 ---
// flatten arrays into a single array
function flatten(arr) {
  // your code here
}
const arrays = [["first", "second"], [1, 2, 3], [true]];
console.log(flatten(arrays)); // ['first', 'second', 1, 2, 3, true],
