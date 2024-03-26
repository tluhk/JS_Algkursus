# Matemaatilised meetodid

Sageli on programmeerimisel kasutada erinevaid matemaatilisi funktsioone erinevate arvutuste tegemiseks. Väga palju matemaatilisi funktsioone ja konstante on JavaScripti standardteegis juba olemas. Nende kasutamiseks tuleb kasutada objekti `Math` ja selle omadusi ja meetodeid.

Järgnevalt on toodud nimekiri enimkasutatavatest `Math` objekti omadustest ja meetoditest.

## Konstandid

### Pi

Konstant `PI` tagastab pi väärtuse (ringi ümbermõõdu suhe tema diameetriga).

```javascript
console.log(Math.PI); // 3.141592653589793
```

### Arvu 2 naturaallogaritm

Konstant `LN2` tagastab arvu 2 naturaallogaritmi.

```javascript
console.log(Math.LN2); // 0.6931471805599453
```

### Arvu 10 naturaallogaritm

Konstant `LN10` tagastab arvu 10 naturaallogaritmi.

```javascript
console.log(Math.LN10); // 2.302585092994046
```

## Meetodid

### Absoluutväärtus

Meetod `abs()` tagastab arvu absoluutväärtuse.

```javascript
console.log(Math.abs(-5)); // 5
```

### Arvu ümardamine

Meetod `round()` tagastab arvu ümardatuna lähima täisarvuni.

```javascript
console.log(Math.round(4.7)); // 5
console.log(Math.round(4.4)); // 4
```

### Arvu ümardamine ülespoole

Meetod `ceil()` tagastab arvu ümardatuna ülespoole lähima täisarvuni.

```javascript
console.log(Math.ceil(4.7)); // 5
console.log(Math.ceil(4.4)); // 5
```

### Arvu ümardamine allapoole

Meetod `floor()` tagastab arvu ümardatuna allapoole lähima täisarvuni.

```javascript
console.log(Math.floor(4.7)); // 4
console.log(Math.floor(4.4)); // 4
```

### Arvu astendamine

Meetod `pow()` tagastab arvu astendatuna teise arvu poolt määratud astmesse.

```javascript
console.log(Math.pow(8, 2)); // 64
```

### Ruutjuur

Meetod `sqrt()` tagastab arvu ruutjuure.

```javascript
console.log(Math.sqrt(64)); // 8
```

### Minimaalne arv

Meetod `min()` tagastab parameetritest väikseima arvu.

```javascript
console.log(Math.min(0, 150, 30, 20, -8, -200)); // -200
```

### Maksimaalne arv

Meetod `max()` tagastab parameetritest suurima arvu.

```javascript
console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150
```

### Juhuslik arv

Meetod `random()` tagastab juhusliku arvu vahemikus 0 (kaasaarvatud) kuni 1 (väljaarvatud).

```javascript
console.log(Math.random()); // 0.123456789012345
```

Täieliku nimekirja `Math` objekti omadustest ja meetoditest leiad [siit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math).