"use stritct";

// MATEMATINES OPERACIJOS
const sk1 = 27;
const sk2 = 3;

const suma = sk1+sk2;
console.log(suma);

const skirtumas = sk1 - sk2;
console.log(skirtumas);

const sandauga = sk1 * sk2;
console.log(sandauga);

const dalmuo = sk1 / sk2;
console.log(dalmuo);

console.log(suma - skirtumas * sandauga + sk2);

console.log('---------------------------');


// TEKSTINES OPERACIJOS
const vardas = 'Vardenis';
const pavarde = 'Pavardenis';
const pilnasVardas = vardas + ' ' + pavarde;

console.log(vardas);
console.log(pavarde);
console.log(pilnasVardas);

// Mano megstama spalva yra "juoda".
const spalva = 'raudona';
// const spalvosSakinys = 'Mano megstama spalva yra "juoda".';
const spalvosSakinys = 'Mano megstama spalva yra "'  + spalva + '".';
console.log(spalvosSakinys);


// Skaicius '20' yra lyginis.

const skaicius = 20;
// const skaiciausSakinys = "Skaicius '20' yra lyginis.";
const skaiciausSakinys = "Skaicius '" + skaicius + " ' yra lyginis.";
console.log(skaiciausSakinys);


// Skaicius '2' ir skaicius "trys " yra geri skaiciai.
const du = 2;
const trys = 'trys'
const sakinys = `Skaicius '${du}' ir skaicius "trys " yra geri skaiciai.`;
console.log(sakinys);

// Skaicius '2' ir skaicius "trys " yra geri skaiciai.
const vienas = 2;
const keturi = 'keturi'
const vkSakinys = 'Skaicius \''+vienas+'\' ir skaicius "'+keturi+'" yra geri skaiciai.';
console.log(vkSakinys);



// SARASU OPERACIJOS (array)

const pazymiai = [10, 8, 7, 6, 4, 8];
const abcc = ['a', 'b', 'c', 'd', 'f'];
console.log(pazymiai);
console.log(abcc);

console.log('Pirmas pazymys:', pazymiai[0]);
console.log('Pirmas pazymys:', pazymiai[1]);
console.log('Pirmas pazymys:', pazymiai[2]);
console.log('Pirmas pazymys:', pazymiai[3]);
console.log('Pirmas pazymys:', pazymiai[4]);
console.log('Pirmas pazymys:', pazymiai[5]);
console.log('Pirmas pazymys:', pazymiai[6]);

const pazymiuSuma = pazymiai[0] + pazymiai[1] + pazymiai[2];

console.log('Pazymiu suma:', pazymiuSuma);

let abcSakinys = '';
abcSakinys = abcSakinys + abc[0];
abcSakinys = abcSakinys + abc[1];
abcSakinys = abcSakinys + abc[2];
abcSakinys = abcSakinys + abc[3];
abcSakinys = abcSakinys + abc[4];
console.log('Visa ABC:', abcSakinys);

console.log(pazymiai[3]);
