// il nome dell'utente
const userName = document.getElementById("name");

// il numero di chilometri da percorrere
const userKm = document.getElementById("km");

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
const priceKm = userKm.value * 0.21;
let ticketPrice;

// età del passeggero
let userAge = document.querySelector("select");

const choice = userAge.value;

if(choice === "under") {
    ticketPrice = ((priceKm * 80) / 100);
}else if(choice === "adult") {
    ticketPrice = priceKm;
}else {
    ticketPrice = ((priceKm * 60) / 100);
}


// output con click
const bottoneCalcola = document.getElementById("calcola");

bottoneCalcola.addEventListener("click",
    function() {
        let inputValueName = userName.value;
        let inputValueKm = userKm.value;
        console.log(inputValueName, inputValueKm, ticketPrice);
    }
)