document.addEventListener("DOMContentLoaded", function() {
    fetch("../../jugadors1.json") 
    .then(function(lectura) {
        if (!lectura.ok) {
            throw new Error("ERROR DE LECTURA");
        }
        return lectura.json(); 
    })
    .then(function(nomEquips) {
        let container = document.getElementById("desplegableEquips");

        let desplegable = document.createElement("select");

        for (let i = 0; i < nomEquips.length; i++) {
            let equipo = nomEquips[i]; 

            
            let nom = document.createElement("option");
            nom.textContent = equipo.equip; 
            desplegable.appendChild(nom);
            
        }

        container.appendChild(desplegable)
    })
    .catch(function(error) {
        console.error(error); 
    });
});

function mostrarMenu() {
    document.getElementById("menuDesplegable").style.display = "block";
}

function ocultarMenu() {
    document.getElementById("menuDesplegable").style.display = "none"; 
}
