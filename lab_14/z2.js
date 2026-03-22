let numbers = [2, 3, 4, 5];
let productFor = 1;
let productWhile = 1;

for (let i = 0; i < numbers.length; i++) {
    productFor *= numbers[i];
}
console.log("Добуток (for):", productFor);

let j = 0;
while (j < numbers.length) {
    productWhile *= numbers[j];
    j++;
}
console.log("Добуток (while):", productWhile);