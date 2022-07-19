const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4348599&units=imperial&appid=9ecca27314f6c1827acb8b46eea5ba39";

const getWeather = async () => {
    const response = await fetch(apiURL);
    jsObject = await response.json();
    console.log(jsObject);
    let fixedTemp = jsObject.main.temp.toFixed(1);
    document.querySelector('#current-temp').textContent = fixedTemp;

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    const descC = desc.charAt(0).toUpperCase() + desc.slice(1);
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', descC);
    document.querySelector('figcaption').textContent = descC;

    let windspeed = jsObject.wind.speed;
    let humidity = jsObject.main.humidity;

    document.querySelector('#speed').textContent = windspeed;
    document.querySelector('#humid').textContent = humidity;

    // if (fixedTemp <= 50 && windspeed >= 3){
    //     let chill = Math.round((35.74 + (0.6215 * fixedTemp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*fixedTemp*Math.pow(windspeed,0.16)));

    //     let feels = document.createElement('p');
    //     let chillP = document.createElement('p');
    //     let chillS = document.createElement('span');

    //     feels.textContent = "Feels Like:";
    //     document.querySelector('#wind').appendChild(feels);

    //     chillS.textContent = chill +' °F';
    //     chillP.appendChild(chillS);
    //     document.querySelector('#wind').appendChild(chillP);
    // }


};

getWeather();