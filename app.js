
let amigos = [];            // arreglo amigos
function agregarAmigo(){    // función para agregar un amigo
  
   let inputAmigo = document.getElementById('amigo');   // es una referencia al elemento HTML donde se ingresa el nombre del amigo
   let nombreAmigo = inputAmigo.value.trim();           // almacena el contenido limpio del campo de entrada como una cadena de string sin espacios en blanco 

   console.log(nombreAmigo);
   console.log(amigos.length);

   if (nombreAmigo ===''){         // valida que el campo no esté vacío
    alert('Favor, inserte un nombre válido.');
    return;
   }
   
   amigos.push(nombreAmigo);                    // Añade el nombre al arreglo amigos
   console.log(amigos.length);                  // Muestra la cantidad de amigos en la consola
   inputAmigo.value="";                         // limpia la caja de entrada

   actualizarListaAmigos();                     // se llama a la función para actualizar la lista de amigos
}
function actualizarListaAmigos(){               // función para actualizar lista de amigos
   let lista = document.getElementById("listaAmigos");
   lista.innerHTML = "";                                // limpia la lista 

   for (let i = 0; i < amigos.length; i++) { 			// Recorre el array usando un bucle for
      let li = document.createElement("li"); 			// Crea un nuevo elemento de lista
      li.textContent = amigos[i]; 				// Asigna el nombre del amigo al elemento de lista
      lista.appendChild(li); 				// Agrega el <li> al contenedor <ul id="listaAmigos">
  }

}
function sortearAmigo() {
   console.log("11111")
   console.log(amigos.length); // Muestra la cantidad de amigos antes del sorteo
   if (amigos.length === 0) { 				// Verifica si hay amigos en la lista antes de sortear
      
      alert("No hay amigos en la lista para sortear.");
       return;
   }
   
   let indiceAleatorio = Math.floor(Math.random() * amigos.length);	// Genera un índice aleatorio dentro del rango de la lista
   let amigoSorteado = amigos[indiceAleatorio]; 			// Obtiene el amigo sorteado usando el índice aleatorio
   
   let resultado = document.getElementById("resultado"); 		// Captura el elemento donde se mostrará el resultado
   resultado.innerHTML = `<li>Amigo Secreto: <strong>${amigoSorteado}</strong></li>`;       // Muestra el resultado en la interfaz

   amigos.splice(indiceAleatorio, 1); // Elimina el amigo sorteado del array
    actualizarListaAmigos(); // Actualiza la lista en la interfaz
    
    if (amigos.length === 0) { // Si ya no hay amigos en la lista
        setTimeout(() => {      // Se usa la función flecha: "() =>  {...}" que reemplaza a "function() {....}"
            alert("Ya se sortearon todos los amigos. Se reiniciará la lista.");
            amigos = []; // Reinicia la lista de amigos
            actualizarListaAmigos(); // Refresca la lista en la interfaz
            resultado.innerHTML = ""; // Borra el resultado mostrado
        }, 1000); // Retraso breve para mostrar la alerta antes de reiniciar
    }
}

