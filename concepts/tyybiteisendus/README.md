# Tüübiteisendus / type casting

- [Tüübiteisendus / type casting](#tüübiteisendus--type-casting)
  - [Sissejuhatus](#sissejuhatus)
  - [Õpiväljundid](#õpiväljundid)
  - [Mis on tüübiteisendus?](#mis-on-tüübiteisendus)
    - [Implicit (ehk vaikimisi) tüübiteisendus](#implicit-ehk-vaikimisi-tüübiteisendus)
    - [Explicit (ehk otsene) tüübiteisendus](#explicit-ehk-otsene-tüübiteisendus)

## Sissejuhatus

Javascript on dünaamiline keel, mis tähendab, et muutujate tüüp määratakse automaatselt vastavalt väärtusele, mida muutuja hoiab. Kuid mõnikord on vaja muuta muutuja tüüpi, et saaksime teha teatud arvutusi või võrdlusi. Selleks kasutatakse tüübiteisendust.

## Õpiväljundid

Selle õppetüki lõpuks peaksid õppijad suutma:

- selgitada, mis on tüübiteisendus;
- eristada implitsiitset ja eksplitsiitset tüübiteisendust;
- kasutada tüübiteisendust JavaScripti koodis.

## Mis on tüübiteisendus?

**Tüübiteisendus** on protsess, mille käigus muudetakse andme tüüpi ühest tüübist teise. JavaScriptis on kaks tüüpi tüübiteisendust:

### Implicit (ehk vaikimisi) tüübiteisendus

See toimub automaatselt, kui operaatorid proovivad teisendada operandide tüüpe. Näiteks, kui kasutate võrdlusoperaatorit `==` numbri ja stringi vahel, teeb JavaScript automaatse tüübiteisenduse võrreldavateks tüüpideks.

```javascript
console.log(123 == "123"); // true, sest JavaScript teisendab stringi numbriks
```

### Explicit (ehk otsene) tüübiteisendus

See toimub siis, kui programmeerija teeb teisenduse otse, kasutades teisendusfunktsioone, nagu `Number()`, `String()` või `Boolean()`.

```javascript
let x = "123";
let y = Number(x); // otsene tüübiteisendus
console.log(typeof y); // "number"
```

Mis puutub võrdlusesse koos või ilma tüübiteisenduseta, siis see sõltub teie vajadusest.

- Kui te soovite võrrelda ainult väärtusi ja tüüp ei ole oluline, siis võite kasutada `==` või `!=` operaatorit.

```javascript
console.log(123 == "123"); // true, tüübid ei ole olulised
```

- Kui te soovite võrrelda nii väärtusi kui ka tüüpe, siis kasutage `===` või `!==` operaatorit.

```javascript
console.log(123 === "123"); // false, sest tüübid on erinevad
```

> Üldiselt soovitatakse kasutada `===` ja `!==` operaatoreid, sest need annavad täpsemaid tulemusi ja aitavad vältida vigu, mis tulenevad ootamatust tüübiteisendusest. Aga nagu öeldud, lõplik valik sõltub teie konkreetsest vajadusest.
