// document.addEventListener('click', function() {
//     console.log('I have clicked on the document');
// });

/*
function clickEvent() {
    console.log('I have clicked on the document');
}

document.addEventListener('click', clickEvent);

document.removeEventListener('click', clickEvent);
*/

/*
// Default Action-->>>
let links = document.querySelectorAll('a');

let thirdLink = links[2];

thirdLink.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Prevent Default Sucessfull');
})
*/

// Target Event Property-->>>
/*
let myDiv = document.createElement('div');

function clickPara(event) {
    console.log('clicked on para');
}

for(let i=1; i<=100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'Para' + i;
    myDiv.appendChild(newElement);

    newElement.addEventListener('click', clickPara);
}
document.body.appendChild(myDiv);
*/

// Optimizing-->>
/*
let myDiv = document.createElement('div');

function paraStatus(event) {
    console.log('clicked on para');
}

myDiv.addEventListener('click', paraStatus);

for(let i=1; i<=100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'Para' + i;

    myDiv.appendChild(newElement);
}
// here no individuality of para element
document.body.appendChild(myDiv);
*/

/*
// Applying Target Event Property-->>
let myDiv = document.createElement('div');

function paraStatus(event) {
    // Target Event Property
    console.log('Para' + event.target.textContent);
}

myDiv.addEventListener('click', paraStatus);

for(let i=1; i<=100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'Para' + i;

    myDiv.appendChild(newElement);
}

document.body.appendChild(myDiv);
*/

/*
let myDiv = document.createElement('div');

function paraStatus(event) {
    // Target Event Property
    console.log('Para' + event.target.textContent);
}

myDiv.addEventListener('click', paraStatus);

for(let i=1; i<=100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'Para' + i;

    myDiv.appendChild(newElement);
}

document.body.appendChild(myDiv);
*/

// Node Name Property-->>

// let element = document.querySelector('.wrapper');
// element.addEventListener('click', function(event) {
//     console.log('Clicked on Span' + event.target.textContent);
// })
// // here clicking on para also runs the span listener

let element = document.querySelector('.wrapper');
element.addEventListener('click', function(event) {
    if(event.target.nodeName === 'SPAN') {
        console.log('Clicked on Span' + event.target.textContent);
    }
})