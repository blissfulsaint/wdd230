const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4710178&units=imperial&appid=9ecca27314f6c1827acb8b46eea5ba39";

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
};

getWeather();