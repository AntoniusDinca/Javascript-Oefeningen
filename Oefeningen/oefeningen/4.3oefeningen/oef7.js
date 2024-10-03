const prompt = require("prompt-sync")();

let maand = Number(prompt("Vul het getal in dat overeenkomt met de juiste maand."    ));
switch(maand){
    case 1:
    case 2:
    case 12:
        seizoen = "winter";
        break;
    case 3:
    case 4:
    case 5:
        seizoen = "Lente";
        break;
    case 6:
    case 7:
    case 8:
        seizoen = "Zomer";
        break;
    case 9: 
    case 10:
    case 11:
        seizoen = "Herfst";
}
console.log("Het is " + seizoen);