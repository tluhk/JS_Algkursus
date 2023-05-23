# Mis on muutuja?

Muutuja on nagu konteiner, mis sisaldab mingit väärtust, nagu tekst, arv jne.

Muutujad on nimed, mis antakse arvuti mälupiirkonnale, mida kasutatakse väärtuste salvestamiseks arvutiprogrammis.

Võime muutujat kujutleda justkui mingit pakikest kusagil laoriiulil - pakk on muutuja, paki sisu on muutuja väärtus ja paki asukoht on muutuja nimetus.

![Ladu](files/warehouse.jpg)
[Pildi allikas](https://pixabay.com/photos/warehouse-shelves-building-factory-4997427/)

Programmeerimisel saame ise muutujaid defineerida, andes neile endale arusaadava nime ja omistades neile ka mingi väärtuse (seejuures ei pea tegelikult alati kohe muutujale väärtust omistama).

## Muutujate deklareerimine

JavaScriptis deklareeritakse muutujaid kolmel viisil, kasutades märksõnu:

- var
- let
- const

**var** - kasutati kuni aastani 2015, hetkel soovitatakse mitte kasutada. Siin on ära märgitud selleks, et kui kusagil seda näete, siis teate, et tegemist on muutuja deklareerimisega.

**let** - kasutatakse sellise muutuja deklareerimiseks, mille väärtus võib muutuda. Näiteks:
```javascript
let name = "Tiina";
```
Kui hiljem on vaja selle muutuja väärtust muuta, saab seda teha: 
```javascript
name = "Toomas";
```
Pane tähele, et märksõna `let` kasutatakse ainult muutuja esmakordsel nimetamisel. Kui programmis hiljem seda muutujat kasutatakse (väärtuse lugemiseks või muutmiseks), siis enam `let`-i ei kasutata, kuna muutuja on juba olemas.

**const** - kasutatakse selliste muutujate deklareerimiseks, mille väärtus hiljem ei muutu. See tähendab, et muutujale tuleb deklareerimisel ka kohe väärtus omistada. Näiteks:
```javascript
const country = "Estonia";
```

Kui nüüd hiljem proovida seda muuta, näiteks:
```javascript
country = "Latvia";
```
siis antakse veateade: `Uncaught TypeError: Assignment to constant variable`.

Üldiselt soovitatakse muutujate deklareerimisel eelistada `const` märksõna, kui võimalik.

Nagu eelnevatest näidetest arvata võib, siis kasutatakse muutujale väärtuse omistamiseks võrdusmärki (`=`).

## Näide:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script>
    // Muutujate deklareerimine
    let item = 'muru';
    const colour = 'roheline';
    // Väljasta kiri 'muru värv on roheline'
    alert(`${item} värv on ${colour}`);
  </script>
</body>
</html>
```

## Muutujate nimetamise reeglid

Muutujaid saab nimetada üldiselt üsna nii nagu soovid, kuid siiski on mõned on piirangud. 

- Üldiselt peaks kasutama ainult ladina tähti (0-9, a-z, A-Z) ja allkriipsu. Ärge kasutage muid märke, kuna need võivad põhjustada vigu või olla rahvusvahelisele vaatajaskonnale raskesti mõistetavad.
- Ärge kasutage muutujate nimede alguses allkriipse – seda kasutatakse teatud JavaScripti konstruktsioonides konkreetsete asjade tähistamiseks, mistõttu võib see segadusse ajada.
- Ärge kasutage muutujate alguses numbreid. See pole lubatud ja põhjustab tõrke.
- Kindel konventsioon, millest kinni pidada, on nn "lower camel case", mille puhul liidate kokku mitu sõna, kasutades kogu esimese sõna jaoks väiketähti ja seejärel kirjutage järgnevad sõnad suurtähtedega. Näiteks: firstName, firstFruitFromBucket jne
- Muutke muutujate nimed intuitiivseks, et need kirjeldaksid neis sisalduvaid andmeid. Ärge kasutage ainult üksikuid tähti/numbreid või suuri pikki fraase.
- Muutujad on tõstutundlikud – seega on myage muutujast myAge erinev.
- Vältida tuleb JavaScripti reserveeritud sõnade kasutamist muutujate nimedena – selle all peame silmas sõnu, mis moodustavad JavaScripti tegeliku süntaksi! Seega ei saa muutujate nimedena kasutada sõnu nagu var, function, let ja for. Veebilehitsejad tunnevad need ära erinevate koodiüksustena ja seega kuvatakse teile vead.

[Allikas](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)

## Ülesanne

Deklareeri muutuja nimega `firstName` ja omista sellele väärtuseks oma eesnimi. Väljasta ekraanile oma eesnimi kasutades selleks deklareeritud muutujat ja `alert()` või `console.log()` funktsiooni.