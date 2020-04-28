"use stritct";

// KINTAMUJU PALYGINIMAS

const a = 7;
const b = 9;

// PALYGINIMO OPERATORIAI
// Rekomenduotina >, <, <=, >=, ===, !==
// NEREKOMENDUOTINA ==, !=

// if ( salyga ) {
    // logika, kuria reikia ivykditi, jei tenkinama salyga
// }

// if (a>b) {
//    console.log('taip, a yra daugiau uz b');   
// } else {
//    console.log('ne, a yra ne daugiau uz b');
    
// }

if (a>b) {
    console.log('taip, a yra daugiau uz b');
} else if (a===b) {
    console.log('a yra lygu b');
} else {
    console.log('ne, a yra maziau uz b');
}

let diena = 1;
if (diena === 0) {
    console.log('pirmadienis');
} else
if (diena === 1) {
    console.log('antradienis');
}
 else
if (diena === 3) {
    console.log('treciadienis');
}
else
if (diena === 4) {
    console.log('ketvirtadienis');
}

const vardas = 17;

if (vardas==='17') {
    console.log('All good');
} else {
    console.log('Not fun...');
}

console.log('------------');

if (vardas==='17') {
    console.log('All good');
} else {
    console.log('Not fun...');
}

console.log('------------');


const akys = 'melyna2';
switch ( akys ) {
    case 'ruda':
        console.log('melagis');
        break;
    case 'raudona':
        console.log('vampyras');
        break;
    case 'melyna':
        console.log('mldc');
        break;
    case 'zalia':
        console.log('dar nevirti');
        break;

    default:
        console.log('ta dam');
        break;
}


if (akys ==='rudos') {
    console.log('melagis');
} else
if (akys === 'melynos') {
    console.log('matyt kitokios akys');
    
}