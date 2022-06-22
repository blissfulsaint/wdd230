async function getBusiness() {
    const requestURL = "../chamber/data.json";
    const response = await fetch(requestURL);
    if (response.ok) {
        const jsonObject = await response.json();
        console.log(jsonObject);
        const businesses = jsonObject['data'];
        build_site(businesses);
    }
};

function build_site(businesses){
    build_cards(businesses);
    build_table_rows(businesses);
    if (window.innerWidth > 900){
        document.querySelector("#directory_table").classList.add("hide");
    }
    else {
        document.querySelector("#directory_cards").classList.add("hide");
    }
}

function build_cards(businesses) {
    const cards_container = document.querySelector("#directory_cards");
    let build_card = (business) => {
        let card = document.createElement('section');
        let add = document.createElement('p');
        let pho = document.createElement('p');
        let web = document.createElement('a');
        let img = document.createElement('img');

        add.textContent = `${business.address}`;
        pho.textContent = `${business.phone}`;
        web.textContent = `${business.website}`;
        web.href = `${business.website}`;
        web.target = "_blank";
        img.setAttribute('src', `images/${business.imagepath}`);
        img.setAttribute('alt', `${business.name}`);
        card.appendChild(img);
        card.appendChild(add);
        card.appendChild(pho);
        card.appendChild(web);
        cards_container.appendChild(card);
    }
    businesses.forEach(build_card);
};

function build_table_rows(businesses) {
    const table_container = document.querySelector("#directory_table");
    let build_row = (business) => {
        let row_node = document.createElement("tr");
        let name = document.createElement("td");
        let add = document.createElement("td");
        let pho = document.createElement("td");
        let web = document.createElement("td");

        name.textContent = business.name;
        add.textContent = `${business.address}`;
        pho.textContent = `${business.phone}`;
        web.textContent = `${business.website}`;
        web.href = `${business.website}`;
        web.innerHTML = `<a href="${business.website}" target="_blank">${business.website}</a>`;

        row_node.appendChild(name);
        row_node.appendChild(add);
        row_node.appendChild(pho);
        row_node.appendChild(web);

        table_container.appendChild(row_node);
    }
    businesses.forEach(build_row);
}

function add_button_functionality() {
    let swap = () => {
        document.querySelector("#directory_cards").classList.toggle("hide");
        document.querySelector("#directory_table").classList.toggle("hide");
    }

    const show_cards = document.querySelector("#show_cards");
    const show_table = document.querySelector("#show_table");

    show_cards.addEventListener('click', () => {
        if (document.querySelector("#directory_cards").classList.contains("hide")) {
            swap();
        }
    })

    show_table.addEventListener('click', () => {
        if (document.querySelector("#directory_table").classList.contains("hide")) {
            swap();
        }
    })
}

getBusiness();
add_button_functionality();