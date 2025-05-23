document.addEventListener("DOMContentLoaded", function (){
    //Cargamos los datos que teniamos en localStorage con get Item.
    debugger;
    let equipoGuardado =localStorage.getItem("equipoSeleccionado");

    if(equipoGuardado){
        //Pasamos a un objeto los datos que teniamos en tipo JSON y lo guardamos en una variable
        let equipo = JSON.parse(equipoGuardado);

        let cartaPrincipal = document.getElementById("principalCartas");

        cartaPrincipal.innerHTML = "";
        
        

        for(let i = 0; i < equipo.jugadors.length; i++){
            let jugador = equipo.jugadors[i];

            let carta = document.createElement("div");
            carta.classList.add("carta");

            let img = document.createElement("img");
            img.src = jugador.foto;
            img.alt = jugador.nomPersona;
            

            let textoCarta = document.createElement("div");
            textoCarta.classList.add("textoCarta");
            //Escribimos dentro del div textoCarta los datos de los jugadores, 
            textoCarta.innerHTML = `
            <strong>${jugador.nomPersona}</strong><br>
            <li>Dorsal: ${jugador.dorsal}</li><br>
            <li>Posición: ${jugador.posicio}</li><br>
            <li>Calidad: ${jugador.qualitat}</li>
            `;

            carta.appendChild(img);
            carta.appendChild(textoCarta);
            cartaPrincipal.appendChild(carta);
            
        }

            let entrenador = equipo.entrenador;

        let entrenadorImg = document.createElement("img");

        entrenadorImg.src = entrenador.foto;
        entrenadorImg.alt = entrenador.nomPersona;

        let nomEntrenador = document.createElement("div");
        nomEntrenador.classList.add("textoEntre");

        nomEntrenador.innerHTML = `
            <strong>${entrenador.nomPersona}</strong>`;

        let contenedorEntre = document.getElementsByClassName("cartaEntre")[0];


        contenedorEntre.appendChild(entrenadorImg);
        contenedorEntre.appendChild(nomEntrenador);
    }
});