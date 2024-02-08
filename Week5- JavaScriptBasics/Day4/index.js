console.log('Chaliye Shuru Karte Hain');

// Functions-->>

/*
// function declaration
function run() {
    console.log('running');
}

run();

// Function Assignments: 1. Named function assignment 2. Anonymous function assignment

// 1. Named function assignment
let stand = function walk() {
    console.log('walking');
}

stand();

// 2. Anonymous function assignment
let stand2 = function() {
    console.log('walking');
}

stand2();
*/

// Dynamic language-->>
let x = 1;
x = 'a';

// function sum(a,b) {
//     console.log(a+b);
// }

// sum(1,2);
// sum(1);
// sum();
// sum(1,3,5,6);

/*
// Solving with Arguments Object
function sum(a, b) {
    let total = 0;
    for(let value of arguments) {
        total += value;
    }
    return total;
}

let total = sum(1,3,5,6,8);
console.log(total);


// Rest Operator-->>
function sum(a,b, ...args) {
    console.log(a+b);
    console.log(args);
}

sum(1,2,3,4,5,6);
*/

/*
// Default Parameter-->>
function interest(principle, roi=6, year=2) {
    return principle*roi*year / 100;
}

console.log(interest(1000,5));
*/

/*
// Getter & Setter-->>
let person = {
    fname: 'harish',
    lname: 'ghorui',

    // getter
    get puraNaam() {
        console.log(`${person.fname} ${person.lname}`);
    },

    // setter
    set puraNaam(value) {
        let parts = value.split(' ');
        this.fname = parts[0];
        this.lname = parts[1];
    } 
}

person.puraNaam = 'love babbar';
person.puraNaam;
*/

/*
// Try & Catch -->>
let person = {
    fname: 'harish',
    lname: 'ghorui',

    // getter
    get puraNaam() {
        console.log(`${person.fname} ${person.lname}`);
    },

    // setter
    set puraNaam(value) {
        if(typeof value !== String) {
            throw new Error("Not a String");
        }
        let parts = value.split(' ');
        this.fname = parts[0];
        this.lname = parts[1];
    } 
}

try{
    person.puraNaam = true;
}

catch(e) {
    alert(e);
}

console.log(person.puraNaam);
*/

// Reducing an Array-->>
let arr = [1,2,3,4];

let total = 0;

let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalSum);