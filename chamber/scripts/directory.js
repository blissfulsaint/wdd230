async function getBusiness() {
    const requestURL = "../data.json";
    const response = await fetch(requestURL);
    if (response.ok) {
        const jsonObject = await response.json();
        console.log(jsonObject);
        const businesses = jsonObject['data'];
        businesses.forEach(displayBusiness);
    }
};

getBusiness(busData);

  function displayBusiness(business) {
      let card = document.createElement('section');
      let add = document.createElement('p');
      let pho = document.createElement('p');
      let web = document.createElement('p');
      let img = document.createElement('img');

      add.textContent = `${business.address}`;
      pho.textContent = `${business.phone}`;
      web.textContent = `${business.website}`;
      img.setAttribute('src', `../images/${business.imagepath}`);
      img.setAttribute('alt', `${prophet.name}`);
      card.appendChild(img);
      card.appendChild(add);
      card.appendChild(pho);
      card.appendChild(web);
      document.querySelector('.cards').appendChild(card);
  }