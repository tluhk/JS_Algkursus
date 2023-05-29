# Tingimuslause

Tingimuslause on programmeerimises kasutatav kontrollstruktuur, mis võimaldab koodil käituda erinevalt sõltuvalt teatud tingimuste täitmisest. JavaScriptis on tingimuslauseid mitut tüüpi, siinkohal käsitleme neist kolme: `if`, `else if` ja `else`.

1. **`if` lause:** See on kõige lihtsam tingimuslause. See käivitab teatud koodibloki ainult siis, kui tingimus on tõene.

    ```javascript
    let x = 10;
    if (x > 5) {
        console.log('x on suurem kui 5');
    }
    ```

2. **`else if` lause:** Seda kasutatakse mitme tingimuse kontrollimiseks. Kui `if` tingimus ei ole tõene, kontrollitakse `else if` tingimust. Kui `else if` tingimus on tõene, käivitatakse selle koodiblokk.

    ```javascript
    let x = 10;
    if (x > 15) {
        console.log('x on suurem kui 15');
    } else if (x > 5) {
        console.log('x on suurem kui 5');
    }
    ```

3. **`else` lause:** Käivitab koodibloki, kui kõik eelnevad tingimused ei ole tõesed. Seda kasutatakse sageli lõpliku "kukkumisvariandina", kui ükski muu tingimus pole tõene.

    ```javascript
    let x = 10;
    if (x > 15) {
        console.log('x on suurem kui 15');
    } else if (x > 20) {
        console.log('x on suurem kui 20');
    } else {
        console.log('x ei ole suurem kui 15 ega 20');
    }
    ```

Need tingimuslaused võimaldavad koodi dünaamiliselt juhtida, tehes otsuseid vastavalt muutujate väärtustele või funktsioonide tulemustele.

Tingimuslausete moodustamisel on abiks tõeväärtustabelid. Tõeväärtustabelid on tabelid, mis näitavad, milline on loogilise avaldise tulemus sõltuvalt sellest, millised on avaldise muutujate väärtused. Tõeväärtustabelitest saad lugeda [siit](../toevaartusTabel/about.md).