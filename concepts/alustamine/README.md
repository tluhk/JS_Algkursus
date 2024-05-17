# JavaScripti kirjutamise alustamine koodieditoris

## Sisukord

- [JavaScripti kirjutamise alustamine koodieditoris](#javascripti-kirjutamise-alustamine-koodieditoris)
  - [Sisukord](#sisukord)
  - [Sissejuhatus](#sissejuhatus)
    - [Miks on vaja HTML-i?](#miks-on-vaja-html-i)
  - [Õpiväljundid](#õpiväljundid)
  - [Minimaalne HTML-kood JavaScripti lisamiseks](#minimaalne-html-kood-javascripti-lisamiseks)
  - [JavaScripti lisamise viisid](#javascripti-lisamise-viisid)
    - [1. *Inline* (reasisene) skript](#1-inline-reasisene-skript)
    - [2. *Internal* (sisemine) skript](#2-internal-sisemine-skript)
    - [3. *External* (väline) skript](#3-external-väline-skript)
  - [Milline meetod valida?](#milline-meetod-valida)
    - [*Inline* (reasisene) skript](#inline-reasisene-skript)
    - [*Internal* (sisemine) skript](#internal-sisemine-skript)
    - [*External* (väline) skript](#external-väline-skript)
  - [Harjutusülesanded](#harjutusülesanded)
  - [Allikad](#allikad)

## Sissejuhatus

Selles peatükis õpid, kuidas alustada JavaScripti kirjutamist koodieditoris, milline on minimaalne HTML-kood, millele JavaScripti lisada, ning millistel kolmel erineval viisil saab JavaScripti HTML-dokumendile lisada. Eesmärk on luua minimaalne võimekus, et saaksid hakata JavaScripti õppima ja katsetama.

### Miks on vaja HTML-i?

JavaScripti eesmärk on sageli manipuleerida ja täiustada veebilehtede käitumist ja interaktiivsust. Selleks, et saaksime JavaScripti koodi testida ja käivitada, vajame HTML-dokumenti, kuhu JavaScripti koodi saab lisada. HTML pakub struktuuri ja konteksti, mille kaudu JavaScript saab suhelda kasutajaliidesega, võimaldades dünaamilisi ja interaktiivseid funktsioone. Kuigi selle kursuse raames me ei tegele kasutajaliidese ja veebilehe muutmisega, siis selleks, et me saaksime JavaScripti koodi kirjutada ja testida, on vaja HTML-dokumenti.

## Õpiväljundid

Selle õppetüki lõpuks peaksid õppijad suutma:

- luua minimaalne HTML-kood JavaScripti lisamiseks;
- lisada JavaScripti HTML-dokumendile kolmel erineval viisil;
- mõista, kuidas JavaScripti kood ja HTML dokumendiga suhtlevad.

## Minimaalne HTML-kood JavaScripti lisamiseks

Alustame lihtsa HTML-struktuuriga, millele saame JavaScripti lisada. Järgmine näide näitab minimaalset HTML-koodi:

```html
<!DOCTYPE html>
<html lang="et">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScripti Õppimine</title>
</head>
<body>
    <h1>Tere tulemast JavaScripti maailma!</h1>
    <script>
        // Siin saab JavaScripti koodi kirjutada
        console.log("JavaScript on lisatud!");
    </script>
</body>
</html>
```

## JavaScripti lisamise viisid

HTML-dokumendile saab JavaScripti lisada kolmel erineval viisil:

- **inline (reasisene) skriptina**,
- **internal (sisemine) skriptina**,
- **external (välise) skriptina**.

### 1. *Inline* (reasisene) skript

*Inline*-skriptid on otse HTML-elementide sees, kasutades HTML-elementide atribuute, nagu `onclick` või `onload`. See meetod pole soovitatav suuremate projektide jaoks, kuid võib olla kasulik väikeste ja lihtsate skriptide jaoks.

```html
<!DOCTYPE html>
<html lang="et">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScripti Õppimine</title>
</head>
<body>
    <h1 onclick="alert('Tere!')">Klikka siia</h1>
</body>
</html>
```

### 2. *Internal* (sisemine) skript

*Internal*-skriptid kirjutatakse HTML-dokumendi `<script>` elementide vahele, tavaliselt paigutatakse need `<head>` või `<body>` sektsiooni. Seda meetodit kasutatakse sageli väiksemate projektide või katsetuste jaoks.

```html
<!DOCTYPE html>
<html lang="et">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScripti Õppimine</title>
    <script>
        alert('Tere tulemast JavaScripti maailma!');
    </script>
</head>
<body>
    <h1>Tere tulemast JavaScripti maailma!</h1>
</body>
</html>
```

### 3. *External* (väline) skript

*External*-skriptid kirjutatakse eraldi JavaScripti faili ja seejärel lingitakse HTML-dokumendiga, kasutades `<script>` elementi `src` atribuudiga. See meetod on soovitatav suuremate projektide jaoks, kuna see hoiab HTML ja JavaScripti koodi eraldi ja paremini hallatavaks.

**`script.js` fail:**

```javascript
alert('Tere tulemast JavaScripti maailma!');
```

**HTML fail:**

```html
<!DOCTYPE html>
<html lang="et">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScripti Õppimine</title>
    <script src="script.js" defer></script>
</head>
<body>
    <h1>Tere tulemast JavaScripti maailma!</h1>
</body>
</html>
```

## Milline meetod valida?

### *Inline* (reasisene) skript

**Kasutusotstarve:**

- Väikeste ja lihtsate skriptide jaoks, kus on vaja kiiresti ja lihtsalt lisada interaktiivsust.
- Väikeste eksperimentide ja testide jaoks, kus keerukus on madal ja skriptide korduvkasutamine pole oluline.

**Eelised:**

- Lihtne ja kiire lisamine.
- Ei vaja eraldi faili loomist.

**Puudused:**

- Raske hallata ja uuendada suuremates projektides.
- Koodisegmentide dubleerimise oht.
- Ei soodusta hea koodi struktuuri ja eraldatust.

### *Internal* (sisemine) skript

**Kasutusotstarve:**

- Väikeste ja keskmise suurusega projektide jaoks, kus koodi maht on hallatav.
- Kui on vaja koodi testida või katsetada, ilma et peaks looma eraldi JavaScripti faile.

**Eelised:**

- Lihtne arendus ja testimine.
- Kõik kood on ühes failis, mis võib olla mugav väiksemate projektide puhul.

**Puudused:**

- Suurte projektide puhul muutub HTML-fail segaseks ja keeruliseks hallata.
- Koodi korduvkasutamise võimalused on piiratud.
- Ei soodusta koodi selget eraldamist.

### *External* (väline) skript

**Kasutusotstarve:**

- Keskmise suurusega ja suuremate projektide jaoks, kus koodi hallatavus ja korduvkasutamine on olulised.
- Kui on vaja selget eraldatust HTML ja JavaScripti koodi vahel.

**Eelised:**

- Parandab koodi struktuuri ja loetavust.
- Lihtsustab koodi hooldamist ja uuendamist.
- Võimaldab koodi korduvkasutamist mitmes HTML-failis.
- Võimaldab koodi minimeerimist ja optimeerimist.

**Puudused:**

- Nõuab eraldi faili loomist ja haldamist.
- Väikeste ja lihtsate skriptide jaoks võib olla liigse keerukusega.

**Eelistatuim meetod edaspidiseks:**

Tavaliselt on soovitatav kasutada **external skripte** suuremate ja keskmise suurusega projektide puhul, kuna see võimaldab paremat koodi struktureerimist, lihtsamat hooldust ja koodi korduvkasutamist. **Internal skriptid** võivad olla kasulikud väiksemate projektide või kiirete katsetuste jaoks. **Inline skripte** tuleks kasutada ainult väga väikeste ja lihtsate skriptide puhul, kus koodi korduvkasutamine ja hallatavus ei ole olulised.

Selle kursuse raames kasutame *external* skripte, kuna siis saame hoida HTML ja JavaScripti koodi eraldi ja asjasse mittepuutuv HTML kood ei hakka meid segama.

## Harjutusülesanded

- **Praktiline ülesanne:**
  - Loo minimaalne HTML-dokument ja lisa sellele JavaScripti kolmel erineval viisil: *inline*, *internal* ja *external*. Katseta kõigi kolme meetodiga ja vaata, kuidas JavaScripti kood töötab.

- **Küsimused enesekontrolliks:**
  - Millised on kolm erinevat viisi JavaScripti lisamiseks HTML-dokumendile?
  - Millal on sobilik kasutada inline-skripte ja millal external-skripte?
  - Kirjelda minimaalset HTML-struktuuri, kuhu saab JavaScripti lisada.
  - Mis on external skriptide eelised võrreldes inline ja internal skriptidega?

## Allikad

- [Adding JavaScript to Your Web Pages - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [Using External Scripts - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-src)
- [Introduction to HTML and JavaScript - Codecademy](https://www.codecademy.com/learn/learn-html/modules/learn-html-elements/cheatsheet)
