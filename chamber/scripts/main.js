// select the elements to manipulate (output to)
const datefieldUK = document.querySelector("#date"); // for european/family history format with day first.

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

let banner = document.querySelector('#meet');

const currentDay = date.getDay();

if (currentDay == 1 || currentDay == 2) {
    banner.style.display = 'block';
}


// ------ Last Visited ------ //

let visit_heading = document.querySelector('.visited');

let now_date = new Date();

let stored_date = localStorage.getItem('last_visited');
let last_date = new Date(stored_date);

if (!stored_date) {
    visit_heading.textContent = 'Welcome to the Discover Page!';
}
else {
    let diff_time = now_date.getTime() - last_date.getTime();

    let diff_days = Math.round(diff_time/(1000 * 60 * 60 * 24));

    visit_heading.textContent = diff_days + ' days since your last visit';
}

localStorage.setItem('last_visited', now_date);


// ------ Lazy Loading ------ //

const images = document.querySelectorAll('[data-src]');
const options = {threshold: .5, rootMargin: "0px 0px 100px 0px"};

function preloadImage(img) {
    const source = img.getAttribute('data-src');
    if(!source) {
        return;
    }
    
    img.src = source;
}

const io = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
        })
    }, options
);

images.forEach(image => {
    io.observe(image);
});