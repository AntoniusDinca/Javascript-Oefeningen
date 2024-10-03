const prompt = require("prompt-sync")();

let zin = prompt("Geef een zin. ");
let was = zin.replace("is", "was");

console.log(was);