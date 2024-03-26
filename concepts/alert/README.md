# alert();

JavaScripti `alert()` funktsioon on brauseri sisemine funktsioon, mida kasutatakse kasutajale dialoogiboksi kuvamiseks, mis sisaldab teatud sõnumit. See on kasulik viis teabe edastamiseks kasutajale või veateate kuvamiseks.

Funktsioon `alert()` peatab skripti käivitamise seni, kuni kasutaja on dialoogiboksi sulgenud. See tähendab, et kui kasutaja ei sulge dialoogiboksi, ei saa skript jätkata.

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
    // alert funktsiooni näide
    alert('Hello World!');
  </script>
</body>
</html>
```

Kui eelnev koodijupp käivitatakse, kuvatakse brauseris dialoogiboks, mis sisaldab sõnumit `Hello World!` ja OK-nupp, mida kasutaja saab klõpsata, et dialoogiboks sulgeda.

> Pidage meeles, et kuigi `alert()` on lihtne viis kasutajale teabe edastamiseks, ei pruugi see olla alati parim valik, eriti kui soovite pakkuda kasutajale paremat kasutuskogemust. Mõned kasutajad võivad leida, et `alert()` dialoogiboksid on häirivad või tüütud, ja mobiilseadmetes võivad need dialoogiboksid olla ebamugavad või isegi ei tööta nii nagu oodatud. Seetõttu võib mõnikord olla parem kasutada muid meetodeid teabe esitamiseks, näiteks hüpikaknad või teated otse veebilehel.

[Allikas](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)