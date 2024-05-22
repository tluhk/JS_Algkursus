# Operaatorid ja avaldised

- [Operaatorid ja avaldised](#operaatorid-ja-avaldised)
  - [Sissejuhatus](#sissejuhatus)
  - [Õpiväljundid](#õpiväljundid)
  - [Operaatorid](#operaatorid)
    - [Aritmeetilised operaatorid](#aritmeetilised-operaatorid)
    - [Määramisoperaatorid](#määramisoperaatorid)
    - [Võrdlusoperaatorid](#võrdlusoperaatorid)
    - [Loogikaoperaatorid](#loogikaoperaatorid)
  - [Harjutusülesanded](#harjutusülesanded)

## Sissejuhatus

Selles õppetükis räägime **operaatoritest** ja **avaldistest** JavaScriptis.

## Õpiväljundid

Selle õppetüki lõpuks peaksid õppijad suutma:

- selgitada, mis on operaator ja avaldis;
- loetleda erinevaid JavaScripti operaatorite tüüpe;
- kasutada aritmeetilisi, määramis-, võrdlus- ja loogikaoperaatoreid JavaScriptis.

**Avaldised** ja **operaatorid** on programmeerimise mõisted, mida sageli kasutatakse koos, kuid neil on erinevad tähendused.

**Operaator** on sümbol või sõna, mida kasutatakse teatud arvutuste tegemiseks. Näiteks matemaatilistes avaldistes on operaatorid nagu pluss (`+`), miinus (`-`), korrutamine (`*`) ja jagamine (`/`). JavaScriptis on olemas ka teised operaatorid, nagu võrdlusoperaatorid (`==`, `!=`, `<`, `>`, `<=`, `>=`), loogikaoperaatorid (`&&`, `||`, `!`) ja palju muud.

Näide operaatori kasutamisest:

```javascript
let sum = 5 + 3; // + on operaator, mis lisab kaks arvu
```

**Avaldis** on koodijupp, millel on väärtus. Avaldised koosnevad tavaliselt muutujatest, väärtustest, operaatoritest ja funktsioonikutsetest, mis on kombineeritud nii, et neil on mingi väärtus. Näiteks `5 + 3` on avaldis, mis annab tulemuseks `8`. Toodud näites on `5` ja `3` väärtused ning `+` on operaator, mis lisab need kaks väärtust kokku.

Näide avaldise kasutamisest:

```javascript
let y = x * 2; // x * 2 on avaldis, mis annab tulemuseks 10
```

Seega, lühidalt öeldes, operaatorid on vahendid, mida kasutatakse avaldiste loomiseks, ja avaldised on koodijupid, millel on mingi väärtus.

## Operaatorid

JavaScriptis on mitut tüüpi operaatoreid, mida saate kasutada erinevate arvutuste tegemiseks või andmete manipuleerimiseks. Siin on mõned kõige levinumad operaatorite tüübid:

### Aritmeetilised operaatorid

Aritmeetilised operaatorid on JavaScripti (ja paljude teiste programmeerimiskeelte) funktsioonid, mida kasutatakse numbriliste väärtuste manipuleerimiseks. Need on matemaatiliste operatsioonide vasted.

JavaScripti aritmeetilised operaatorid hõlmavad järgmist:

- **Liitmine (`+`)**: Lisab kaks numbrit kokku või ühendab kaks stringi.

```javascript
let sum = 10 + 5; // 15
let name = "John" + "Doe"; // "JohnDoe"
```

- **Lahutamine (`-`)**: Lahutab teise numbri esimesest.

```javascript
let difference = 10 - 5; // 5
```

- **Korrutamine (`*`)**: Korrutab kaks numbrit.

```javascript
let product = 10 * 5; // 50
```

- **Jagamine (`/`)**: Jagab esimese numbri teisega.

```javascript
let quotient = 10 / 5; // 2
```

- **Jääk (`%`)**: Tagastab jagamise jäägi.

```javascript
let remainder = 10 % 3; // 1
```

- **Suurendamine (`++`)**: Suurendab numbri väärtust ühe võrra.

```javascript
let num = 10;
num++; // num on nüüd 11
```

- **Vähendamine (`--`)**: Vähendab numbri väärtust ühe võrra.

```javascript
let num = 10;
num--; // num on nüüd 9
```

- **Astendamine (`**`)**: Tõstab esimese numbri teise numbri astmesse.

```javascript
let base = 2;
let exponent = 3;
let result = base ** exponent; // 8
```

Need on JavaScripti aritmeetilised operaatorid, mis võimaldavad teha matemaatilisi operatsioone muutujate ja väärtustega.

### Määramisoperaatorid

JavaScripti määramisoperaatorid on kasutusel muutujatele väärtuste määramiseks. Kõige levinum määramisoperaator on lihtsalt võrdusmärk (`=`), aga on ka mitmeid teisi, mis võimaldavad teha aritmeetilisi operatsioone otse määramise käigus.

Siin on JavaScripti määramisoperaatorite näited:

- **Lihtne määramine (`=`):** Määrab muutuja väärtuseks paremal pool oleva avaldise tulemuse.

```javascript
let x = 10; // x on nüüd 10
```

- **Liitmine ja määramine (`+=`):** Liidab muutujale paremal pool oleva väärtuse ja määrab tulemuse muutuja uueks väärtuseks.

```javascript
let x = 10;
x += 5; // x on nüüd 15
```

- **Lahutamine ja määramine (`-=`):** Lahutab muutujast paremal pool oleva väärtuse ja määrab tulemuse muutuja uueks väärtuseks.

```javascript
let x = 10;
x -= 5; // x on nüüd 5
```

- **Korrutamine ja määramine (`*=`):** Korrutab muutuja paremal pool oleva väärtusega ja määrab tulemuse muutuja uueks väärtuseks.

```javascript
let x = 10;
x *= 2; // x on nüüd 20
```

- **Jagamine ja määramine (`/=`):** Jagab muutuja paremal pool oleva väärtusega ja määrab tulemuse muutuja uueks väärtuseks.

```javascript
let x = 10;
x /= 2; // x on nüüd 5
```

- **Jäägi ja määramine (`%=`):** Jagab muutuja paremal pool oleva väärtusega, saab jäägi ja määrab selle muutuja uueks väärtuseks.

```javascript
let x = 10;
x %= 3; // x on nüüd 1, sest 10 jagatud 3 jääk on 1
```

- **Astendamine ja määramine (`**=`):** Tõstab muutuja paremal pool oleva väärtuse astmesse ja määrab tulemuse muutuja uueks väärtuseks.

```javascript
let x = 2;
x **= 3; // x on nüüd 8, sest 2 kuubis on 8
```

Need on JavaScripti määramisoperaatorid, mis võimaldavad teil manipuleerida muutujate väärtusi, tehes aritmeetilisi operatsioone otse määramise käigus.

### Võrdlusoperaatorid

JavaScripti võrdlusoperaatorid võimaldavad võrrelda kahte väärtust ja tagastada tõeväärtus (`true` või `false`) sõltuvalt sellest, kas võrdlus on tõene. Siin on peamised JavaScripti võrdlusoperaatorid:

- **Võrdne (`==`):** Tagastab tõeväärtuse `true`, kui mõlemad pooled on võrdsed, pärast tüübiteisendust.

```javascript
let x = 10;
console.log(x == 10); // true
console.log(x == "10"); // true
```

- **Mitte võrdne (`!=`):** Tagastab `true`, kui pooled ei ole võrdsed, pärast tüübiteisendust.

```javascript
let x = 10;
console.log(x != 5); // true
console.log(x != "10"); // false
```

- **Täpselt võrdne (`===`):** Tagastab `true`, kui pooled on võrdsed, ilma tüübiteisenduseta.

```javascript
let x = 10;
console.log(x === 10); // true
console.log(x === "10"); // false
```

- **Täpselt mitte võrdne (`!==`):** Tagastab `true`, kui pooled ei ole võrdsed, ilma tüübiteisenduseta.

```javascript
let x = 10;
console.log(x !== 5); // true
console.log(x !== "10"); // true
```

- **Suurem kui (`>`):** Tagastab `true`, kui esimene pool on suurem kui teine.

```javascript
let x = 10;
console.log(x > 5); // true
```

- **Väiksem kui (`<`):** Tagastab `true`, kui esimene pool on väiksem kui teine.

```javascript
let x = 10;
console.log(x < 15); // true
```

- **Suurem või võrdne (`>=`):** Tagastab `true`, kui esimene pool on suurem või võrdne teisega.

```javascript
let x = 10;
console.log(x >= 10); // true
```

- **Väiksem või võrdne (`<=`):** Tagastab `true`, kui esimene pool on väiksem või võrdne teisega.

```javascript
let x = 10;
console.log(x <= 10); // true
```

Need võrdlusoperaatorid on väga kasulikud tingimuslausetes ja tsüklites, et kontrollida, kas teatud tingimused on täidetud.

> Üldiselt soovitatakse kasutada `===` ja `!==` operaatoreid, sest need annavad täpsemaid tulemusi ja aitavad vältida vigu, mis tulenevad ootamatust tüübiteisendusest.

### Loogikaoperaatorid

JavaScripti loogikaoperaatorid võimaldavad teha loogilisi operatsioone. Tavaliselt kasutatakse neid tingimustes, kus on vaja teha otsuseid. JavaScriptis on kolm põhilist loogikaoperaatorit:

- **AND (`&&`)**: Tagastab `true`, kui mõlemad operandid on tõesed.

```javascript
let x = 5;
let y = 10;
console.log(x < 10 && y > 1); // true, sest mõlemad tingimused on tõesed
```

- **OR (`||`)**: Tagastab `true`, kui vähemalt üks operandidest on tõene.

```javascript
let x = 5;
let y = 10;
console.log(x < 4 || y > 1); // true, sest teine tingimus on tõene
```

- **NOT (`!`)**: Tagastab `true`, kui operand on väär; ja vastupidi.

```javascript
let x = 5;
console.log(!(x < 4)); // true, sest x ei ole väiksem kui 4
```

Need operaatorid on väga kasulikud tingimuslausetes (nagu `if`, `while` jne), kus on vaja kontrollida, kas mitu tingimust on korraga täidetud, või kas vähemalt üks tingimus on täidetud. Samuti aitavad need eitada mingi tingimuse tõeväärtust.

Nüüd, kui olete tutvunud JavaScripti operaatorite ja avaldistega, saate neid kasutada oma koodis, et teha arvutusi, määrata muutujatele väärtusi ja kontrollida tingimusi.

## Harjutusülesanded

- **Küsimused enesekontrolliks:**
  - Kirjelda oma sõnadega, mis on **operaator** ja **avaldis**.
  - Nimeta erinevaid JavaScripti operaatorite tüüpe.
