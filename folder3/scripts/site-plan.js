let currentdate = document.lastModified;

document.querySelector('#lastdate').textContent = currentdate;

console.log(currentdate);

let date = new Date();
let currentyear = date.getFullYear();

document.querySelector('#currentyear').textContent = currentyear;

console.log(currentyear);