//"Sono in lista?" Chiedi all'utente la sua email e controlla che sia nella lista di chi può accedere (ergo: la mail è presente in un array contenente le email "autorizzate") e stampa un messaggio appropriato;

//lista di e-mail autorizzate;
var mail = ["pietro@hotmail.it", "luca@hotmail.it", "giuseppe@homail.it", "marco@homail.it", "giovanni@homail.it"];
console.log(mail);
console.log(mail[2]);
console.log(mail.length);

//chiedo l'e-mail all'utente;
var e_mail = prompt("Qual è la tua e-mail");
console.log(e_mail);

//confronto l'e-mail inserita dall'utente con quelle autorizzate;
var inlista;
for(var i = 0; i < mail.length ; i++) {
    if (e_mail == mail[i]) {
        inlista = true;
    }
    // else {
    //     inlista = false;
    // }
}

if (inlista == true) {
    document.getElementById('autorizzazione').innerHTML = ('Sei in lista');
}
else {
    document.getElementById('autorizzazione').innerHTML = ('Non sei in lista');
}
