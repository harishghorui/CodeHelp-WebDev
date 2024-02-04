console.log("Chaliyein Shuru Karte Hain");

// const rectangle = {
//     length : 6,
//     height : 10,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };

/*
// creating object by factory function method --->>>>>>>>>>>>>
function createRectangle(a,b) {

    const rectangle = {
        length : a,
        breadth : b,

        draw() {
            console.log('drawing rectangle');
        }
    };
    return rectangle;
}

let rectangleObj1 = createRectangle(5,4);
let rectangleObj2 = createRectangle(2,6);
let rectangleObj3 = createRectangle(15,24);
*/

/*
// creating object by constructor function method --->>>>>>>>>>>>>
function CreateRectangle(a, b) {
    this.length = a,
    this.breadth = b,

    this.draw = function() {
        console.log('drawing rectangle');
    }
}

// creating obj
let rectangleObj1 = new CreateRectangle(4, 6);
let rectangleObj2 = new CreateRectangle(1, 5);
let rectangleObj3 = new CreateRectangle(14, 16);

// adding properties in object
rectangleObj1.color = 'yellow';
console.log(rectangleObj1);

// delete properties in object
delete rectangleObj1.color;
console.log(rectangleObj1);
*/

/*
// data types in JS
// 1. Primitive- copied by thier value
// 2. Reference- copied by their address/references

// 1. Primitive Data
// let a = 10;
// let b = a;
// a++;
// console.log(a);
// console.log(b);

// function increase(a) {
//     a++;
// }
// let a = 10;
// increase(a);
// console.log(a);

// 2. Reference Data
// let a = {
//     value : 10,
// }
// let b = a;
// a.value++;
// console.log(a.value);
// console.log(b.value);

// let a = {
//     value : 10
// }
// increase(a);
// function increase(a) {
//     a.value++;
// }
// console.log(a.value);
*/

/*
// Iterating through Objects: 1. for-in loop 2.for-of loop
// 1. for-in

// let rectangle = {
//     length : 2,
//     breadth : 4,
// };

// for(let key in rectangle) {
//     // keys are reflected through key variable
//     // values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }

// 2. for-of

// for(let key of Object.keys(rectangle)) {
//     console.log(key,rectangle[key]);
// }
*/

// Object cloning: 1.Iteration 2.Assign 3.Spread
let src = {
    a : 10,
    b : 20,
    c : 30
};

// 1.Iteration
// let dest = {};

// for(let key in src) {
//     dest[key] = src[key];
// }

// console.log(src);
// console.log(dest);

// 2.Assign
// let dest = Object.assign({},src);
// console.log(src);
// console.log(dest);

// 3.Spread
let dest = {...src};
console.log(src);
console.log(dest);