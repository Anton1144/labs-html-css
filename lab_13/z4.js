let a = parseFloat(prompt("Введіть довжину першої сторони:"));
let b = parseFloat(prompt("Введіть довжину другої сторони:"));
let c = parseFloat(prompt("Введіть довжину третьої сторони:"));

if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0 || (a + b <= c) || (a + c <= b) || (b + c <= a)) {
    console.log("Incorrect data");
} else {
    let p = (a + b + c) / 2; 
    let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    console.log("Площа трикутника:", area.toFixed(3));

    let isRightTriangle = (
        Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ||
        Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b, 2) ||
        Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2)
    );
    console.log("Трикутник прямокутний:", isRightTriangle);
}