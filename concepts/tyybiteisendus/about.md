# Tüübiteisendus / type casting

**Tüübiteisendus** on protsess, mille käigus muudetakse andme tüüpi ühest tüübist teise. JavaScriptis on kaks tüüpi tüübiteisendust: 

1. **Implicit (ehk vaikimisi) tüübiteisendus:** See toimub automaatselt, kui operaatorid proovivad teisendada operandide tüüpe. Näiteks, kui kasutate võrdlusoperaatorit `==` numbri ja stringi vahel, teeb JavaScript automaatse tüübiteisenduse võrreldavateks tüüpideks.

    ```javascript
    console.log(123 == "123"); // true, sest JavaScript teisendab stringi numbriks
    ```

2. **Explicit (ehk otsene) tüübiteisendus:** See toimub siis, kui programmeerija teeb teisenduse otse, kasutades teisendusfunktsioone, nagu `Number()`, `String()` või `Boolean()`.

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