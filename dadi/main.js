//Gioco dei dadi" PC vs. Human: chiedi un numero all'utente tra 1 e 6 (giocata human) e estrai un numero casuale tra 1 e 6 (giocata PC). Chi fa il numero più alto vince!;

//chiedere all'utente un numero tra 1 e 6;
var numero = prompt("Scegli un numero da 1 a 6")
console.log(numero);

//visuallizazione in pagina utente;
document.getElementById('utente').innerHTML = ('Risultato Utente: ' + numero);

//estrarre un numero casuala dal pc;
var pc = Math.floor(Math.random() * 6) + 1;
console.log(pc);

//visuallizazione in pagina pc;
document.getElementById('pc').innerHTML = ('Risultato pc: ' + pc);

//controllo valore dell'utente;
//confronta i due numeri
if (isNaN(numero) || numero < 1 || numero > 6){
console.log("valore non valido");
document.getElementById('risultato').innerHTML = ("valore non valido");

}
else if (numero == pc) {
    console.log("Hai pareggiato");
    document.getElementById('risultato').innerHTML = ("Hai pareggiato");

}
else {
    console.log("hai pareggiato");
    document.getElementById('risultato').innerHTML = ("hai pareggiato");
}
