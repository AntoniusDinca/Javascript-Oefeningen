const prompt = require("prompt-sync")();

let zin = prompt("Vul een zin in.");
lengte = zin.length;

if(lengte > 10){
    console.log("Dit is een lange zin");
}else{
    console.log("Dit is een korte zin. ");
}