async function start(){
    let characters =await (await fetch("https://hp-api.onrender.com/api/characters")).json();
    let spells =await (await fetch("https://hp-api.onrender.com/api/spells")).json();
    let staff =await (await fetch("https://hp-api.onrender.com/api/characters/staff")).json();
    let students =await (await fetch("https://hp-api.onrender.com/api/characters/students")).json();
}
start();