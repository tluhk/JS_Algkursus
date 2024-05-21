# JavaScripti andmetüübid

## Sisukord

- [JavaScripti andmetüübid](#javascripti-andmetüübid)
  - [Sisukord](#sisukord)
  - [Sissejuhatus](#sissejuhatus)
  - [Õpiväljundid](#õpiväljundid)
  - [Andmetüübid JavaScriptis](#andmetüübid-javascriptis)
    - [Primitivsed andmetüübid](#primitivsed-andmetüübid)
    - [Andmestruktuurid](#andmestruktuurid)
  - [Primitivsete ja mitteprimitivsete andmetüüpide erinevused](#primitivsete-ja-mitteprimitivsete-andmetüüpide-erinevused)
  - [Harjutusülesanded](#harjutusülesanded)
  - [Allikad](#allikad)

## Sissejuhatus

Selles peatükis tutvustame JavaScripti andmetüüpe üldiselt. Andmetüübid on olulised, kuna need määravad, millist laadi väärtusi muutujad võivad hoida ja kuidas nendega saab töötada. JavaScriptis on mitmeid erinevaid andmetüüpe, millest mõned on primitiivsed ja mõned mitteprimitiivsed.

## Õpiväljundid

Selle õppetüki lõpuks peaksid õppijad suutma:

- loetleda JavaScripti andmetüübid;
- mõista primitiivsete ja mitteprimitiivsete andmetüüpide erinevust;
- tuvastada muutuja andmetüüpi.

## Andmetüübid JavaScriptis

Javascriptis võime andmetüüpe jagada **primitiivesteks** andmetüüpideks ja andmestruktuurideks.

### Primitivsed andmetüübid

- **Number:**. JavaScriptis kasutatakse nii täisarvude, kui ka ujukomaarvude esitamiseks andmetüüpi `Number`.

```javascript
let age = 30;
let temperature = 21.5;
```

- **Sõne (*string*):** Tekstiline andmetüüp. Stringe saab määratleda ühekordsete või kahekordsete jutumärkidega, kuid soovitatav on kasutada ühekordseid jutumärke või malliliteraali (template literal).

```javascript
let firstName = 'John'; // ühekordsed jutumärgid
let greeting = `Hello, ${firstName}!`; // malliliteraal, kus firstName on muutuja
```

- **Tõeväärtus (*boolean*):** Selle andmetüübiga muutujal saab olla kaks väärtust: `true`, ehk *tõene* või `false`, ehk *väär*.

```javascript
let isStudent = true;
let isEmployed = false;
```

- **Undefined:** Muutuja, mis on deklareeritud, kuid millele pole väärtust määratud.

```javascript
let score;
console.log(score); // undefined
```

- **Null:** Eraldi andmetüüp, millel on üksainus väärtus `null`. Seda kasutatakse eelneva väärtuse tühistamiseks või muutujale tühja väärtuse määramiseks.

```javascript
let car = null;
```

- **Symbol:** Unikaalne ja muutumatu andmetüüp, mis on sageli kasutatav objektide omaduste identifikaatorina.

```javascript
let symbol = Symbol('unique');
```

> Selle kursuse jooksul me seda andmetüüpi ei käsitle.

- **BigInt:** Suured täisarvud, mis ületavad `Number` andmetüübi suuruspiirangud.

```javascript
let bigNumber = BigInt(123456789012345678901234567890);
```

> Selle kursuse jooksul me seda andmetüüpi ei käsitle.

### Andmestruktuurid

- **Massiiv (*Array*):** Andmestruktuur, mis hoiab mitut väärtust ühes muutujas. Massiivid on järjestatud ja indekseeritud alates nullist.

```javascript
let numbers = [1, 2, 3, 4, 5];
```

- **Objekt (*Object*):** Kogumik võtme-väärtuse paaridest. Objektid võivad sisaldada mitut primitiivset väärtust ja/või muid objekte.

```javascript
let person = {
  name: 'Alice',
  age: 25,
  isStudent: true
};
```

## Primitivsete ja mitteprimitivsete andmetüüpide erinevused

- **Primitivsed andmetüübid** on väärtused, mis on muutumatud ja millel puuduvad omadused või meetodid. Iga primitiivne väärtus on erinev.

- **Andmestruktuurid** (*object*) on väärtused, mis võivad sisaldada mitut primitiivset väärtust või teisi objekte. Objektid võivad omada omadusi ja meetodeid ning nende väärtuseid saab muuta.

## Harjutusülesanded

- **Küsimused enesekontrolliks:**
  - Millised on JavaScripti primitiivsed andmetüübid?
  - Kuidas erineb `undefined` väärtus `null` väärtusest?

## Allikad

- [Data types - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [JavaScript Data Types - W3Schools](https://www.w3schools.com/js/js_datatypes.asp)
