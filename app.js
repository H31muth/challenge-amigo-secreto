// arreglo amigos
let amigos = [];
function agregarAmigo(){   // función para agregar un amigo
   // Ingresa el valor del campo de entrada
   let inputAmigo = document.getElementById('amigo');
   let nombreAmigo = inputAmigo.value.trim();

   console.log(nombreAmigo);
   if (nombreAmigo ===''){         // valida que el campo no esté vacío
    alert('Favor, inserte un nombre válido.');
    return;
   }
   
   amigos.push(nombreAmigo);   //Añade el nombre al arreglo amigos
   
   inputAmigo.value="";   // limpia la caja de entrada

   actualizarListaAmigos():     // se llama a la función para actualizar la lista de amigos
}
function actualizarListaAmigos(){    // función para actualizar lista de amigos
   let listaAmigo = document.getElementById("listaAmigos");
   listaAmigo.innerHTML = "";   // limpia la lista 

   for (let i = 0; i < amigos.length; i++) { 			// Recorre el array usando un bucle for
      let li = document.createElement("li"); 			// Crea un nuevo elemento de lista
      li.textContent = amigos[i]; 				// Asigna el nombre del amigo al elemento de lista
      listaAmigo.appendChild(li); 				// Agrega el elemento a la lista
  }

}
function sortearAmigo() {
   if (amigos.length === 0) { 				// Verifica si hay amigos en la lista antes de sortear
       alert("No hay amigos en la lista para sortear.");
       return;
   }
   
   let indiceAleatorio = Math.floor(Math.random() * amigos.length);	// Genera un índice aleatorio dentro del rango de la lista
   let amigoSorteado = amigos[indiceAleatorio]; 			// Obtiene el amigo sorteado usando el índice aleatorio
   
   let resultado = document.getElementById("resultado"); 		// Captura el elemento donde se mostrará el resultado
   resultado.innerHTML = `<li>Amigo Secreto: <strong>${amigoSorteado}</strong></li>`;       // Muestra el resultado en la interfaz
}

