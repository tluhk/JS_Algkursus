/* for(let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    } 
    console.log(i);
} */

/* let j = 0;
while (j < 10) {
    console.log(j);
    j++;
} */

// console.log(Number('asasas'));

// FizzBuzz koduse ülesande lahendus
/* for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log(`${i} FizzBuzz`);
    } else if (i % 3 === 0) {
        console.log(`${i} Fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i} Buzz`);
    } else {
        console.log(i);
    }
} */

/* console.log(3 % 3); */

// -------------------------------------
// Funktsioonid

/* function add(a = 0, b = 0) {
    const sum = a + b;
    return sum;
}

const sum = add(10, 15);
console.log(sum);

console.log(add(30, 50));

console.log(add());
console.log(add(23));
console.log(add('esimene', 'teine')); */

/* function loop(start, finish) {
    for (let i = start; i <= finish; i++) {
        console.log(i);
    }
}

loop(0, 10);
console.log('-----------------');
loop(10, 20); */

/* function loop() {
    const start = Number(prompt('Sisesta algus: '));
    const finish = Number(prompt('Sisesta lõpp: '));
    for (let i = start; i <= finish; i++) {
        console.log(i);
    }
}

loop();
 */

/* function greetUser(name) {
    // return 'Hello ' + name + '! Welcome to our site!'
    return `Hello ${name}! Welcome to our site!`;
}

console.log(greetUser('Alice'));
console.log(greetUser('Bob')); */

/* function triangleArea(base, height) {
    const area = base * height / 2;
    return area;
}

console.log(triangleArea(5, 10)); */

// ----------------------------------
// Massiivid

/* const numbers = [7, 10, 4, 2];

console.log(numbers[1]); */

/* const weekDays = ['esmaspäev', 'teisipäev', 'kolmapäev', 'neljapäev', 'reede', 'laupäev', 'pühapäev'];
console.log(weekDays.length);

for (let i = 0; i < weekDays.length; i++) {
    console.log(weekDays[i]);
} */

/* const weekDays = ['esmaspäev', 'teisipäev', 'kolmapäev', 'neljapäev', 'reede', 'laupäev', 'pühapäev'];
console.log(weekDays);
const newDay = prompt('Lisa uue nädalapäeva nimetus: ');
weekDays.push(newDay);
console.log(weekDays); */

/* const guests = [];

const count = Number(prompt('Mitu külalist üritusele tuleb? '));

for(let i = 1; i <= count; i++) {
    const name = prompt(`Sisesta ${i}. nimi: `);
    guests.push(name);
}

console.log('-----Külaliste nimekiri-----'); */

/* for (let index = 0; index < guests.length; index++) {
    const element = guests[index];
    console.log(`${index + 1}. ${element}`);
} */

/* guests.forEach(function(name) {
    console.log(name);
}); */

const guests = ['Jüri', 'Mari'];

const index = guests.indexOf('Mari');
console.log(index);

/* guests[index] = 'Külli';
console.log(guests); */