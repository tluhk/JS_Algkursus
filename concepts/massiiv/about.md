# Massiivid

Massiiv on andmestruktuur, mis võimaldab salvestada ühe muutuja alla palju erinevaid väärtuseid.

Massiive kirjeldatakse üldiselt kui `loendilaadseid objekte`; need on põhimõtteliselt üksikud objektid, mis sisaldavad mitut loendisse salvestatud väärtust. Massiiviobjekte saab salvestada muutujatena ja käsitleda samamoodi nagu mis tahes muud tüüpi väärtusi, erinevus seisneb selles, et pääseme igale loendis olevale väärtusele eraldi juurde ning saame loendiga teha ülikasulikke ja tõhusaid asju, nagu näiteks tsüklit kasutades vaadata läbi kõik väärtused massivis ja teha iga väärtusega sama asja. Võib-olla on meil massiivi salvestatud hulk tooteartikleid ja nende hindu ning me tahame need kõik läbi vaadata ja arvele välja printida, liites samal ajal kõik hinnad kokku ja trükkides allosas välja koguhinna.

Kui meil poleks massiive, peaksime salvestama iga üksuse eraldi muutujasse, seejärel kutsuma välja koodi, mis prindib ja lisab, iga üksuse jaoks eraldi. Selle väljakirjutamine oleks palju pikem, vähem tõhus ja veaohtlikum. Kui meil oleks arvele lisada 10 artiklit, oleks see juba tüütu, aga kuidas oleks 100 või 1000 kaubaga?

## Massiivide loomine.

Massiive luuakse JavaScriptis samamoodi nagu teisi muutujaid, vahe on selles, et massiivile saab lisada väärtuseid mitu, eraldades need omavahel komaga ja pannes kõik väärtused korraga kandiliste sulgude sisse. Näiteks loome päevade massiivi, kuhu sisse salvestame kõik nädalapäevad:

```javascript
const days = ['Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev', 'Pühapäev'];
```

## Kuidas massiivist väärtuseid kätte saab?

Massiiv on indekseeritud kollektsioon, mis tähendab, et igal elemendil massiivis on oma indeks, ehk `järjekorranumber`.
Massiivis olevaid elemente saab kätte nende järjekorranumbri (`index`) järgi, seejuures peab arvestama, et järjekorranumbrid algavad `0`-ga. Järjekorranumbrit, ehk indeksit saab kasutada kujul: `massiiviNimi[index]`;

```javascript
const days = ['Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev', 'Pühapäev'];
console.log(days[0]); // Väljastatakse massiivi esimene element, ehk 'Esmaspäev'
console.log(days[3]); // Väljastatakse massiivi neljas element, ehk 'Neljapäev'
console.log(days[6]); // Väljastatakse massiivi seitsmes element, ehk 'Pühapäev'
```

## Massiivide meetodid

Massiividel on 'kaasas' hulk funktsioone, mille abil saab massividesse näiteks elemente juurde lisada, elemente eemaldada, elemente otsida jne.

Järgnevalt lühike nimekiri enamkasutatavatest massiividega seotud funktsioonidest:

```javascript
const days = ['Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev', 'Pühapäev'];

console.log(days.length); // (Ei ole küll tegelikult funktsioon vaid omadus) Massiivis olevate elementide arv - kuvatakse 7
console.log(days.push('Puhkepäev')); // Lisab elemendi massiivi lõppu - funktsioon tagastab uue massiivi elementide arvu - 8
console.log(days.pop()); // Eemaldab massiivi lõpust elemendi - tagastatakse eemaldatud elemendi väärtus - 'Puhkepäev,
console.log(days.shift()); // Eemaldab esimese elemendi massiivist - tagastatakse eemaldatud elemendi väärtus - 'Esmaspäev'
console.log(days.indexOf('Kolmapäev')); // Tagastab otsitava väärtuse indeksi - 1 (sest Esmaspäeva ei ole enam massiivis)
```

Mõni funktsioon, mis on seotud stringide ja massiividega:

```javascript
const string = 'tsikipriki';
const stringToArray = string.split(''); // Tehakse stringist massiiv
console.log(stringToArray); // Kuvatakse ['t', 's', 'i', 'k', 'i', 'p', 'r', 'i', 'k', 'i']
const arrayToString = stringToArray.join(''); // Tehakse massiivi elementidest uuesti string
console.log(arrayToString); // Kuvatakse 'tsikipriki'
```

Massividega seotud funktsioone on oluliselt rohkem, täieliku nimekirja leiab [siit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

## Massiiv ja tsükkel

Massiivis olevaid elemente saab 'läbi käia' tsüklite abil. Siin käsitleme praegu massiivide kasutamist for tsükliga. Tsüklit kasutatakse näiteks juhul, kui on vaja massiivi elementidega midagi teha, neid kontrollida mingi tingimuse suhtes või neid muuta.

For tsüklis on meil tavaliselt vaja eelnevalt teada, mitu korda tuleb tsükleid teha. Massiivide puhul võrduks tsüklite arv elemendi arvuga massiivis - näiteks, kui meil on massiiv, milles on 7 elementi, siis selleks, et kõik elemendid üle kontrollida, on mei vaja 7 tsükli iteratsiooni. Massiivis olevate elementide arvu saame teada length omaduse kaudu. Järgnevas näites on massiivis nädalapäevad, mis kuvatakse ükshaaval:

```javascript
let days = [
    'Esmaspäev',
    'Teisipäev',
    'Kolmapäev',
    'Neljapäev',
    'Reede',
    'Laupäev',
    'Pühapäev'
];

for (let i = 0; i < days.length; i ++) {
    console.log(`Indeksiga ${i} element on massiivis ${days[i]}`);
}
```

Järgmises näites on meil massiiv, kus on sees toodete hinnad ilma käibemaksuta. Tsükli abil kuvame kõik toodete hinnad nii ilma kui ka koos käibemaksuga:

Tulemuseks on:

```javascript

// Toodete hinnad ilma käibemaksuta
let prices = [10, 17, 21.5, 30, 48.25, 2];

for (let i = 0; i < prices.length; i ++) {
    // Kuvame toodete hinnad ilma käibemaksuta
    console.log(`Toote hind ilma käibemaksuta: ${prices[i]} EUR`);
    // Kuvame toodete hinnad koos käibemaksuga
    console.log(`Toote hind käibemaksuga: ${prices[i] * 1.2} EUR`);
}
```
