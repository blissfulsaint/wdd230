// const url = "https://pokeapi.co/api/v2/pokemon/ditto";

// async function getPokemon(url) {
//     const response = await fetch(url);

//     if(response.ok) {

//         console.log(response);

//         const data = await response.json();

//         console.log(data.name);
//         console.log('first');
//     }
// }

// getPokemon(url);

// console.log('second');

fetch(url).then((response) => {
    if(response.ok) {
        return response.json();
    } else {
        alert('error', response);
    }
}).then((data) => {
    results = data;
    console.log('first', result);
});

console.log('second');