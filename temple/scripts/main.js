// date stuff

let date = new Date();
let currentyear = date.getFullYear();

document.querySelector('#currentyear').textContent = currentyear;

const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(date);

let currentdate = document.lastModified;

document.querySelector('#lastdate').textContent = currentdate;



let hambutton = document.querySelector('.ham');

let mainnav = document.querySelector('nav');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')})



// days since last visit

let visit_heading = document.querySelector('.visited');

let now_date = new Date();

let stored_date = localStorage.getItem('last_visited');
let last_date = new Date(stored_date);

if(visit_heading){
    if (!stored_date) {
        visit_heading.textContent = 'Welcome!';
    }
    else {
        let diff_time = now_date.getTime() - last_date.getTime();

        let diff_days = Math.round(diff_time/(1000 * 60 * 60 * 24));

        visit_heading.textContent = 'Welcome! It has been ' + diff_days + ' days since your last visit';
    }
}
localStorage.setItem('last_visited', now_date);



let email_date = document.querySelector('#submitDate');
if(email_date){
email_date.value = date;

}