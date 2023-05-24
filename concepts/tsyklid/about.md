# Mis on tsükkel?

Tsükkel on programmeerimises kontrollstruktuur, mis võimaldab teatud koodilõiku või operatsiooni korrata mitu korda. Tsüklite peamine eesmärk on vähendada koodi dubleerimist ja teha programmi töö efektiivsemaks, kuna need võimaldavad meil kirjutada koodi, mis töötab suure hulga andmetega.

Kujutage ette olukorda, kus soovite teha midagi 100 korda. Näiteks, soovite printida numbrid 1 kuni 100. Ilma tsükliteta peaksite kirjutama 100 printimiskäsku, mis oleks aeganõudev ja ebaefektiivne. Tsükli abil saate selle ülesande lahendada vaid mõne reaga koodi, mis ütleb midagi sellist: "Alusta numbrist 1 ja printi iga number, kuni jõuad 100-ni."

```javascript
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
```

Tsüklid on eriti kasulikud töötades kogumitega, näiteks massiivide ja objektidega. Näiteks, kui teil on massiiv, mis sisaldab 1000 elementi, ja soovite teha midagi iga elemendiga (näiteks välja printida või teha sellega arvutusi), võite kasutada tsüklit selle töö tegemiseks.

Lisaks vähendavad tsüklid vigade tõenäosust. Kui peate midagi käsitsi kordama, on tõenäoline, et teete vigu. Tsüklid tagavad, et sama operatsioon viiakse läbi iga kord täpselt samamoodi. 

Kokkuvõtteks, tsüklid on programmeerimises olulised tööriistad, mis muudavad meie koodi lühemaks, loetavamaks ja efektiivsemaks.

JavaScriptis on mitmeid erinevaid tsüklilauseid, mida saab kasutada teatud koodibloki korduvaks käivitamiseks. Siin on mõned peamised tsüklid:
- [`for` tsükkel](../for/about.md)
- [`while` tsükkel](../while/about.md)
- [`do...while` tsükkel](../doWhile/about.md)
- [`for...in` tsükkel](../forIn/about.md)
- [`for...of` tsükkel](../forOf/about.md)