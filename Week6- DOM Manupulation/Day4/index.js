/*
// Synchronous Example--->>>
// function sync() {
//     console.log('first');
// }
// sync();

// console.log('second');

// Asynchronous Example--->>>
setTimeout(function() {
    console.log('third');
}, 3000);

function async() {
    console.log('first');
}
sync();

console.log('second');
*/

// Promise-->>>
// let meraPromise = new Promise(function(resolve, reject) {
//     console.log('promise fulfilled');
//     // resolve(1);
//     reject('kuch toh gadbad hai daya');
// });

// Then & Catch Method (Promise)--->>>
/*
let meraPromise = new Promise(function(resolve, reject) {
    console.log('promise fulfilled');
    resolve('hogaya bhai');
    // reject(new Error('ab ky gadbad hai bhai'));
});

// meraPromise.then((value) => {console.log(value)});
// meraPromise.catch((error) => {console.log(error)});
// OR --->>>

meraPromise.then((value) => {console.log(value)}, (error) => {console.log(error)});
*/

/*
let waada1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('setTimeout1 Started');
    }, 2000);
    resolve(true);
})

let output = waada1.then(() => {
    let waada2 = new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('setTimeout2 Started');
        }, 3000);
        resolve('waada2 resolved');
    })
    return waada2;
})

output.then((value) => console.log(value));
*/

/*
// Async Await--->>>
async function weatherApp() {

    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('haye garmi');
        }, 10000);
    });
    
    let hydWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Cool-Cool');
        }, 20000);
    });

    let dW = delhiWeather;
    let hW = hydWeather;

    return [dW, hW];
}
*/


// Fetch API--->>>
/* Get Call-->>>
async function utility() {
    let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let output = await content.json(); // Js-object-notation formatter
    console.log(content);
}
utility();
*/

/*
// Post call-->>>
async function helper() {
    
    let option = {
        method: 'POST',
        body: JSON.stringify({
          title: 'Harish',
          body: 'ek number',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    }

    let content = await fetch('https://jsonplaceholder.typicode.com/posts', option);
    let output = await content.json();

    return output;
}

async function utility() {
    let ans = await helper();
    console.log(ans);
}

utility();
*/

// Closure Concept--->>>
function outerFunction() {
    let outerVariable = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVariable); // innerFunction has access to outerVariable
    }

    return innerFunction; // Return the inner function
}

let closureExample = outerFunction();
closureExample(); // Outputs: "I am from the outer function"