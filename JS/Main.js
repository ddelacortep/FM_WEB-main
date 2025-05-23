document.addEventListener("DOMContentLoaded", function() {
    fetch("../JS/jugadors1.json")
        .then(function(lectura) {
            if (!lectura.ok) {
                throw new Error("ERROR DE LECTURA");
            }
            return lectura.json();
        })
});

// MENU DESPLEGABLE 

function mostrarMenu() {
    document.getElementById("menuDesplegable").style.display = "block";
}

function ocultarMenu() {
    document.getElementById("menuDesplegable").style.display = "none"; 
}


