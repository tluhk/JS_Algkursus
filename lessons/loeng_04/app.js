/* const age = Number(prompt('Sisesta oma vanus; '));
console.log(age);

if (age) {
    console.log('Midagi sisestati');
} else {
    console.log('Ei sisestatud midagi');
} */

/* const something = 0;

console.log(typeof something); */

/* const choices = ['kivi', 'paber', 'käärid'];

const choice = prompt('Vali kivi - paber - käärid: ');
const sanitizedChoice = choice.toLowerCase().trim();

if (choices.includes(sanitizedChoice)) {
    console.log(choice);
    console.log('Valik on nimekirjas');
} else {
    console.log('Valik ei ole nimekirjas');
} */

/* let a = 2;
let b = a; // 2

a = a + 1; // 3

console.log(a, b);

const numbers = [1, 2, 3];
const numbers1 = numbers;

numbers.push(4);

console.log(numbers, numbers1); */

/* const input = Number(prompt('Sisesta number vahemikus 1 - 100: '));

function checkInRange(number) {
    if(!(number < 1 || number > 100)) {
        console.log('Number on vahemikus 1 - 100');
    } else {
        console.log('Number ei ole vahemikus 1 - 100');
    }
};
 
checkInRange(input); */

/* console.log(!true); */

/* const something = 'abrakadabra';

console.log(something.length);
 */

/* const firstName = prompt('Sisesta oma nimi: ');

alert(`Tere ${firstName}!`);
alert('Tere ' + firstName);
alert('Tere'.concat(' ', firstName));
 */


/* function checkIfStringIsEmail(string) {
    if (!string.includes('@')) {
        console.log('String ei sisalda @ märki');
        return false;
    }
    if (!string.includes('.')) {
        console.log('String ei sisalda punkti');
        return false;
    }
    return true;
};

const email = prompt('Sisesta oma e-maili aadress: ');

if (checkIfStringIsEmail(email)) {
    alert('Sisestasid õige aadressi.');
} else {
    alert('Sisestatud string ei vasta tingimustele');
} */

/* const person = 'John Doe';

console.log(person.slice(0, 3));
console.log(person.slice(5, 8)); */

// const person = 'John Doe';

/* const splitted = person.split(' ');

console.log(splitted);

const firstName = splitted[0]; */

/* const letters = person.split('');

console.log(letters); */

/* const person = 'Vanapaganarahapada';
let sarcasticString = '';

for (let i = 0; i < person.length; i ++) {
    if (i % 2 === 0) {
        sarcasticString = sarcasticString + person[i].toUpperCase();
    } else {
        sarcasticString += person[i].toLowerCase();
    }
}
console.log(sarcasticString); */

/* console.log(Math.PI); */

// Täring - juhuslik arv ühest kuueni
console.log(Math.ceil(Math.random() * 6));

const person = 'Vanapaganarahapada';
let sarcasticString = '';

for (let i = 0; i < person.length; i ++) {
    if (Math.random() < 0.5) {
        sarcasticString = sarcasticString + person[i].toUpperCase();
    } else {
        sarcasticString += person[i].toLowerCase();
    }
}
console.log(sarcasticString);