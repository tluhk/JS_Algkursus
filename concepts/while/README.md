# `while` tsükkel

`while` tsükkel on JavaScriptis veel üks tsüklitüüp, mille eesmärk on korrata kindlat koodiblokki niikaua, kuni mingi tingimus on tõene. 

`while` tsükkel koosneb kahest osast:

1. **Tingimus (condition)**: See on boolean avaldis, mida kontrollitakse enne iga tsükli iteratsiooni. Kui tingimus on tõene, käivitatakse tsükli keha. Kui tingimus on väär, lõpetatakse tsükkel.

2. **Tsükli keha (body)**: See on koodiblokk, mida korratakse iga tsükli iteratsiooni ajal.

Siin on `while` tsükli näide:

```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

Selles näites:

- `let i = 0` - loome muutuja `i` ja määrame sellele algväärtuseks 0. See toimub enne tsüklit.

- Tingimus: `i < 5` - enne iga iteratsiooni kontrollime, kas `i` on väiksem kui 5. Kui see on tõene, käivitatakse tsükli keha. Kui see on väär (st `i` on võrdne või suurem kui 5), lõpetatakse tsükkel.

- Tsükli keha: `{ console.log(i); i++; }` - see käivitatakse iga iteratsiooni ajal. Selles näites väljastab see konsooli `i` praeguse väärtuse ja suurendab seejärel `i` väärtust 1 võrra. See on lühendatud viis kirjutada `i = i + 1`.

See tsükkel väljastab konsooli numbrid 0 kuni 4 - see on viis iteratsiooni. Kui `i` saab väärtuseks 5, on tingimus `i < 5` väär ja tsükkel lõpetatakse.

Tuleb olla ettevaatlik, et tsükli tingimus muutuks lõpuks vääraks, muidu võib tsükkel jätkuda lõpmatuseni, mis võib põhjustada programmi kinnijäämise. See on tuntud kui lõputu tsükkel. Näites kindlustab `i++` avaldis, et `i` väärtus suureneb iga iteratsiooni jooksul ja lõpuks muutub tingimus vääraks.

## Ülesanne 1

Kirjuta JavaScripti kood, mis kasutab while tsüklit, et väljastada kõikide arvude ruudud vahemikus 1 kuni 10.

Tulemuse näide:

```bash
1
4
9
16
25
36
49
64
81
100
```


## Ülesanne 2

Kirjuta JavaScripti kood, mis küsib kasutajalt numbreid ja väljastab sisestatud numbrite summa. Kui kasutaja sisestab 0, lõpeta küsimine ja väljasta numbrite summa ja numbrite keskmine. Kasuta selleks `while` tsüklit.
