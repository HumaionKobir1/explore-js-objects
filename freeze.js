const bottle = {color: 'yellow', price: 500, isCleaned: true, capacity: 1};
const key = Object.keys(bottle);
console.log(key);

const values = Object.values(bottle);
console.log(values);

const pair = Object.entries(bottle);
console.log(pair);

// seal the object
Object.seal(bottle);

// now not remove this object property
delete bottle.isCleaned;
console.log(bottle);

// but modify value this  object property value
bottle.price = 1000;
console.log(bottle);



// freeze the object
Object.freeze(bottle);

// now not remove this object property
delete bottle.isCleaned;
console.log(bottle);

// not modify value this  object property value
bottle.price = 1000;
console.log(bottle);