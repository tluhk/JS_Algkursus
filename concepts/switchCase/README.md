# Switch/case

JavaScripti `switch` lause on samuti tingimuslause (nagu `if`), mis võimaldab valida ühe paljudest koodiblokkidest, mida käivitada sõltuvalt muutuja väärtusest.

`switch` lause toimib järgmiselt:

```javascript
let fruit = 'apple';

switch (fruit) {
  case 'banana':
    console.log('I am a banana.');
    break;
  case 'apple':
    console.log('I am an apple.');
    break;
  default:
    console.log('I am not a banana or an apple.');
}
```

Selles koodis võrdleb `switch` lause `fruit` muutuja väärtust `case` lausetes olevate väärtustega. Kui `fruit` väärtus on 'banana', käivitatakse 'banana' koodiblokk; kui `fruit` väärtus on 'apple', käivitatakse 'apple' koodiblokk. Kui `fruit` väärtus ei vasta ühelegi `case` väärtusele, käivitatakse `default` koodiblokk.

Kõik `case` koodiblokid lõpevad `break` lausega, mis lõpetab `switch` lause täitmise. Kui `break` lauset ei ole, jätkatakse järgmise `case` blokiga, isegi kui tingimus ei ole tõene.

`switch` lauset kasutatakse tavaliselt siis, kui on vaja võrrelda ühte väärtust paljude teiste väärtustega, selle asemel, et kirjutada pikk kett `if` ja `else if` lauseid.