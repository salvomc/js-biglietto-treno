// richiesta all'utente dei dati
let distanzaViaggio = parseInt(prompt('Inserisci la distanza da percorrere in KM'));
let etaPasseggero = parseInt(prompt('Inserisci la tua età'));
// dichiaro le variabili prezzo viaggio e prezzo scontato e calcolo il valore del prezzo del viaggio
let prezzoViaggio = distanzaViaggio * 0.21;
let prezzoViaggioScontato;
let message;
// controllo che l'inserimento dei valori da parte dell'utente sia valido
if (isNaN(distanzaViaggio) || isNaN(etaPasseggero)) {
    alert('Uno dei due numeri inseriti non è un numero');
}
else if ((distanzaViaggio === 0) || (etaPasseggero === 0)) {
    alert('Uno dei due numeri inseriti è uguale a 0')
}
// calcolo il costo del biglietto e lo faccio vedere a schermo insieme agli altri dati  
else if (etaPasseggero < 18){
        prezzoViaggioScontato = (prezzoViaggio - (prezzoViaggio * 20 / 100)).toFixed(2);
        message = `Hai diritto al prezzo scontato del 20%. Il prezzo del biglietto è: ${prezzoViaggioScontato}€`;    
}
else if (etaPasseggero > 65){
        prezzoViaggioScontato = (prezzoViaggio - (prezzoViaggio * 40 / 100)).toFixed(2);
        message = `Hai diritto al prezzo scontato del 40%. Il prezzo del biglietto è: ${prezzoViaggioScontato}€`; 
}else {
        message = `Il prezzo del biglietto è: ${prezzoViaggio}€`;
}
document.getElementById('prezzo_biglietto').innerHTML = `${message}`;
document.getElementById('distanza_viaggio').innerHTML = `La distanza del viaggio in KM è di ${distanzaViaggio}`;
document.getElementById('eta_passeggero').innerHTML = `L'età del passeggero è ${etaPasseggero} anni`;      

