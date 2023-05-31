# Programmeerimise algõpetus Javascripti baasil

Martti Raavel
martti.raavel@tlu.ee

---
# Kolmas loeng

- Millest rääkisime eelmisel korral?
- Tsüklid ehk kordused
    - [`for` tsükkel](../../concepts/for/about.md)
    - [`while` tsükkel](../../concepts/while/about.md)
    - [JavaScript eraldi failis](../../concepts/alustamine/about.md#javascript-eraldi-failis)
- [Funktsioonid](../../concepts/funktsioon/about.md)
- [Massiiv](../../concepts/massiiv/about.md)
- Tegevused massiividega
- [Objektid](../../concepts/objektid/about.md)
---

# Funktsioonid

Üldiselt võib öelda, et funktsioon on "alamprogramm", mida saab välja kutsuda funktsiooni välise (rekursiooni korral sisemise) koodiga. Nagu programm ise, koosneb funktsioon lausete jadast, mida nimetatakse funktsiooni kehaks. Funktsioonile saab anda väärtuseid ja funktsioon tagastab alati mingi väärtuse.

---
# Funktsioonid

Milliseid funktsioone oleme juba kasutanud?
- `console.log()`
- `alert()`
- `prompt()`
- `confirm()`
- `Number()`

---
# Funktsiooni defineerimine

Funktsiooni definitsioon (nimetatakse ka funktsiooni deklaratsiooniks või funktsioonilauseks) koosneb funktsiooni märksõnast, millele järgneb:

- Funktsiooni nimi.
- Funktsiooni parameetrite loend, mis on sulgudes ja eraldatud komadega.
- Funktsiooni määratlevad JavaScripti laused, mis on suletud sulgudes {...}.

---
# Funktsiooni defineerimine

```javascript
function funktsiooniNimi(parameeter1, parameeter2, ...) {
    // Funktsiooni keha
}
```
---

# Funktsiooni defineerimine

> **NB!**
- Funktsiooni nimi peab olema unikaalne. Kui funktsioonil on sama nimi, mis mõnel teisel funktsioonil, siis see funktsioon kirjutatakse üle
- Funktsioon tagastab alati mingi väärtuse. Kui funktsioonil ei ole `return` lauset, siis tagastab funktsioon `undefined` väärtuse
- Funktsiooni poolt tagastatava väärtuse saame salvestada muutujasse


# Funktsiooni defineerimine ja kasutamine

```javascript
function greet(name) {
  return `Tere, ${name}!`;
}

const greeting = greet('Toomas');
console.log(greeting); // Tere, Toomas!
```

---
# Kodune ülesanne

- [Kodune ülesanne](./homework.md)
