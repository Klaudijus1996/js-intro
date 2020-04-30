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

console.log('--------------------------');

function didziausiasSkaiciusSarase(list) {
    if (Array.isArray(list) === false ) {
        return console.error('ERROR: turi buti array tipo');
        
    }
    if (list.length === 0) {
        return console.error('ERROR: array negali buti tuscias');

    }
    let biggest =  -Infinity;
    // einame per skaiciu sarasa
    for (let i = 0; i < list.length; i++) {
        const einamasisSkaicius = list[i];
        // tikriname ar einamasis skaicius didesnis uz "biggest"
        // tikriname ar einamasis skaicius yra tikras skaicius
        if (isFinite(einamasisSkaicius) === false) {
            // jei taip : tesiam
            // jei ne : einam prie sekancio saraso nario
            continue;
        }

        if (einamasisSkaicius > biggest) {
            //jei taip : 
            //  "biggest" = einamasis skaicius
            biggest = einamasisSkaicius;
        }
    }
    if (biggest === -Infinity) {
        return console.error('ERROR:sarase turi buti bent vienas normalus skaicius');
    }

    return biggest;
}

console.log( didziausiasSkaiciusSarase( [ 1 ] ), '->', 1 );
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ), '->', 3 );
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ), '->', 78 );
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ), '->', 69 );
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
console.log( didziausiasSkaiciusSarase( 'pomidoras' ) );
console.log( didziausiasSkaiciusSarase( [] ) );
console.log( didziausiasSkaiciusSarase( [1,Infinity,3] ), '->', 3 );
console.log( didziausiasSkaiciusSarase( [Infinity, 1, 3] ), '->', 3 );
console.log( didziausiasSkaiciusSarase( [1,Infinity,Infinity] ), '->', 1 );
console.log( didziausiasSkaiciusSarase( [Infinity,1,Infinity] ), '->', 1 );
console.log( didziausiasSkaiciusSarase( [Infinity,Infinity,1] ), '->', 1 );
console.log( didziausiasSkaiciusSarase( [Infinity,Infinity,Infinity] ), '->', 'ERROR' );