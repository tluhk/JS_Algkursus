# `for...of` tsükkel

JavaScripti `for...of` tsükkel on mõeldud andmestruktuuride üle iteratsiooni tegemiseks, sealhulgas massiivid, stringid, Map'id, Set'id jne. See tsükkel annab teile juurdepääsu iga elemendi väärtusele.

`for...of` tsükli struktuur näeb välja selline:

```javascript
for (let value of iterable) {
    // tegevused elemendiga
}
```

- `value` on muutuja, mis saab iga iteratsiooni ajal elemendi väärtuse.
- `iterable` on andmestruktuur, mille elementide üle te iteratsiooni teete.

Näide `for...of` tsükli kasutamisest:

```javascript
let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
    console.log(fruit);
}
```

See tsükkel käib läbi iga `fruits` massiivi elemendi ja väljastab selle väärtuse konsooli.

Tulemus:

```
apple
banana
cherry
```

Siin, `fruit` muutuja saab iga iteratsiooni ajal elemendi väärtuse.

Teine näide kasutades stringi:

```javascript
let text = "Hello";

for (let character of text) {
    console.log(character);
}
```

See tsükkel käib läbi iga `text` stringi tähe ja väljastab selle konsooli.

Tulemus:

```
H
e
l
l
o
```

Tuleb meeles pidada, et erinevalt `for...in` tsüklist, `for...of` tsükkel ei tööta objektide puhul, sest need ei ole iterable (iteratsiooni võimaldavad) struktuurid.
