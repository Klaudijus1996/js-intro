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

console.log('----------------------');


function isrinktiRaides(text,step) {
    if (typeof(text) !== 'string') {
        return console.error('ERROR: pirma reiksme turi buti teksto tipo');
    }
    // if (text.length===0) {
    if (text.length==='') {
        return console.error('ERROR: tekstas negali buti tuscias');
    }
    if (isFinite(step) == false) {
        return console.error('ERROR: antra reiksme turi buti normalus skaicius');
    }
    if (step===0) {
        return console.error('ERROR: zingsnis negali buti nulinis');
    }
    if (step>text.length) {
        return console.error('ERROR: zingsnis negali buti didesnis uz turim');  
    }
    // Logika
    let newWord = '';
    if (step>0) {
    for (let i = step-1; i < text.length; i=i+step) {
            newWord = newWord+text[i];
    }
    if (step%1!==0) {
        return console.error('ERROR');
    }
}
    return newWord;
}

console.log( isrinktiRaides( 'abcdefg', 2 ), '->', 'bdf' );
console.log( isrinktiRaides( 'abcdefghijkl', 3 ), '->', 'cfil' );
console.log( isrinktiRaides( 'abc', 0 ) );
console.log( isrinktiRaides( 'abc', 4 ), '->', 'ERROR: ketvirtos raides nerasta' );
console.log( isrinktiRaides( 1561, 2 ) );
console.log( isrinktiRaides( '', 0 ) );
console.log( isrinktiRaides( 'abcdefghijkl', 1.5 ), '->', 'xz' );
console.log( isrinktiRaides( 'abcdefghijkl', Infinity ), '->', 'kekw' );


console.log('---------------');
console.log('-----DAYLBA-------');

function dalyba(a,b) {
    if (!isFinite(a)|!isFinite(b)) {
        return console.error('ERROR: duok normalius skaicius');
    }
    if (b===0) {
        return console.error('ERROR: dalyba is nulio nepageidautina');
    }
    return a/b;
}
console.log(dalyba(Infinity,4));
console.log(dalyba(8,Infinity));
console.log(dalyba(8,4));
console.log(dalyba(0,4));
console.log(dalyba(8,0));


// isFinite(a)===false
// !isFinite(a)