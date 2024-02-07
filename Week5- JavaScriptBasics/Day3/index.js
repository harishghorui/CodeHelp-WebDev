console.log("Chaliye Shuru Karte Hain");

/*
// Types of String: 1. Primitive 2. Object

// Primitive
let lastName = 'Ghorui';
// Object
let firstName = new String ('Harish');

// type in console: typeof lastName;
// type in console: typeof firstName;

let message = 
`Hello ${firstName},

This is my message

Thanks and Regards,
Company Prv LTD`;

console.log(message);
*/

// Arrays--->>>>>>>>>>>>>>

/*
let numbers = [1,3,5,7,9];

// console.log(numbers);
// console.log(numbers[2]);

// push-->>
numbers.push(8);
console.log(numbers);

// unshift-->>
numbers.unshift(2);
console.log(numbers);

// splice-->>
numbers.splice(2,0,'a','b','c');
console.log(numbers);
*/

// Searching in Array-->>

/*
let numbers = [1,3,6,4,5];

console.log(numbers.indexOf(3));
console.log(numbers.includes(6));
console.log(numbers.indexOf(3,2));
*/

/*
let rollNumbers = [
    {no:1, naam:'harish'},
    {no:2, naam:'love'}
]

// let khoj = rollNumbers.find(function(nums) {
//     return nums.naam === 'love';
// })

// console.log(khoj);

// Arrow method-->>
let khoj =  rollNumbers.find(nums => nums.naam === 'love');

console.log(khoj);
*/

/*
// Removing in Array-->>
let numbers = [1,2,3,8,4,9];

numbers.pop();
console.log(numbers);

numbers.shift();
console.log(numbers);

numbers.splice(2,1);
console.log(numbers);
*/

/*
// Emptying an array-->>
let nums1 = [1,2,3,4,5];
let nums2 = nums1;
console.log(nums1);
console.log(nums2);

// nums1.length = 0;
// console.log(nums1);
// console.log(nums2);

// OR

nums1.splice(0,nums1.length);
console.log(nums1);
console.log(nums2);
*/

/*
// Combining & Slicing an Array-->>>
let num1 = [1,2,3,4];
let num2 = [5,6,7,8];

// let combined = num1.concat(num2);
// console.log(combined);

// by copy(Spread Operator)
// let combined = [...num1, ...num2];
// console.log(combined);

let marks = [10,20,30,40,50,60,70,80,90];
let slice1 = marks.slice(2,5);
console.log(slice1);
*/

/*
// Iterating an Array-->>
// let arr = [1,2,3,4,5,6];

// // for-of loop
// for(let value of arr) {
//     console.log(value);
// }

// // for-each loop
// arr.forEach(function(value) {
//     console.log(value);
// });

// arr.forEach(value => console.log(value));
*/

/*
// Joining Elements in Array-->>
let numbers = [1,2,3,4,5,6];
let answer = numbers.join(',');

console.log(answer);
*/

/*
// Split an String into an Array-->>
// let message = 'This is my first message';
// let split = message.split(' ');

// console.log(split);

// let join = split.join(' ');
// console.log(join);
*/

/*
// Sorting an Array
// let numbers = [2,6,7,1,3,5];
// let sorted = numbers.sort();

// console.log(sorted);
*/

/*
// Filtering-->>
// let numbers = [1,2,-1,-3];

// // let filtered = numbers.filter(function(value) {
// //     return value >= 0;
// // })

// let filtered = numbers.filter(value => value >= 0);

// console.log(filtered);
*/

/*
// Mapping-->>
let ascii = ['a','b','c','d'];
let mapping = 97;

// let asciiTable = ascii.map(function(value) {
//     return value + '-' + mapping++;
// })

let asciiTable = ascii.map(value => value + '-' + mapping++);

console.log(asciiTable);
*/

// Mapping an Object-->>
let numbers = [1,2,-1,-3];

// let filtered = numbers.filter(value => value >= 0);
// let mapping = filtered.map(nums => {value: nums});

// Or by Chaining method-->>
let mapping = numbers
                .filter(value => value >= 0)
                .map(nums => {value:nums});

console.log(mapping);