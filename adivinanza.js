function mostrarResultado (mostrar) {
    let resul = document.getElementById("inner");
    resul.innerText = mostrar;
}

function main () {
    //obtenemos el dato del input
    let number = document.getElementById("valor").value;
    //definimos la función
    if (number == 5) {
        mostrarResultado("Es ese el número!!");
    }
    else {
        mostrarResultado("Ese no es, intenta de nuevo");
    }
}

// Ejecutar main al dar click en el botón
let boton = document.getElementById("botoncito");
boton.addEventListener("click", main);