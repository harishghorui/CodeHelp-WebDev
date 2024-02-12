console.log('chaliye shuru karte hai');

/*
// Performance-->>>
// const t1 = performance.now();
// let myDiv = document.createElement('div');

// function clickPara(event) {
//     console.log('clicked on para');
// }

// for(let i=1; i<=100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'Para' + i;
//     myDiv.appendChild(newElement);

//     newElement.addEventListener('click', clickPara);
// }
// document.body.appendChild(myDiv);

// const t2 = performance.now();
// console.log('this took ' + (t2-t1) + 'ms');

// Optimizing-->>

const t3 = performance.now();
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

const t4 = performance.now();
console.log('this took ' + (t4-t3) + 'ms');
*/

// Document Fragment--->>>
let fragment = document.createDocumentFragment();

for(let i=1; i<=100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'Para' + i;

    fragment.appendChild(newElement);
}
document.body.appendChild(fragment); // 1reflow, 1repaint

