async function getTemples() {
    const requestURL = "../temple/data.json";
    const response = await fetch(requestURL);
    if (response.ok) {
        const jsonObject = await response.json();
        console.log(jsonObject);
        const temples = jsonObject['data'];
        build_cards(temples);
    }
};

function build_cards(temples) {
    const cards_container = document.querySelector("#temple_cards");
    let build_card = (temple) => {
        let card = document.createElement('section');
        let name = document.createElement('p');
        let add = document.createElement('a');
        let pho = document.createElement('p');
        let serve = document.createElement('p');
        let hist = document.createElement('p');
        let closure = document.createElement('p');
        let img = document.createElement('img');
        // let heart = document.createElement('p');
        // let like = document.createElement('p');

        name.textContent = `${temple.temple}`;
        add.textContent = `${temple.address}`;
        add.href = `${temple.addresslink}`;
        add.target = "_blank";
        pho.textContent = `Phone: ${temple.phone}`;
        serve.textContent = `Services: ${temple.services}`;
        hist.textContent = `History: ${temple.history}`;
        closure.textContent = `Closures: ${temple.temple_closure}`;
        // heart.innerHTML = `&#9825;`;
        // heart.setAttribute('class','heart');
        // like.innerHTML = `&#9829;`;
        // like.setAttribute('class','heart');
        // if (!stored_like) {
        //     heart.setAttribute('class', 'show');
        //     like.setAttribute('class','hide');
        // }
        // else {
        //     heart.setAttribute('class', 'hide');
        //     like.setAttribute('class','show');
        // }
        img.setAttribute('src', `images/${temple.imagepath}`);
        img.setAttribute('alt', `${temple.name}`);
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(add);
        card.appendChild(pho);
        card.appendChild(serve);
        card.appendChild(hist);
        card.appendChild(closure);
        // card.appendChild(heart);
        // card.appendChild(like);
        cards_container.appendChild(card);
    }
    temples.forEach(build_card);
};

getTemples();

// let likeheart = document.querySelector('.heart');

// likeheart.addEventListener('click', () => {

// })