# prompt();

JavaScripti `prompt()` funktsioon kuvab kasutajale dialoogiboksi, mis palub sisendit. Dialoogiboks sisaldab tekstivälja, kuhu kasutaja saab sisestada teksti, ja kahte nuppu: OK ja Tühista.

Funktsiooni `prompt()` saab kasutada kahe argumendiga: esimene argument on sõnum, mis kuvatakse dialoogiboksis (see on tavaliselt küsimus või juhis), ja teine argument on vaikimisi tekst, mis kuvatakse tekstiväljas (see on valikuline).

Siin on näide `prompt()` funktsiooni kasutamisest:

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
    // prompt funktsiooni näide
    const name = prompt("Palun sisesta oma nimi", "Siia kirjuta nimi");
  </script>
</body>
</html>

```

See koodijupp kuvab dialoogiboksi, millel on sõnum `Palun sisesta oma nimi` ja vaikimisi tekst `Siia kirjuta nimi`. Kui kasutaja sisestab oma nime ja klõpsab OK, määratakse muutuja `name` väärtuseks kasutaja sisestatud tekst. Kui kasutaja klõpsab Tühista või jätta tekstiväli tühjaks, on `name` väärtuseks `null`.

`prompt()` funktsioon peatab skripti käivitamise, kuni kasutaja on dialoogiboksi sulgenud.

> Samuti pidage meeles, et kuigi `prompt()` on lihtne viis kasutajalt sisendi saamiseks, ei pruugi see olla alati parim valik, eriti kui soovite pakkuda kasutajale paremat kasutuskogemust. Näiteks mobiilseadmetes võivad need dialoogiboksid olla ebamugavad või isegi ei tööta nii nagu oodatud. Seetõttu võib mõnikord olla parem kasutada muid meetodeid sisendi kogumiseks, näiteks HTML-vorme.

[Allikas](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)