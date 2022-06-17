const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.log(jsonObject);  // temporary checking for valid response and data parsing
//   });





  async function getProphets(requestURL) {
      const response = await fetch(requestURL);
      if (response.ok) {
          const jsonObject = await response.json();
          console.log(jsonObject);
          const prophets = jsonObject['prophets'];
          prophets.forEach(displayProphets);
      }
  };

  getProphets(requestURL);

  function displayProphets(prophet) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let dob = document.createElement('p');
      let pob = document.createElement('p');
      let img = document.createElement('img');

      h2.textContent = prophet.name + ' ' + prophet.lastname;
      dob.textContent = `${prophet.birthdate}`;
      pob.textContent = `${prophet.birthplace}`;
      img.setAttribute('src', prophet.imageurl);
      img.setAttribute('alt', `${prophet.name} ${prophet.lastname} ${prophet.order}`);
      card.appendChild(h2);
      card.appendChild(dob);
      card.appendChild(pob);
      card.appendChild(img);
      document.querySelector('.cards').appendChild(card);
  }

  function displayTable(prophet) {
      let list_row = document.createElement('tr');
      let td_name = document.createElement('td');
      td_name.textContent = prophet.name + ' ' + prophet.lastname;

      let td_birthdate = document.createElement('td');
      td_birthdate.textContent = prophet.birthdate;

      list_row.appendChild(td_name);
      list_row.appendChild(td_birthdate);
      document.querySelector('table').appendChild(list_row);

  }