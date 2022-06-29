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