// PROBLEM:

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// STEPS:

// 1. Creo una variabile con un numero randomico da 1 a 6 per il giocatore
// 2. Creo una variabile con un numero randomico da 1 a 6 per il computer 
// 3. SE il numero del giocatore è maggiore rispetto il numero del computer 
//    comparirà un alert che gli dice che ha vinto e i numeri che sono stati confrontati
// 4. ALTRIMENTI comparirà un alert che dice che ha perso e che ha vinto il computer e i numeri che sono stati confrontati

// CODE: 

// 1. 
const playerNumber = Math.ceil(Math.random() *6)
console.log (playerNumber)

