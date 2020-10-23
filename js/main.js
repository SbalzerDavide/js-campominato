/*
Descrizione
Il computer deve generare 16 numeri casuali (bombe) tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati (bombe), la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.
*/
var x = randomNumber(1, 100);
console.log(x);
var numeroBombe = 16;

var bombe = [];
console.log(x);

var nuovaBomba;

while (bombe.length < numeroBombe){
    nuovaBomba = randomNumber (1, 20);
    if (! bombe.includes(nuovaBomba)){
        bombe.push(nuovaBomba);
    }
}

console.log(bombe);



//funzioni

function randomNumber (min, max){
    var random = Math.floor(Math.random()* (max - min + 1) ) + min;
    return random;
}

