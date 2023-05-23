# Loogikaoperaatorid

JavaScripti loogikaoperaatorid võimaldavad teha loogilisi operatsioone. Tavaliselt kasutatakse neid tingimustes, kus on vaja teha otsuseid. JavaScriptis on kolm põhilist loogikaoperaatorit:

1. **AND (`&&`)**: Tagastab `true`, kui mõlemad operandid on tõesed.

    ```javascript
    let x = 5;
    let y = 10;
    console.log(x < 10 && y > 1); // true, sest mõlemad tingimused on tõesed
    ```

2. **OR (`||`)**: Tagastab `true`, kui vähemalt üks operandidest on tõene.

    ```javascript
    let x = 5;
    let y = 10;
    console.log(x < 4 || y > 1); // true, sest teine tingimus on tõene
    ```

3. **NOT (`!`)**: Tagastab `true`, kui operand on väär; ja vastupidi.

    ```javascript
    let x = 5;
    console.log(!(x < 4)); // true, sest x ei ole väiksem kui 4
    ```

Need operaatorid on väga kasulikud tingimuslausetes (nagu `if`, `while` jne), kus on vaja kontrollida, kas mitu tingimust on korraga täidetud, või kas vähemalt üks tingimus on täidetud. Samuti aitavad need eitada mingi tingimuse tõeväärtust.