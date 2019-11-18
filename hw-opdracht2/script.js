function zoekUit() {
    var aantal = document.getElementById("aantal").value;
    var duur =  document.getElementById("duur").value;
    var streaming = document.getElementById("streaming").value;

    var abonnement ="eenvoudig";

    if(aantal==3 && duur>3) {
        document.getElementById("resultaat").innerHTML = "familie";
    }
    if(aantal>2 || abonnement==true) {
        document.getElementById("resultaat").innerHTML = "uitgebreid";
    }
    if(aantal>2 || duur>4) {
        document.getElementById("resultaat").innerHTML = "standaard";
    }
    if(aantal==1 && duur>6) {
        document.getElementById("resultaat").innerHTML = "uitgebreid";
    }
//als je met meer dan 2 personen kijkt en meer dan 3 uur per dag, dan is het beste abonnement familie
//pseudocode: als (aantal==3 en duur>3 dan abonnement ="familie")

//als je met 2 of meer personen kijkt of al een abonnement hebt, dan is het beste abonnement uitgebreid
//pseudocode: 

//als je met 2 personen kijkt of meer dan 4 uur per dag dan is het abonnement standaard
//pseudocode: 

// als je met 1 persoon kijkt en 6 of meer uur per dag dan is het abonnement uitgebreid
//pseudocode: 


//toon het type abonnement op het scherm

}