/* const a = Number(prompt('Palun sisesta esimene liidetav'));
const b = Number(prompt('Palun sisesta teine liidetav'));
const sum = a + b;
// alert('Liidetavate summa on: ' + sum);

alert(`Liidetavate ${a} ja ${b} summa on: ${sum}`); */

/* String();
Number();
Boolean();
 */

/* const a = 1;
const b = Number('1');
const bAsNumber = Number(b);

console.log(bAsNumber + a); */

// Tingimuslaused

/* const light = 'red';

if (light === 'green') {
    console.log('Mine üle tee');
} else {
    console.log('Oota, kuni tuli läheb roheliseks');
} */

/* if (light === 'red') {
    console.log('Oota, kuni tuli läheb roheliseks');
} */

// Küsi kasutajalt PIN koodi ja vastavalt selle väärtusele
// kuva kasutajale teade 'Oled sisse logitud' või 'Ligipääs puudub'

/* const pin = prompt('Sisesta PIN: ');

if (pin === '1234') {
    alert('Oled sisse logitud');
} else {
    alert('Ligipääs puudub');
}
 */

/* const directionLight = 'white';

if (directionLight === 'left') {
    alert('Keerab vasakule');
} else if (directionLight === 'right') {
    alert('Keerab paremale');
} else if (directionLight === 'white') {
    alert('Hakkab tagurdama');
} else {
    alert('Sõidab otse');
}

//-----------------

if (directionLight === 'left') {
    alert('Keerab vasakule');
}
if (directionLight === 'right') {
    alert('Keerab paremale');
}
if (directionLight === 'white') {
    alert('Tagurdab');
} */

// Tsüklid

// For tsükkel

/* for (let i = 0; i < 10; i++) {
    // console.log(i + 1);
    alert(i);
} */

// Tee tsükkel, mis kuvab arvud 1-4 ja 6 -10

/* for (let i = 1; i <= 10; i++) {
    if (i !== 5) {
        console.log(i);
    }
} */

const skip = 5;

// continue ja break

/* for (let i = 1; i <= 10; i++) {
    if (i === skip) {
        continue;
    }
    console.log(i);
} */

/* for (let i = 1; i <= 10; i++) {
    if (i === skip) {
        break;
    }
    console.log(i);
}
 */

/* for (let i = 10; i >= 0; i--) {
    console.log(i);
} */

/* let i = 0;
while (i < 10) {
    console.log(i);
    i++;
} */

/* while (true) {
    const pin = prompt('Sisesta PIN: ');
    console.log(pin);
    if (pin === '1234') {
        alert('Oled sisse logitud');
        break;
    } else if (pin === null) {
        alert('Katkestasid protsessi');
        break;
    }
    alert('Vale PIN!');
} */

/* let pin;
while (pin !== '1234') {
    pin = prompt('Sisesta PIN: ');
    alert('Vale PIN!');
}

alert('Oled sisse logitud'); */

// Küsige kasutajalt pin koodi
// Kui pin on '1234' siis logitakse sisse
// Vale pin-i lubatakse sisestada kuni 3 korda

for (let i = 3; i > 0; i--) {
    const pin = prompt(`Sisesta PIN, Sul on veel ${i} katset: `);
    if (pin === '1234') {
        alert('Oled sisse logitud');
        break;
    } else {
        alert('Vale parool');
    }
    if (i === 1) {
        alert('Kaart on lukustatud');
    }
}