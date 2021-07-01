// import { compose, pipe } from "lodash/fp";

const { add } = require("lodash");

// let input = "   JavaScript   ";
// let output = "<div>" + input.trim() + "</div>";

// const trim = (str) => str.trim();
// const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
// const toLowerCase = (str) => str.toLowerCase();

// const result = wrapInDiv(toLowerCase(trim(input)));
// const transform = pipe(trim, toLowerCase, wrap("span"));
// console.log(transform(input));

// const person = { name: "John" };
// const updated = { ...person, name: "Bob" };
// console.log(updated);

// const numbers = [1, 2, 3];
// console.log(numbers);

// //Adding
// const index = numbers.indexOf(2);
// const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
// console.log(added);

// //Removing
// const removed = numbers.filter((num) => num !== 2);

// //Updating
// const updated = numbers.map((num) => (num === 2 ? 20 : num));
// console.log(updated);

// import { Map } from "immutable";

// let book = Map({ title: "Harry Potter" });

// function publish(book) {
//   return book.set("isPublished", true);
// }

// book = publish(book);

// console.log(book.toJS());

import { produce } from "immer";

let book = { title: "Harry Potter" };

function publish(book) {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}

let updated = publish(book);

console.log(book);
console.log(updated);
