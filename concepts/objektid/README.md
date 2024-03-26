# Objektid

JavaScriptis, nagu ka paljudes teistes programmeerimiskeeltes, saab objekte võrrelda päriselus olevate objektidega. JavaScripti objektide mõistet saab mõista reaalse elu, käegakatsutavate objektide abil.

JavaScriptis on objekt omaduste ja tüübiga iseseisev olem. Võrrelge seda näiteks tassiga. Tass on ese, millel on omadused. Tassil on värv, kujundus, kaal, materjal, millest see on valmistatud jne. Samamoodi võivad JavaScripti objektidel olla omadused, mis määravad nende **omadused**.

Objekte saab luua nagu teisigi muutujaid JavaScriptis, kasutades `let` või `const` märksõna. Objekt luuakse kasutades `{}` sulge. Sulgude sisse saab panna objekti omadused ja omaduse väärtuse, eraldades need omavahel kooloniga. Omadusi võib olla rohkem kui üks, eraldades need komaga.

```javascript
const cup = {
  color: 'red',
  sizeInMilliLiters: 300,
  material: 'ceramic' 
};
```

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

Eelnevas näites on objekt järgmiste omadustega: `firstName`, `lastName` ja `getName`. Esimese kahe omaduse väärtusteks on omistatud stringid ja `getName` väärtuseks on funktsioon, mis tagastab kaks esimest väärtus kokku "liidetuna". Seejuures tasub tähele panna märksõna `this`, mis praegusel hetkel viitab objektile endale.


Järgmises näites on `days` omaduse väärtuseks nädalapäevade massiiv. `getDays` sisaldab funktsiooni, mis tagastab `days` väärtuseks oleva massiivi ja `getTodaysDay` omakorda sisaldab funktsiooni, mis tagastab selle funktsiooni käivitamise hetke vastava nädalapäeva.

```javascript
const week = {
  days: ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'],
  getDays: function() {
    return this.days;
  },
  getTodaysDay: function() {
    const today = new Date();
    const dayNumber = today.getDay();
    return this.days[dayNumber];
  }
};

console.log(week.getDays());
console.log(week.getTodaysDay());
```

Viimased kaks näidet näitavad, et objekti omadusteks võivad olla nii primitiivsed andmetüübid, kui ka andmestruktuurid ja funktsioonid.

## Objektide manipuleerimine

[Objekti manipuleerimine](../objektiManipuleerimine/README.md)