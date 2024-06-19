/* const book = {
    title: 'Programmeerimise alused',
    author: 'John Doe',
    pages: 300,
    year: 2005,
    isRead: true,
};

console.log(book.title);
console.log(book.pages); */

const books = [
    {
        title: 'Programmeerimise alused',
        author: 'John Doe',
        pages: 300,
        year: 2005,
        isRead: true,
    },
    {
        title: 'Programmeerimine I',
        author: 'Jane Doe',
        pages: 450,
        year: 2010,
        isRead: false,
    },
    {
        title: 'Riistvara alused',
        author: 'Mati Maasikas',
        pages: 700,
        year: 1980,
        isRead: true,
    },
    {
        title: 'Psühholoogia edasijõudnutele',
        author: 'Kati Karu',
        pages: 2500,
        year: 1963,
        isRead: false,
    },
];

// console.log(books[0].title);

// Kuva kõikide raamatute pealkirjad
/* for (let i = 0; i < books.length; i++) {
    console.log(books[i].title);
} */

// Kuva ainult loetud raamatute pealkirjad
/* for (let i = 0; i < books.length; i++) {
    if (books[i].isRead) {
        console.log(books[i].title);
    }
} */

// Kuva raamatute keskmine lehekülgede arv
/* let totalPages = 0;
for (let i = 0; i < books.length; i++) {
    totalPages = totalPages + books[i].pages;
}

console.log(totalPages / books.length);
 */

/* const person = {
    firstName: 'Mati',
    lastName: 'Maasikas',
    age: 33,
};

console.log(person.age);
person.age = 34;
console.log(person.age);
person.children = 1;
console.log(person);
 */

// Muuda kõik raamatud loetuks
// Kuva loetud raamatute pealkirjad koos järjekorranumbriga
/* for (let i = 0; i < books.length; i++) {
    books[i].isRead = true;
    console.log(`${i + 1}. ${books[i].title}`);
    // console.log(i + 1, books[i].title);
} */

// Parooligeneraator
/* const symbols = '.,-:;!"#¤%&/(()==?+abcdefghijklmnopqrstuvwxyõäöü1234567890';

const passwordLength = Number(prompt('Sisesta soovitud parooli pikkus: '));

let password = '';

for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * symbols.length);
    let randomLetter = String(symbols[randomNumber]);
    if (Math.random() > 0.5) {
        randomLetter = randomLetter.toUpperCase();
    }
    password = password + randomLetter;
}

alert(`Genereeritud parool on: ${password}`); */

function dice() {
    return randomNumber = Math.ceil(Math.random() * 6);
}
let results = {};

for(let i = 0; i < 10000000; i++) {
    const result = dice();
    if (!results[result]) {
        results[result] = 0;
    }
    results[result] = results[result] + 1;
}
console.log(results);

/* const person = {
    firstName: 'Mati',
    lastName: 'Maasikas',
    age: 33,
};

const term = 'firstName'

console.log(person[term]); */