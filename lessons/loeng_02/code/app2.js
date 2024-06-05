// Küsime valikud mängijatelt
const player1Choice = prompt("Mängija 1, palun vali: kivi, paber või käärid").toLowerCase();
const player2Choice = prompt("Mängija 2, palun vali: kivi, paber või käärid").toLowerCase();

// Funktsioon tulemuse määramine
const determineWinner = (choice1, choice2) => {
    // See rida kontrollib, kas mõlemad mängijad valisid sama  (nt:“kivi”). Kui see juhtub,tuleb sõnum “Viik!”.
    if (choice1 === choice2) return "Viik!";
    // Need kolm kontrollivad, kas mängija 1 võidab. (Näiteks, kui mängija 1 valis “kivi” ja mängija 2 valis “käärid”, siis mängija 1 võidab.)
    if ((choice1 === "kivi" && choice2 === "käärid") || 
        (choice1 === "paber" && choice2 === "kivi") || 
        (choice1 === "käärid" && choice2 === "paber")) {
        return "Mängija 1 võidab!";
    }
    // Kui ükski eelnevatest ridadest ei kehti, tuleb aken “Mängija 2 võidab!”.
    return "Mängija 2 võidab!";
};

// See rida kuvab tulemuse
alert(determineWinner(player1Choice, player2Choice));