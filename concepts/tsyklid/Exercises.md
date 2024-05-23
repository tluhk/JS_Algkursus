# Lisaülesanded tsüklitele

Kui õppematerjalides olevad ülesanded on lahendatud, kuid sooovid veel harjutada, siis siin on mõned lisaülesanded, mida saad proovida. Need ülesanded aitavad sul harjutada tingimuslausete kasutamist erinevates stsenaariumides.

- [Lisaülesanded tsüklitele](#lisaülesanded-tsüklitele)
  - [Ülesanne 1: Paaris ja paarita arvude loendamine](#ülesanne-1-paaris-ja-paarita-arvude-loendamine)
  - [Ülesanne 2: Tähtede Kordamine](#ülesanne-2-tähtede-kordamine)
  - [Ülesanne 3: Arvu Faktoriaal](#ülesanne-3-arvu-faktoriaal)
  - [Ülesanne 4: Arvude Tagurpidi Loendamine](#ülesanne-4-arvude-tagurpidi-loendamine)
  - [Ülesanne 5: Fibonacci Jada Esimesed N Elementi](#ülesanne-5-fibonacci-jada-esimesed-n-elementi)

## Ülesanne 1: Paaris ja paarita arvude loendamine

**Ülesanne:** Kasuta `while` tsüklit, et trükkida konsooli kõik arvud vahemikus `1` kuni `10`. Kui arv on paaris, lisa arvu juurde sõna `Paaris`, kui paaritu, lisa `Paaritu`.

**Oodatav Tulemus:**

```bash
1 Paaritu
2 Paaris
3 Paaritu
4 Paaris
5 Paaritu
6 Paaris
7 Paaritu
8 Paaris
9 Paaritu
10 Paaris
```

## Ülesanne 2: Tähtede Kordamine

**Ülesanne:** Kirjuta programm, mis kasutab `for` tsüklit, et trükkida iga täht sõnast "Hello!" uuel real, korrates iga tähte vastavalt selle järjekorranumbrile.

**Oodatav Tulemus:**

```bash
H
ee
lll
llll
ooooo
!!!!!!
```

> Vihje: Stringist iga tähe saamiseks kasuta `charAt` meetodit. Näiteks `let letter = "Hello!".charAt(0);` annab `H`.
>
> Vihje: Kasuta `repeat` meetodit, et korrata tähti vastavalt nende järjekorranumbrile. Näiteks `"l".repeat(3)` annab `lll`.

## Ülesanne 3: Arvu Faktoriaal

**Ülesanne:** Deklareeri muutuja `number` positiivse täisarvuga. Kasuta `while` või `for` tsüklit, et leida ja trükkida selle arvu faktoriaal. Faktoriaal on arvude korrutis vahemikus `1` kuni `n` ja seda tähistatakse `n!`. Näiteks `4! = 4 * 3 * 2 * 1`.

**Näide:** `let number = 5;`

**Oodatav Tulemus:**

```bash
120
```

## Ülesanne 4: Arvude Tagurpidi Loendamine

**Ülesanne:** Kasuta `do-while` tsüklit, et trükkida numbrid 10-st 1-ni tagurpidi järjekorras.

**Oodatav Tulemus:**

```bash
10
9
8
7
6
5
4
3
2
1
```

## Ülesanne 5: Fibonacci Jada Esimesed N Elementi

**Ülesanne:** Kirjuta programm, mis genereerib ja trükib Fibonacci jada esimesed N elementi, kus N on ette antud positiivne täisarv. Fibonacci jada on jada, kus iga arv on kahe eelmise arvu summa. Näiteks `0 1 1 2 3 5 8 13 21 34`.

**Näide:** `let N = 6;`

**Oodatav Tulemus:**

```bash
0 1 1 2 3 5
```
