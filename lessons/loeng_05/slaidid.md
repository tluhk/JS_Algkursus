# Programmeerimise algõpetus Javascripti baasil

Martti Raavel
<martti.raavel@tlu.ee>

---

## Viies loeng

- Millest rääkisime eelmisel korral?
- [Objektid](../../concepts/objektid/README.md)
- [Objekti manipuleerimine](../../concepts/objektiManipuleerimine/README.md)
- Harjutused

---

## Objektid

JavaScriptis, nagu ka paljudes teistes programmeerimiskeeltes, saab objekte võrrelda päriselus olevate objektidega. JavaScripti objektide mõistet saab mõista reaalse elu, käegakatsutavate objektide abil.

Objekt omaduste ja tüübiga iseseisev olem. Võrrelge seda näiteks tassiga. Tass on ese, millel on omadused. Tassil on värv, kujundus, kaal, materjal, millest see on valmistatud jne. Samamoodi võivad JavaScripti objektidel olla **omadused**.

---

## Objekti loomine

Objekte saab luua nagu teisigi muutujaid JavaScriptis, kasutades `let` või `const` märksõna. Objekt luuakse kasutades `{}` sulge. Sulgude sisse saab panna objekti omadused ja omaduse väärtuse, eraldades need omavahel kooloniga. Omadusi võib olla rohkem kui üks, eraldades need komaga.

```javascript
const cup = {
  color: 'red',
  sizeInMilliLiters: 300,
  material: 'ceramic' 
};
```

---

## Objekti omadused

Objekti **omadust** saab seletada muutujana, mis on objektiga seotud. Objekti omadused on põhimõtteliselt samad, mis tavalistel JavaScripti muutujatel. Objekti omadustele pääsete juurde lihtsa punktitähise abil:

```javascript
const cup = {
  color: 'red',
  sizeInMilliLiters: 300,
  material: 'ceramic' 
};

console.log(cup.color);             // Kuvatakse red
console.log(cup.sizeInMilliLiters); // Kuvatakse 300
console.log(cup.material);          // Kuvatakse ceramic
```

---

## Objekti omadused - funktsioonid

Objekti omadusteks võivad ka olla muud andmestruktuurid ja funktsioonid.

```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  getName: function () {
    return `${this.firstName} ${this.lastName}`;
  }
}

console.log(person.getName());
```

---

## Harjutus 1

Loo raamatu objekt, mis sisaldab järgmiseid omadusi:

- Pealkiri - string
- Autor - string
- Lehekülgede arv – number
- Loetud – tõeväärtus (true/false)

---

## Harjutus 2

Loo massiiv, mis sisaldab variatsioone eelnevalt loodud objektist (vähemalt neli erinevat)

---

## Harjutus 3

Kirjuta programm, mis teeb järgmist:

- kuvab raamatute arvu
- kuvab kõikide raamatute pealkirjad
- kuvab raamatute keskmise lehekülgede arvu
- kuvab kõik loetud raamatud

---

## Küsimused?
