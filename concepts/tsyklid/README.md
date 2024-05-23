# Tsüklid

Selles teemas õpime tsüklite ja iteratsioonide kohta.

- [Tsüklid](#tsüklid)
  - [Õpiväljundid](#õpiväljundid)
  - [Mis on Tsükkel?](#mis-on-tsükkel)
  - [`for` Tsükkel](#for-tsükkel)
  - [`while` Tsükkel](#while-tsükkel)
  - [`do...while` Tsükkel](#dowhile-tsükkel)
  - [`for...in` Tsükkel](#forin-tsükkel)
  - [`for...of` Tsükkel](#forof-tsükkel)
  - [Tsükli Kontrolllausendid](#tsükli-kontrolllausendid)
    - [`continue`](#continue)
    - [`break`](#break)
  - [Harjutused](#harjutused)
    - [Harjutus 1](#harjutus-1)
    - [Harjutus 2](#harjutus-2)
    - [Harjutus 3](#harjutus-3)

## Õpiväljundid

Pärast selle teema läbimist oskad:

- Määratleda, mis on tsükkel
- Selgitada erinevust eri tüüpi tsüklite vahel
- Selgitada, mis on tsükli kontrolllausendid
- Selgitada, mis on `continue` lausend
- Selgitada, mis on `break` lausend
- Kasutada erinevaid tsükleid ja tsükli kontrolllausendeid

## Mis on Tsükkel?

Kui me räägime tsüklist, siis mõtleme mingi tegevuse kordamisele teatud arv kordi või kuni teatud tingimus on täidetud. Igapäeva elus võiks olla üks näide tsüklist kõndimine, kus me kordame samu samme kuni jõuame oma sihtkohta, seejuures vastavalt vajadusele muudame suunda või kiirust. Programmeerimises on tsüklid sarnased, kus me kordame koodiplokki teatud arv kordi või kuni teatud tingimus on täidetud. Tsükleid kasutatakse andmekogumite iteratsiooniks või koodiploki teatud arv kordi kordamiseks. Javascriptis on erinevaid tüüpi tsükleid:

- `for`
- `while`
- `do...while`
- `for...in`
- `for...of`.

## `for` Tsükkel

`for` tsüklit kasutatakse koodiploki teatud arv kordi kordamiseks. `for` tsükkel koosneb kolmest osast: **algväärtustamine**, **tingimus** ja **suurendamine/vähendamine**. Algväärtustamise osa kasutatakse tsükli loenduri algväärtustamiseks, tingimuse osa kasutatakse kontrollimaks, kas tsükli loendur on väiksem/suurem või võrdne teatud väärtusega, ja suurendamise/vähendamise osa kasutatakse tsükli loenduri suurendamiseks või vähendamiseks. Oluline on mõista, et loendur on muutuja, mille väärtust kasutatakse tsükli kontrollimiseks.

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

Väljund:

```plaintext
0
1
2
3
4
5
6
7
8
9
```

Selles näites lõime `for` tsükli, mis itereerib arvudest `0` kuni `9` ja väljastab need arvud konsooli. Tsükli alguses algväärtustame tsükli loenduri (`i`) väärtusega `0` (`let i = 0`). Seejärel kontrollime, kas tsükli loendur (`i`) on väiksem kui `10` (`i < 10`). Kui tsükli loendur on väiksem kui `10`, väljastame tsükli loenduri väärtuse konsooli ja suurendame tsükli loendurit (`i`) ühe võrra (`i++`). Seejärel kordame seda protsessi seni, kuni tsükli loendur on kümnest väiksem.

## `while` Tsükkel

`while` tsüklit kasutatakse koodiploki kordamiseks seni, kuni teatud tingimus on tõene. `while` tsükkel koosneb **tingimusest** ja **koodiplokist**. Tingimust kasutatakse tsükli loenduri kontrollimiseks ja koodiplokki kasutatakse tsükli sees oleva koodi täitmiseks. `while` tsüklit kasutatakse andmekogumite iteratsiooniks või koodiploki teatud arv kordi kordamiseks.

> Märkus: `while` tsükkel on sarnane `for` tsüklile, kuid `while` tsüklil ei ole sisseehitatud **algväärtustamise** osa, ega loenduri **suurendamise/vähendamise** osa. Seetõttu peame `while` tsüklit kasutades olema ettevaatlikud, sest loenduri muutmata jätmine võib põhjustada lõputu tsükli.

```javascript
let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}
```

Väljund:

```plaintext
0
1
2
3
4
5
6
7
8
9
```

Nagu näha, kuigi `for` tsükkel ja `while` tsükkel on erinevalt defineeritud, teevad nad mõlemad sama asja. Nendes näidetes itereerivad nad mõlemad arvudest `0` kuni `9` ja väljastavad need konsooli.

## `do...while` Tsükkel

do...while tsükkel on teist tüüpi tsükkel, mida kasutatakse koodiploki kordamiseks seni, kuni teatud tingimus on tõene. Erinevus eelmiste tsüklitega seisneb selles, et eelmiste tsüklite puhul kontrolliti tsükli täitmise tingimust enne koodiploki täitmist, kuid `do...while` tsükli puhul kontrollitakse tingimust pärast koodiploki täitmist. See tähendab, et `do...while` tsükli puhul täidetakse koodiplokk alati vähemalt üks kord, isegi kui tingimus ei ole tõene.

```js
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 10);
```

Väljund:

```plaintext
0
1
2
3
4
5
6
7
8
9
```

## `for...in` Tsükkel

`for...in` tsükkel on eelnevatest tsüklitest veidi erinev. `for...in` tsüklit kasutatakse **objekti** omaduste iteratsiooniks. `for...in` tsükkel koosneb **muutujast** ja **objektist**. Objekt on see, mille omadusi itereeritakse ja muutujat kasutatakse omaduse nime salvestamiseks.

```js
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  isMarried: false
};

for (let key in person) {
  console.log(key + ': ' + person[key]);
}
```

Väljund:

```plaintext
firstName: John
lastName: Doe
age: 25
isMarried: false
```

Selles näites lõime objekti nimega `person` nelja omadusega: `firstName`, `lastName`, `age` ja `isMarried`. Seejärel lõime `for...in` tsükli, mis itereerib `person` objekti omaduste üle ja väljastab need konsooli.

## `for...of` Tsükkel

`for...of` tsükkel, mida kasutatakse `iterable` objekti väärtuste iteratsiooniks. `Iterable` objekt on objekt, millel on sisseehitatud iteratsioonimehhanism. Näiteks massiivid, sõned, `Map` ja `Set` on kõik `iterable` objektid. `for...of` tsükkel koosneb **muutujast** ja **iterable objektist**. **Muutujat** kasutatakse väärtuse salvestamiseks ja **iterable** objekt on see, mille väärtusi itereeritakse.

```js
const fruits = ['apple', 'banana', 'orange'];

for (let fruit of fruits) {
  console.log(fruit);
}
```

Väljund:

```plaintext
apple
banana
orange
```

Selles näites lõime massiivi nimega `fruits` (iterable objekt) kolme väärtusega: `apple`, `banana` ja `orange`. Seejärel lõime `for...of` tsükli, mis itereerib `fruits` massiivi väärtuste üle ja väljastab need konsooli.

## Tsükli Kontrolllausendid

Tsükli kontrolllausendid kasutatakse tsükli voo kontrollimiseks. On olemas kahte tüüpi tsükli kontrolllausendeid: `continue` ja `break`.

### `continue`

`continue` lausendit kasutatakse tsükli praeguse iteratsiooni vahelejätmiseks.

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
```

Väljund:
  
```plaintext
0
1
2
3
4
6
7
8
9
```

Nagu näha, jätab `continue` lausend vahele tsükli ühe korduse, kus kontrollitakse, kas tsükli loendur on võrdne `5`-ga. Kui tsükli loendur on võrdne `5`-ga, siis jäetakse see iteratsioon vahele ja jätkatakse järgmise iteratsiooniga.

### `break`

`break` lausendit kasutatakse tsükli täitmise lõpetamiseks.

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
```

Väljund:

```plaintext
0
1
2
3
4
```

Nagu näha, lõpetab `break` lausend tsükli täitmise, kui tsükli loendur on võrdne `5`-ga, kuigi tsükli tingimus eeldab, et tsüklit täidetakse kuni `9`-ni (`i < 10`).

## Harjutused

Loo fail nimega `app.js` (või teise valitud nimega) ja alusta allpool toodud harjutuste lahenduste lisamist.

Testi oma koodi erinevate väärtustega.

### Harjutus 1

Loo for tsükkel, mis itereerib arvudest `1` kuni `10` ja väljastab need konsooli.

**Oodatud väljund:**

```plaintext
1
2
3
4
5
6
7
8
9
10
```

<details>
  <summary>Lahendus</summary>

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

</details>

### Harjutus 2

Loo for tsükkel, mis itereerib arvudest `1` kuni `10` ja väljastab konsooli ainult paarisarvud.

> Vihje: Kasuta `%` operaatorit, et kontrollida, kas arv on paaris või paaritu.

**Oodatud väljund:**

```plaintext
2
4
6
8
10
```

<details>
  <summary>Lahendus</summary>

```js
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

</details>

### Harjutus 3

Loo korrutustabel kasutades tsüklit tsükli sees.

**Oodatud väljund:**

```plaintext
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
...
10 x 8 = 80
10 x 9 = 90
10 x 10 = 100
```

Kui soovid lahendada lisaülesandeid, siis leiad mõned siit: [Lisaülesanded tsüklitele](./Exercises.md)