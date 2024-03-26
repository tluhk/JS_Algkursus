# Sisendi kontrollimine

Väga sageli on meil vaja kontrollida kasutaja poolt sisestatud väärtuse vastavust mingitele tingimustele. Igasuguste kasutaja poolt antud sisendite puhul kipume sageli eeldama, et kasutaja sisestab õige väärtuse, kuid tegelikult ei pruugi see nii olla. Näiteks kui kasutaja peab sisestama oma vanuse, siis võib ta sisestada selleks ka teksti või negatiivse arvu. Selleks, et selliseid vigu vältida, peame me kontrollima kasutaja sisendit.

Sisendi kontrollimiseks on mitmeid võimalusi, näiteks:
- kas üldse sisestati midagi?
- kas sisestatud väärtus on õige tüübiga?
- kas sisestatud väärtus on õiges vahemikus?
- kas sisestatud väärtus vastab mõnele muule tingimusele?

Sisendi kontrollimist saab lihtsustada, kui arvestada, kuidas JavaScript teisendab erinevat tüüpi ja erineva sisuga väärtuseid tõeväärtuse väärtusteks. Seda nimetatakse tõeväärtuseks teisendamiseks (truthy/falsy). Tõeväärtuseks teisendamise reeglid on järgmised:

| Väärtus | Tõeväärtus |
| --- | --- |
| `undefined` | `false` |
| `null` | `false` |
| `0` (arv null) | `false` |
| `NaN` | `false` |
| `''` (tühi string) | `false` |
| `false` | `false` |

Kui kasutate neid väärtusi tõeväärtuse kontekstis (näiteks if lauses), siis need teisendatakse automaatselt false-iks. Kõik teised väärtused, sealhulgas kõik objektid (kaasa arvatud massiivid) ja "0" (null string), teisendatakse true-ks.

## Sisendi kontrollimine tühja väärtuse suhtes

Eelneva tabeli alusel on üsna lihtne kontrollida kas kasutaja sisestas midagi, mille väärtuse saab teisendada tõeseks. Selleks kasutame `if` lauset, mis kontrollib, kas sisestatud väärtus teisendub `true` väärtuseks. Kui sisestati tühi väärtus või null, siis teisendub see `false` väärtuseks.

Näiteks:

```javascript
const age = prompt('Sisesta oma vanus');
if (!age) {
    console.log('Sisestasid tühja väärtuse');
} else {
    console.log('Sisestasid väärtuse ' + age);
}
```

Kui kasutaja sisestas tühja väärtuse, siis kuvatakse konsoolis `Sisestasid tühja väärtuse`, kui sisestas mingi muu väärtuse, siis kuvatakse `Sisestasid väärtuse <sisestatud väärtus>`. Samas ei kontrollita praegu, kas sisestatud väärtus on õige tüübiga.


## Sisendi kontrollimine tüübi järgi

Kõige lihtsam viis sisendi kontrollimiseks on kontrollida sisendi tüüpi. Selleks kasutame `typeof` operaatorit, mis tagastab väärtuse tüübi. Näiteks:

```javascript
typeof 1; // 'number'
typeof '1'; // 'string'
typeof true; // 'boolean'
typeof undefined; // 'undefined'
typeof null; // 'object'
typeof []; // 'object'
typeof {}; // 'object'
```

Näiteks:

```javascript
const input = prompt('Sisesta mingi väärtus');
console.log('Sisestatud väärtuse tüüp on: ' + typeof input);
```

Selle koodi puhul küsitakse kasutaja poolt sisendit ja kuvatakse konsooli sisendi tüüp. Küll näeme selle näite puhul, et ükskõik mida me sisestame, kuvatakse tüübiks alati `string`. See tuleneb sellest, et `prompt` funktsioon tagastab alati string tüüpi väärtuse. Seega ei saa me kontrollida kasutaja sisestatud väärtuse tüüpi, kui kasutame `prompt` funktsiooni.

## Sisendi teisendamine ja kontrollimine (string numbriks)

Samas on meil võimalik näiteks proovida teisenada sisestatud väärtus arvuks ja kontrollida, kas teisendamine õnnestus. Selleks kasutame `Number()` funktsiooni, mis püüab sisendi teisendada numbriks ja kui see ei õnnestu, siis tagastatakse väärtuseks `NaN` (not a number). Kuna ´Nan` teisendub `false` väärtuseks, siis saame kontrollida, kas sisestatud väärtus on õige tüübiga.

Näiteks:

```javascript
const age = Number(prompt('Sisesta oma vanus'));
if(age) {
    console.log('Sa oled ' + age + ' aastat vana');
} else {
  console.log('Sa ei sisestanud arvu');
}
```

Siin näites proovime teisendada kasutaja poolt antud sisendi numbriks ja siis kontrollime, kas teisendatud väärtus teisendub omakorda tõeseks (`true`) või mitte.

## Sisendi kontrollimine kindlate väärtuste suhtes

Kui me näiteks eeldame, et kasutaja poolt sisestatud sõna peaks olema mingist kindlast hulgast sõnadest (näiteks `kivi`, `paber`, `käärid`), siis seda on jällegi võimalik kontrollida mitmel moel. Kui valikus olevate sõnade arv on väga väike, siis võib seda teha lihtsa `if` lausega, kus kontrollitakse, kas sisestatud väärtus on üks valikus olevatest väärtustest.

Näiteks:

```javascript
const choice = prompt('Sisesta oma valik (kivi, paber, käärid)');
if (choice === 'kivi' || choice === 'paber' || choice === 'käärid') {
    console.log('Sisestasid valiku ' + choice);
} else {
    console.log('Sisestasid vale valiku');
}
```

Kui aga võimalike valikute arv on suurem, siis on mõistlikum lisada valikuvõimalused massiivi ja kontrollida, kas massiiv sisaldab sisestatud väärtust. Selleks kasutame `includes` funktsiooni, mis kontrollib, kas massiiv sisaldab antud väärtust.

Näiteks:

```javascript
const choices = ['kivi', 'paber', 'käärid'];
const choice = prompt('Sisesta oma valik (kivi, paber, käärid)');
if (choices.includes(choice)) {
    console.log('Sisestasid valiku ' + choice);
} else {
    console.log('Sisestasid vale valiku');
}
```

## Tühikute eemaldamine sisendist

Mis saab aga siis, kui kasutaja sisestab küll õige sisendi, kuid kogemata lisab ette või järele mõne tühiku? Siis saame enne kontrollimist eemaldada tühikud sisendi algusest ja lõpust, kasutades `trim` funktsiooni (kui tühikuid ei ole, siis tagastatakse lihtsalt sama string).

Näiteks:

```javascript
const choices = ['kivi', 'paber', 'käärid'];
const choice = prompt('Sisesta oma valik (kivi, paber, käärid)');
if (choices.includes(choice.trim())) {
    console.log('Sisestasid valiku ' + choice);
} else {
    console.log('Sisestasid vale valiku');
}
```

Siinkohal tuleb tähelepanu pöörata sellele, et `choice` väärtust ei kasutata mitte `trim()` funktsiooni sisendina, vaid stringi 'küljes' kasutades `.`-i, kuna `trim` funktsioon on stringi funktsioon (funktsioon, mis on automaatselt kaasas iga stringiga JavaScriptis), mitte üldine funktsioon.
