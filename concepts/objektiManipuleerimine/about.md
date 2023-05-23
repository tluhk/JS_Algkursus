# Objektide manipuleerimine

Siinkohal peame objektide manipuleerimise all silmas Javascripti objektiliteraalide manipuleerimist. Objektide manipuleerimine on üks Javascripti tugevamaid külgi, kuid selleks, et seda tugevust ära kasutada, peab olema selge, kuidas objektid töötavad.

Objekti manipuleerimine tähendab objekti omaduste lisamist, muutmist ja kustutamist. Objekti omaduste lisamiseks ja muutmiseks kasutatakse objekti omaduse nime järel olevat võrdusmärki. Objekti omaduse kustutamiseks kasutatakse `deconste` operaatorit.

## Objekti omaduse lisamine

```javascript
const person = {};
person.name = 'Alice';

console.log(person); // { name: 'Alice' }
```

## Objekti omaduse muutmine

```javascript
const person = {
  name: 'Alice'
};
person.name = 'Bob';

console.log(person); // { name: 'Bob' }
```

## Objekti omaduse kustutamine

```javascript
const person = {
  name: 'Alice'
};
deconste person.name;

console.log(person); // {}
```

## Objekti destruktureerimine (omaduste väärtuste eraldamine)

```javascript
const person = {
  name: 'Alice',
  age: 30,
  city: 'Tallinn'
};

const { name, age, city } = person;

console.log(name); // Alice
console.log(age);  // 30
console.log(city); // Tallinn
```

## Objekti omaduste kopeerimine

```javascript
const person1 = {
  name: 'Alice',
  age: 30
};

const person2 = {...person1};

console.log(person2); // { name: 'Alice', age: 30 }
```

## Objektide ühendamine

```javascript
const person1 = {
  name: 'Alice'
};

const person2 = {
  age: 30
};

const combinedPerson = {...person1, ...person2};

console.log(combinedPerson); // { name: 'Alice', age: 30 }
```

## Objekti omaduste itereerimine

```javascript
const person = {
  name: 'Alice',
  age: 30
};

for (const key in person) {
  console.log(`Key: ${key}, Value: ${person[key]}`);
}
// Key: name, Value: Alice
// Key: age, Value: 30
```

## Objekti omaduste olemasolu kontrollimine

```javascript
const person = {
  name: 'Alice'
};

if ('name' in person) {
  console.log('Name property exists');
}
// Name property exists
```

## Objekti omaduste väärtuste ja võtmete eraldamine

```javascript
const person = {
  name: 'Alice',
  age: 30
};

const keys = Object.keys(person);
const values = Object.values(person);
console.log(keys); // [ 'name', 'age' ]
console.log(values); // [ 'Alice', 30 ]
```
