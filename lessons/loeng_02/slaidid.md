---
marp: true
---

# Programmeerimise algõpetus Javascripti baasil

Martti Raavel
martti.raavel@tlu.ee

---
# Teine loeng

- Millest rääkisime eelmisel korral?
    - Algoritmid
    - Muutujad
    - Sisend/väljund
    - Andmetüübid
    - Operaatorid
    - Tingimuslause
    - Tõeväärtustabelid
    - Tüübiteisendus
- Tsüklid ehk kordused
    - [`for` tsükkel](../../concepts/for/about.md)
    - [`while` tsükkel](../../concepts/while/about.md)
- [JavaScript eraldi failis](../../concepts/alustamine/about.md#javascript-eraldi-failis)
- [Funktsioonid](../../concepts/funktsioon/about.md)

---
# Tsüklid, ehk kordused

- Tsüklid on konstruktsioonid, mis võimaldavad sama koodibloki täitmist mitu korda
  - `for` tsükkel
  - `while` tsükkel

---
# `for` tsükkel

`for` tsükkel on kõige levinum tsükkel ja see koosneb kolmest osast:
- algväärtustamine
- tingimus
- suurendamine

---
# `for` tsükkel

```javascript
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

---
# `while` tsükkel

`while` tsükkel on tsükkel, mis täidab koodiblokki seni, kuni tingimus on täidetud.
`while` tsükkel koosneb kahest osast:
- tingimus
- koodiblokk

> **NB!** `while` tsükkel võib olla lõputu, kui tingimus ei muutu kunagi `false`-ks.
> **NB!** `while` tsükli puhul võib juhtuda, et unustatakse tingimuse muutmine ja tsükkel ei lõppe kunagi.

___
# `while` tsükkel

```javascript
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
```

___
# JavaScript eraldi failis

- JavaScripti koodi saab kirjutada ka eraldi faili, mitte ainult `HTML`-i sees
- Miks kirjutada JavaScripti koodi eraldi faili?
    - Koodi on lihtsam lugeda
    - Koodi on lihtsam hallata
    - Koodi on lihtsam taaskasutada
    - Koodi on lihtsam testida
    - Koodi on lihtsam debugida
___
# JavaScript eraldi failis

- Saame luua uue faili, mille laiendiks on `.js`
- Faili nimi võiks olla seotud sellega, mida fail sisaldab
- Lisa faili kood, mida soovid
- Lisa `HTML` faili `<script>` element, mille atribuudiks on `src` ja väärtuseks faili nimi

```html
<script src="script.js"></script>
```

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
# Kodune ülesanne

- [Kodune ülesanne](./homework.md)
