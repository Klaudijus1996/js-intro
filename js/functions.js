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

function skaitmenuKiekisSkaiciuje(number) {
    // validavimas
    if (typeof(number) !== 'number' || isNaN(number) === true || isFinite(number) === false) {
        return console.error('ERROR: Reikalingas skaicius');
        
    }
    //logika
    let count = 0;
    const skaiciusTekstu = ''+number;
    count = skaiciusTekstu.length;
    
    // jei tekstineje skaicisu representacijoje yra kablelis, tai count--
    // pavyzdys, kaip ieskoti su ciklu (siam scenarijuje neverta naudoti)
    for (let i=0; i<skaiciusTekstu.length; i++) {
        if (skaiciusTekstu[i] === '.')
            count--;
    //         break;
    }
    // for (let i=0; i<skaiciusTekstu.length; i++) {
    //     if (skaiciusTekstu[i] === '-')
    //         count--;
    // }

    // jei neigiamas skaicius tai count --

    if (number % 1 !== 0) {
        count--;
    }




    // if (number < 0) {
    //     count--;
    // }

    // rezultato grazinimas
    return count;
}

console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( 'asd' ) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
console.log( skaitmenuKiekisSkaiciuje( Infinity ) );

console.log( skaitmenuKiekisSkaiciuje( 5 ), '->', 1);
console.log( skaitmenuKiekisSkaiciuje( 781 ), '->', 3 );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ), '->', 11 );

console.log(skaitmenuKiekisSkaiciuje(3.1415),'->',5);
console.log(skaitmenuKiekisSkaiciuje(-12345),'->',5);
console.log(skaitmenuKiekisSkaiciuje(-1.2345),'->',5);
console.log(skaitmenuKiekisSkaiciuje(10000000000000000000000),'->',5);

