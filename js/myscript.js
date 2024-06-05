let ticketPrice;
// il nome dell'utente
const userName = document.getElementById("name");

// il numero di chilometri da percorrere
const userKm = document.getElementById("km");

// output con click
const bottoneCalcola = document.getElementById("calcola");

bottoneCalcola.addEventListener("click",
    function() {
        // calcolo prezzo base
        const priceKm = userKm.value * 0.21;

        // scelta età e calcolo rispettivo prezzo biglietto
        let userAge = document.querySelector("select");
        const choice = userAge.value;
        let message;

        if(choice === "under") {
            ticketPrice = ((priceKm * 80) / 100);
            message = "Biglietto under 18"
        }else if(choice === "adult") {
            ticketPrice = priceKm;
            message = "Biglietto standard"
        }else if(choice === "over") {
            ticketPrice = ((priceKm * 60) / 100);
            message = "Biglietto over 65"
        }

        // trovo valore input
        let inputValueName = userName.value;
        let inputValueKm = userKm.value;

        console.log(inputValueName, inputValueKm, ticketPrice);

        // inserimento nome utente
        document.getElementById("username").innerHTML = inputValueName;

        // inserimento tipo biglietto
        document.getElementById("ticket").innerHTML = message;

        // inserimento carrozza
        document.getElementById("carriage").innerHTML = Math.floor(Math.random()*10);

        // inserimento codice cp
        document.getElementById("cpcode").innerHTML = Math.floor(Math.random()*99999) + 22222;
    }

)