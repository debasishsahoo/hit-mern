let circles = [10, 30, 50];
let areas = [];
let area = 0;


for (let i = 0; i < circles.length; i++) {
    area = Math.floor(Math.PI * circles[i] * circles[i]);
    areas.push(area);
}
console.log(areas);

function circleArea(radius) {
    return Math.floor(Math.PI * radius * radius);
}
areas = circles.map(circleArea);
console.log(areas);

areas = circles.map(radius => Math.floor(Math.PI * radius * radius));
console.log(areas);

let numbers = [16, 25, 36];
let results = numbers.map(Math.sqrt);