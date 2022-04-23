// variables and date object

let date = new Date();
console.log(date);

let year = date.getFullYear();
console.log(year);


// selecting element in HTML and DOM manipulation

document.querySelector('h1').textContent = year;

document.querySelector('div').innerHTML = '<h2>Subtitle</h2>';

let newpara = document.createElement('p');
newpara.textContent = 'This is my paragraph';
document.querySelector('div').appendChild(newpara);

document.querySelector('img').setAttribute('src','images/propic2.jpg');
document.querySelector('img').setAttribute('width', '400');

document.querySelector('img').classList.add('add_border');

//function

function addayear(yr) {
    console.log(yr);
}

addayear(year);

// SELECTION

// if clause

if (year == 2022) {
    console.log('current year');
}

// REPETITION (loops)

const myarray = ['CSE121b', 'WDD230', 'CIT111'];

function makelist(item) {
    document.querySelector('div').innerHTML += '<li>' + item + '</li>'
}

myarray.forEach(makelist);


// this is all you need with JS for Week 1

// lastModified property that works with your document

let currentdate = document.lastModified;

document.querySelector('#lastdate').textContent = currentdate;

console.log(currentdate);