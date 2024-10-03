const prompt = require("prompt-sync")();

let zin = prompt("Geef een zin. ");
let laatste = zin.substring(zin.length , zin.length - 1);
if(laatste == "."){
    console.log(zin.toUpperCase());
}else{
    console.log((zin + ".").toUpperCase());
}

