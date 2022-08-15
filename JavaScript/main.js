function saveToFile() {
    // Variables
    let interpretacja = document.getElementById('interpretacja').value;
    let ocena = ['Co to za gówno?', 'Nieżla interpretacja mój bracie w Chrystusie.', 'Napisałbym lepszą.', 'GÓWNO!!!', "Weź ty lepiej zostań przy klockach LEGO."];

    let index = Math.floor(Math.random() * (ocena.length));

    // Console outputs and saving to file
    if (interpretacja != null) {
        console.log(ocena[index]);
        console.log("Oto twoje 'arcydzieło':");
        console.log(interpretacja);

        let blob = new Blob([interpretacja], {
            type: "text/plain;charset=utf-8"
        });
        saveAs(blob, "TwojaInterpretacja.txt");

        alert("ZAPISANO!");
    }

    else {
        console.log("Ale weź coś napisz najpierw...");
    }

}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Variables
let kondi = document.getElementById("kondi");
let mickiewicz = document.getElementById("mickiewicz");

let voted = false;

kondi.addEventListener("click", function() { voteKondi(); });
mickiewicz.addEventListener("click", function() { voteMickiewicz(); });

function voteKondi() {   
    if (voted == false) {
        $('#kondi').css("image: url('../Grafiki/kondiWygral.png');");

        alert("Kondi 'Mega Koks' został najlepszym poetą w historii!");

        voted = true;
    }
    else {
        alert("Już zagłosowano. Wypierdalaj!");
    }
}

function voteMickiewicz() {
    if (voted == false) {
        // let kondiPrzegral = document.createElement("img");
        // kondiPrzegral.src = "../Grafiki/kondiPrzegral.png";

        // let mickiewiczWygral = document.createElement("img");
        // mickiewiczWygral.src = "../Grafiki/mickiewiczWygral.png";

        alert("Adam 'Chuj, nie poeta' Mickiewicz według ciebie wygrał.");

        voted = true;
    }
    else {
        alert("Już zagłosowano. Wypierdalaj!");
    }
}