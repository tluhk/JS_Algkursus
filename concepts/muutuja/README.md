# Muutujad JavaScriptis

## Sisukord

- [Muutujad JavaScriptis](#muutujad-javascriptis)
  - [Sisukord](#sisukord)
  - [Sissejuhatus](#sissejuhatus)
  - [Õpiväljundid](#õpiväljundid)
  - [Mis on muutuja?](#mis-on-muutuja)
  - [Muutuja deklareerimine](#muutuja-deklareerimine)
    - [const](#const)
    - [let](#let)
    - [var](#var)
  - [Muutujate nimetamise parimad praktikad](#muutujate-nimetamise-parimad-praktikad)
  - [Harjutusülesanded](#harjutusülesanded)
  - [Allikad](#allikad)

## Sissejuhatus

Selles peatükis tutvustame, mis on muutuja JavaScriptis, mida tähendab muutuja deklareerimine ja kuidas see käib. Samuti käsitleme lühidalt, millised on JavaScripti muutujate nimetamise parimad praktikad.

## Õpiväljundid

Selle õppetüki lõpuks peaksid õppijad suutma:

- defineerida, mis on muutuja;
- selgitada, mida tähendab muutuja deklareerimine;
- deklareerida ja kasutada muutujaid JavaScriptis;
- rakendada muutujate nimetamise parimaid praktikaid.

## Mis on muutuja?

Me võime mõelda muutjast kui on nimelisest konteinerist, mida kasutatakse andmete hoidmiseks. See võimaldab salvestada, muuta ja kasutada andmeid programmi käigus. Põhimõtteliselt on tegemist piirkonnaga arvuti mälus, kus hoitakse mingeid andmeid ja millele saab viidata nime abil.

## Muutuja deklareerimine

Muutuja deklareerimine tähendab muutuja loomist ja selle nime määramist. Muutuja deklareemisel saab, kuid ei pea, määrata ka muutuja väärtuse. JavaScriptis saab muutujaid deklareerida kasutades `var`, `let` ja `const` märksõnu.

### const

`const` märksõna kasutatakse muutujate deklareerimiseks, mille väärtus ei muutu pärast esmast määramist.

```javascript
const firstName = 'Mari';
console.log(`Tere, ${firstName}!`);
```

### let

`let` märksõna kasutatakse muutujate deklareerimiseks, mille väärtus võib muutuda programmi käigus.

```javascript
let age = 25;
age = 26;
console.log(`Järgmine aasta olen ${age} aastat vana.`);
```

> Pane tähele, et kui oled juba muutja deklareerinud, siis edaspidi selle väärtuse muutmisel ei pea enam `let` märksõna kasutama, vaid saad lihtsalt muutujale uue väärtuse omistada.

### var

`var` märksõna oli varem kasutusel muutujate deklareerimiseks, kuid seda ei soovitata enam kasutada, kuna see võib põhjustada ootamatuid probleeme ja käitumist JavaScripti koodis. Siin on seda mainitud ainult informatiivsel eesmärgil.

## Muutujate nimetamise parimad praktikad

Muutujate nimetamisel on oluline järgida mõningaid parimaid praktikaid, et muuta kood loetavamaks ja hooldatavamaks:

- **Selged ja kirjeldavad nimed:** Muutujate nimed peaksid peegeldama nende sisu või eesmärki.

```javascript
const userName = 'Jaan';
let userAge = 30;
```
  
- **CamelCase:** Kasuta camelCase stiili, kus esimene sõna on väikese tähega ja iga järgnev sõna algab suure tähega.

```javascript
const firstName = 'Kati';
let lastTimeOfVisit = '2024-05-17';
```
  
- **Väldi reserveeritud sõnu:** Ära kasuta JavaScripti reserveeritud sõnu muutujate nimedena. Näiteks ära kasuta `let`, `const`, `var`, `function`, `if`, `else`, jne muutujate nimedena.

- **Loetavus:** Vali nimed, mis on loetavad ja mõistetavad ka teistele arendajatele.
  
```javascript
const userEmail = 'kasutaja@example.com';
let countOfProducts = 5;
```

## Harjutusülesanded

- **Praktiline ülesanne:**
  - Deklareeri kolm muutujat `const` ja kolm `let` märksõnaga, kasutades muutujate nimetamise parimaid praktikaid. Määra neile väärtused ja kuva need `console.log` abil.

- **Küsimused enesekontrolliks:**
  - Mis on muutuja ja kuidas seda kasutatakse?
  - Milles erinevad `const` ja `let` märksõnad?
  - Nimeta kolm parimat praktikat muutujate nimetamiseks JavaScriptis.

## Allikad

- [Variables - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variables)
- [JavaScript Variable Naming Conventions - W3Schools](https://www.w3schools.com/js/js_conventions.asp)
- [let - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [const - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
