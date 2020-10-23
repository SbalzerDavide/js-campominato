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






//********************creazione campo da gioco*****************************
var numeroMin = 1
var numeroMax = 100
var rangeNumeri = numeroMax - numeroMin + 1;

//selezione difficoltà
var diff = parseInt(prompt ('inserisci un livello di difficoltà tra 0 e 2'));

while (diff != 0 && diff!= 1 && diff != 2 ){
    diff = parseInt(prompt ('ATTENZIONE: inserisic un numero compreso tra 0 e 2'));
}

if (diff = 0){
    numeroMax = 100;
} else if (diff = 1){
    numeroMax = 80;
} else{
    numeroMax = 50;
}

console.log('numeroMax":' + numeroMax);

//creazione random delle bombe
var numeroBombe = 20;

var bombe = [];

var nuovaBomba;

while (bombe.length < numeroBombe){
    nuovaBomba = randomNumber (numeroMin, numeroMax);
    if (! bombe.includes(nuovaBomba)){
        bombe.push(nuovaBomba);
    }
}
//************************************************************************


console.log(bombe);

var user = 0;

var listUser = [];

var punteggio = listUser.length ;
console.log('list user:', listUser);

while (! bombe.includes(user) && listUser.length <= (rangeNumeri - numeroBombe) ){

    //inserimento numeri utente e verica che non ci siano doppioni
    while (listUser.includes(user) || user < numeroMin || user > numeroMax ){
        user = parseInt(prompt('Inserisci un numero'));

        //messaggio di vvertimento nel caso il numero sia gia stato inserito
        if (listUser.includes(user)){
            alert('ATTENZIONE: hai gia inserito questo numero');
        } else if (user < numeroMin || user > numeroMax){
            alert('ATTENZIONE: inserisic un numero compreso tra ' + numeroMin + ' e ' + numeroMax);
        }
    }

    //inserimento del nuovo numero nell'array se rispettante le condizioni precedenti
    listUser.push(user);
    if (! bombe.includes(user)){
        punteggio++;
    }
    console.log('complimenti non hai beccato nessuna bomba!');
    console.log('punteggio attuale:', punteggio);
}


//visualizzazione punteggio finale e ipotetica vittoria
if (punteggio < (rangeNumeri - numeroBombe)){
    console.log('La partita è finita ed hai fatto un punteggio di:', punteggio);
} else if(punteggio== (rangeNumeri - numeroBombe )){
    console.log('Complimenti hai vinto la partita');
}






//funzioni
/**
 * creazione numeri random compresi tra i due parametri in ingresso
 * @param {*} min numero minimo 
 * @param {*} max numero massimo
 */
function randomNumber (min, max){
    var random = Math.floor(Math.random()* (max - min + 1) ) + min;
    return random;
}

