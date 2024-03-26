# Programmeerimise algõpetus Javascripti baasil

Martti Raavel
martti.raavel@tlu.ee

---
# Kolmas loeng

- Millest rääkisime eelmisel korral?
- Tsüklid ehk kordused
    - [`for` tsükkel](../../concepts/for/README.md)
    - [`while` tsükkel](../../concepts/while/README.md)
    - [JavaScript eraldi failis](../../concepts/alustamine/README.md#javascript-eraldi-failis)
- [Funktsioonid](../../concepts/funktsioon/README.md)
- [Massiiv](../../concepts/massiiv/README.md)
- Tegevused massiividega

---

# Funktsioonid

Üldiselt võib öelda, et funktsioon on "alamprogramm", mida saab välja kutsuda funktsiooni välise (rekursiooni korral sisemise) koodiga. Nagu programm ise, koosneb funktsioon lausete jadast, mida nimetatakse funktsiooni kehaks. Funktsioonile saab anda väärtuseid ja funktsioon tagastab alati mingi väärtuse.

---
# Funktsioonid

Milliseid funktsioone oleme juba kasutanud?
- `console.log()`
- `alert()`
- `prompt()`
- `confirm()`
- `Number()`

---
# Funktsiooni defineerimine

Funktsiooni definitsioon (nimetatakse ka funktsiooni deklaratsiooniks või funktsioonilauseks) koosneb funktsiooni märksõnast, millele järgneb:

- Funktsiooni nimi.
- Funktsiooni parameetrite loend, mis on sulgudes ja eraldatud komadega.
- Funktsiooni määratlevad JavaScripti laused, mis on suletud sulgudes {...}.

---
# Funktsiooni defineerimine

```javascript
function funktsiooniNimi(parameeter1, parameeter2, ...) {
    // Funktsiooni keha
}
```
---

# Funktsiooni defineerimine

> **NB!**
- Funktsiooni nimi peab olema unikaalne. Kui funktsioonil on sama nimi, mis mõnel teisel funktsioonil, siis see funktsioon kirjutatakse üle
- Funktsioon tagastab alati mingi väärtuse. Kui funktsioonil ei ole `return` lauset, siis tagastab funktsioon `undefined` väärtuse
- Funktsiooni poolt tagastatava väärtuse saame salvestada muutujasse


# Funktsiooni defineerimine ja kasutamine

```javascript
function greet(name) {
  return `Tere, ${name}!`;
}

const greeting = greet('Toomas');
console.log(greeting); // Tere, Toomas!
```
---
# Massiivid

Massiiv on andmestruktuur, mis võimaldab salvestada ühe muutuja alla palju erinevaid väärtuseid.

---
# Massiivi loomine

```javascript
const days = ['Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev', 'Pühapäev'];
```

---
# Kuidas massiivist väärtuseid kätte saab?

Massiiv on indekseeritud kollektsioon, mis tähendab, et igal elemendil massiivis on oma indeks, ehk `järjekorranumber`.
Massiivis olevaid elemente saab kätte nende järjekorranumbri (`index`) järgi, seejuures peab arvestama, et järjekorranumbrid algavad `0`-ga. Järjekorranumbrit, ehk indeksit saab kasutada kujul: `massiiviNimi[index]`;

---
# Kuidas massiivist väärtuseid kätte saab?

```javascript
const days = ['Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev', 'Pühapäev'];
console.log(days[0]); // Väljastatakse massiivi esimene element, ehk 'Esmaspäev'
console.log(days[3]); // Väljastatakse massiivi neljas element, ehk 'Neljapäev'
console.log(days[6]); // Väljastatakse massiivi seitsmes element, ehk 'Pühapäev'
```

---
# Massiivide meetodid

Massiividel on 'kaasas' hulk funktsioone, mille abil saab massividesse näiteks elemente juurde lisada, elemente eemaldada, elemente otsida jne.

---
```javascript
const days = ['Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev', 'Pühapäev'];

console.log(days.length); // (Ei ole küll tegelikult funktsioon vaid omadus) Massiivis olevate elementide arv - kuvatakse 7
console.log(days.push('Puhkepäev')); // Lisab elemendi massiivi lõppu - funktsioon tagastab uue massiivi elementide arvu - 8
console.log(days.pop()); // Eemaldab massiivi lõpust elemendi - tagastatakse eemaldatud elemendi väärtus - 'Puhkepäev,
console.log(days.shift()); // Eemaldab esimese elemendi massiivist - tagastatakse eemaldatud elemendi väärtus - 'Esmaspäev'
console.log(days.indexOf('Kolmapäev')); // Tagastab otsitava väärtuse indeksi - 1 (sest Esmaspäeva ei ole enam massiivis)
```

---
# Massiiv ja tsükkel

```javascript
let days = [
    'Esmaspäev',
    'Teisipäev',
    'Kolmapäev',
    'Neljapäev',
    'Reede',
    'Laupäev',
    'Pühapäev'
];

for (let i = 0; i < days.length; i ++) {
    console.log(`Indeksiga ${i} element on massiivis ${days[i]}`);
}
```
---
# Ülesanne 1

 Kirjuta JavaScripti kood, mis loob massiivi, mis sisaldab arvud 1 kuni 10. Seejärel väljasta konsooli massiivi iga element, üksteise järel.

---
# Ülesanne 2

Kirjuta JavaScripti kood, mis küsib kasutajalt 10 arvu. Iga arvu sisestamise järel lisa arv massiivi. Kui kasutaja on kõik arvud sisestanud, siis kuva konsoolis kõik arvud sisestamise järjekorras. Arvuta ka arvude summa ja aritmeetiline keskmine ning kuva need kasutajale.

---
# Kodune ülesanne

- [Kodune ülesanne](./homework.md)
