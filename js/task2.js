"use strict";

const obj = {
  name: "Mango",
  age: 2,
  mail: "poly@mail.com",
  isOnline: true,
  score: 500
};

function countProps(obj) {
  return Object.keys(obj).length;
}

console.log(countProps({})); 

console.log(countProps({ name: "Mango", age: 2 })); 

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); 
