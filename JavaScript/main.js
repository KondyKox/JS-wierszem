function saveToFile() {
    // Variables
    let interpretacja = document.getElementById('interpretacja').value;
    let ocena = ['Co to za gówno?', 'Nieżla interpretacja mój bracie w Chrystusie.', 'Napisałbym lepszą.', 'GÓWNO!!!']

    let index = Math.floor(Math.random() * (ocena.length - 1));

    // Console outputs and saving to file
    if (interpretacja != null || interpretacja != " ") {
        console.log(ocena[index]);
        console.log("Oto twoje 'arcydzieło':");
        console.log(interpretacja);

        let blob = new Blob([interpretacja], {
            type: "text/plain;charset=utf-8"
        });
        saveAs(blob, "TwojaInterpretacja.txt");

        alert("ZAPISANO!!!");
    }

    else {
        console.log("Ale weź coś napisz najpierw...");
    }

}

function getVotes() {
    let kondi = document.getElementById("kondi");
    let mickiewicz = document.getElementById("mickiewicz");
}