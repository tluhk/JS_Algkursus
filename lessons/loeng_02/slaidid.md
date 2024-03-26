---
marp: true
---

# Programmeerimise algõpetus Javascripti baasil

Martti Raavel
martti.raavel@tlu.ee

---
# Teine loeng

- Millest rääkisime eelmisel korral?
- Tsüklid ehk kordused
    - [`for` tsükkel](../../concepts/for/README.md)
    - [`while` tsükkel](../../concepts/while/README.md)
- [JavaScript eraldi failis](../../concepts/alustamine/README.md#javascript-eraldi-failis)

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
# Kodune ülesanne

- [Kodune ülesanne](./homework.md)
