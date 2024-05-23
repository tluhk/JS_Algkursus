---
marp: true
---

# Programmeerimise algõpetus Javascripti baasil

Martti Raavel
<martti.raavel@tlu.ee>

---

## Teine loeng

- Millest rääkisime eelmisel korral?
- [Tingimuslause](../../concepts/tingimuslause/README.md)
- [Tüübiteisendus](../../concepts/tyybiteisendus/README.md)
- [Tsüklid ehk kordused](../../concepts/tsyklid/README.md)

---

## Tingimuslause

Tingimuslause on programmeerimise kontrollstruktuur, mis võimaldab meil teha otsuseid ja käituda vastavalt sellele, kas tingimus on tõene või väär.

---

## Tingimuslause tüübid

- `if`
- `else`
- `else if`

---

## `if` tingimuslause

```javascript
let x = 10;

if (x > 5) {
    console.log('x on suurem kui 5');
}
```

---

## `else` tingimuslause

```javascript
let x = 10;

if (x > 5) {
    console.log('x on suurem kui 5');
} else {
    console.log('x on väiksem või võrdne 5-ga');
}
```

---

## `else if` tingimuslause

```javascript

let x = 10;

if (x > 5) {
    console.log('x on suurem kui 5');
} else if (x < 5) {
    console.log('x on väiksem kui 5');
} else {
    console.log('x on võrdne 5-ga');
}
```

---

## Tüübiteisendus / type casting

- Mis on tüübiteisendus?
- Implicit (ehk vaikimisi) tüübiteisendus
- Explicit (ehk otsene) tüübiteisendus

---

## Kuidas tüübiteisendusega toime tulla?

- `==` ja `!=` operaatorid
- `===` ja `!==` operaatorid
- `Number()`
- `String()`

## Tsüklid, ehk kordused

- Tsüklid on konstruktsioonid, mis võimaldavad sama koodibloki täitmist mitu korda
  - `for` tsükkel
  - `while` tsükkel

---

## `for` tsükkel

`for` tsükkel on kõige levinum tsükkel ja see koosneb kolmest osast:

- algväärtustamine
- tingimus
- suurendamine

---

## `for` tsükkel - näide

```javascript
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

---

## `while` tsükkel

`while` tsükkel on tsükkel, mis täidab koodiblokki seni, kuni tingimus on täidetud.
`while` tsükkel koosneb kahest osast:

- tingimus
- koodiblokk

> **NB!** `while` tsükkel võib olla lõputu, kui tingimus ei muutu kunagi `false`-ks.
> **NB!** `while` tsükli puhul võib juhtuda, et unustatakse tingimuse muutmine ja tsükkel ei lõppe kunagi.

---

## `while` tsükkel - näide

```javascript
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
```

---

## Kodune ülesanne

- [Kodune ülesanne](./homework.md)
