const destinations = ['Pariis', 'London', 'Riia', 'Tallinn'];
const randomNumber = Math.floor(Math.random() * destinations.length);
console.log(destinations[randomNumber]);

// console.log(Math.floor(Math.random() * 6) + 1);

/* function checkEmail(email) {
    if(email.includes('@') && email.includes('.')) {
        return true;
    }
    return false;
}

const email = prompt('Sisesta e-mail');
if (checkEmail(email)) {
    console.log('Sisestatud e-mail on korrektne');
} else {
    console.log('Sisestatud e-mail ei ole korrektne');
} */

/* function capitalizeFirstLetter(word) {
    const capitalizedFirstLetter = word.slice(0, 1).toUpperCase();
    const smallRestOfTheLetters = word.slice(1).toLowerCase();

    const result = capitalizedFirstLetter + smallRestOfTheLetters;
    return result;
}

console.log(capitalizeFirstLetter('tsikiPriki')); */

/* const password = 'tsikipriki';

console.log(password.slice(1)); */

/* const firstName = 'Juhan';

const letter = prompt('Sisesta täht');
if (firstName.toLowerCase().includes(letter.toLowerCase())) {
    console.log('Sisaldab');
} else {
    console.log('Ei sisalda');
}
console.log(firstName);
console.log(letter); */

/* const firstName = '   Juhan';
console.log(firstName.trim().length);
console.log(firstName.length); */

/* function checkInRange(number) {
    if(number >= 1 && number <= 100) {
        return 'Number on vahemikus 1 kuni 100';
    }
    return 'Number ei ole vahemikus 1 kuni 100';
}

const number = Number(prompt('Sisesta mingi number'));
console.log(checkInRange(number)); */

/* const choices = ['kivi', 'paber', 'käärid'];
const choice = prompt('Kivi/paber/käärid');
const validatedChoice = choice.trim().toLowerCase();
if (choices.includes(validatedChoice)) {
    console.log('Teen midagi');
} else {
    console.log('Ei tee midagi');
} */

/* const firstName = prompt('Sisesta oma nimi');
console.log(firstName);
if (firstName) {
    console.log('Sisestati nimi');
} else {
    console.log('Nime ei sisestatud');
} */


/* function factorial(number) {
    if (number === 0) {
        return 1;
    }
    let sum = 1;
    for (let i = 2; i <= number; i ++) {
        sum = sum * i;
    }
    return sum;
}

const number = Number(prompt('Sisesta mingi number'));
if (isNaN(number)) {
    console.log('Tegemist ei ole numbriga');
} else {
    console.log(factorial(number));
}
 */