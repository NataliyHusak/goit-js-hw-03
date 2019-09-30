"use strict";

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

const calculateTotalPrice = (products, productName) => {
  // console.log(productName);
  let totlalProduct = 0;
  for (const product of products) {
    if (product.name === productName) {
      const totlal = product.price * product.quantity;
      totlalProduct += totlal;
    }
  }
  return totlalProduct;
};

console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800
