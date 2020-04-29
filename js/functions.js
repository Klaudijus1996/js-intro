"use stritct";

function tusciaFunkcija () {
    return false;
}

console.log(tusciaFunkcija());

console.log('----------------------');


function daugyba(pirmas, antras){
    // validuojame ieinancius duomenis
    if(typeof(pirmas)==='number') {
        return 'error: pirma reiksme turi buti skaicius'
    }
    return pirmas * antras;
}

console.log(daugyba());
console.log(daugyba(2, 2));
console.log(daugyba(3, 5));
console.log(daugyba(-3, 5));

console.log('--------------------');
console.log('SKAITMENU KIEKIS SKAICIUJE');



