// PROBLEM:

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// STEPS:

// 1. Creo una variabile con un numero randomico da 1 a 6 per il giocatore
// 2. Creo una variabile con un numero randomico da 1 a 6 per il computer 
// 3. SE il numero del giocatore è maggiore rispetto il numero del computer 
//    comparirà un alert che gli dice che ha vinto e i numeri che sono stati confrontati
// 4. ALTRIMENTI SE il numero del computer è maggiore rispetto il numero del giocatore
//    comparirà un alert che dice che ha perso e che ha vinto il computer e i numeri che sono stati confrontati
// 5. ALTRIMENTI i numeri sono uguali e comprarirà un alert che avviserà del pareggio

// CODE: 

// 1. 
const playerNumber = Math.ceil(Math.random() *6)
console.log (`Numero giocatore: ${playerNumber}`)

// 2.
const computerNumber = Math.ceil(Math.random() *6)
console.log (`Numero computer: ${computerNumber}`)

// 3 (if) - 4 (else if) - 5 (else). 
if (playerNumber > computerNumber) {
    alert(`🔢 Il numero estratto per te è stato: 🎲 ${playerNumber} 🎲, 🔢 il numero estratto per il computer è stato: 🎲 ${computerNumber} 🎲, perciò... `)
    alert(`🟢🎆✨ HAI VINTO! 💸🎉🟢 Complimenti! 🎊🧨 🔢 Risultato 🏆 ${playerNumber} 🏆 - 💔 ${computerNumber} 💔`)
} else if (computerNumber > playerNumber) {
    alert(`🔢 Il numero estratto per te è stato: 🎲 ${playerNumber} 🎲, 🔢 il numero estratto per il computer è stato: 🎲 ${computerNumber} 🎲, perciò... `)
    alert(`🔴☠💩 HAI PERSO! 💩☠🔴 Ritenta, sarai più fortunato! ❌🛑 🔢 Risultato 💔 ${playerNumber} 💔 - 🏆 ${computerNumber} 🏆`)
} else {
    alert(`🔢 Il numero estratto per te è stato: 🎲 ${playerNumber} 🎲, 🔢 il numero estratto per il computer è stato: 🎲 ${computerNumber} 🎲, perciò... `)
    alert(`🟡 PAREGGIO! 🟡 Stessi numeri estratti, ritenta! 🟡 🔢 Risultato 🟨 ${playerNumber} 🟨 - 🟨 ${computerNumber} 🟨`)
}