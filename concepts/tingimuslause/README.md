# Tingimuslause

- [Tingimuslause](#tingimuslause)
  - [Sissejuhatus](#sissejuhatus)
  - [Õpiväljundid](#õpiväljundid)
  - [Tingimuslause tüübid](#tingimuslause-tüübid)
    - [`if` lause](#if-lause)
    - [`else if` lause](#else-if-lause)
    - [`else` lause](#else-lause)
  - [Tõeväärtustabel](#tõeväärtustabel)
    - [NOT operaator](#not-operaator)
    - [AND operaator](#and-operaator)
    - [OR operaator](#or-operaator)
  - [Näited](#näited)
    - [NOT](#not)
    - [AND](#and)
    - [OR](#or)
  - [Ülesanne](#ülesanne)
  - [Allikad](#allikad)

## Sissejuhatus

Tingimuslause on programmeerimises kasutatav kontrollstruktuur, mis võimaldab koodil käituda erinevalt sõltuvalt teatud tingimuste täitmisest.

## Õpiväljundid

Selle õppetüki lõpuks peaksid õppijad suutma:

- selgitada, mis on tingimuslause;
- kasutada `if`, `else if` ja `else` tingimuslauset JavaScriptis;
- mõista tõeväärtustabelite kasutamist tingimuslausetes.

## Tingimuslause tüübid

JavaScriptis on tingimuslauseid mitut tüüpi, siinkohal käsitleme neist kolme: `if`, `else if` ja `else`.

### `if` lause

See on kõige lihtsam tingimuslause. See käivitab teatud koodibloki ainult siis, kui tingimus on tõene.

```javascript
let x = 10;
if (x > 5) {
    console.log('x on suurem kui 5');
}
```

### `else if` lause

Seda kasutatakse mitme tingimuse kontrollimiseks. Kui `if` tingimus ei ole tõene, kontrollitakse `else if` tingimust. Kui `else if` tingimus on tõene, käivitatakse selle koodiblokk.

```javascript
let x = 10;
if (x > 15) {
    console.log('x on suurem kui 15');
} else if (x > 5) {
    console.log('x on suurem kui 5');
}
```

### `else` lause

Käivitab koodibloki, kui kõik eelnevad tingimused ei ole tõesed. Seda kasutatakse sageli lõpliku "kukkumisvariandina", kui ükski muu tingimus pole tõene.

```javascript
let x = 10;
if (x > 15) {
    console.log('x on suurem kui 15');
} else if (x > 20) {
    console.log('x on suurem kui 20');
} else {
    console.log('x ei ole suurem kui 15 ega 20');
}
```

Need tingimuslaused võimaldavad koodi dünaamiliselt juhtida, tehes otsuseid vastavalt muutujate väärtustele või funktsioonide tulemustele.

## Tõeväärtustabel

Tingimuslausete moodustamisel on abiks tõeväärtustabelid.

Tõeväärtustabel on loogika ja arvutiteaduse alustala. Tõeväärtustabel on tabel, mis näitab loogilise avaldise tõeväärtusi iga võimaliku sisendkombinatsiooni korral. Tõeväärtustabelid on kasulikud loogiliste avaldiste analüüsimisel.
Programmeerimises saame kasutada tõeväärtustabeleid, et kontrollida, kas loogiline avaldis on tõene või väär. Tõeväärtustabelid on kasulikud ka loogiliste avaldiste lihtsustamisel.

Javascriptis saame kasutada kolme loogikaoperaatorit: `!` (NOT), `&&` (AND) ja `||` (OR). Tõeväärtustabelid näitavad, kuidas need operaatorid töötavad.

### NOT operaator

NOT operaator võtab ühe loogilise avaldise ja tagastab selle vastupidise väärtuse. NOT operaatorit saab kasutada ainult ühe avaldise korral.

NOT operaatori tõeväärtustabel näeb välja järgmine:
| A | !A |
|---|----|
| T | F  |
| F | T  |

### AND operaator

AND operaator võtab kaks loogilist avaldist ja tagastab `true` ainult siis, kui mõlemad avaldised on `true`. Kui üks või mõlemad avaldised on `false`, tagastab AND operaator `false`.

AND operaatori tõeväärtustabel näeb välja järgmine:
| A | B | A && B |
|---|---|--------|
| T | T | T      |
| T | F | F      |
| F | T | F      |
| F | F | F      |

### OR operaator

OR operaator võtab kaks loogilist avaldist ja tagastab `true` siis, kui vähemalt üks avaldistest on `true`. Kui mõlemad avaldised on `false`, tagastab OR operaator `false`.

OR operaatori tõeväärtustabel näeb välja järgmine:
| A | B | A \|\| B |
|---|---|----------|
| T | T | T        |
| T | F | T        |
| F | T | T        |
| F | F | F        |

## Näited

### NOT

```javascript
console.log(!true); // false
console.log(!false); // true
```

### AND

```javascript
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
```

### OR

```javascript
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
```

## Ülesanne

Kasutades tõeväärtustabeleid, kontrolli, kas järgmised avaldised on tõesed või väärad:

- `!true && !false`
- `!true || !false`
- `!(true && false)`
- `!(true || false)`
- `!false || false`

## Allikad

- [MDN Web Docs: if...else statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [MDN Web Docs: Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)