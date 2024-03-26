# Funktsioonid

Üldiselt võib öelda, et funktsioon on "alamprogramm", mida saab välja kutsuda funktsiooni välise (rekursiooni korral sisemise) koodiga. Nagu programm ise, koosneb funktsioon lausete jadast, mida nimetatakse funktsiooni kehaks. Funktsioonile saab anda väärtuseid ja funktsioon tagastab alati mingi väärtuse.

Tegelikult oleme juba funktsioone kasutanud - näiteks:
- tüübi teisenda funktsioon `Number()`, mis võtab argumendiks stringi ja tagastab sellele vastava arvu
- `console.log()`, mis võtab argumendiks ükskõik millise väärtuse ja väljastab selle konsooli
- `alert()`, mis võtab argumendiks ükskõik millise väärtuse ja väljastab selle teateaknasse
- `prompt()`, mis võtab argumendiks ükskõik millise väärtuse ja väljastab selle küsimusena teateaknasse ja tagastab kasutaja sisestatud väärtuse stringina

## Funktsiooni defineerimine

Funktsiooni definitsioon (nimetatakse ka funktsiooni deklaratsiooniks või funktsioonilauseks) koosneb funktsiooni märksõnast, millele järgneb:

- Funktsiooni nimi.
- Funktsiooni parameetrite loend, mis on sulgudes ja eraldatud komadega.
- Funktsiooni määratlevad JavaScripti laused, mis on suletud sulgudes {...}.

```javascript
// Funktsioon, mis võtab argumentidena vastu kaks arvu ja tagastab nende summa
function add(x, y) {
    const sum = x + y;
    return sum;
}
```

## Funktsiooni väljakutsumine/kasutamine

Funktsiooni defineerimine ei käivita seda. Funktsiooni defineerimine annab funktsioonile nime ja määrab, mida teha funktsiooni väljakutsumisel.

Funktsiooni väljakutsumine sooritab määratud toimingud näidatud parameetritega.

Näiteks ülalpool defineeritud funktsiooni `add`, saab käivitada nii: `add(1, 2);`

Ehk siis funktsiooni käivitatakse funktsiooni nime ja sulgude abil, kusjuures sulgudesse kirjutatakse funktsiooni parameetrid (kui on nõutud).

Oluline on meeles pidada, et funktsiooni poolt tagastatud tulemuse saab salvestada omakorda muutujasse.

```javascript
// Funktsioon, mis võtab argumentidena vastu kaks arvu ja tagastab nende summa
function add(x, y) {
    const sum = x + y;
    return sum;
}

// Kutsume funktsiooni välja ja omistame tagastatud väärtuse muutujale
const sum = add(1, 2);
console.log(sum); // 3

// Kutsume funktsiooni välja ja kasutame tagastatud väärtust otse
console.log(add(2, 4)); // 6
```

Funktsioone saab kasutada näiteks ka tsüklite sees

```javascript
// Funktsioon, mis võtab argumendina vastu ühe arvu ja tagastab selle ruudu
function square(x) {
    return x * x;
}

// Kutsume funktsiooni välja tsükli sees, kasutame argumendina tsükli muutujat ja kuvame vastuse konsooli
for (let i = 0; i < 10; i++) {
    console.log(square(i));
}
```

