# JavaScripti andmetüübid

## Sisukord

- [JavaScripti andmetüübid](#javascripti-andmetüübid)
  - [Sisukord](#sisukord)
  - [Sissejuhatus](#sissejuhatus)
  - [Õpiväljundid](#õpiväljundid)
  - [Andmetüübid JavaScriptis](#andmetüübid-javascriptis)
    - [Primitivsed andmetüübid](#primitivsed-andmetüübid)
    - [Mitteprimitivsed andmetüübid](#mitteprimitivsed-andmetüübid)
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

JavaScriptis on seitse primitiivset andmetüüpi ja üks mitteprimitiivne andmetüüp (object).

### Primitivsed andmetüübid

- **Number:** Terve- ja komaarvud. JavaScriptis pole eraldi tüüpe täisarvude ja ujukomaarvude jaoks.

  ```javascript
  let age = 30;
  let temperature = 21.5;
  ```

- **String:** Tekstiline andmetüüp. Stringe saab määratleda ühekordsete või kahekordsete jutumärkidega, kuid soovitatav on kasutada ühekordseid jutumärke või stringi literaali (template literal).

  ```javascript
  let firstName = 'John';
  let greeting = `Hello, ${firstName}!`;
  ```

- **Boolean:** Loogilised väärtused, mis võivad olla `true` või `false`.

  ```javascript
  let isStudent = true;
  let isEmployed = false;
  ```

- **Undefined:** Muutuja, mis on deklareeritud, kuid millele pole väärtust määratud.

  ```javascript
  let score;
  console.log(score); // undefined
  ```

- **Null:** Eraldi andmetüüp, millel on üksainus väärtus `null`. Seda kasutatakse väärtuse tühistamiseks või määramiseks, et väärtus puudub.

  ```javascript
  let car = null;
  ```

- **Symbol:** Unikaalne ja muutumatu andmetüüp, mis on sageli kasutatav objektide omaduste identifikaatorina.

  ```javascript
  let symbol = Symbol('unique');
  ```

- **BigInt:** Suured täisarvud, mis ületavad `Number` andmetüübi suuruspiirangud.

  ```javascript
  let bigNumber = BigInt(123456789012345678901234567890);
  ```

### Mitteprimitivsed andmetüübid

- **Object:** Kogumik võtme-väärtuse paaridest. Objektid võivad sisaldada mitut primitiivset väärtust ja/või muid objekte.

  ```javascript
  let person = {
    name: 'Alice',
    age: 25,
    isStudent: true
  };
  ```

## Primitivsete ja mitteprimitivsete andmetüüpide erinevused

- **Primitivsed andmetüübid** on väärtused, mis on muutumatud ja millel puuduvad omadused või meetodid. Iga primitiivne väärtus on erinev.

- **Mitteprimitivsed andmetüübid** (object) on väärtused, mis võivad sisaldada mitut primitiivset väärtust või teisi objekte. Objektid võivad omada omadusi ja meetodeid ning nende väärtuseid saab muuta.

## Harjutusülesanded

- **Praktiline ülesanne:**
  - Deklareeri muutujad, mis esindavad kõiki primitiivseid andmetüüpe. Määra neile sobivad väärtused ja kuva need `console.log` abil.

- **Küsimused enesekontrolliks:**
  - Millised on JavaScripti primitiivsed andmetüübid?
  - Kuidas erineb `undefined` väärtus `null` väärtusest?
  - Mis on objekti andmetüüp ja kuidas seda kasutatakse?

## Allikad

- [Data types - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [JavaScript Data Types - W3Schools](https://www.w3schools.com/js/js_datatypes.asp)
