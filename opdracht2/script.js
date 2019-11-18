/* Opdracht 2 */

/* A) Schrijf code waarmee je ingevulde waarde uit het invulveld 'ophaalt'
 *    maak gebruik van document.getElementById().value; 
 */

/* jouw code hieronder-->> */
function getal() {
var ingevuld_getal = parseInt(document.getElementById('leeftijd').value);
return ingevuld_getal;
}

/* B) Schrijf code waarmee je het ingevulde getal vergelijkt (condition) met de stemgerechtigde leeftijd van 18 jaar.
 * Als de leeftijd groter is dan 18 dan verander je de achtergrondkleur van de site met:
                    document.getElementByTagName('body').style.backgroundColor = 'purple'
 */

/* jouw code hieronder-->> */
function result() {
    if (getal() > 18) {
        document.body.style.backgroundColor = "purple";
    }   else {
        document.body.style.backgroundColor = "green";
    }
}


/* C) Schrijf code waarmee je het ingevulde getal vergelijkt (condition) met de stemgerechtigde leeftijd van 18 jaar.
 * Als de leeftijd kleiner is dan 18 dan verander je de achtergrondkleur van de site met:
                    document.getElementByTagName('body').style.backgroundColor = 'green'
 */
