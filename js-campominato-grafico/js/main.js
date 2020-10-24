//inserimento numeri dentro i box
for (var i = 1; i < 101; i++){
    var y = 'a', i;
    y = document.getElementById(i).innerHTML = i;
}

//********************creazione campo da gioco*****************************
var numeroMin = 1
var numeroMax = 100
var rangeNumeri = numeroMax - numeroMin + 1;

console.log('numeroMax":' + numeroMax);

//creazione random delle bombe
var numeroBombe = 20;
console.log('numero bombe: ' + numeroBombe);

var bombe = [];

var nuovaBomba;

while (bombe.length < numeroBombe){
    nuovaBomba = randomNumber (numeroMin, numeroMax);
    if (! bombe.includes(nuovaBomba)){
        bombe.push(nuovaBomba);
    }
}

console.log('posizione bombe: ' + bombe.sort());
console.log('range numeri: ' + rangeNumeri)

var boxBombe = 0;


for (var i = 0; i < rangeNumeri; i++){
    for ( var y = 0; y < bombe.length; y++){
        if (bombe[y] == i){
            var htmlId = document.getElementById(i).className = 'box bomb';
        }
    }
}
//************************************************************************


//FUNZIONAMENTO GIOCO
var user = 0;

var listUser = [];

var punteggio = listUser.length ;

while (! bombe.includes(user) && listUser.length <= (rangeNumeri - numeroBombe) ){

    //inserimento numeri utente e verica che non ci siano doppioni
    while (listUser.includes(user) || user < numeroMin || user > numeroMax ){
        user = parseInt(prompt('Inserisci un numero'));

        //messaggio di avertimento nel caso il numero sia gia stato inserito
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
        for (var i = 0; i < rangeNumeri; i++){
            if (user == i){
                var htmlIdFlower = document.getElementById(i).className = 'box flower';
                htmlIdFlower = document.getElementById(i).innerHTML = '<div class="inside-flower"></div>';
            }
        }
    } else {
        for (var i = 0; i < bombe.length; i++){
            htmlId = document.getElementById(bombe[i]).className = 'box bomb-show';
            htmlIdFlower = document.getElementById(bombe[i]).innerHTML = '<div class="inside-bomb"></div>';
        } 
    }
    console.log('punteggio attuale:', punteggio);
}

//visualizzazione punteggio finale e ipotetica vittoria
if (punteggio < (rangeNumeri - numeroBombe)){
    var risultato = 'La partita è finita! <br> Il tuo punteggio è di: ' + punteggio;
    var risultatoInner = document.getElementById('risultato').innerHTML = risultato;
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

