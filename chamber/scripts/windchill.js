function windchill(){

    let t = (document.querySelector("#temp span").textContent)*1
    let s = (document.querySelector("#speed span").textContent)*1
    let c = t;
    if (t <= 50 && s >= 3){
        c = Math.round((35.74 + (0.6215 * t))-(35.75 * Math.pow(s,0.16)) + (0.4275*t*Math.pow(s,0.16)));
    }
    document.querySelector("#chill span").textContent = c
}

windchill();