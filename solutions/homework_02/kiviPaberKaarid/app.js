const player1Input = prompt('Esimene mängija, sisesta oma valik:', 'kivi, paber või käärid');
const player2Input = prompt('Teine mängija, sisesta oma valik:', 'kivi, paber või käärid');

if (player1Input === player2Input) {
  alert('Viik!');
} else if (player1Input === 'kivi') {
  if (player2Input === 'käärid') {
    alert('Võitis mängija 1!');
  } else {
    alert('Võitis mängija 2!');
  }
} else if (player1Input === 'paber') {
  if (player2Input === 'kivi') {
    alert('Võitis mängija 1!');
  } else {
    alert('Võitis mängija 2!');
  }
} else if (player1Input === 'käärid') {
  if (player2Input === 'paber') {
    alert('Võitis mängija 1!');
  } else {
    alert('Võitis mängija 2!');
  }
}
