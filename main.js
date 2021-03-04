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

for (var i = 0; i < listaCognomi.length; i++) {
  document.getElementById('cognomi').innerHTML += "<li>" + listaCognomi[i] + "</li>";
}

for (var j = 0; j < listaCognomi.length; j++) {
  console.log(listaCognomi[j] + " si trova nella posizione numero: " + (j + 1));
}
