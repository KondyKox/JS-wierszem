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

function voteKondi() {   
    if (voted == false) {
        // let kondiWygral = document.createElement("img");
        // kondiWygral.src = "../Grafiki/kondiWygral.png";

        // let mickiewiczPrzegral = document.createElement("img");
        // mickiewiczPrzegral.src = "../Grafiki/mickiewiczPrzegral.png";

        alert("Kondi 'Mega Koks' wygrał!");

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

        alert("Adam 'Chuj, nie poeta' Mickiewicz");

        voted = true;
    }
    else {
        alert("Już zagłosowano. Wypierdalaj!");
    }
}