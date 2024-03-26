# `do...while` tsükkel

`do...while` tsükkel on JavaScriptis tsükli tüüp, mis on sarnane `while` tsüklile, kuid selle eripära on, et see käivitab koodiblokki vähemalt ühe korra, sõltumata tingimusest, ja kontrollib tingimust alles pärast esimest käivitamist.

`do...while` tsükkel koosneb kahest osast:

1. **Tsükli keha (body)**: See on koodiblokk, mida korratakse iga tsükli iteratsiooni ajal. See käivitub enne tingimuse kontrollimist.

2. **Tingimus (condition)**: See on boolean avaldis, mida kontrollitakse pärast iga tsükli iteratsiooni. Kui tingimus on tõene, käivitatakse tsükli keha uuesti. Kui tingimus on väär, lõpetatakse tsükkel.

Siin on `do...while` tsükli näide:

```javascript
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
```

Selles näites:

- `let i = 0` - loome muutuja `i` ja määrame sellele algväärtuseks 0. See toimub enne tsüklit.

- Tsükli keha: `{ console.log(i); i++; }` - see käivitatakse iga iteratsiooni ajal. Selles näites väljastab see konsooli `i` praeguse väärtuse ja suurendab seejärel `i` väärtust 1 võrra. See on lühendatud viis kirjutada `i = i + 1`.

- Tingimus: `i < 5` - pärast iga iteratsiooni kontrollime, kas `i` on väiksem kui 5. Kui see on tõene, käivitatakse tsükli keha uuesti. Kui see on väär (st `i` on võrdne või suurem kui 5), lõpetatakse tsükkel.

See tsükkel väljastab konsooli numbrid 0 kuni 4 - see on viis iteratsiooni. Kui `i` saab väärtuseks 5, on tingimus `i < 5` väär ja tsükkel lõpetatakse.

`do...while` tsükli puhul tuleb olla ettevaatlik, et tingimus muutuks lõpuks vääraks, muidu võib tsükkel jätkuda lõpmatuseni, mis võib põhjustada programmi kinnijäämise. See on tuntud kui lõputu tsükkel. Näites kindlustab `i++` avaldis, et `i` väärtus suureneb iga iteratsiooni jooksul ja lõpuks muutub tingimus vääraks.