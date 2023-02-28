const numbers = [12, 45, 87, 64, 58];
// for(const number of numbers){
//     console.log(number);
// }

// for of can not use with objects
const bottle = { color: 'Yellow', price: 500, isCleanced: true, capacity: 1};
// first option to loop through an objects
const keys = Object.keys(bottle);
for (const key of keys) {
    // console.log(key, bottle[key]);
}

// for in loop
for(const key in bottle){
    const value = bottle[key];
    console.log(value);
}