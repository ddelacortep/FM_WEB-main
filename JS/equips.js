
    document.addEventListener("DOMContentLoaded", function () {
fetch("../JS/jugadors1.json")
.then(function (response) {
    if (!response.ok) {
        console.log("ERROR");
        throw new Error("No s'ha pogut carregar el fitxer JSON.");
    }
    return response.json();
})
.then(function (jugadors1) {    
    console.log("RESPONSE");

    //Guardamos en una variable que hemos seleccionasdo el div con el id escuts, para poder escuchar en la siguiente funcion el evento ( que en este caso es "click") que haga el usuario
    let escuts = document.querySelector("#escuts");

    //Aqui escuchamos el click y creamos la funcion con el nombre event
    escuts.addEventListener("click", function (event) {
        //Hacemos un if en el que si el click del usuario es dentro de un elemento del div con el id escuts con el tagName "IMG", ponemos IMG en mayusculas porque tagName siempre lo devuelve con mayusculas.
        if(event.target.tagName === "IMG"){ 
            //Guardamos en una variabe el id del evento que hemos escuchado
            let equipoSeleccionado = event.target.id;

            //Creamos una variable en el que guardara el resultado de esta funcion, es decir el objeto del find
            let equipoEntero = jugadors1.find(function (e){
                //e es el nombre de la funcion que entra dentro del json y coge el nombre equip ".equip", y hace que si equipoSeleccionado(el id que hemos guardado antes) es todo igual al nombre del equipo, ya sea cualquier caracter y el tipo de datos que es
                //Entonces lo que hará el find es devolver todo el objeto del que han hecho coinidencia, da igual que tenga un array dentro de este objeto lo devolverá igual.
                return e.equip === equipoSeleccionado;
            });

            //Este if quiere decir que equipo != undefined
            if(equipoEntero){
                //Lo que hace localStorage es un almacen de datos en el cual tienes una clave(como un id), y un valor(todos los datos del equipo por ejemplo), lo bueno de local storage es que no se borran los datos aunque recargues la pagina
                //Stringify lo que hace es pasar el objeto de js a JSON.
                localStorage.setItem("equipoSeleccionado", JSON.stringify(equipoEntero));

                //Cambiamos de pagin, en la que se quedaran los datos de equipoSeleccionado en la pagina web, para cargarlos se debera usar localStorage con get item,
                window.location.href = "../HTML/plantilla.html";
            }
        }
    });
    })
    
    .catch(error=> {
    console.error("Error:", error);
});
});
