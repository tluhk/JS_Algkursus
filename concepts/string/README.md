# String ehk sõne

Stringi kasutatakse märgijada esitamiseks ja manipuleerimiseks.

Stringid on kasulikud andmete hoidmiseks, mida saab esitada teksti kujul. Mõned stringide puhul enimkasutatavad toimingud on nende pikkuse kontrollimine, nende koostamine ja ühendamine operaatorite + ja += abil, alamstringide olemasolu või asukoha kontrollimine meetodiga indexOf() või alamstringide eraldamine substring() meetodiga.

Stringi deklareeritakse jutumärkide (const text = "See on string";), ühekordsete jutumärkide (const text = 'See on string';) või backtickide abil (const text = `See on string`;).

```javascript
const name = "John Doe";
let town = 'Tallinn';
```

[Allikas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Stringi meetodid

Kuigi stringide puhul on JavaScripti tegemist primitiivse andmetüübiga, on stringidel olemas ka meetodid, mida saab kasutada erinevate toimingute sooritamiseks stringidega. Stringide meetodite puhul JavaScriptis ei ole tegemist otseselt stringi manipuleerimisega, vaid pigem uue stringi loomisega, mis on eelmisest stringist erinev. Ehk stringide meetodid tagastavad uue stringi, mitte ei muuda olemasolevat.

Järgnevalt on toodud nimekiri enimkasutatavatest stringide meetoditest.

### Stringi pikkus

Alustame tegelikult mitte meetodi vaid omadusega, mis on stringi pikkus. Stringi pikkuse saab teada omaduse `length` abil.

```javascript
const name = "John Doe";
console.log(name.length); // 8
```

### Stringi ühendamine

Kõige lihtsam viis kahte või rohkemat stringi ühendada on kasutada operaatorit `+`.

```javascript
const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;
console.log(fullName); // John Doe
```

Järgmine variant stringide ühendamiseks on kasutada meetodit `concat()`. Meetod `concat()` tagastab uue stringi, mis koosneb kahest või rohkemast stringist, mis on ühendatud meetodi väljakutsuva stringiga.

```javascript
const firstName = "John";
const lastName = "Doe";
const fullName = firstName.concat(" ", lastName);
console.log(fullName); // John Doe
```

### Väiketähtedeks muutmine

Meetod `toLowerCase()` tagastab stringi, kus kõik tähed on väiketähtedeks muudetud.

```javascript
const name = "John Doe";
console.log(name.toLowerCase()); // john doe
```

### Suurtähtedeks muutmine

Meetod `toUpperCase()` tagastab stringi, kus kõik tähed on suurtähtedeks muudetud.

```javascript
const name = "John Doe";
console.log(name.toUpperCase()); // JOHN DOE
```

### Stringi alustamine ja lõpetamine

Meetod `startsWith()` tagastab tõeväärtuse, kas string algab määratud alamstringiga.

```javascript
const name = "John Doe";
console.log(name.startsWith("John")); // true
console.log(name.startsWith("Doe")); // false
```

### Alamstringi olemasolu kontrollimine

Meetod `includes()` tagastab tõeväärtuse, kas string sisaldab määratud alamstringi.

```javascript
const name = "John Doe";
console.log(name.includes("John")); // true
console.log(name.includes("Doe")); // true
console.log(name.includes("john")); // false
```

---
### Stringi poolitamine

Meetod `slice()` tagastab stringi osa, mis algab määratud indeksist ja lõpeb määratud indeksiga (indeksid on nullist alates).

```javascript
const name = "John Doe";
console.log(name.slice(0, 4)); // John
console.log(name.slice(5, 8)); // Doe
```

### Stringi tükeldamine massiiviks

Meetod `split()` tagastab massiivi, kus string on tükeldatud määratud alamstringi kohalt.

```javascript
const name = "John Doe";
console.log(name.split(" ")); // ["John", "Doe"]
console.log(name.split("")); // ["J", "o", "h", "n", " ", "D", "o", "e"]
```

Täieliku nimekirja stringi meetoditest leiab [siit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods).