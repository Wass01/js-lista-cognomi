// Chiedere all’utente il cognome,
// inserirlo in un array con altri cognomi
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova


var listaCognomi = ['Bianchi', 'Rossi', 'Perlari', 'Lodigiani', 'Mastrobattista', 'Verdi'];

do {
  var cognome = prompt("Dimmi il tuo cognome:").trim();
} while (!isNaN(cognome));

listaCognomi.push(cognome);
listaCognomi.sort();
console.log(listaCognomi);
