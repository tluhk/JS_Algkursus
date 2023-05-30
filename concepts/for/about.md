# `for` tsükkel

`for` tsükkel on JavaScriptis kõige tavalisem tsüklitüüp. Sellel on kolm osa:

1. **Alustamine (initialization)**: siin määratakse tsükli loendurimuutuja algväärtus. See toimub enne tsükli esimest iteratsiooni. Tavaliselt kasutatakse siin `let` märksõna uue muutuja loomiseks.

2. **Tingimus (condition)**: see on boolean avaldis, mis kontrollitakse enne iga iteratsiooni. Kui tingimus on tõene, käivitatakse tsükli keha. Kui tingimus on väär, lõpetatakse tsükkel.

3. **Iteratsioon (iteration)**: see avaldis käivitatakse pärast iga iteratsiooni. Tavaliselt suurendatakse või vähendatakse siin loendurimuutuja väärtust.

Näide `for` tsüklist:

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

Selles näites:

- Alustamine: `let i = 0` - loome muutuja `i` ja määrame sellele algväärtuseks 0.
- Tingimus: `i < 5` - enne iga iteratsiooni kontrollime, kas `i` on väiksem kui 5. Kui see on tõene, käivitatakse tsükli keha. Kui see on väär (st `i` on võrdne või suurem kui 5), lõpetatakse tsükkel.
- Iteratsioon: `i++` - pärast iga iteratsiooni suurendame `i` väärtust 1 võrra. See on lühendatud viis kirjutada `i = i + 1`.

Tsükli keha on selles koodiblokis `{ console.log(i); }`. See käivitatakse iga iteratsiooni ajal. Selles näites väljastab see konsooli `i` praeguse väärtuse.

See tsükkel väljastab konsooli numbrid 0 kuni 4 - see on viis iteratsiooni. Kui `i` saab väärtuseks 5, on tingimus `i < 5` väär ja tsükkel lõpetatakse.

## Ülesanne 1

Kirjuta JavaScripti kood, mis kasutab `for` tsüklit ja väljastab konsooli arvud 1 kuni 25.

## Ülesanne 2

Kirjuta JavaScripti kood, mis kasutab for tsüklit, et leida ja väljastada konsooli kõik paarisarvud vahemikus 1 kuni 100.

**Vastuse näide:**

```bash
2
4
6
8
10
...
```
