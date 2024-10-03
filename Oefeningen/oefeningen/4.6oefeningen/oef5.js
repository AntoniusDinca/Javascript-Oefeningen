const prompt = require("prompt-sync")();

let zin = prompt("Geef een scheldwoord. ");
if(zin.includes("bobr kurwa") == true){
    console.log("Dit is niet gepast.");
}else{
    console.log("Dit is gepast");
}
