# Võrdlusoperaatorid

JavaScripti võrdlusoperaatorid võimaldavad võrrelda kahte väärtust ja tagastada tõeväärtus (`true` või `false`) sõltuvalt sellest, kas võrdlus on tõene. Siin on peamised JavaScripti võrdlusoperaatorid:

1. **Võrdne (`==`):** Tagastab tõeväärtuse `true`, kui mõlemad pooled on võrdsed, pärast tüübiteisendust.

    ```javascript
    let x = 10;
    console.log(x == 10); // true
    console.log(x == "10"); // true
    ```

2. **Mitte võrdne (`!=`):** Tagastab `true`, kui pooled ei ole võrdsed, pärast tüübiteisendust.

    ```javascript
    let x = 10;
    console.log(x != 5); // true
    console.log(x != "10"); // false
    ```

3. **Täpselt võrdne (`===`):** Tagastab `true`, kui pooled on võrdsed, ilma tüübiteisenduseta.

    ```javascript
    let x = 10;
    console.log(x === 10); // true
    console.log(x === "10"); // false
    ```

4. **Täpselt mitte võrdne (`!==`):** Tagastab `true`, kui pooled ei ole võrdsed, ilma tüübiteisenduseta.

    ```javascript
    let x = 10;
    console.log(x !== 5); // true
    console.log(x !== "10"); // true
    ```

5. **Suurem kui (`>`):** Tagastab `true`, kui esimene pool on suurem kui teine.

    ```javascript
    let x = 10;
    console.log(x > 5); // true
    ```

6. **Väiksem kui (`<`):** Tagastab `true`, kui esimene pool on väiksem kui teine.

    ```javascript
    let x = 10;
    console.log(x < 15); // true
    ```

7. **Suurem või võrdne (`>=`):** Tagastab `true`, kui esimene pool on suurem või võrdne teisega.

    ```javascript
    let x = 10;
    console.log(x >= 10); // true
    ```

8. **Väiksem või võrdne (`<=`):** Tagastab `true`, kui esimene pool on väiksem või võrdne teisega.

    ```javascript
    let x = 10;
    console.log(x <= 10); // true
    ```

Need võrdlusoperaatorid on väga kasulikud tingimuslausetes ja tsüklites, et kontrollida, kas teatud tingimused on täidetud.

> Üldiselt soovitatakse kasutada === ja !== operaatoreid, sest need annavad täpsemaid tulemusi ja aitavad vältida vigu, mis tulenevad ootamatust tüübiteisendusest.