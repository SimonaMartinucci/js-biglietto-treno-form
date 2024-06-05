let ticketPrice;

// Chiedere all’utente il numero di chilometri che vuole percorrere
let userKm = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
// Chiedere all'utente l’età del passeggero
let userAge = parseInt(prompt("Quanti anni ha il viaggiatore?"));

console.log("I chilometri da percorrere sono: ", userKm);
console.log("L'età del passegero è: ", userAge);



// Calcolare il prezzo totale del viaggio

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
let priceKm = userKm * 0.21;

console.log("Il prezzo intero del biglietto è: ", priceKm);

// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
if(userAge <= 18) {
    ticketPrice = ((priceKm * 80) / 100);
} else if(userAge >= 65) {
    ticketPrice = ((priceKm * 60) / 100);
} else {
    ticketPrice = priceKm;
}

console.log("Il prezzo finale del biglietto è: ", ticketPrice);

// L’output con massimo due decimali
document.getElementById("ticket").innerHTML = "€" + ticketPrice.toFixed(2)