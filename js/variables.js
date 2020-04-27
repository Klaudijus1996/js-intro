"use stritct";

/*
kintamuju tipai:
- const
- let
- var
*/

const manoVardas = 'Rimantas';                  // tekstas
const akiuSkaicius = 2;                         // skaicius
const turiGalva = true;                         // logine reiksme : true / false
const mokaSkraidyti = false;                    // logine reikse
const petriukoPazymiai = [];                    // tuscias sarasas
const marytesPazymiai = [10, 8, 2];             // sarasas su skaiciais
const abc = ['a', 'b', 'c', 'd', 'e', 'f'];     // sarasas su tekstais


console.log( manoVardas );
console.log( akiuSkaicius );
console.log ( turiGalva );
console.log ( mokaSkraidyti );
console.log (petriukoPazymiai);
console.log(marytesPazymiai);
console.log(abc);



let megstamasSkaicius = 5;
console.log( 'megstamas skaicius:', megstamasSkaicius);

megstamasSkaicius = 3;
console.log('megstamas skaicius:', megstamasSkaicius);


const belekoksSarasas = [5,'asd', true, false, ['kekw'['okey-dude']] ]
console.log(belekoksSarasas);