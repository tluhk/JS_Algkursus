# Kuidas alustada JavaScripti koodi kirjutamist?

JavaScripti koodi kirjutamine ja testimine on üsna lihtne, kuna see nõuab minimaalselt seadistust. Siin on mõned sammud, mida saab järgida, et alustada JavaScripti koodi kirjutamist.

- Tekstiredaktor: Esimene asi, mida vajate, on tekstiredaktor. Saate kasutada mis tahes tekstiredaktorit, mida soovite. Mõned populaarsed valikud on *Visual Studio Code*, *Atom*, *Sublime Text* jms.

- Veebilehitseja: Kuna JavaScripti koodi käivitatakse veebilehitsejas, siis on vaja veebilehitsejat, milles saab oma koodi käivitada. Kõige populaarsemad veebilehitsejad on *Google Chrome*, *Mozilla Firefox*, *Microsoft Edge* jms. Kui sul on veebilehitseja juba olemas, siis võid selle sammu vahele jätta.

- HTML-fail: Kuna veebilehitsejas töötav JavaScripti kood laetakse läbi HTML-i, siis on vajalik luua HTML-fail, milles saate oma JavaScripti koodi käivitada. Lihtsaim viis HTML-faili loomiseks on kasutada tekstiredaktorit ja salvestada fail laiendiga `.html`. Alustamiseks võiks olla järgmine HTML-fail:

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
  const everythingIsOk = confirm('Kas asi töötab?');
  if (everythingIsOk) {
    alert('Väga hea!');
  } else {
    alert(':(');
  }
  </script>
</body>
</html>
```
Eelnevas näites kirjutatakse JavaScripti kood `<script></script>` märgendite vahele. HTML faili avades käivitatakse *script* märgendite vahel olev JavaScript-i kood automaatselt. Kopeeri järgnev kood oma koodikirjutamise programmi, salvesta fail `index.html` nimega ja ava see fail veebilehitsejas. Kui kõik on õigesti tehtud, siis peaks veebilehitsejas avanema dialoogiaken, mis küsib kas kõik on korras. Kui vajutad *OK*, siis peaks avanema teine dialoogiaken, mis ütleb "Väga hea!". Kui vajutad *Cancel*, siis peaks avanema teine dialoogiaken, mis ütleb `:(`.

- Veebilehitseja arendaja tööriistad: Veebilehitsejate arendaja tööriistad on väga kasulikud, kuna need võimaldavad sul näha oma koodi käitumist reaalajas. Kui kasutad *Google Chrome* veebilehitsejat, siis saad avada arendaja tööriistad, vajutades *Ctrl + Shift + I* või *F12*. Kui kasutad *Mozilla Firefox* veebilehitsejat, siis saad avada arendaja tööriistad, vajutades *Ctrl + Shift + I* või *F12*. Kui kasutad *Microsoft Edge* veebilehitsejat, siis saad avada arendaja tööriistad, vajutades *Ctrl + Shift + I* või *F12*.

