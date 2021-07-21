alert ("Sono Javascripting e sono pronto a servirti ;)");

var nomeGiocatore = window.prompt (" Ciao, inserisci il tuo nome: " );

document.getElementById("titolo").innerHTML = " Benvenuto " + nomeGiocatore;

var sceltaUtente;

function cliccatoCarta () {
    sceltaUtente = "carta";
    alert (nomeGiocatore + " hai scelto " + sceltaUtente);
}
function cliccatoForbici () {
    sceltaUtente = "forbici";
    alert (nomeGiocatore + " hai scelto " + sceltaUtente);
}
function cliccatoSasso () {
    sceltaUtente = "sasso";
    alert (nomeGiocatore + " hai scelto " + sceltaUtente);
}

function verdetto () {
    document.getElementById ("carta").style.display = 'none';
    document.getElementById ("forbici").style.display = 'none';
    document.getElementById ("sasso").style.display = 'none';
    document.getElementById ("pulsante").style.display = 'none';
    var sceltaComputer;
    if (sceltaUtente == "carta") {
         sceltaComputer = "forbici";
    }
    if (sceltaUtente == "forbici") {
         sceltaComputer = "sasso";
    }
    if (sceltaUtente == "sasso") {
         sceltaComputer = "carta";
    }
    document.getElementById ("titolo").innerHTML = nomeGiocatore + " HAI PERSO! ";
    document.getElementById ("informazioni").innerHTML = " Il computer ha scelto " + sceltaComputer + ". Tu, perdente, hai scelto " + sceltaUtente;
}
