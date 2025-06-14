//1.Task: Array Filtering and Mapping
const people = [
    { name: "enan", age: 25, gender: "female" },
    { name: "yeasin", age: 30, gender: "male" },
    { name: "arafat", age: 22, gender: "male" },
];

const filterMalesAndMapNames = (arr) =>
    arr.filter(p => p.gender === "male").map(p => p.name);

console.log(filterMalesAndMapNames(people));


//Object manipulation
const books = [
    { title: "Book", author: "yeasin", year: 2002 },
    { title: "The Book", author: "enan", year: 2024 },
];

const getBookTitles = (arr) => arr.map(book => book.title);

console.log(getBookTitles(books)); 
