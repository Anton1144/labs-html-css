let num = prompt("Введіть число:");
num = Number(num);

let isEvenPositive = (num > 0 && num % 2 === 0);
console.log("Число парне додатне:", isEvenPositive);

let isMultipleOfSeven = (num % 7 === 0);
console.log("Число кратне 7:", isMultipleOfSeven);