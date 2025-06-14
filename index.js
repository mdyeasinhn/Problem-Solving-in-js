// 1. Array Filtering and Mapping
const people = [
    { name: "enan", age: 25, gender: "female" },
    { name: "yeasin", age: 30, gender: "male" },
    { name: "arafat", age: 22, gender: "male" },
];

const filterMalesAndMapNames = (arr) =>
    arr.filter(p => p.gender === "male").map(p => p.name);

//onsole.log(filterMalesAndMapNames(people));


// 2.Object manipulation
const books = [
    { title: "Book", author: "yeasin", year: 2002 },
    { title: "The Book", author: "enan", year: 2024 },
];

const getBookTitles = (arr) => arr.map(book => book.title);

//console.log(getBookTitles(books)); 


// 3-->Function Composition

const square = n => n * n;
const double = n => n * 2;
const addFive = n => n + 5;

const composedFunction = n => addFive(double(square(n)));

//console.log(composedFunction(3)); 

// 4.Sorting Objects
const cars = [
  { make: "Toyota", model: "Camry", year: 2018 },
  { make: "Honda", model: "Civic", year: 2015 },
  { make: "Ford", model: "Focus", year: 2020 },
];

const sortByYear = (arr) => arr.sort((a, b) => a.year - b.year);

//console.log(sortByYear(cars));
