# Lisaülesanded funktsioonide kohta

Kui õppematerjalides olevad ülesanded on lahendatud, kuid sooovid veel harjutada, siis siin on mõned lisaülesanded, mida saad proovida. Need ülesanded aitavad sul harjutada funktsioonide kasutamist erinevates stsenaariumides.

## Ülesanne 1: Ringi Pindala

**Kirjeldus:** Kirjuta funktsioon `circleArea`, mis arvutab ringi pindala raadiuse põhjal. Ringi pindala arvutamise valem on πr². Kasuta `Math.PI` väärtust π jaoks.

**Näide:**

```javascript
console.log(circleArea(5));
```

**Oodatav väljund:**

```bash
78.53981633974483
```

## Ülesanne 2: Maksimaalse Arvu Leidmine

**Kirjeldus:** Kirjuta funktsioon `findMax`, mis võtab parameetrina arvude massiivi ja tagastab nende seast suurima.

**Näide:**

```javascript
const numbers = [5, -2, 10];

console.log(findMax(numbers));
```

**Oodatav väljund:**

```bash
10
```

## Ülesanne 3: Sõnade Arvu Loendamine

**Kirjeldus:** Kirjuta funktsioon `countWords`, mis võtab parameetrina sõne ja tagastab sõnade arvu selles sõnes. Eeldame, et sõnad on eraldatud tühikutega.

**Näide:**

```javascript
console.log(countWords('Tere tulemast JavaScripti maailma'));
```

**Oodatav väljund:**

```bash
4
```

> **Vihje:** Saad kasutada [`split`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) meetodit, et sõne tükeldada massiiviks.

## Ülesanne 4: Tähestiku Sagedus Massiivis

**Kirjeldus:** Kirjuta funktsioon `countLetters`, mis loeb etteantud sõnede massiivist, kui mitu korda iga täht esineb kõikides sõnades kokku. Tagasta objekt, kus võtmed on tähed ja väärtused on vastavad esinemiskorrad.

**Näide:**

```javascript
const words = ['hello', 'world', 'javascript'];

console.log(countLetters(words));
```

**Oodatav väljund:**

```bash
{
  h: 1,
  e: 1,
  l: 3,
  o: 2,
  w: 1,
  r: 2,
  d: 1,
  j: 1,
  a: 2,
  v: 1,
  s: 1,
  c: 1,
  i: 1,
  p: 1,
  t: 1
}
```

## Ülesanne 5: Leia Kõige Pikem Sõna Stringis

**Kirjeldus:** Kirjuta kood, mis võtab sisendiks stringi ja tagastab selles stringis leiduva kõige pikema sõna. Kui on mitu sama pikkusega kõige pikemat sõna, tagasta esimene selline sõna.

**Näide:**

```javascript
const sentence = 'JavaScript on väga võimas programmeerimiskeel';

console.log(findLongestWord(sentence));
```

**Oodatav väljund:**

```bash
'programmeerimiskeel'
```
