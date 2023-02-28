// create object using object literals
const player = {};
player.name = 'Humaion kobir';
player.speciality = 'Batsman';
// console.log(player);
player.bat = function(){
    console.log('swing your bat');
}
console.log(player);
player.bat();


// second system the create object
const student = {
    name: 'Humaion',
    job: 'Web developer',
    hobby: function(){
        console.log('singig the song');
    },
    salary: 25000
}

// object conostructor
const person = new Object();
console.log(person);

// 3. Object create method
const item = Object.create(null);
console.log(item);

// 4. class
class Person{
    name = 'Kobir';
    address = 'dhaka';
    constructor(age){
        this.age = age;
    }
}

const person1 = new Person(56);
console.log(person1);