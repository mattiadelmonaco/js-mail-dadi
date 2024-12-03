// PROBLEM:

// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Non è necessario provvedere alla validazione delle email.
// NON POTETE UTILIZZARE NESSUN METODO COME:
// - includes
// - indexOf
// - find
// - search
// - ecc...

// STEPS:

// 1. Creo un array con un elenco di email 
// 2. Inserisco una variabile con un prompt per chiedere all'utente di inserire la sua mail
// 3. Creo una variabile booleana per confermare o meno la presenza della mail
// 4. Attraverso l'array (con un ciclo for) per far leggere al sistema la lista delle mail accettate
// 5. SE la variabile booleana è TRUE (quindi mail presente in lista) comparirà un alert con scritto l'esito positivo
// 6. ALTRIMENTI (variabile booleana FALSE) comparirà un alert con scritto l'esito negativo 

// CODE:

// 1.
const mailList = ["maria.rossi72@example.com",
"lucas.bianchi90@example.org",
"giulia.verdi56@example.net",
"andrea.neri21@example.it",
"francesca.gialli83@example.edu",
"alessandro.morandi77@example.co.uk",
"stefano.bonetti44@example.biz",
"elena.donato19@example.tv",
"michele.rinaldi30@example.info",
"sara.ferrari52@example.us"]
console.log (mailList)

// 2. 
const userMail = prompt("📧 Inserisci la tua mail: 📧 🔎 ricorda di scriverla correttamente! 🔍 (es.: email@diesempio.com)")

// 3.
let isMailValid = false
console.log (isMailValid)

// 4. 
for (let i = 0; i < mailList.length; i++) {
    if (userMail === mailList[i]) {
        isMailValid = true
    }
    console.log (isMailValid)
}

// 5 (if) - 6 (else).
if (isMailValid) {
    alert(`✔ La mail inserita (${userMail}) è presente nel sistema! 🥳 🔓 Puoi accedere correttamente! 🟢`)
} else {
    alert(`❌ La mail inserita (${userMail}) NON è presente nel sistema! 🛑 🔒 NON puoi accedere! 🔴`)
}