# confirm();

JavaScripti `confirm()` funktsioon kuvab kasutajale dialoogiboksi, mis sisaldab sõnumit ning kahte nuppu: `OK` ja `Tühista`. Seda funktsiooni kasutatakse tavaliselt kasutajalt nõusoleku küsimiseks enne teatud toimingu sooritamist.

Siin on näide `confirm()` funktsiooni kasutamisest:

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
    // confirm funktsiooni näide
    const userResponse = confirm("Kas soovid jätkata?");
  </script>
</body>
</html>
```

See koodijupp kuvab dialoogiboksi, millel on sõnum `Kas soovid jätkata?` koos `OK` ja `Tühista` nuppudega. Kui kasutaja klõpsab OK, tagastab `confirm()` funktsioon `true` ja see väärtus omistatakse muutujale `userResponse`. Kui kasutaja klõpsab Tühista, tagastab `confirm()` funktsioon `false`.

Nagu `alert()` ja `prompt()` funktsioonid, nii ka `confirm()` funktsioon peatab skripti käivitamise, kuni kasutaja on dialoogiboksi sulgenud.

> Samuti pidage meeles, et kuigi `confirm()` on lihtne viis kasutajalt nõusoleku saamiseks, ei pruugi see olla alati parim valik, eriti kui soovite pakkuda kasutajale paremat kasutuskogemust. Näiteks mobiilseadmetes võivad need dialoogiboksid olla ebamugavad või isegi ei tööta nii nagu oodatud. Seetõttu võib mõnikord olla parem kasutada muid meetodeid nõusoleku kogumiseks, näiteks kohandatud hüpikaknaid või nõusoleku kastikesi otse veebilehel.

[Allikas](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)