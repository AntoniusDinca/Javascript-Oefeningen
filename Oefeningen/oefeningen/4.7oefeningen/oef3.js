let getal = "";

for(i = 1; i <= 100; i++){
    if((i % 3 == 0) && (i % 5 != 0)){
        getal = getal.replace(getal, "Fizz");
    }
    else if((i % 5 == 0) && (i % 3 != 0)){
        getal = getal.replace(getal, "Buzz");
    }
    else if((i % 3 == 0) && (i % 5 == 0)){
        getal = getal.replace(getal, "FizzBuzz");
    }
    else{
        getal = "" + i;
    }
    console.log(getal);
}
