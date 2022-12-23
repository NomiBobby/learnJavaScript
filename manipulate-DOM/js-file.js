// add text-content to the DOM
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// a <p> with red text that says “Hey I’m red!”
const p = document.createElement('p');
p.classList.add('redText');
p.textContent = "Hey I'm red";
p.setAttribute('style', 'color: red');
container.appendChild(p);

// an <h3> with blue text that says “I’m a blue h3!”
const p3 = document.createElement('h3');
p3.classList.add('redText');
p3.textContent = "Hey I'm a blue h3";
p3.setAttribute('style', 'color: blue');
container.appendChild(p3);

// a <div> with a black border and pink background color with the following elements inside of it:
const bottomContainer = document.createElement('div');
bottomContainer.classList.add('bottomDiv');
bottomContainer.setAttribute('style', 'border: solid 2px black; margin: 20px');
container.appendChild(bottomContainer);

// another <h1> that says “I’m in a div”
const h1 = document.createElement('h1');
h1.classList.add('redText');
h1.textContent = "Hey I'm a div";
bottomContainer.appendChild(h1);

// a <p> that says “ME TOO!”
const p2 = document.createElement('p2');
p2.textContent = "Me too!";
bottomContainer.appendChild(p2);

// ************************ EVENTS ************************ //

// Method 1:
/* <button onclick="alert('Hello World')">Click Me</button> */

// Method 2:
const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello World");

// Method 3:
// const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//   alert("Hello World");
// });

// If used frequently, replace with Functions
function alertFunction() {
    alert("YAY! YOU DID IT!");
}

// //METHOD 1
//{/* <button onclick="alertFunction()">CLICK ME BABY</button> */}
  
// // METHOD 2
// btn.onclick = alertFunction;

// // METHOD 3
btn.addEventListener('click', alertFunction);

// Access the event object --------------------------


// btn.addEventListener('click', function (e) {
//     console.log(e);
// });

// btn.addEventListener('click', function (e) {
//     console.log(e.target);
// });

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});