# Algoritmid

## Sisukord

- [Algoritmid](#algoritmid)
  - [Sisukord](#sisukord)
  - [Sissejuhatus](#sissejuhatus)
  - [Õpiväljundid](#õpiväljundid)
  - [Mis on algoritm?](#mis-on-algoritm)
  - [Algoritmide tähtsus programmeerimises](#algoritmide-tähtsus-programmeerimises)
  - [Kuidas koostada algoritme](#kuidas-koostada-algoritme)
    - [Näide: Hommikuse rutiini algoritm](#näide-hommikuse-rutiini-algoritm)
  - [Algoritmide tõhusus ja keerukus](#algoritmide-tõhusus-ja-keerukus)
    - [Näide: O-märgistused](#näide-o-märgistused)
  - [Harjutusülesanded](#harjutusülesanded)
  - [Allikad](#allikad)

## Sissejuhatus

Selles peatükis tutvustatakse algoritme – mis need on, miks nad on olulised ja kuidas neid koostada. Õpid tundma algoritmide põhiomadusi, tähtsust programmeerimises, algoritmide tõhususe ja keerukuse hindamist ning saad praktilisi näpunäiteid ja harjutusülesandeid.

## Õpiväljundid

Selle õppetüki lõpuks peaksid õppijad suutma:

- defineerida, mis on algoritm;
- selgitada algoritmide tähtsust programmeerimises;
- koostada lihtsaid algoritme probleemide lahendamiseks;
- hinnata algoritmide tõhusust ja keerukust.

## Mis on algoritm?

Algoritm on samm-sammuline juhis probleemi lahendamiseks või ülesande täitmiseks. See koosneb lõplikust hulgast selgetest juhistest, mis viivad soovitud tulemuseni. Algoritmid on programmeerimise alus ja neid kasutatakse arvutiprogrammide kirjutamiseks, et automatiseerida ja lahendada erinevaid probleeme.

**Peamised omadused:**

- **Lõplikkus:** Algoritm peab lõppema pärast lõpliku arvu sammude sooritamist.
- **Üheselt mõistetavus:** Iga samm peab olema selge ja üheselt mõistetav.
- **Sisend:** Algoritm võtab vastu null või rohkem sisendeid.
- **Väljund:** Algoritm toodab vähemalt ühe väljundi.
- **Teostatavus:** Iga samm peab olema praktiliselt teostatav piiratud aja jooksul.

## Algoritmide tähtsus programmeerimises

Algoritmid mängivad programmeerimises keskset rolli. Need võimaldavad arendajatel luua tõhusaid ja optimeeritud lahendusi erinevatele probleemidele. Algoritmide mõistmine ja rakendamine aitab:

- **parandada koodi tõhusust:** Hea algoritm võib oluliselt vähendada koodi täitmise aega ja ressursikasutust;
- **lahendada keerulisi probleeme:** Algoritmid võimaldavad lahendada probleeme, mis oleksid muidu liiga keerulised või aeganõudvad;
- **struktureerida koodi paremini:** Algoritmid aitavad koodi loogiliselt ja struktureeritult üles ehitada.

## Kuidas koostada algoritme

Algoritmide koostamine hõlmab probleemi analüüsimist ja selle lahendamise sammude kavandamist. Põhiprotsess sisaldab järgmisi samme:

- **Probleemi defineerimine:** Selgelt määratle probleem ja soovitud tulemus.
- **Sisendite ja väljundite määramine:** Määratle, millised andmed on vajalikud ja milline on soovitud väljund.
- **Sammude kavandamine:** Koosta samm-sammult juhis probleemi lahendamiseks.
- **Testimine ja täiustamine:** Kontrolli algoritmi toimimist erinevate sisenditega ja paranda seda vajaduse korral.

### Näide: Hommikuse rutiini algoritm

1. Ära äratuskell.
2. Tõuse voodist.
3. Mine vannituppa.
4. Pese hambad.
5. Valmista hommikusöök.
6. Söö hommikusöök.
7. Riietu.
8. Lahku kodust.

## Algoritmide tõhusus ja keerukus

Algoritmide tõhususe ja keerukuse hindamiseks kasutatakse tavaliselt asümptootilist analüüsi, mis keskendub algoritmi käitumisele suurte sisendite korral. Peamised kontseptsioonid hõlmavad:

- **Ajatõhusus (Time Complexity):** Määrab, kui palju aega algoritm vajab sisendi suuruse kasvades.
- **Ruumitõhusus (Space Complexity):** Määrab, kui palju mälu algoritm vajab sisendi suuruse kasvades.

Tõhususe mõõtmiseks kasutatakse sageli suurt O-märgistust, mis kirjeldab algoritmi käitumist halvimas võimalikus olukorras.

### Näide: O-märgistused

- **O(1):** Konstantaegne keerukus. Näide: elementide otsimine otseselt indeksiga massiivist.
- **O(n):** Lineaarne keerukus. Näide: massiivi kõigi elementide läbimine.
- **O(n^2):** Ruutkeerukus. Näide: kahekordne silmus, mis läbib massiivi.

## Harjutusülesanded

- **Praktiline ülesanne:**
  - Koosta algoritm, mis kirjeldab tassi tee valmistamise protsessi.

- **Küsimused enesekontrolliks:**
  - Mis on algoritm ja millised on selle peamised omadused?
  - Miks on algoritmid programmeerimises olulised?
  - Kirjelda algoritmi koostamise protsessi.

## Allikad

- [Algorithm Basics - GeeksforGeeks](https://www.geeksforgeeks.org/fundamentals-of-algorithms/)
- [Big O Notation - Wikipedia](https://en.wikipedia.org/wiki/Big_O_notation)
