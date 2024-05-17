# Suhtlemine veebilehitsejaga: alert, prompt, confirm ja console.log

## Sissejuhatus

Selles peatükis käsitleme, kuidas JavaScriptiga saab veebilehitsejas kasutajaga suhelda, kasutades funktsioone `alert`, `prompt`, `confirm` ja `console.log`. Tutvustame iga funktsiooni praktiliste näidete abil ja arutame, millal ja miks peaks või ei peaks neid meetodeid kasutama. Samuti selgitame, mida tähendab programmiga suhtlemine ja millistel viisidel seda saab üldiselt teha, keskendudes spetsiifiliselt JavaScriptile.

## Õpiväljundid

Selle õppetüki lõpuks peaksid õppijad suutma:

- kasutada `alert`, `prompt`, `confirm` ja `console.log` funktsioone veebilehitsejas;
- mõista, millistes olukordades on nende funktsioonide kasutamine asjakohane;
- kirjutada praktilisi näiteid, mis demonstreerivad nende funktsioonide kasutamist;
- mõista, mida tähendab programmiga suhtlemine ja millised on erinevad viisid seda JavaScriptis teha.

## Programmiga suhtlemine

Programmi ja kasutaja vaheline suhtlemine tähendab, et programm edastab kasutajale teavet või küsib kasutajalt sisendit, et teha otsuseid või täita teatud ülesandeid. See suhtlemine võib toimuda mitmel viisil:

- **Tekstilised teated ja sisendid:** Kasutades hüpikaknaid või vorme, et kuvada teateid või koguda andmeid.
- **Graafiline kasutajaliides (GUI):** Kasutades nuppe, menüüsid, dialooge ja muid graafilisi elemente.
- **Konsoolil põhinev suhtlemine:** Kuvades teateid ja sisestades andmeid terminalis või arendajakonsoolis.

JavaScriptis on mitu meetodit kasutajaga suhtlemiseks veebilehitseja kaudu.

## alert

`alert` funktsioon kuvab veebilehitsejas hüpikakna koos sõnumiga ja OK-nupuga. Seda kasutatakse kasutajale kiirete teadete edastamiseks.

**Näide:**

```javascript
alert("Tere tulemast JavaScripti maailma!");
```

**Põhjendus:**

- **Kasutada:** Kui on vaja edastada olulist teadet või hoiatust, mis nõuab kasutaja kohest tähelepanu.
- **Mitte kasutada:** Kuna `alert` peatab kogu lehe tegevuse, võib see olla kasutaja jaoks tüütu ja katkestav, eriti kui seda kasutatakse liiga sageli.

## prompt

`prompt` funktsioon kuvab hüpikakna koos tekstisõnumiga, sisestusvälja ja OK- ning Tühista-nupuga. Seda kasutatakse kasutajalt sisendi saamiseks.

**Näide:**

```javascript
var nimi = prompt("Palun sisestage oma nimi:");
alert("Tere, " + nimi + "!");
```

**Põhjendus:**

- **Kasutada:** Kui on vaja kasutajalt kiiresti ja lihtsalt sisendit saada.
- **Mitte kasutada:** Kuna `prompt` peatab kogu lehe tegevuse ja kasutajaliides pole eriti atraktiivne, võib see pakkuda kehva kasutajakogemust.

## confirm

`confirm` funktsioon kuvab hüpikakna koos sõnumiga ja OK- ning Tühista-nupuga. Seda kasutatakse kasutajalt jah/ei tüüpi vastuse saamiseks.

**Näide:**

```javascript
var kinnita = confirm("Kas olete kindel, et soovite jätkata?");
if (kinnita) {
    alert("Te valisite 'Jah'");
} else {
    alert("Te valisite 'Ei'");
}
```

**Põhjendus:**

- **Kasutada:** Kui on vaja kasutajalt kinnitust mingi tegevuse kohta, näiteks andmete kustutamine või lehelt lahkumine.
- **Mitte kasutada:** Kuna `confirm` peatab kogu lehe tegevuse ja võib olla kasutaja jaoks katkestav, tuleks seda kasutada säästlikult.

## console.log

`console.log` funktsioon kuvab teateid veebilehitseja konsoolis. Seda kasutatakse arenduse ja silumise ajal, et jälgida koodi täitmist ja kuvada muutujate väärtusi. Google Chrome'i konsooli saab avada, vajutades `F12` ja valides "Console" vahekaardi.

**Näide:**

```javascript
console.log("See on logisõnum.");
var nimi = "Mari";
console.log("Kasutaja nimi on: " + nimi);
```

**Põhjendus:**

- **Kasutada:** Arendamise ja silumise ajal, et jälgida koodi käitumist ja leida vigu. Seda ei näe lõppkasutaja, mistõttu ei mõjuta see kasutajakogemust.
- **Mitte kasutada:** Lõppkasutajale mõeldud teadete kuvamiseks, kuna tavakasutaja ei pruugi konsooli vaadata.

## Harjutusülesanded

- **Praktiline ülesanne:**
  - Loo HTML-fail, mis kasutab kõiki nelja meetodit: `alert`, `prompt`, `confirm` ja `console.log`. Testi neid meetodeid, et mõista nende tööpõhimõtteid ja mõju kasutajakogemusele.

- **Küsimused enesekontrolliks:**
  - Millal on sobilik kasutada `alert` funktsiooni?
  - Kuidas erinevad `prompt` ja `confirm` funktsioonid?
  - Miks on `console.log` oluline arenduse ajal, kuid mitte lõppkasutajale?

## Allikad

- [Window.alert() - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)
- [Window.prompt() - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
- [Window.confirm() - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)
- [Console.log() - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)
