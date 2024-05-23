# Lisaülesanded massiivide kohta

Kui õppematerjalides olevad ülesanded on lahendatud, kuid sooovid veel harjutada, siis siin on mõned lisaülesanded, mida saad proovida. Need ülesanded aitavad sul harjutada massiivide kasutamist erinevates stsenaariumides.

- [Lisaülesanded massiivide kohta](#lisaülesanded-massiivide-kohta)
  - [Ülesanne 1: Elemendi Indeksi Leidmine](#ülesanne-1-elemendi-indeksi-leidmine)
  - [Ülesanne 2: Duplikaatide Eemaldamine](#ülesanne-2-duplikaatide-eemaldamine)
  - [Ülesanne 3: Massiivi Pööramine](#ülesanne-3-massiivi-pööramine)

## Ülesanne 1: Elemendi Indeksi Leidmine

**Kirjeldus:** Sinu ülesandeks on leida arve sisaldavast massiivist etteantud  element ja väljastada selle indeks. Kui elementi ei leidu, väljasta -1.

**Näide:**

- Massiiv: `[1, 3, 5, 7, 9]`
- Otsitav element: `5`
- Väljund: `2`

## Ülesanne 2: Duplikaatide Eemaldamine

**Kirjeldus:** Eemalda massiivist kõik duplikaadid, nii et iga element esineks ainult üks kord, ja väljasta tulemus.

**Näide:**

- Massiiv: `[1, 2, 2, 3, 4, 4, 5]`
- Väljund: `[1, 2, 3, 4, 5]`

> **Vihje:** Sul võib ülesande lahendamisel olla abi [`includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) meetodist.
>
> Soovitav on kasutada uut massiivi, kuhu salvestada ainult unikaalsed elemendid.
>
> Massiivi saad lisada elemente kasutades [`push`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) meetodit.

## Ülesanne 3: Massiivi Pööramine

**Kirjeldus:** Pööra etteantud massiiv ümber nii, et esimene element oleks viimane ja viimane element esimene, ning väljasta tulemus.

**Näide:**

- Massiiv: `[1, 2, 3, 4, 5]`
- Väljund: `[5, 4, 3, 2, 1]`
