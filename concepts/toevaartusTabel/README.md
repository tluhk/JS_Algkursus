# Tõeväärtustabel

Tõeväärtustabel on loogika ja arvutiteaduse alustala. Tõeväärtustabel on tabel, mis näitab loogilise avaldise tõeväärtusi iga võimaliku sisendkombinatsiooni korral. Tõeväärtustabelid on kasulikud loogiliste avaldiste analüüsimisel.
Programmeerimises saame kasutada tõeväärtustabeleid, et kontrollida, kas loogiline avaldis on tõene või väär. Tõeväärtustabelid on kasulikud ka loogiliste avaldiste lihtsustamisel.

Javascriptis saame kasutada kolme loogikaoperaatorit: `!` (NOT), `&&` (AND) ja `||` (OR). Tõeväärtustabelid näitavad, kuidas need operaatorid töötavad.

## NOT

NOT operaator võtab ühe loogilise avaldise ja tagastab selle vastupidise väärtuse. NOT operaatorit saab kasutada ainult ühe avaldise korral.

NOT operaatori tõeväärtustabel näeb välja järgmine:
| A | !A |
|---|----|
| T | F  |
| F | T  |

## AND

AND operaator võtab kaks loogilist avaldist ja tagastab `true` ainult siis, kui mõlemad avaldised on `true`. Kui üks või mõlemad avaldised on `false`, tagastab AND operaator `false`.

AND operaatori tõeväärtustabel näeb välja järgmine:
| A | B | A && B |
|---|---|--------|
| T | T | T      |
| T | F | F      |
| F | T | F      |
| F | F | F      |

## OR

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

1. `!true && !false`
2. `!true || !false`
3. `!(true && false)`
4. `!(true || false)`
5. `!false || false`


