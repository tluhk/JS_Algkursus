// FizzBuzz

// Tsükkel 1st 100ni

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) { // Kui arv jagub 3 ja 5ga
        console.log(`${i} FizzBuzz`);
    } else if (i % 3 === 0) { // Kui arv jagub 3ga
        console.log(`${i} Fizz`);
    } else if (i % 5 === 0) { // Kui arv jagub 5ga
        console.log(`${i} Buzz`);
    } else { // Kui arv ei jagu 3 ega 5ga
        console.log(i);
    }
}