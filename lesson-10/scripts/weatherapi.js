const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4710178&units=metric&appid=9ecca27314f6c1827acb8b46eea5ba39";

const getWeather = async () => {
    const response = await fetch(apiURL);
    jsObject = await response.json();
    console.log(jsObject);
    let fixedTemp = jsObject.main.temp.toFixed(1);
    document.querySelector('#current-temp').textContent = fixedTemp;

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;

    let windSpeed = jsObject.main.wind.speed;
    console.log(windSpeed);
    document.querySelector('#speed').textContent = windSpeed;
    let windChill = jsObject.main.feels_like.toFixed(1);
    document.querySelector('#chill').textContent = windChill;
};

getWeather();

// function windchill(){

//     let t = (document.querySelector("#current-temp").textContent)*1
//     let s = (document.querySelector("#speed").textContent)*1
//     let c = t;
//     if (t <= 50 && s >= 3){
//         c = Math.round((35.74 + (0.6215 * t))-(35.75 * Math.pow(s,0.16)) + (0.4275*t*Math.pow(s,0.16)));
//     }
//     document.querySelector("#chill").textContent = c
// }

// windchill();