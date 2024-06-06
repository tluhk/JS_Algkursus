// Lihtne versioon kivi-paber-käärid mängust

// Player 1
let player1 = prompt('Player 1: Rock, Paper or Scissors?').toLowerCase(); // Küsime esimeselt mängijalt sisendit
while (player1 !== 'rock' && player1 !== 'paper' && player1 !== 'scissors') { // Tsükkel, mis kestab seni kuni mängija sisestab õige sisendi
    player1 = prompt('Player 1: Rock, Paper or Scissors?').toLowerCase();
}

// Player 2
let player2 = prompt('Player 2: Rock, Paper or Scissors?').toLowerCase(); // Küsime teiselt mängijalt sisendit
while (player2 !== 'rock' && player2 !== 'paper' && player2 !== 'scissors') { // Tsükkel, mis kestab seni kuni mängija sisestab õige sisendi
    player2 = prompt('Player 2: Rock, Paper or Scissors?').toLowerCase();
}

// Game logic
if (player1 === player2) { // Kui mõlemad mängijad valivad sama, siis on viik
    alert('It\'s a tie!');
}

if (player1 === 'rock') { // Kui esimene mängija valib kivi
    if (player2 === 'paper') {
        alert('Player 2 wins!');
    } else if (player2 === 'scissors') {
        alert('Player 1 wins!');
    }
}

if (player1 === 'paper') { // Kui esimene mängija valib paberi
    if (player2 === 'scissors') {
        alert('Player 2 wins!');
    } else if (player2 === 'rock') {
        alert('Player 1 wins!');
    }
}

if (player1 === 'scissors') { // Kui esimene mängija valib käärid
    if (player2 === 'rock') {
        alert('Player 2 wins!');
    } else if (player2 === 'paper') {
        alert('Player 1 wins!');
    }
}

