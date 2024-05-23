# Lisaülesanded objektide kohta

Kui õppematerjalides olevad ülesanded on lahendatud, kuid sooovid veel harjutada, siis siin on mõned lisaülesanded, mida saad proovida. Need ülesanded aitavad sul harjutada objektide kasutamist erinevates stsenaariumides.

## Ülesanne 1: Objekti Loendamine

**Kirjeldus:** Looge objekt, mis sisaldab erinevaid puuvilju ja nende koguseid. Seejärel kirjutage kood, mis loeb kokku, mitu erinevat tüüpi puuvilju on objektis.

**Näide:**

```javascript
const fruits = {
  apple: 5,
  banana: 2,
  orange: 7
};
```

**Väljund:** `3`

> **Vihje:** Saad kasutada [`Object.keys`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) meetodit, et saada objekti võtmed massiivina.

## Ülesanne 2: Objekti Väärtuste Summa

**Kirjeldus:** Antud on objekt, mis sisaldab erinevate inimeste vanuseid. Kirjutage kood, mis arvutab ja väljastab kõikide inimeste vanuste summa.

**Näide:**

```javascript
const ages = {
  John: 25,
  Mary: 31,
  Chris: 16
};
```

**Väljund:** `72`

> **Vihje:** Saad kasutada [`Object.values`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values) meetodit, et saada objekti väärtused massiivina.

## Ülesanne 3: Objekti Elementide Filtreerimine

**Kirjeldus:** Antud on objekt, mis sisaldab erinevate toodete hindu. Kirjutage kood, mis loob uue objekti, kuhu kuuluvad ainult need tooted, mille hind on väiksem kui `10`.

**Näide:**

```javascript
const prices = {
  book: 15,
  pen: 5,
  notebook: 8,
  pencil: 2
};
```

**Väljund:**

```plaintext
{
  pen: 5,
  notebook: 8,
  pencil: 2
}
```

> **Vihje:** Saad kasutada [`Object.entries`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) meetodit, et saada objekti võtmed ja väärtused massiivina.

### Ülesanne 4: Objektide Massiivis Otsimine

**Kirjeldus:** Antud on massiiv, mis sisaldab objekte, igaüks esindab ühte isikut, kellel on `name` ja `age` omadused. Kirjutage kood, mis otsib massiivist kõige vanema inimese ja väljastab tema nime.

**Näide:**

```javascript
const people = [
  { name: 'John', age: 25 },
  { name: 'Mary', age: 31 },
  { name: 'Chris', age: 16 }
];
```

**Väljund:** `Kõige vanem inimene on: Mary`

### Ülesanne 5: Objektide ja Massiivide Kombineerimine

**Kirjeldus:** Antud on massiiv, mis sisaldab mitmeid objekte, iga objekt esindab ühte raamatut, millel on `title`, `author` ja `read` (boolean, mis näitab, kas raamat on loetud või mitte) omadused. Kirjutage kood, mis loendab, mitu raamatut on juba loetud ja mitu on veel lugemata.

**Näide:**

```javascript
const books = [
  { title: 'The Hobbit, author: J.R.R. Tolkien', read: true },
  { title:' Harry Potter, author: J.K. Rowling', read: false },
  { title: '1984, author: George Orwell', read: true }
];
```

**Väljund:** `2 loetud, 1 lugemata`
