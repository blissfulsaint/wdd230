// select the elements to manipulate (output to)
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();

const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
// long, medium, short options ... try them
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

let hambutton = document.querySelector('.ham');

let mainnav = document.querySelector('nav');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')})

let currentdate = document.lastModified;

document.querySelector('#lastdate').textContent = currentdate;

console.log(currentdate);

let date = new Date();
let currentyear = date.getFullYear();

document.querySelector('#currentyear').textContent = currentyear;

console.log(currentyear);