# `for...in` tsükkel

JavaScripti `for...in` tsükkel on mõeldud objektide omaduste üle iteratsiooni tegemiseks. See tsükkel annab teile juurdepääsu objekti iga omaduse nimetusele.

`for...in` tsükli struktuur näeb välja selline:

```javascript
for (let key in object) {
    // tegevused omadusega
}
```

- `key` on muutuja, mis saab iga iteratsiooni ajal omaduse nime väärtuse.
- `object` on objekt, mille omaduste üle te iteratsiooni teete.

Näide `for...in` tsükli kasutamisest:

```javascript
let person = {
    name: "John",
    age: 30,
    city: "Tallinn"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
```

See tsükkel käib läbi iga `person` objekti omaduse ja väljastab konsooli omaduse nime ja väärtuse.

Tulemus:

```
name: John
age: 30
city: Tallinn
```

Siin, `key` muutuja saab omaduse nime (nagu "name", "age", "city") ja `person[key]` väljend annab meile juurdepääsu selle omaduse väärtusele objektis. 

Tuleb meeles pidada, et `for...in` tsükkel ei taga omaduste järjekorda, seega kui omaduste järjekord on oluline, tuleks kasutada teisi meetodeid. Lisaks sellele, `for...in` tsükkel käib läbi ka kõik objekti päritud omadused, nii et mõnikord võib olla vajalik kasutada `hasOwnProperty` meetodit, et kontrollida, kas omadus kuulub objekti enda omaduste hulka.
